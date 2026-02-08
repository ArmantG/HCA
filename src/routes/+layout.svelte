<script lang="ts">
	import { page } from '$app/state';
	import { resolveSeo, SITE_NAME } from '$lib/seo';
	import { onMount } from 'svelte';
	import { setupViewTransition } from 'sveltekit-view-transition';
	import '../app.css';
	import { Footer, Loader, Navbar, Transition } from '../components';
	import { QuickMenu } from '../features';
	import type { LayoutData } from './$types';
	import { Toasts } from 'svoast';

	let { data, children } = $props<{ data: LayoutData; children: any }>();

	let loading = $state(true);
	let display = $state('block');
	const seo = $derived(resolveSeo(data?.seo, page.url.pathname));

	const MIN_LOADER_MS = 2000;
	const LOADER_EXIT_MS = 700;
	const HERO_VIDEO_READY_EVENT = 'hca:hero-video-ready';
	const HERO_VIDEO_MAX_WAIT_MS = 15000;

	function wait(ms: number): Promise<void> {
		return new Promise((resolve) => {
			setTimeout(resolve, ms);
		});
	}

	function waitForHeroVideo(pathname: string): Promise<void> {
		if (pathname !== '/') {
			return Promise.resolve();
		}

		const win = window as Window & { __hcaHeroVideoReady?: boolean };
		if (win.__hcaHeroVideoReady) {
			return Promise.resolve();
		}

		return new Promise((resolve) => {
			let timeoutId = 0;

			const finish = () => {
				window.removeEventListener(HERO_VIDEO_READY_EVENT, onVideoReady);
				window.clearTimeout(timeoutId);
				resolve();
			};

			const onVideoReady = () => {
				finish();
			};

			window.addEventListener(HERO_VIDEO_READY_EVENT, onVideoReady, { once: true });
			timeoutId = window.setTimeout(finish, HERO_VIDEO_MAX_WAIT_MS);
		});
	}

	onMount(() => {
		window.scrollTo(0, 0);

		const win = window as Window & { __hcaLoaderShown?: boolean };
		const shouldShowLoader = !win.__hcaLoaderShown;

		if (!shouldShowLoader) {
			loading = false;
			display = 'hidden';
			return;
		}

		win.__hcaLoaderShown = true;

		const hideLoader = async () => {
			await Promise.all([wait(MIN_LOADER_MS), waitForHeroVideo(page.url.pathname)]);
			loading = false;
			await wait(LOADER_EXIT_MS);
			display = 'hidden';
		};

		void hideLoader();
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
<Toasts position="top-right" />
