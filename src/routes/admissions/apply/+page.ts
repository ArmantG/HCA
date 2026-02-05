import type { PageLoad } from './$types'

export const load: PageLoad = () => {
	return {
		seo: {
			title: 'Admissions Application',
			description: 'Online admissions application form for new learners and families.'
		}
	}
}
