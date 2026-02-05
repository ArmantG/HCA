import type { PageLoad } from './$types'

export const load: PageLoad = () => {
	return {
		seo: {
			title: 'Academics',
			description: 'Grades offered, curriculum overview, and learning approach at Harding Christian Academy.'
		}
	}
}
