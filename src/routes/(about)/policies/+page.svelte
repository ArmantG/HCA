<script lang="ts">
	const policies = [
		{
			title: 'Admissions Policy',
			description:
				'Explains admissions principles, required documents, interviews, placement, probation, and POPIA handling.',
			href: '/policies/admissions'
		},
		{
			title: 'Fees Policy',
			description:
				'Explains the annual fee schedule, payment options, references, arrears, discounts, and refunds.',
			href: '/policies/fees'
		},
		{
			title: 'Learner Code of Conduct',
			description:
				'Explains learner responsibilities, daily routines, safety, anti-bullying commitments, and discipline levels.',
			href: '/policies/code-of-conduct'
		}
	]
</script>

<section class="bg-white">
	<div class="mx-auto max-w-[1760px] px-5 py-14 sm:px-8 xl:px-12 2xl:px-16">
		<p class="text-sm font-semibold uppercase tracking-wide text-gold">Policies</p>
		<h1 class="mt-3 max-w-4xl text-4xl font-semibold text-navy">
			School policies and parent documents.
		</h1>
		<p class="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
			These policy pages guide admissions, fees, conduct, safety, learner care, and parent
			partnership. The formal PDF documents are still being prepared and are not public downloads
			yet.
		</p>
	</div>
</section>

<section
	class="mx-auto grid max-w-[1760px] gap-6 px-5 py-12 sm:px-8 lg:grid-cols-3 xl:px-12 2xl:px-16"
>
	{#each policies as policy (policy.href)}
		<article class="border border-slate-200 bg-white p-6">
			<h2 class="text-xl font-semibold text-slate-900">{policy.title}</h2>
			<p class="mt-3 text-sm leading-6 text-slate-700">{policy.description}</p>
			<a
				class="mt-6 inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-navy transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
				href={policy.href}
			>
				View policy
			</a>
		</article>
	{/each}
</section>
