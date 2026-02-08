import { dev } from '$app/environment'
import { env } from '$env/dynamic/private'
import { error } from '@sveltejs/kit'

type RegisterEmailResult = {
	status: number
	message: string
	data?: unknown
}

async function registerEmail(
	email: string,
	name?: string,
	lastName?: string
): Promise<RegisterEmailResult> {
	try {
		const API_ROUTE = `${env.EMAILOCTOPUS_API_URL}/${env.EMAILOCTOPUS_LIST_ID}/contacts`
		const firstName = name?.trim()
		const familyName = lastName?.trim()
		const fields: Record<string, string> = {}

		if (firstName) {
			fields.FirstName = firstName
		}

		if (familyName) {
			fields.LastName = familyName
		}

		const payload: Record<string, unknown> = {
			email_address: email,
			status: 'subscribed'
		}

		if (Object.keys(fields).length > 0) {
			payload.fields = fields
		}

		const response = await fetch(API_ROUTE, {
			body: JSON.stringify(payload),
			headers: {
				Authorization: `Bearer ${env.EMAILOCTOPUS_API_KEY}`,
				'content-type': 'application/json'
			},
			method: 'POST'
		})

		const returnedStatus = response.status
		const data = await response.json().catch(() => null)

		if (dev) console.log(response.status)

		return {
			status: returnedStatus,
			message: response.statusText,
			data
		}
	} catch (err) {
		console.error('EmailOctopus subscribe error:', err)
		throw error(500, 'Failed to subscribe to newsletter')
	}
}

export default registerEmail