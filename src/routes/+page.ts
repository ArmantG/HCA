import type { PageLoad } from './$types'

export const load: PageLoad = () => {
	return {
		seo: {
			title: 'Home',
			description:
				'Harding Christian Academy is an independent Christian school in Harding, KwaZulu-Natal, with online admissions for Grades 1 to 9.'
		}
	}
}
