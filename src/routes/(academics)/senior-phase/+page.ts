import type { PageLoad } from './$types'

export const load: PageLoad = () => {
	return {
		seo: {
			title: 'Senior Phase',
			description: 'Senior Phase academics preparing learners for high school and leadership.'
		}
	}
}
