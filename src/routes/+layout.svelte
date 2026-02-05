<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { setupViewTransition } from 'sveltekit-view-transition';
	import '../app.css';
	import { Footer, Loader, Navbar, Transition } from '../components';
	import { QuickMenu } from '../features';
	let { children } = $props();

	let loading = $state(true);
	let display = $state('block');
	const siteName = 'Harding Christian Academy';
	const siteDescription =
		'Harding Christian Academy offers Christ-centered education with academic excellence and character formation.';
	const siteUrl = $derived(page.url.origin);

	onMount(() => {
		scrollTo(0, 0);

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
	<title>{siteName}</title>
	<meta name="description" content={siteDescription} />
	<meta property="og:title" content={siteName} />
	<meta property="og:description" content={siteDescription} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:site_name" content={siteName} />
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
