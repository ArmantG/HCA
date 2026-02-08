<script lang="ts">
	import { dev } from '$app/environment';

	export let article = false;
	export let author;
	export let breadcrumbs;
	export let datePublished;
	export let entity = '';
	export let lastUpdated;
	export let featuredImage;
	export let metadescription;
	export let siteLanguage;
	export let siteTitle;
	export let siteTitleAlt = '';
	export let siteUrl = dev ? 'http://localhost:5174' : 'https://www.discipulusbibliae.co.za';
	export let title;
	export let url = dev ? 'http://localhost:5174' : 'https://www.discipulusbibliae.co.za';
	export let entityMeta: any = null;

	function generateEntityHash(entity: string) {
		let hash = 0;

		if (entity.length === 0) {
			return hash;
		}

		for (let i = 0; i < entity.length; i++) {
			const char = entity.charCodeAt(i);
			hash = (hash << 5) - hash + char;
			hash |= 0;
		}

		return hash.toString();
	}

	/**
	 * @type {{ url: string; faviconWidth: number; faviconHeight: number } | null}
	 */

	const entityHash = generateEntityHash(author);

	const schemaOrgEntity =
		entityMeta !== null
			? {
					'@type': ['Person', 'Organization'],
					'@id': `${siteUrl}/#/schema/person/${entityHash}`,
					name: author,
					image: {
						'@type': 'ImageObject',
						'@id': `${siteUrl}/logo.png`,
						inLanguage: siteLanguage,
						url: entityMeta.url,
						width: entityMeta.faviconWidth,
						height: entityMeta.faviconHeight,
						caption: author
					},
					logo: {
						'@id': `${siteUrl}/logo.png`
					}
				}
			: null;

	const schemaOrgWebsite = {
		'@type': 'WebSite',
		'@id': `${siteUrl}/#website`,
		url: siteUrl,
		name: siteTitle,
		description: siteTitleAlt,
		publisher: {
			'@id': `${siteUrl}/#/schema/person/${entityHash}`
		},
		potentialAction: [
			{
				'@type': 'SearchAction',
				target: `${siteUrl}/?s={search_term_string}`,
				'query-input': 'required name=search_term_string'
			}
		],
		inLanguage: siteLanguage
	};

	const schemaOrgImageObject = {
		'@type': 'ImageObject',
		'@id': `${url}/seo/1463x896.png`,
		inLanguage: siteLanguage,
		url: featuredImage.url,
		contentUrl: featuredImage.url,
		width: featuredImage.width,
		height: featuredImage.height,
		caption: featuredImage.caption
	};

	const schemaOrgBreadcrumbList = {
		'@type': 'BreadcrumbList',
		'@id': `${url}#breadcrumb`,
		url: siteUrl,
		itemListElement: breadcrumbs.map((element: { slug: any; name: any }, index: number) => ({
			'@type': 'ListItem',
			position: index + 1,
			item: {
				'@type': 'WebPage',
				'@id': `${siteUrl}/${element.slug}`,
				url: `${siteUrl}/${element.slug}`,
				name: element.name
			}
		}))
	};

	const schemaOrgWebPage = {
		'@type': 'WebPage',
		'@id': `${url}#webpage`,
		url: siteUrl,
		name: title,
		isPartOf: {
			'@id': `${siteUrl}/#website`
		},
		primaryImageOfPage: {
			'@id': `${url}/seo/1463x896.png`
		},
		datePublished,
		dateModified: lastUpdated,
		author: {
			'@id': `${siteUrl}/#/schema/person/${entityHash}`
		},
		description: metadescription,
		breadcrumb: {
			'@id': `${url}#breadcrumb`
		},
		inLanguage: siteLanguage,
		potentialAction: [
			{
				'@type': 'ReadAction',
				target: [url]
			}
		]
	};

	let schemaOrgArticle = null;
	if (article) {
		schemaOrgArticle = {
			'@type': 'Article',
			'@id': `${url}#article`,
			url: `${siteUrl}/blog/`,
			isPartOf: {
				'@id': `${url}#webpage`
			},
			author: {
				'@id': `${siteUrl}/#/schema/person/${entityHash}`
			},
			headline: title,
			datePublished,
			dateModified: lastUpdated,
			mainEntityOfPage: {
				'@id': `${url}#webpage`
			},
			publisher: {
				'@id': `${siteUrl}/#/schema/person/${entityHash}`
			},
			image: {
				'@id': `${url}/seo/1200x735.png`
			},
			articleSection: ['blog'],
			inLanguage: siteLanguage
		};
	}

	const schemaOrgPublisher = {
		'@type': ['Person', 'Organization'],
		'@id': `${siteUrl}/#/schema/person/${entityHash}`,
		url: siteUrl,
		name: entity,
		image: {
			'@type': 'ImageObject',
			'@id': `${siteUrl}/logo.png`,
			inLanguage: siteLanguage,
			url: `${siteUrl}/seo/1200x735.png?format=webp`,
			contentUrl: `${siteUrl}/seo/1200x735.png?format=webp`,
			width: 512,
			height: 512,
			caption: entity
		},
		logo: {
			'@id': `${siteUrl}/logo.png`
		}
	};

	const schemaOrgArray = [
		schemaOrgEntity,
		schemaOrgWebsite,
		schemaOrgImageObject,
		schemaOrgWebPage,
		schemaOrgBreadcrumbList,
		...(article ? [schemaOrgArticle] : []),
		schemaOrgPublisher
	];
	const schemaOrgObject = {
		'@context': 'https://schema.org',
		'@graph': schemaOrgArray,
		'@type': 'WebSite',
		'@id': `${siteUrl}/#website`,
		url: siteUrl,
		name: siteTitle,
		description: metadescription
	};
	const jsonLdString = JSON.stringify(schemaOrgObject);
	const jsonLdScript = `
		<script type="application/ld+json">
			${jsonLdString}
		${'<'}/script>
	`;
</script>

<svelte:head>
	{@html jsonLdScript}
</svelte:head>
