<script lang="ts">
	import { coreValues, goals, philosophy } from '../../../constants';
</script>

<section class="mx-auto max-w-5xl px-6 py-16">
	<p class="text-sm uppercase tracking-[0.3em] text-accent">About</p>
	<h1 class="font-gt-walsheim-pro-medium mt-2 text-4xl text-neutral-900 sm:text-5xl">
		Harding Christian Academy
	</h1>
	<p class="mt-4 max-w-2xl text-base text-neutral-600 sm:text-lg">
		We are a Christ-centered school serving families in Harding with a focus on academic excellence,
		character formation, and community service. We serve learners in Grades 1 to 7 across the
		Foundation, Intermediate, and Senior Phases.
	</p>

	<div class="mt-8 grid gap-6 lg:grid-cols-3">
		<div class="rounded-2xl border border-neutral-200 bg-white p-6">
			<h2 class="font-gt-walsheim-pro-medium text-xl text-neutral-900">At a glance</h2>
			<ul class="mt-4 space-y-2 text-sm text-neutral-600 sm:text-base">
				<li>Small Christian primary school in Harding, KZN</li>
				<li>Grades 1 to 7 across three phases</li>
				<li>CAPS-aligned curriculum with strong literacy and numeracy</li>
				<li>Focused on character, service, and community partnership</li>
			</ul>
		</div>
		<div class="rounded-2xl border border-neutral-200 bg-white p-6">
			<h2 class="font-gt-walsheim-pro-medium text-xl text-neutral-900">Our ethos</h2>
			<p class="mt-3 text-sm text-neutral-600 sm:text-base">
				We believe every learner is created with purpose. Our ethos emphasizes respect, humility,
				responsibility, and compassion, shaped by Christian values and lived out in daily school
				life.
			</p>
		</div>
		<div class="rounded-2xl border border-neutral-200 bg-white p-6">
			<h2 class="font-gt-walsheim-pro-medium text-xl text-neutral-900">Education approach</h2>
			<p class="mt-3 text-sm text-neutral-600 sm:text-base">
				We combine clear routines, strong teaching, and personal attention so learners feel safe,
				known, and challenged. We prioritise foundational skills, critical thinking, and purposeful
				learning.
			</p>
		</div>
	</div>

	<div class="mt-12">
		<h2 class="font-gt-walsheim-pro-medium text-2xl text-neutral-900">Vision and mission</h2>
		<p class="mt-2 text-sm text-neutral-600 sm:text-base">
			Our guiding statements shape how we serve families and prepare learners for the next stage.
		</p>
	</div>

	<div class="mt-6 grid gap-6 lg:grid-cols-3">
		{#each philosophy as item}
			<div class="rounded-2xl border border-neutral-200 bg-white p-6">
				<h2 class="font-gt-walsheim-pro-medium text-xl text-neutral-900">{item.title}</h2>
				<p class="mt-3 text-sm text-neutral-600 sm:text-base">{item.text}</p>
			</div>
		{/each}
	</div>

	<div class="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
		<h2 class="font-gt-walsheim-pro-medium text-2xl text-neutral-900">Our goals</h2>
		<ul class="mt-6 space-y-3 text-sm text-neutral-700 sm:text-base">
			{#each goals as goal}
				<li>{goal.text}</li>
			{/each}
		</ul>
	</div>

	<div class="mt-12 grid gap-6 lg:grid-cols-2">
		<div class="rounded-2xl border border-neutral-200 bg-white p-6">
			<h3 class="font-gt-walsheim-pro-medium text-xl text-neutral-900">Curriculum and phases</h3>
			<ul class="mt-4 space-y-2 text-sm text-neutral-600 sm:text-base">
				<li>Foundation Phase (Grades 1 to 3): literacy, numeracy, and life skills</li>
				<li>Intermediate Phase (Grades 4 to 6): subject-based learning and study skills</li>
				<li>Senior Phase (Grade 7): deeper content and high school readiness</li>
				<li>Core subjects include Languages, Mathematics, Natural Sciences, and Social Sciences</li>
			</ul>
		</div>
		<div class="rounded-2xl border border-neutral-200 bg-white p-6">
			<h3 class="font-gt-walsheim-pro-medium text-xl text-neutral-900">Whole-child development</h3>
			<ul class="mt-4 space-y-2 text-sm text-neutral-600 sm:text-base">
				<li>Creative Arts and Life Skills built into weekly learning</li>
				<li>Sport and movement for healthy growth and teamwork</li>
				<li>Leadership and service opportunities within the school</li>
				<li>Digital literacy and safe technology habits</li>
			</ul>
		</div>
	</div>

	<div class="mt-12 grid gap-6 lg:grid-cols-3">
		{#each coreValues as value}
			<div class="rounded-2xl border border-neutral-200 bg-white p-6">
				<h3 class="font-gt-walsheim-pro-medium text-xl text-neutral-900">{value.title}</h3>
				<ul class="mt-4 space-y-2 text-sm text-neutral-600">
					{#each value.values as item}
						<li>{item}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>
