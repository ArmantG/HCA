import { getAllNewsPosts } from '$lib/content/news'
import { SITE_URL } from '$lib/seo'
import type { RequestHandler } from './$types'

const staticRoutes = [
	'/',
	'/about',
	'/gallery',
	'/policies',
	'/policies/code-of-conduct',
	'/privacy',
	'/academics',
	'/foundation-phase',
	'/intermediate-phase',
	'/senior-phase',
	'/admissions',
	'/admissions/apply',
	'/fees',
	'/contact',
	'/news',
	'/calendar'
]

const buildUrl = (path: string) => `${SITE_URL}${path === '/' ? '' : path}`

export const GET: RequestHandler = () => {
	const newsRoutes = getAllNewsPosts().map((post) => `/news/${post.slug}`)
	const urls = [...staticRoutes, ...newsRoutes].map((path) => buildUrl(path))
	const entries = urls.map((url) => `<url><loc>${url}</loc></url>`).join('')

	const body = `<?xml version="1.0" encoding="UTF-8"?>\n`
	const xml = `${body}<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	})
}

export const prerender = true
