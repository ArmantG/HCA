import { dev } from '$app/environment'
import registerEmail from '$lib/server/emailoctopus.js'
import { error, json, type RequestHandler } from '@sveltejs/kit'
import { z } from 'zod'

const newsletterSchema = z.object({
	email: z.email(),
	name: z.string().trim().min(3).max(100).optional(),
	lastName: z.string().trim().min(3).max(100).optional()
})

export const POST: RequestHandler = async ({ request }) => {
	try {
		const parsedPayload = newsletterSchema.safeParse(await request.json())

		if (dev) {
			console.log('🚀 ~ POST ~ parsedPayload:', parsedPayload)
		}

		if (!parsedPayload.success) {
			return json(
				{
					message: 'Invalid newsletter payload',
					fieldErrors: parsedPayload.error.flatten().fieldErrors
				},
				{ status: 400 }
			)
		}

		const { email, name, lastName } = parsedPayload.data
		const result = await registerEmail(email, name, lastName)

		if (dev) {
			console.log('🚀 ~ POST ~ result:', result)
		}

		return json(result.data ?? { message: result.message }, {
			status: result.status
		})
	} catch (err) {
		console.error('Newsletter API error:', err)
		throw error(500, "API ERROR: couldn't add email to the newsletter")
	}
}
