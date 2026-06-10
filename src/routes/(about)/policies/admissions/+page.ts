import type { PageLoad } from './$types'

export const load: PageLoad = () => {
	return {
		seo: {
			title: 'Admissions Policy',
			description:
				'Admissions principles, required documents, placement, interviews, probation, and parent partnership at Harding Christian Academy.'
		}
	}
}
