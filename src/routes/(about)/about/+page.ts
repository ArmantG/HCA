import type { PageLoad } from './$types'

export const load: PageLoad = () => {
	return {
		seo: {
			title: 'About',
			description: 'Learn about the mission, ethos, and leadership of Harding Christian Academy.'
		}
	}
}
