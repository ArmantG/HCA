import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getNewsPost } from '$lib/content/news';

export const load: PageLoad = ({ params }) => {
	const post = getNewsPost(params.slug);

	if (!post) {
		throw error(404, 'Post not found');
	}

	return { post };
};
