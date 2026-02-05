import { getAllNewsPosts } from '$lib/content/news'
import type { PageLoad } from './$types'

export const load: PageLoad = () => {
	return {
		posts: getAllNewsPosts(),
		seo: {
			title: 'News',
			description: 'School news, announcements, and updates from Harding Christian Academy.'
		}
	}
}
