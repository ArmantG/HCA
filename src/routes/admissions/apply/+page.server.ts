import { env } from '$env/dynamic/private'
import {
	formatApplicationEmail,
	validateApplicationForm,
	type FormErrors
} from '$lib/server/admissions-application'
import { isEmailConfigured, sendEmail } from '$lib/server/email'
import { checkRateLimit } from '$lib/server/rate-limit'
import type { Config } from '@sveltejs/adapter-vercel'
import { fail } from '@sveltejs/kit'
import type { Actions } from './$types'

export const config: Config = {
	runtime: 'nodejs20.x'
}

export const actions: Actions = {
	default: async (event) => {
		const formData = await event.request.formData()
		const validated = await validateApplicationForm(formData)

		if (!validated.ok) {
			return fail(validated.status, {
				values: validated.values,
				errors: validated.errors
			})
		}

		const rate = checkRateLimit(event.getClientAddress())
		if (!rate.ok) {
			const errors: FormErrors = { form: ['Too many submissions. Please try again later.'] }
			return fail(429, { values: validated.data.values, errors })
		}

		if (!isEmailConfigured()) {
			const errors: FormErrors = { form: ['Email is not configured yet. Please try again later.'] }
			return fail(500, { values: validated.data.values, errors })
		}

		const to = env.SMTP_TO_ADMISSIONS || env.SMTP_TO || env.SMTP_FROM || ''
		if (!to) {
			const errors: FormErrors = { form: ['Email recipient is not configured.'] }
			return fail(500, { values: validated.data.values, errors })
		}

		const referenceId = crypto.randomUUID()
		const values = validated.data.values
		const learnerName = `${values.learnerFirstNames} ${values.learnerSurname}`.trim()
		const replyTo = [values.fatherEmail, values.motherEmail].find((email) => email.includes('@'))

		await sendEmail({
			to,
			subject: `Admissions Application - ${learnerName}, ${values.grade} (${referenceId})`,
			text: formatApplicationEmail(referenceId, values, validated.data.fileSummary),
			replyTo,
			attachments: validated.data.attachments
		})

		return { success: true, referenceId }
	}
}
