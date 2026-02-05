import type { PageLoad } from './$types'

export const load: PageLoad = () => {
	return {
		seo: {
			title: 'Fees',
			description: 'School fee structure, payment notes, and contact options for clarification.'
		}
	}
}
