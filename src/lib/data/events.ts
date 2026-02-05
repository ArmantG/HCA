/**
 * Static event data for the website
 * This replaces the Storyblok API calls
 */

export interface EventContent {
	title: string;
	description: string;
	date: string;
	link: string;
	categories: string[];
}

export interface Event {
	id: string;
	name: string;
	slug: string;
	full_slug: string;
	created_at: string;
	published_at: string;
	content: EventContent;
}

export const events: Event[] = [
	{
		id: '1',
		name: 'Term 1 Opens',
		slug: 'term-1-opens',
		full_slug: 'events/term-1-opens',
		created_at: '2026-01-14T00:00:00.000Z',
		published_at: '2026-01-14T00:00:00.000Z',
		content: {
			title: 'Term 1 Opens',
			description: 'Welcome back to a new term. Learners return for orientation and class start.',
			date: '2026-01-14',
			link: 'https://www.facebook.com/HardingChristianAcademy',
			categories: ['foundation_phase', 'intermediate_phase', 'senior_phase']
		}
	},
	{
		id: '2',
		name: 'Open Day',
		slug: 'open-day',
		full_slug: 'events/open-day',
		created_at: '2026-02-06T00:00:00.000Z',
		published_at: '2026-02-06T00:00:00.000Z',
		content: {
			title: 'Open Day',
			description: 'Prospective families are invited to tour the campus and meet staff.',
			date: '2026-02-06',
			link: 'https://www.facebook.com/HardingChristianAcademy',
			categories: ['foundation_phase', 'intermediate_phase']
		}
	},
	{
		id: '3',
		name: 'Sports Day',
		slug: 'sports-day',
		full_slug: 'events/sports-day',
		created_at: '2026-03-20T00:00:00.000Z',
		published_at: '2026-03-20T00:00:00.000Z',
		content: {
			title: 'Sports Day',
			description: 'A day of team spirit, athletics, and community celebration.',
			date: '2026-03-20',
			link: 'https://www.facebook.com/HardingChristianAcademy',
			categories: ['senior_phase']
		}
	},
	{
		id: '4',
		name: 'Academic Awards Evening',
		slug: 'academic-awards-evening',
		full_slug: 'events/academic-awards-evening',
		created_at: '2026-04-30T00:00:00.000Z',
		published_at: '2026-04-30T00:00:00.000Z',
		content: {
			title: 'Academic Awards Evening',
			description: 'Celebrating learner achievement across all grades.',
			date: '2026-04-30',
			link: 'https://www.facebook.com/HardingChristianAcademy',
			categories: ['foundation_phase', 'intermediate_phase', 'senior_phase']
		}
	}
];

/**
 * Get all events
 */
export function getAllEvents(): Event[] {
	return events;
}

/**
 * Get the latest N events
 */
export function getLatestEvents(count: number = 3): Event[] {
	return events
		.sort((a, b) => new Date(b.content.date).getTime() - new Date(a.content.date).getTime())
		.slice(0, count);
}

/**
 * Get events by category
 */
export function getEventsByCategory(category: string): Event[] {
	return events.filter((event) => event.content.categories.includes(category));
}

/**
 * Get Foundation Phase events
 */
export function getFoundationPhaseEvents(): Event[] {
	return getEventsByCategory('foundation_phase');
}

/**
 * Get Intermediate Phase events
 */
export function getIntermediatePhaseEvents(): Event[] {
	return getEventsByCategory('intermediate_phase');
}

/**
 * Get Senior Phase events
 */
export function getSeniorPhaseEvents(): Event[] {
	return getEventsByCategory('senior_phase');
}
