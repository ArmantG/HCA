import type { PageLoad } from './$types'

export const load: PageLoad = () => {
	return {
		seo: {
			title: 'Policies',
			description: 'School policies, documents, and guidelines for families at Harding Christian Academy.'
		}
	}
}
