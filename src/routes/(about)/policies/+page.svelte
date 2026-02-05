<script lang="ts">
	const policies = [
		{
			title: 'Admissions Policy',
			description: 'Guidelines for applications, placements, and enrolment.',
			file: '/policies/admissions-policy.pdf'
		},
		{
			title: 'Fees and Payment Policy',
			description: 'Payment schedules, exemptions, and finance procedures.',
			file: '/policies/fees-policy.pdf'
		},
		{
			title: 'Code of Conduct',
			description: 'Learner expectations, discipline procedures, and family commitments.',
			file: '/policies/code-of-conduct.pdf',
			page: '/policies/code-of-conduct'
		}
	];
</script>

<section class="mx-auto max-w-5xl px-6 py-16">
	<p class="text-sm uppercase tracking-[0.3em] text-accent">Policies</p>
	<h1 class="font-gt-walsheim-pro-medium mt-2 text-4xl text-neutral-900 sm:text-5xl">
		School policies
	</h1>
	<p class="mt-4 max-w-2xl text-base text-neutral-600 sm:text-lg">
		Download key policy documents. If you need a specific document, contact our office.
	</p>

	<div class="mt-10 grid gap-6 lg:grid-cols-3">
		{#each policies as policy (policy.title)}
			<div class="rounded-2xl border border-neutral-200 bg-white p-6">
				<h2 class="font-gt-walsheim-pro-medium text-xl text-neutral-900">{policy.title}</h2>
				<p class="mt-2 text-sm text-neutral-600">{policy.description}</p>
				<div class="mt-6 flex flex-col gap-3 text-sm font-semibold">
					{#if policy.page}
						<a class="inline-flex items-center text-accent" href={policy.page}>
							Read online
						</a>
					{/if}
					<a
						class="inline-flex items-center text-accent"
						href={policy.file}
						target="_blank"
						rel="noreferrer"
					>
						Download PDF
					</a>
				</div>
			</div>
		{/each}
	</div>
</section>
