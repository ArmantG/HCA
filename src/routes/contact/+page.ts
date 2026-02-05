import type { PageLoad } from './$types'

export const load: PageLoad = () => {
	return {
		seo: {
			title: 'Contact',
			description: 'Address, phone details, and directions to Harding Christian Academy in Harding.'
		}
	}
}
