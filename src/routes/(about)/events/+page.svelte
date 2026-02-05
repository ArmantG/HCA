<script lang="ts">
	let { data } = $props();
</script>

<section class="mx-auto max-w-6xl px-6 py-28 min-h-auto grow justify-between">
	<div class="mb-10">
		<h1 class="text-4xl font-bold text-neutral-900">School Events</h1>
		<p class="mt-3 text-lg text-neutral-600">
			News, events, and updates from the school community.
		</p>
	</div>

	<div class="grid gap-6 md:grid-cols-2">
		{#each data.posts as post}
			<a
				href={`/events/${post.slug}`}
				class="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-neutral-300 hover:shadow-md"
			>
				<div class="flex items-center gap-3 text-sm text-neutral-500">
					<span>{new Date(post.date).toLocaleDateString()}</span>
					{#if post.category}
						<span class="rounded-full bg-neutral-100 px-3 py-1 text-xs uppercase tracking-wide">
							{post.category}
						</span>
					{/if}
				</div>
				<h2 class="mt-4 text-2xl font-semibold text-neutral-900 group-hover:text-orange-600">
					{post.title}
				</h2>
				<p class="mt-3 text-neutral-600">{post.excerpt}</p>
				<span class="mt-6 inline-block text-sm font-semibold text-orange-600">Read more</span>
			</a>
		{/each}
	</div>
</section>
