<script lang="ts">
	import { dev } from '$app/environment';
	import { page } from '$app/state';
	import { config } from '$lib/config';

	let {
		title = '',
		description = config.description,
		image = config.image,
		url = page.url.pathname
	} = $props();

	// const url = page.url.pathname;
	const origin = page.url.origin;
	const canonicalUrl = dev ? 'http://localhost:5174' : 'https://www.discipulusbibliae.co.za';

	console.log(origin);
</script>

<svelte:head>
	<meta http-equiv="content-type" content="text/html" charset="utf-8" />
	<link rel="alternate" hreflang="en" href={origin} />
	<meta content="IE=edge,chrome=1" http-equiv="x-ua-compatible" />
	<meta content="width=device-width, initial-scale=1" name="viewport" />
	<title>{title.replace(/\b\w/g, (l) => l.toUpperCase())} | {config.title}</title>

	<!-- Google / Search Engine Tags -->
	<meta itemprop="name" content={title} />
	<meta itemprop="description" content={description} />
	<meta itemprop="image" content={image} />
	<meta name="robots" content="index, follow" />
	<meta name="copyright" content="Discipulus Bibliae" />

	<meta name="subject" content={description} />

	<link rel="canonical" href={canonicalUrl} />
	<meta name="description" content={description} />
	<meta name="author" content={'Discipulus Bibliae'} />
	<link rel="icon" href="/favicon.ico" sizes="any" type="image/ico+xml" />
	<link rel="icon" href="/favicon.png" sizes="any" type="image/png+xml" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />

	<meta name="msapplication-TileColor" content="#09041a" />
	<meta name="theme-color" media="(prefers-color-scheme: light)" content="#dddddd" />
	<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#09041a" />
	<link rel="alternate" type="application/rss+xml" href="/rss.xml" />

	<link rel="icon" type="image/png" sizes="16x16" href="/icon-16.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/icon-32.png" />
	<link rel="icon" type="image/png" sizes="128x128" href="/icon-128.png" />
	<link rel="icon" type="image/png" sizes="256x256" href="/icon-256.png" />
	<link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />

	<link rel="alternate" type="application/atom+xml" href="/rss.xml" />
</svelte:head>
