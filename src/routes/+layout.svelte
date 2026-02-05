<script lang="ts">
	import { page } from '$app/state';
	import { resolveSeo, SITE_NAME } from '$lib/seo';
	import { onMount } from 'svelte';
	import { setupViewTransition } from 'sveltekit-view-transition';
	import '../app.css';
	import { Footer, Loader, Navbar, Transition } from '../components';
	import { QuickMenu } from '../features';
	import type { LayoutData } from './$types';

	let { data, children } = $props<{ data: LayoutData; children: any }>();

	let loading = $state(true);
	let display = $state('block');
	const seo = $derived(resolveSeo(data?.seo, page.url.pathname));

	onMount(() => {
		scrollTo(0, 0);

		const win = window as Window & { __hcaLoaderShown?: boolean };
		const shouldShowLoader = !win.__hcaLoaderShown;

		if (!shouldShowLoader) {
			loading = false;
			display = 'hidden';
			return;
		}

		win.__hcaLoaderShown = true;

		setTimeout(() => {
			loading = false;
		}, 800);

		setTimeout(() => {
			display = 'hidden';
		}, 2000);
	});

	setupViewTransition();
</script>

<svelte:head>
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />
	<link rel="canonical" href={seo.canonical} />
	<meta name="robots" content={seo.robots} />
	<meta property="og:title" content={seo.title} />
	<meta property="og:description" content={seo.description} />
	<meta property="og:type" content={seo.ogType} />
	<meta property="og:url" content={seo.canonical} />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:image" content={seo.ogImage} />
	<meta property="og:image:alt" content={`${SITE_NAME} logo`} />
	<meta property="og:locale" content="en_ZA" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={seo.title} />
	<meta name="twitter:description" content={seo.description} />
	<meta name="twitter:image" content={seo.ogImage} />
	<meta name="view-transition" content="same-origin" />
</svelte:head>

<Loader
	style={`transition-transform duration-700 ${display} ${
		loading ? 'translate-y-0' : '-translate-y-[calc(100vh+15rem)]'
	}`}
/>

<Navbar />
{#if page.url.pathname !== '/contact'}
	<QuickMenu />
{/if}

<main class="flex min-h-screen flex-col justify-between">
	{@render children()}
</main>
{#if page.url.pathname !== '/contact'}
	<Footer />
{/if}
