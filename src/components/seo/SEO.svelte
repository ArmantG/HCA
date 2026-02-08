<script>
	import { dev } from '$app/environment';
	import { config } from '$lib/config';
	import OpenGraph from './OpenGraph.svelte';
	import SchemaOrg from './SchemaOrg.svelte';

	import Head from './Head.svelte';

	const { author, ogLanguage, siteLanguage, siteTitle } = config;

	const siteUrl = dev ? 'http://localhost:5174' : config.siteUrl;

	if (dev) {
		console.log('🚀 -----------------------------------------🚀');
		console.log('🚀 config.siteUrl:', siteUrl);
		console.log('🚀 -----------------------------------------🚀');
	}

	const defaultAlt = 'Discipulus Bibliae blog image';

	export let entityMeta = null;
	export let lastUpdated = new Date();
	export let datePublished = new Date();
	export let metadescription;
	export let slug;
	export let timeToRead = 0;
	export let title = '';
	export let image = '';
	export let article = false;
	export let breadcrumbs = [
		{
			name: 'Home',
			slug: ''
		},
		{
			name: 'About',
			slug: 'about'
		},
		{
			name: 'Blog',
			slug: 'blog'
		},
		{
			name: 'Cookie Policy',
			slug: 'cookie'
		},
		{
			name: 'Privacy Policy',
			slug: 'privacy'
		}
	];
	export let featuredImage = {
		url: `${siteUrl}/${'seo/1463x896.png'}`,
		alt: defaultAlt,
		caption: 'Home page'
	};
	export let ogImage = {
		url: `${siteUrl}/${'seo/1200x735.png'}`,
		alt: defaultAlt
	};
	export let ogSquareImage = {
		url: `${siteUrl}/${'seo/800x800.png'}`,
		alt: defaultAlt
	};

	export let articleImage = {
		url: `${siteUrl}${image}`,
		alt: defaultAlt
	};

	const pageTitle = `${title} | ${siteTitle}`;
	const url = `${siteUrl}/${slug}`;

	const openGraphProps = {
		article,
		datePublished,
		lastUpdated,
		image: article ? articleImage : ogImage,
		squareImage: article ? articleImage : ogSquareImage,
		metadescription,
		ogLanguage,
		pageTitle,
		siteTitle,
		url: dev ? 'http://localhost:5174' : 'https://www.discipulusbibliae.co.za',
		...(article ? { datePublished, lastUpdated } : {})
	};
	const schemaOrgProps = {
		article,
		author,
		breadcrumbs,
		datePublished,
		lastUpdated,
		entityMeta,
		featuredImage: article ? articleImage : featuredImage,
		metadescription,
		siteLanguage,
		siteTitle,
		siteUrl: dev ? 'http://localhost:5174' : 'https://www.discipulusbibliae.co.za',
		title: pageTitle,
		url: dev ? 'http://localhost:5174' : 'https://www.discipulusbibliae.co.za'
	};
</script>

<Head {title} description={metadescription} image={article ? articleImage.url : ogImage.url} />
<OpenGraph {...openGraphProps} />
<SchemaOrg {...schemaOrgProps} />
