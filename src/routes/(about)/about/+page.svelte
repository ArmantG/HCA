<script lang="ts">
	const values = [
		'The best interests, dignity, and safety of every child',
		'Fair and transparent admissions and school administration',
		'A clear Christian ethos lived out in daily routines',
		'Respectful partnership between school, parents, guardians, and learners'
	]

	const routines = [
		'School runs from 08h00 to 14h00 for Foundation Phase and 08h00 to 14h45 for Grades 4 to 9, Monday to Friday.',
		'Learners may be received from 07h30 and must be handed to a staff member.',
		'Children may not be left unattended at the gate.',
		'Parents must notify the school if collection arrangements change.'
	]
</script>

<section class="bg-white">
	<div class="mx-auto max-w-[1760px] px-5 py-14 sm:px-8 xl:px-12 2xl:px-16">
		<p class="text-sm font-semibold uppercase tracking-wide text-gold">About HCA</p>
		<h1 class="mt-3 max-w-4xl text-4xl font-semibold text-navy">
			A small Christian school with clear expectations.
		</h1>
		<p class="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
			Harding Christian Academy is a Bible-based independent school in KwaZulu-Natal. Our education,
			discipline, and community life are shaped by Scripture and Christian conviction. Families are
			expected to support the school in creating a consistent, God-honouring environment for
			learners.
		</p>
	</div>
</section>

<section
	class="mx-auto grid max-w-[1760px] gap-10 px-5 py-12 sm:px-8 lg:grid-cols-2 xl:px-12 2xl:px-16"
>
	<div>
		<h2 class="text-2xl font-semibold text-slate-900">Guiding principles</h2>
		<ul class="mt-6 space-y-3 text-slate-700">
			{#each values as value (value)}
				<li class="flex gap-3">
					<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"></span>
					<span>{value}</span>
				</li>
			{/each}
		</ul>
	</div>

	<div>
		<h2 class="text-2xl font-semibold text-slate-900">Daily routine and safety</h2>
		<ul class="mt-6 space-y-3 text-slate-700">
			{#each routines as routine (routine)}
				<li class="flex gap-3">
					<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"></span>
					<span>{routine}</span>
				</li>
			{/each}
		</ul>
	</div>
</section>

<section class="border-y border-slate-200 bg-slate-50">
	<div class="mx-auto max-w-[1760px] px-5 py-12 sm:px-8 xl:px-12 2xl:px-16">
		<div class="max-w-4xl">
			<h2 class="text-2xl font-semibold text-slate-900">Parent partnership</h2>
			<p class="mt-4 leading-7 text-slate-700">
				Admission is based on a family partnership model. Parents and guardians commit to respectful
				communication, punctual attendance at meetings when required, support of the code of
				conduct, and keeping contact, medical, and legal information up to date.
			</p>
			<div class="mt-8">
				<a
					class="inline-flex min-h-11 items-center justify-center rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
					href="/admissions/apply"
				>
					Apply to HCA
				</a>
			</div>
		</div>
	</div>
</section>
