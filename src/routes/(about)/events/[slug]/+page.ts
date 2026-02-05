import { getEventPost } from '$lib/content/events'
import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'

export const load: PageLoad = ({ params }) => {
	const post = getEventPost(params.slug)

	if (!post) {
		throw error(404, 'Event not found')
	}

	return {
		post
	}
}
