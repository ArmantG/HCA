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
	<meta name="view-transition" content="same-origin" />
</svelte:head>

<Loader
	style={`transition-transform duration-700 ${display} ${
		loading ? 'translate-y-0' : '-translate-y-[calc(100vh+15rem)]'
	}`}
/>

<Navbar />
{#if page.url.pathname !== '/chat'}
	<QuickMenu />
{/if}

<main class="flex min-h-screen flex-col justify-between">
	{@render children()}
</main>
{#if page.url.pathname !== '/chat'}
	<Footer />
{/if}
