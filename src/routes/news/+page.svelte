<script lang="ts">
	import { enhance } from '$app/forms';
	import Newsletter from '../../components/Newsletter.svelte';

	let { data, form } = $props();
	let query = $state('');
	const normalizedQuery = $derived(query.trim().toLowerCase());
	const filteredPosts = $derived(
		normalizedQuery
			? data.posts.filter(
					(post) =>
						post.title.toLowerCase().includes(normalizedQuery) ||
						post.excerpt.toLowerCase().includes(normalizedQuery) ||
						(post.category ?? '').toLowerCase().includes(normalizedQuery)
				)
			: data.posts
	);
</script>

<section class="mx-auto max-w-5xl px-6 py-16">
	<p class="text-sm uppercase tracking-[0.3em] text-accent">News</p>
	<h1 class="font-gt-walsheim-pro-medium mt-2 text-4xl text-neutral-900 sm:text-5xl">
		Latest school news and events
	</h1>
	<p class="mt-4 max-w-2xl text-base text-neutral-600 sm:text-lg">
		Stay informed with school announcements, news and events.
	</p>

	<div class="mt-8 rounded-2xl border border-neutral-200 bg-white p-4">
		<label class="flex flex-col gap-2 text-sm text-neutral-600">
			<span>Search news</span>
			<input
				class="rounded-lg border border-neutral-200 px-3 py-2 text-sm"
				type="search"
				placeholder="Search by title or category"
				bind:value={query}
			/>
		</label>
	</div>

	<div class="mt-10 grid gap-6 lg:grid-cols-2">
		{#each filteredPosts as post (post.slug)}
			<a
				class="rounded-2xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-lg"
				href={`/news/${post.slug}`}
			>
				<p class="text-xs uppercase tracking-[0.2em] text-accent">{post.category ?? 'Update'}</p>
				<h2 class="font-gt-walsheim-pro-medium mt-2 text-2xl text-neutral-900">
					{post.title}
				</h2>
				<p class="mt-2 text-sm text-neutral-600">{post.excerpt}</p>
				<p class="mt-4 text-xs text-neutral-500">{new Date(post.date).toDateString()}</p>
			</a>
		{/each}
		{#if filteredPosts.length === 0}
			<p class="text-sm text-neutral-600">No news posts match your search.</p>
		{/if}
	</div>

	<div class="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-8 flex flex-col">
		<h2 class="font-gt-walsheim-pro-medium text-2xl text-neutral-900 justify-center mx-auto">
			Newsletter
		</h2>
		<p class="mt-2 text-sm text-neutral-600 justify-center mx-auto">
			Sign up for updates and announcements.
		</p>

		<Newsletter />
	</div>
</section>
