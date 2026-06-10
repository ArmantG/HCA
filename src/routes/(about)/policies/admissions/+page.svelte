<script lang="ts">
	const principles = [
		'Admissions are handled fairly, transparently, and consistently.',
		'Decisions must protect the best interests, dignity, and safety of every child.',
		'HCA applies a clear Christian ethos in daily school life and expects family support for that ethos.',
		'Admissions decisions must be realistic for a small-school context, including space, staffing, and available support.'
	]

	const criteria = [
		'Capacity in the relevant grade, including available space, staffing, and resources.',
		'Age, grade readiness, and appropriate placement in the school programme.',
		'Family willingness to support the Christian character, routines, and policies of the school.',
		"The school's ability to support the learner's academic, behavioural, medical, or social needs without compromising the safety and learning of others.",
		'Completion of required forms, consents, documentation, and fee undertakings.'
	]

	const requiredDocuments = [
		'Completed and signed application form',
		'Parent or guardian identity document copy',
		'Learner birth certificate copy',
		'Learner immunisation record or clinic card',
		'Previous school report and assessments where available',
		'Medical details and emergency authorisation',
		'Indemnity and consent forms required by the school',
		'Fee payment agreement or undertaking'
	]

	const process = [
		'Submit the completed application and supporting documents.',
		'The school reviews the application, checks grade capacity, and may request more information.',
		'HCA may arrange a parent or learner interview, readiness discussion, or placement check.',
		'The school communicates the outcome in writing as accept, waitlist, or decline.',
		'Accepted families complete fee arrangements, undertakings, and policy acknowledgements before the learner starts.'
	]

	const partnership = [
		"Parents and guardians support HCA's Bible-based Christian ethos in practice.",
		'Families participate respectfully in meetings, school communication, and policy processes.',
		'Learners participate in school religious activities that form part of the programme, such as devotions, Bible lessons, and assemblies.',
		'The school may request church or pastor contact details where this helps confirm family partnership and support.'
	]

	const placement = [
		'Placement decisions may include support conditions, a trial period, or scheduled review meetings.',
		'Parents must disclose relevant learning, behavioural, medical, social, and legal information early.',
		'Where HCA cannot reasonably provide the required support, the school will discuss suitable alternatives with the family.',
		'Admission is final only after written acceptance and completed enrolment confirmation.'
	]

	const probation = [
		'New learners may be admitted on probation for up to three months.',
		'The school monitors adjustment, attendance, effort, behaviour, and academic progress.',
		'A probation review meeting may be scheduled before the end of the period.',
		'If placement is clearly unsuitable, the school may recommend withdrawal with appropriate notice and transition support.'
	]

	const familyAdministration = [
		'Parents keep contact, medical, emergency, and legal details up to date.',
		'HCA processes personal information for admissions, learner administration, safety, and legal compliance.',
		'Information is shared only where necessary for education, safety, legal duties, or recorded consent.',
		'Withdrawals must be given in writing so records, fees, and transfer arrangements can be handled responsibly.'
	]
</script>

<section class="bg-white">
	<div class="mx-auto max-w-[1760px] px-5 py-14 sm:px-8 xl:px-12 2xl:px-16">
		<p class="text-sm font-semibold uppercase tracking-wide text-gold">Policy</p>
		<h1 class="mt-3 max-w-4xl text-4xl font-semibold text-navy">Admissions Policy</h1>
		<p class="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
			HCA admits learners through a fair, documented process that considers the learner's best
			interests, grade readiness, family partnership, available capacity, and the school's ability
			to support the learner well.
		</p>
		<div class="mt-8 flex flex-wrap gap-3">
			<a
				class="inline-flex min-h-11 items-center justify-center rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
				href="/policies/admissions-policy.pdf"
				target="_blank"
				rel="noreferrer"
			>
				Download admissions policy
			</a>
			<a
				class="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-navy transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
				href="/admissions/apply"
			>
				Start an application
			</a>
		</div>
	</div>
</section>

<section
	class="mx-auto grid max-w-[1760px] gap-8 px-5 py-12 sm:px-8 lg:grid-cols-2 xl:px-12 2xl:px-16"
>
	<div class="bg-white p-6">
		<h2 class="text-xl font-semibold text-slate-900">Guiding principles</h2>
		<ul class="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-700">
			{#each principles as item (item)}
				<li>{item}</li>
			{/each}
		</ul>
	</div>
	<div class="bg-white p-6">
		<h2 class="text-xl font-semibold text-slate-900">Admission criteria</h2>
		<ul class="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-700">
			{#each criteria as item (item)}
				<li>{item}</li>
			{/each}
		</ul>
	</div>
</section>

<section class="border-y border-slate-200 bg-white">
	<div
		class="mx-auto grid max-w-[1760px] gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_1.1fr] xl:px-12 2xl:px-16"
	>
		<div>
			<h2 class="text-2xl font-semibold text-slate-900">Required documents</h2>
			<p class="mt-4 leading-7 text-slate-700">
				The office needs a complete application pack before an application can be assessed properly.
				Additional documents may be requested where they affect placement, support, safety, or legal
				compliance.
			</p>
		</div>
		<ul class="grid gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-2">
			{#each requiredDocuments as item (item)}
				<li class="border-l-2 border-gold pl-4">{item}</li>
			{/each}
		</ul>
	</div>
</section>

<section class="mx-auto max-w-[1760px] px-5 py-12 sm:px-8 xl:px-12 2xl:px-16">
	<div class="max-w-5xl">
		<h2 class="text-2xl font-semibold text-slate-900">Admissions process</h2>
		<ol class="mt-6 grid gap-4 text-sm leading-6 text-slate-700 md:grid-cols-5">
			{#each process as item, index (item)}
				<li class="border-t border-slate-200 pt-4">
					<span class="text-xs font-semibold uppercase tracking-wide text-gold"
						>Step {index + 1}</span
					>
					<p class="mt-2">{item}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>

<section class="border-y border-slate-200 bg-slate-50">
	<div
		class="mx-auto grid max-w-[1760px] gap-8 px-5 py-12 sm:px-8 lg:grid-cols-2 xl:px-12 2xl:px-16"
	>
		<div>
			<h2 class="text-2xl font-semibold text-slate-900">Christian ethos and partnership</h2>
			<p class="mt-4 leading-7 text-slate-700">
				HCA is a Bible-based Christian school. The school welcomes applications from diverse
				backgrounds, but families must be willing to support the Christian ethos, school routines,
				and policies in practice.
			</p>
			<ul class="mt-5 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-700">
				{#each partnership as item (item)}
					<li>{item}</li>
				{/each}
			</ul>
		</div>
		<div>
			<h2 class="text-2xl font-semibold text-slate-900">Placement and learner support</h2>
			<p class="mt-4 leading-7 text-slate-700">
				Placement is considered carefully so learners are placed in the grade and environment where
				they can participate meaningfully and safely.
			</p>
			<ul class="mt-5 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-700">
				{#each placement as item (item)}
					<li>{item}</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<section
	class="mx-auto grid max-w-[1760px] gap-8 px-5 py-12 sm:px-8 lg:grid-cols-2 xl:px-12 2xl:px-16"
>
	<div class="bg-white p-6">
		<h2 class="text-xl font-semibold text-slate-900">Acceptance and probation</h2>
		<ul class="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-700">
			{#each probation as item (item)}
				<li>{item}</li>
			{/each}
		</ul>
	</div>
	<div class="bg-white p-6">
		<h2 class="text-xl font-semibold text-slate-900">Records, POPIA, and withdrawals</h2>
		<ul class="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-700">
			{#each familyAdministration as item (item)}
				<li>{item}</li>
			{/each}
		</ul>
	</div>
</section>

<section class="border-t border-slate-200 bg-slate-50">
	<div class="mx-auto max-w-[1760px] px-5 py-12 sm:px-8 xl:px-12 2xl:px-16">
		<a
			class="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-navy transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
			href="/policies"
		>
			Back to policies
		</a>
	</div>
</section>
