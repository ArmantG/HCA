import { CACHE_DURATION } from '$lib/constants';
import {
	getAllEvents,
	getGradeSchoolEvents,
	getJuniorHighEvents,
	getSeniorHighEvents
} from '$lib/data/events';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ setHeaders }) => {
	try {
		const events = getAllEvents();
		const gradeSchoolEvents = getGradeSchoolEvents();
		const juniorHighEvents = getJuniorHighEvents();
		const seniorHighEvents = getSeniorHighEvents();

		// console.log('\nCONTENT IN CALENDAR: \n');
		// console.log(events);

		setHeaders({ 'cache-control': `max-age=${CACHE_DURATION}, must-revalidate` });

		return {
			events,
			gradeSchoolEvents,
			juniorHighEvents,
			seniorHighEvents
		};
	} catch (err) {
		throw new Error('Failed to fetch calendar events: ' + err);
	}
};
