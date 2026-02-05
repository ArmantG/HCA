import type { PageLoad } from './$types'

export const load: PageLoad = () => {
	return {
		seo: {
			title: 'Code of Conduct',
			description: 'Code of conduct expectations and standards for learners and families.'
		}
	}
}
