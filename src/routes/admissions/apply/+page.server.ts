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
	parentName: z.string().min(2, 'Parent or guardian name is required'),
	parentPhone: z.string().min(7, 'Phone is required'),
	parentEmail: z.string().email('Valid email is required'),
	relationship: z.string().min(1, 'Relationship is required'),
	learnerFirstName: z.string().min(2, 'Learner first name is required'),
	learnerLastName: z.string().min(2, 'Learner last name is required'),
	learnerDOB: z.string().min(1, 'Date of birth is required'),
	learnerGender: z.string().min(1, 'Gender is required'),
	learnerName: z.string().optional().or(z.literal('')),
	grade: z.string().min(1, 'Grade is required'),
	startDate: z.string().min(1, 'Intended start date is required'),
	currentSchool: z.string().min(1, 'Current school is required'),
	medicalInfo: z.string().optional().or(z.literal('')),
	referralSource: z.string().optional().or(z.literal('')),
	message: z.string().optional().or(z.literal('')),
	consent: z.literal('on', 'Consent is required'),
	website: z.string().max(0).optional()
})

type FormErrors = Record<string, string[] | undefined>

export const actions: Actions = {
	default: async (event) => {
		const formData = await event.request.formData()

		const values = {
			parentName: String(formData.get('parentName') ?? '').trim(),
			parentPhone: String(formData.get('parentPhone') ?? '').trim(),
			parentEmail: String(formData.get('parentEmail') ?? '').trim(),
			relationship: String(formData.get('relationship') ?? '').trim(),
			learnerFirstName: String(formData.get('learnerFirstName') ?? '').trim(),
			learnerLastName: String(formData.get('learnerLastName') ?? '').trim(),
			learnerDOB: String(formData.get('learnerDOB') ?? '').trim(),
			learnerGender: String(formData.get('learnerGender') ?? '').trim(),
			learnerName: String(formData.get('learnerName') ?? '').trim(),
			grade: String(formData.get('grade') ?? '').trim(),
			startDate: String(formData.get('startDate') ?? '').trim(),
			currentSchool: String(formData.get('currentSchool') ?? '').trim(),
			medicalInfo: String(formData.get('medicalInfo') ?? '').trim(),
			referralSource: String(formData.get('referralSource') ?? '').trim(),
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
		const to = env.SMTP_TO_ADMISSIONS || env.SMTP_TO || env.SMTP_FROM || ''

		if (!to) {
			const errors: FormErrors = { form: ['Email recipient is not configured.'] }
			return fail(500, { values, errors })
		}

		await sendEmail({
			to,
			subject: `Admissions Application — ${values.learnerFirstName} ${values.learnerLastName}, Grade ${values.grade} (${referenceId})`,
			text: `Reference: ${referenceId}

=== PARENT/GUARDIAN INFORMATION ===
Name: ${values.parentName}
Relationship: ${values.relationship}
Phone: ${values.parentPhone}
Email: ${values.parentEmail}

=== LEARNER INFORMATION ===
Name: ${values.learnerFirstName} ${values.learnerLastName}
Date of Birth: ${values.learnerDOB}
Gender: ${values.learnerGender}

=== ACADEMIC INFORMATION ===
Grade Applying For: ${values.grade}
Intended Start Date: ${values.startDate}
Current School: ${values.currentSchool}

=== ADDITIONAL INFORMATION ===
Medical/Special Needs: ${values.medicalInfo || 'None provided'}
Referral Source: ${values.referralSource || 'Not specified'}

=== ADDITIONAL COMMENTS ===
${values.message || 'N/A'}`,
			replyTo: values.parentEmail
		})

		return { success: true, referenceId }
	}
}
