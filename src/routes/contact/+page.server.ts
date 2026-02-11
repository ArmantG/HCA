import { env } from '$env/dynamic/private'
import { isEmailConfigured, sendEmail } from '$lib/server/email'
import { checkRateLimit } from '$lib/server/rate-limit'
import type { Config } from '@sveltejs/adapter-vercel'
import { fail } from '@sveltejs/kit'
import { z } from 'zod'
import type { Actions } from './$types'

export const config: Config = {
	runtime: 'nodejs20.x'
}

const schema = z.object({
	name: z.string().min(2, 'Name is required'),
	phone: z.string().min(7, 'Phone is required'),
	email: z.email('Invalid email address').optional().or(z.literal('')),
	topic: z.string().min(2, 'Topic is required'),
	message: z.string().min(10, 'Message must be at least 10 characters'),
	consent: z.literal('on', 'Consent is required'),
	website: z.string().max(0).optional()
})

type FormErrors = Record<string, string[] | undefined>

export const actions: Actions = {
	default: async (event) => {
		const formData = await event.request.formData()

		const values = {
			name: String(formData.get('name') ?? '').trim(),
			phone: String(formData.get('phone') ?? '').trim(),
			email: String(formData.get('email') ?? '').trim(),
			topic: String(formData.get('topic') ?? '').trim(),
			message: String(formData.get('message') ?? '').trim(),
			consent: String(formData.get('consent') ?? '').trim(),
			website: String(formData.get('website') ?? '').trim()
		}

		if (values.website) {
			const errors: FormErrors = { website: ['Spam detected'] }
			return fail(400, { values, errors })
		}

		const parsed = schema.safeParse(values)
		if (!parsed.success) {
			const errors: FormErrors = parsed.error.flatten().fieldErrors
			return fail(400, { values, errors })
		}

		const rate = checkRateLimit(event.getClientAddress())
		if (!rate.ok) {
			const errors: FormErrors = { form: ['Too many submissions. Please try again later.'] }
			return fail(429, { values, errors })
		}

		if (!isEmailConfigured()) {
			const errors: FormErrors = { form: ['Email is not configured yet. Please try again later.'] }
			return fail(500, { values, errors })
		}

		const referenceId = crypto.randomUUID()
		const to = env.SMTP_TO_GENERAL || env.SMTP_TO || env.SMTP_FROM || ''

		if (!to) {
			const errors: FormErrors = { form: ['Email recipient is not configured.'] }
			return fail(500, { values, errors })
		}

		await sendEmail({
			to,
			subject: `General Enquiry: ${values.topic} (${referenceId})`,
			text: `Reference: ${referenceId}\n\nName: ${values.name}\nPhone: ${values.phone}\nEmail: ${values.email || 'N/A'}\nTopic: ${values.topic}\n\nMessage:\n${values.message}`,
			replyTo: values.email || undefined
		})

		return { success: true, referenceId }
	}
}
