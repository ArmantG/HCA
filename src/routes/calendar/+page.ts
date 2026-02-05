import { CACHE_DURATION } from '$lib/constants'
import {
	getAllEvents,
	getFoundationPhaseEvents,
	getIntermediatePhaseEvents,
	getSeniorPhaseEvents
} from '$lib/data/events'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ setHeaders }) => {
	try {
		const events = getAllEvents()
		const foundationPhaseEvents = getFoundationPhaseEvents()
		const intermediatePhaseEvents = getIntermediatePhaseEvents()
		const seniorPhaseEvents = getSeniorPhaseEvents()

		// console.log('\nCONTENT IN CALENDAR: \n');
		// console.log(events);

		setHeaders({ 'cache-control': `max-age=${CACHE_DURATION}, must-revalidate` })

		return {
			events,
			foundationPhaseEvents,
			intermediatePhaseEvents,
			seniorPhaseEvents,
			seo: {
				title: 'Calendar',
				description:
					'Upcoming events, term dates, and the school calendar for Harding Christian Academy.'
			}
		}
	} catch (err) {
		throw new Error('Failed to fetch calendar events: ' + err)
	}
}
