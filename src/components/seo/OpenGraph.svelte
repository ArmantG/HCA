<script>
	import { dev } from '$app/environment'

	let {
		article = false,
		datePublished,
		lastUpdated,
		image,
		squareImage,
		metadescription,
		ogLanguage,
		pageTitle,
		siteTitle,
		url = dev ? 'http://localhost:5174' : 'https://www.discipulusbibliae.co.za'
	} = $props()
</script>

<svelte:head>
	<meta content={siteTitle} property="og:site_name" />
	<meta content={ogLanguage} property="og:locale" />
	<meta content={url} property="og:url" />
	<meta content={article ? 'article' : 'website'} property="og:type" />
	<meta content={pageTitle} property="og:title" />
	<meta content={metadescription} property="og:description" />
	{#if image}
		<meta content={image.url} property="og:image" />
		<meta content="1200" property="og:image:width" />
		<meta content="627" property="og:image:height" />
		<meta content={image.alt} property="og:image:alt" />
	{/if}
	{#if squareImage}
		<meta content={squareImage.url} property="og:image" />
		<meta content="400" property="og:image:width" />
		<meta content="400" property="og:image:height" />
		<meta content={squareImage.alt} property="og:image:alt" />
	{/if}
	{#if article}
		<meta content={datePublished} property="article:published_time" />
		<meta content={lastUpdated} property="article:modified_time" />
	{/if}
</svelte:head>
