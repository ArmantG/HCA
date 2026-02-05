import type { PageLoad } from './$types'

export const load: PageLoad = () => {
	return {
		seo: {
			title: 'Gallery',
			description: 'Photo gallery of school activities, events, and student life at Harding Christian Academy.'
		}
	}
}
