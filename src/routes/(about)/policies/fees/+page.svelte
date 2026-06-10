<script lang="ts">
	const paymentRules = [
		'Fees are payable in advance according to the selected monthly, quarterly, or annual option.',
		'Payments must use the learner reference number and name so the account can be allocated correctly.',
		'The registration fee is once-off per child and is payable as part of enrolment.',
		'The sibling discount applies according to the school fee schedule and account rules.'
	]

	const arrears = [
		'Parents should contact the school early if payment difficulty is expected.',
		'Written payment arrangements may be considered before arrears accumulate further.',
		'Continued non-payment can affect continued enrolment in line with the school process.',
		'Refunds and cancellations are handled according to notice periods and the fee schedule.'
	]
</script>

<section class="bg-white">
	<div class="mx-auto max-w-[1760px] px-5 py-14 sm:px-8 xl:px-12 2xl:px-16">
		<p class="text-sm font-semibold uppercase tracking-wide text-gold">Policy</p>
		<h1 class="mt-3 max-w-4xl text-4xl font-semibold text-navy">Fees Policy</h1>
		<p class="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
			This page summarises the current fee expectations for families. The formal policy document is
			still being finalised and is not available as a public download yet.
		</p>
	</div>
</section>

<section
	class="mx-auto grid max-w-[1760px] gap-8 px-5 py-12 sm:px-8 lg:grid-cols-2 xl:px-12 2xl:px-16"
>
	<div class="bg-white p-6">
		<h2 class="text-xl font-semibold text-slate-900">Payment expectations</h2>
		<ul class="mt-4 space-y-3 text-sm leading-6 text-slate-700">
			{#each paymentRules as rule (rule)}
				<li>{rule}</li>
			{/each}
		</ul>
	</div>
	<div class="bg-white p-6">
		<h2 class="text-xl font-semibold text-slate-900">Arrears and account changes</h2>
		<ul class="mt-4 space-y-3 text-sm leading-6 text-slate-700">
			{#each arrears as item (item)}
				<li>{item}</li>
			{/each}
		</ul>
	</div>
</section>

<section class="border-y border-slate-200 bg-slate-50">
	<div class="mx-auto max-w-[1760px] px-5 py-12 sm:px-8 xl:px-12 2xl:px-16">
		<div class="max-w-4xl">
			<h2 class="text-2xl font-semibold text-slate-900">Family responsibility</h2>
			<p class="mt-4 leading-7 text-slate-700">
				By accepting a place at HCA, families commit to paying fees on time, using the correct
				reference, keeping contact and account details current, and communicating with the school
				before payment problems become serious.
			</p>
			<a
				class="mt-8 inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-navy transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
				href="/policies"
			>
				Back to policies
			</a>
		</div>
	</div>
</section>
