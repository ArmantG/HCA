import type { PageLoad } from './$types'

export const load: PageLoad = () => {
	return {
		seo: {
			title: 'Academics',
			description:
				'Academic phases, subjects, Bible Study, language learning, and Foundation Phase routines at Harding Christian Academy.'
		}
	}
}
