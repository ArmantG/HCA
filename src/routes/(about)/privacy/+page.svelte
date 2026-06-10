<script lang="ts">
	import { SITE_EMAIL } from '$lib/config'
	import { privacySummary } from '$lib/content/legal'
</script>

<section class="bg-white">
	<div class="mx-auto max-w-[1760px] px-5 py-14 sm:px-8 xl:px-12 2xl:px-16">
		<p class="text-sm font-semibold uppercase tracking-wide text-gold">Privacy</p>
		<h1 class="mt-3 max-w-4xl text-4xl font-semibold text-navy">Privacy notice.</h1>
		<p class="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
			HCA collects and processes personal information for admissions, learner administration,
			safety, legal compliance, and communication with families.
		</p>
	</div>
</section>

<section class="mx-auto max-w-[1760px] px-5 py-12 sm:px-8 xl:px-12 2xl:px-16">
	<div class="max-w-4xl">
		<ul class="space-y-4 text-slate-700">
			{#each privacySummary as item}
				<li class="border-l-4 border-gold bg-white p-5">{item}</li>
			{/each}
		</ul>

		<p class="mt-8 bg-slate-50 p-5 text-sm text-slate-700">
			If you have questions about your data, email <a
				class="font-semibold text-navy underline"
				href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a
			>.
		</p>
	</div>
</section>
