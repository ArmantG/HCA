import { dev } from "$app/environment"

export type SeoInput = {
	title?: string
	description?: string
	ogImage?: string
	ogType?: 'website' | 'article'
	noindex?: boolean
}

export type ResolvedSeo = {
	title: string
	description: string
	canonical: string
	ogImage: string
	ogType: 'website' | 'article'
	robots: string
}

export const SITE_NAME = 'Harding Christian Academy'
export const SITE_URL = dev ? 'http://localhost:5174' : 'https://www.hardingchristianacademy.co.za'
export const DEFAULT_DESCRIPTION =
	'Harding Christian Academy offers Christ-centered education with academic excellence and character formation.'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/pcsLogoNewOutlineWhite.png`

const buildTitle = (title?: string) => {
	if (!title || title === SITE_NAME) {
		return SITE_NAME
	}

	return `${title} | ${SITE_NAME}`
}

const normalizePath = (pathname: string) => {
	if (!pathname) {
		return '/'
	}

	return pathname.startsWith('/') ? pathname : `/${pathname}`
}

const toAbsoluteUrl = (url: string) => {
	if (url.startsWith('http://') || url.startsWith('https://')) {
		return url
	}

	const normalized = url.startsWith('/') ? url : `/${url}`
	return `${SITE_URL}${normalized}`
}

export const resolveSeo = (seo: SeoInput | undefined, pathname: string): ResolvedSeo => {
	const path = normalizePath(pathname)
	const canonical = path === '/' ? SITE_URL : `${SITE_URL}${path}`
	const description = seo?.description ?? DEFAULT_DESCRIPTION
	const title = buildTitle(seo?.title)
	const ogImage = seo?.ogImage ? toAbsoluteUrl(seo.ogImage) : DEFAULT_OG_IMAGE
	const ogType = seo?.ogType ?? 'website'
	const robots = seo?.noindex ? 'noindex, nofollow' : 'index, follow'

	return {
		title,
		description,
		canonical,
		ogImage,
		ogType,
		robots
	}
}
