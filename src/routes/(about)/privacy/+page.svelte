<script lang="ts">
	import { privacySummary } from '$lib/content/legal';
</script>

<section class="mx-auto max-w-3xl px-6 py-16">
	<p class="text-sm uppercase tracking-[0.3em] text-accent">Privacy</p>
	<h1 class="font-gt-walsheim-pro-medium mt-2 text-4xl text-neutral-900 sm:text-5xl">
		Privacy notice
	</h1>
	<p class="mt-4 text-base text-neutral-600 sm:text-lg">
		We respect your privacy and handle your information responsibly.
	</p>

	<ul class="mt-8 space-y-4 text-sm text-neutral-700 sm:text-base">
		{#each privacySummary as item}
			<li class="rounded-xl border border-neutral-200 bg-white px-5 py-4">{item}</li>
		{/each}
	</ul>

	<div class="mt-8 rounded-xl bg-neutral-50 px-5 py-4 text-sm text-neutral-700">
		If you have questions about your data, email info@hardingchristianacademy.co.za.
	</div>
</section>
