import { getAllEventPosts } from '$lib/content/events'
import type { PageLoad } from './$types'

export const load: PageLoad = () => {
	return {
		posts: getAllEventPosts()
	}
}
