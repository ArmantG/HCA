import { fail } from '@sveltejs/kit'
import type { Actions } from './$types'
import { z } from 'zod'
import { env } from '$env/dynamic/private'

const schema = z.object({
	email: z.string().email('Valid email is required'),
	consent: z.literal('on', 'Consent is required'),
	website: z.string().max(0).optional()
})

type FormErrors = Record<string, string[] | undefined>

export const actions: Actions = {
	subscribe: async (event) => {
		const formData = await event.request.formData()
		const values = {
			email: String(formData.get('email') ?? '').trim(),
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

		if (!env.EMAILOCTOPUS_API_KEY || !env.EMAILOCTOPUS_LIST_ID) {
			const errors: FormErrors = { form: ['Newsletter is not configured yet.'] }
			return fail(500, { values, errors })
		}

		const response = await event.fetch(
			`${env.EMAILOCTOPUS_API_URL}/${env.EMAILOCTOPUS_LIST_ID}/contacts`,
			{
				method: 'POST',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify({
					api_key: env.EMAILOCTOPUS_API_KEY,
					email_address: values.email,
					status: env.EMAILOCTOPUS_STATUS || 'SUBSCRIBED',
					tags: ['website']
				})
			}
		)

		if (!response.ok) {
			let message = 'Unable to subscribe. Please try again later.'
			try {
				const data = await response.json()
				if (data?.message) message = data.message
			} catch {
				// ignore
			}
			const errors: FormErrors = { form: [message] }
			return fail(400, { values, errors })
		}

		return { success: true }
	}
}
