import type { PageLoad } from './$types'

export const load: PageLoad = () => {
	return {
		seo: {
			title: 'Fees Policy',
			description:
				'Fee payment options, references, sibling discount, arrears, refunds, and financial expectations at Harding Christian Academy.'
		}
	}
}
