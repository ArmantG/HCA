import { CACHE_DURATION } from '$lib/constants'
import { getLatestEvents } from '$lib/data/events'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ setHeaders }) => {
	try {
		const events = getLatestEvents(3)

		setHeaders({ 'cache-control': `max-age=${CACHE_DURATION}, must-revalidate` })

		return {
			events,
			seo: {
				title: 'Home',
				description:
					'Christ-centered education in Harding with academic excellence, character formation, and a caring community.'
			}
		}
	} catch (err) {
		throw new Error("Failed to fetch events on '/': " + err)
	}
}
