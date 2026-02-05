import type { PageLoad } from './$types'

export const load: PageLoad = () => {
	return {
		seo: {
			title: 'Admissions',
			description: 'Admissions steps, requirements, and how to apply to Harding Christian Academy.'
		}
	}
}
