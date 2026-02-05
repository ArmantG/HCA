import type { PageLoad } from './$types';
import { getAllNewsPosts } from '$lib/content/news';

export const load: PageLoad = () => {
	return {
		posts: getAllNewsPosts()
	};
};
