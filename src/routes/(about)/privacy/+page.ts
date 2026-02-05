import type { PageLoad } from './$types'

export const load: PageLoad = () => {
	return {
		seo: {
			title: 'Privacy',
			description: 'Privacy notice describing how we handle and protect personal information.'
		}
	}
}
