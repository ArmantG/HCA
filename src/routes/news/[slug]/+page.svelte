<script lang="ts">
	let { data } = $props();
</script>

<article class="mx-auto max-w-3xl px-6 py-16">
	<a href="/news" class="text-sm font-semibold text-orange-600">← Back to news</a>

	<header class="mt-6">
		<p class="text-sm text-neutral-500">
			{new Date(data.post.date).toLocaleDateString()}
			{#if data.post.category}
				· {data.post.category}
			{/if}
		</p>
		<h1 class="mt-3 text-4xl font-bold text-neutral-900">{data.post.title}</h1>
		<p class="mt-4 text-lg text-neutral-600">{data.post.excerpt}</p>
	</header>

	<div class="prose prose-neutral mt-10 max-w-none">
		<data.post.component />
	</div>
</article>
