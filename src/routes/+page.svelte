<script lang="ts">
	import { GOOGLE_MAPS_URL, SITE_ADDRESS, SITE_PHONE } from '$lib/config'

	const quickFacts = [
		{ label: 'Grades', value: '1 to 9' },
		{ label: 'School starts', value: '07h30' },
		{
			label: 'School ends',
			value: '14h00 / 14h45',
			details: ['Foundation Phase: 14h00', 'Grades 4 to 9: 14h45']
		},
		{ label: 'Learners enrolled', value: '229' }
	]

	const schoolInfo = [
		{ label: 'Phone', value: SITE_PHONE, href: `tel:${SITE_PHONE.replaceAll(' ', '')}` },
		{ label: 'Address', value: SITE_ADDRESS, href: GOOGLE_MAPS_URL },
		{ label: 'School phases', value: 'Foundation, Intermediate, and Senior Phase' }
	]
</script>

<section class="bg-white">
	<div
		class="mx-auto grid max-w-[1760px] gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:py-20 xl:px-12 2xl:px-16"
	>
		<div class="max-w-4xl">
			<p class="text-sm font-semibold uppercase tracking-wide text-gold">
				Harding Christian Academy
			</p>
			<h1 class="mt-4 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
				Christ-centered schooling for families in Harding.
			</h1>
			<p class="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
				HCA is an independent Christian school serving Grades 1 to 9. We aim to provide a safe,
				orderly learning environment and a constructive partnership with parents and guardians.
			</p>
			<div class="mt-8 flex flex-col gap-3 sm:flex-row">
				<a
					class="inline-flex min-h-11 items-center justify-center rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
					href="/admissions/apply"
				>
					Start application
				</a>
				<a
					class="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-navy transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
					href="/admissions"
				>
					View admissions steps
				</a>
			</div>
		</div>

		<aside class="border-t-4 border-gold bg-slate-50 p-6 lg:self-start">
			<h2 class="text-xl font-semibold text-slate-900">School information</h2>
			<dl class="mt-5 space-y-5 text-sm leading-6">
				{#each schoolInfo as item (item.label)}
					<div>
						<dt class="font-semibold text-slate-900">{item.label}</dt>
						<dd class="mt-1 text-slate-700">
							{#if item.href}
								<a class="text-navy underline" href={item.href}>{item.value}</a>
							{:else}
								{item.value}
							{/if}
						</dd>
					</div>
				{/each}
			</dl>
		</aside>
	</div>
</section>

<section class="bg-navy text-white">
	<div
		class="mx-auto grid max-w-[1760px] divide-y divide-white/15 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4"
	>
		{#each quickFacts as fact (fact.label)}
			<div
				class="flex min-h-32 flex-col items-center justify-center px-6 py-8 text-center sm:min-h-36 lg:px-8"
			>
				<p class="text-base font-semibold text-white/75">{fact.label}</p>
				<p class="mt-2 text-3xl font-semibold leading-tight text-white sm:text-4xl">{fact.value}</p>
				{#if fact.details}
					<div class="mt-3 space-y-1 text-sm font-medium leading-5 text-white/75">
						{#each fact.details as detail (detail)}
							<p>{detail}</p>
						{/each}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</section>

<section
	class="mx-auto grid max-w-[1760px] gap-8 px-5 py-14 sm:px-8 lg:grid-cols-2 xl:px-12 2xl:px-16"
>
	<div>
		<h2 class="text-2xl font-semibold text-slate-900">Admissions process</h2>
		<ol class="mt-6 space-y-4 text-sm leading-6 text-slate-700">
			<li>
				<strong class="text-slate-900">1. Apply online.</strong> Submit the form and documents.
			</li>
			<li>
				<strong class="text-slate-900">2. Office review.</strong> We check space, documents, and support
				needs.
			</li>
			<li>
				<strong class="text-slate-900">3. Interview or placement check.</strong> We may arrange a meeting
				or readiness check.
			</li>
			<li>
				<strong class="text-slate-900">4. Written outcome.</strong> Accepted families complete enrolment
				confirmation.
			</li>
		</ol>
	</div>

	<div>
		<h2 class="text-2xl font-semibold text-slate-900">Fees at a glance</h2>
		<div class="mt-6 overflow-hidden border border-slate-200 bg-white">
			<div class="grid grid-cols-2 border-b border-slate-200 p-4">
				<span>Registration fee</span>
				<strong class="text-right text-navy">R 2,500</strong>
			</div>
			<div class="grid grid-cols-2 border-b border-slate-200 p-4">
				<span>Monthly tuition</span>
				<strong class="text-right text-navy">R 1,400 eldest / R 1,200 sibling</strong>
			</div>
			<div class="grid grid-cols-2 p-4">
				<span>Annual tuition</span>
				<strong class="text-right text-navy">R 15,400 eldest / R 13,200 sibling</strong>
			</div>
		</div>
		<p class="mt-4 text-sm leading-6 text-slate-600">
			Fees are payable in advance. See the fees page and full policy for payment references and
			arrears arrangements.
		</p>
	</div>
</section>

<section class="bg-navy text-white">
	<div
		class="mx-auto flex max-w-[1760px] flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between xl:px-12 2xl:px-16"
	>
		<div>
			<h2 class="text-2xl font-semibold">Ready to apply?</h2>
			<p class="mt-2 text-sm text-white/80">
				Call <a class="underline" href={`tel:${SITE_PHONE.replaceAll(' ', '')}`}>{SITE_PHONE}</a>
				or visit us at <a class="underline" href={GOOGLE_MAPS_URL}>{SITE_ADDRESS}</a>.
			</p>
		</div>
		<a
			class="inline-flex min-h-11 items-center justify-center rounded-md bg-gold px-6 py-3 text-sm font-semibold text-navy transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
			href="/admissions/apply"
		>
			Apply online
		</a>
	</div>
</section>
