<script lang="ts">
	const steps = [
		'Submit the completed online application and supporting documents.',
		'The school reviews the application and may request additional information.',
		'An interview or readiness/placement check may be scheduled where needed.',
		'The school communicates the outcome in writing: accept, waitlist, or decline.',
		'Accepted families complete enrolment confirmation, fee arrangements, and policy acknowledgements.'
	]

	const documents = [
		'Completed application form',
		'Parent or guardian identity document copy',
		"Learner's birth certificate copy",
		"Learner's immunisation record / clinic card",
		'Previous school report and assessments where available',
		'Medical details and emergency authorisation',
		'Indemnity and consent forms',
		'Fee payment agreement / undertaking'
	]
</script>

<section class="bg-white">
	<div class="mx-auto max-w-[1760px] px-5 py-14 sm:px-8 xl:px-12 2xl:px-16">
		<p class="text-sm font-semibold uppercase tracking-wide text-gold">Admissions</p>
		<h1 class="mt-3 max-w-4xl text-4xl font-semibold text-navy">
			Apply online, then complete enrolment with the office.
		</h1>
		<p class="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
			The admissions process is designed to be clear, fair, and practical for a small-school
			context. Admission is only final once HCA has issued written acceptance and the family has
			completed the enrolment confirmation steps.
		</p>
		<div class="mt-8">
			<a
				class="inline-flex min-h-11 items-center justify-center rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
				href="/admissions/apply"
			>
				Start application
			</a>
		</div>
	</div>
</section>

<section class="px-5 py-12 sm:px-8 xl:px-12 2xl:px-16">
	<div class="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-2 lg:gap-20">
		<div class="mx-auto w-full max-w-xl">
			<h2 class="text-2xl font-semibold text-slate-900">Admissions steps</h2>
			<ol class="mt-6 space-y-4 text-slate-700">
				{#each steps as step, index (step)}
					<li class="flex gap-3">
						<span
							class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-semibold text-navy"
						>
							{index + 1}
						</span>
						<span>{step}</span>
					</li>
				{/each}
			</ol>
		</div>

		<div class="mx-auto w-full max-w-xl">
			<h2 class="text-2xl font-semibold text-slate-900">Documents required</h2>
			<ul class="mt-6 space-y-3 text-slate-700">
				{#each documents as document (document)}
					<li class="flex gap-3">
						<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"></span>
						<span>{document}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<section class="border-y border-slate-200 bg-slate-50">
	<div
		class="mx-auto grid max-w-[1760px] gap-8 px-5 py-12 sm:px-8 md:grid-cols-3 xl:px-12 2xl:px-16"
	>
		<div class="bg-white p-6">
			<h2 class="text-xl font-semibold text-slate-900">Christian ethos</h2>
			<p class="mt-3 text-sm leading-6 text-slate-700">
				Families are expected to support the school's Bible-based Christian ethos in practice.
			</p>
		</div>
		<div class="bg-white p-6">
			<h2 class="text-xl font-semibold text-slate-900">Placement checks</h2>
			<p class="mt-3 text-sm leading-6 text-slate-700">
				Interviews, readiness checks, or previous assessments may be used to plan suitable
				placement.
			</p>
		</div>
		<div class="bg-white p-6">
			<h2 class="text-xl font-semibold text-slate-900">Probation period</h2>
			<p class="mt-3 text-sm leading-6 text-slate-700">
				New learners may be admitted on probation for up to three months while adjustment is
				monitored.
			</p>
		</div>
	</div>
</section>
