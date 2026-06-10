<script lang="ts">
	const academicHighlights = [
		'Grades 1 to 9',
		'Three languages',
		'Bible Study',
		'Foundation Phase morning ring'
	]

	const strengths = [
		{
			title: 'Faith and character',
			text: 'Bible Study forms part of the learning rhythm, helping learners connect knowledge, conduct, and Christian conviction.'
		},
		{
			title: 'Language-rich learning',
			text: 'Learners are exposed to three languages, strengthening communication, vocabulary, comprehension, and confidence.'
		},
		{
			title: 'Strong foundations',
			text: 'Reading, writing, counting, number sense, and classroom routines are treated as daily priorities, not optional extras.'
		},
		{
			title: 'Steady support',
			text: 'Teachers build responsible habits through structure, repetition, correction, encouragement, and age-appropriate expectations.'
		}
	]

	const phases = [
		{
			title: 'Foundation Phase',
			grades: 'Grades 1 to 3',
			text: 'A strong start built around reading, writing, counting, routine, Bible-based character formation, and confidence in the classroom.',
			highlights: [
				'Dedicated morning ring lesson',
				'Theme of the week',
				'Days of the week, seasons, counting, and targeted key words',
				'Reading, handwriting, phonics, and early numeracy practice'
			]
		},
		{
			title: 'Intermediate Phase',
			grades: 'Grades 4 to 6',
			text: 'Learners begin carrying more responsibility as subjects broaden and teachers strengthen comprehension, study habits, and independent work.',
			highlights: [
				'Broader subject learning',
				'Reading for understanding',
				'Written work, projects, and revision habits',
				'Continued language, Mathematics, and Bible Study support'
			]
		},
		{
			title: 'Senior Phase',
			grades: 'Grades 7 to 9',
			text: 'Older learners are prepared for high school expectations through accountable work habits, stronger subject depth, and mature conduct.',
			highlights: [
				'Subject confidence and content depth',
				'Test preparation and accountable study routines',
				'Personal responsibility and respectful conduct',
				'Preparation for the next academic step'
			]
		}
	]

	const subjectGroups = [
		{
			title: 'Languages and literacy',
			items: ['Three languages', 'Reading', 'Writing', 'Comprehension', 'Vocabulary']
		},
		{
			title: 'Core academics',
			items: ['Mathematics', 'Natural Sciences', 'Social Sciences', 'Technology', 'Study skills']
		},
		{
			title: 'Formation and life skills',
			items: [
				'Bible Study',
				'Life Skills',
				'Creative Arts',
				'Character formation',
				'Classroom routines'
			]
		}
	]

	const supportNotes = [
		'The school may request previous reports or assessments to support placement.',
		'Parent and learner interviews may be arranged where needed.',
		'Placement can include reasonable support plans, trial periods, or review meetings.',
		'Where support needs exceed the school capacity, the school will discuss alternatives constructively.'
	]
</script>

<section class="bg-white">
	<div
		class="mx-auto grid max-w-[1760px] gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-center xl:px-12 2xl:px-16"
	>
		<div>
			<p class="text-sm font-semibold uppercase tracking-wide text-gold">Academics</p>
			<h1 class="mt-3 max-w-4xl text-4xl font-semibold leading-tight text-navy sm:text-5xl">
				Grades 1 to 9 with faith, language, and strong daily learning habits.
			</h1>
			<p class="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
				HCA serves learners from Grades 1 to 9 with a practical academic programme shaped by
				Christian conviction, steady classroom routines, language development, and close attention
				to the foundations children need for the next phase of learning.
			</p>
		</div>

		<aside class="border-l-4 border-gold bg-slate-50 p-6">
			<h2 class="text-lg font-semibold text-slate-900">Academics at a glance</h2>
			<ul class="mt-5 space-y-3">
				{#each academicHighlights as highlight (highlight)}
					<li class="flex gap-3 text-sm font-medium text-slate-700">
						<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"></span>
						<span>{highlight}</span>
					</li>
				{/each}
			</ul>
		</aside>
	</div>
</section>

<section class="border-y border-slate-200 bg-cream/40">
	<div
		class="mx-auto grid max-w-[1760px] gap-6 px-5 py-12 sm:px-8 md:grid-cols-2 xl:grid-cols-4 xl:px-12 2xl:px-16"
	>
		{#each strengths as strength (strength.title)}
			<article class="border border-slate-200 bg-white p-6">
				<h2 class="text-lg font-semibold text-slate-900">{strength.title}</h2>
				<p class="mt-3 text-sm leading-6 text-slate-700">{strength.text}</p>
			</article>
		{/each}
	</div>
</section>

<section class="mx-auto max-w-[1760px] px-5 py-12 sm:px-8 xl:px-12 2xl:px-16">
	<div class="max-w-3xl">
		<p class="text-sm font-semibold uppercase tracking-wide text-gold">Learning phases</p>
		<h2 class="mt-3 text-3xl font-semibold text-slate-900">
			How learning grows through the school
		</h2>
		<p class="mt-4 leading-7 text-slate-700">
			Each phase has its own rhythm, but the aim is consistent: learners should grow in skill,
			confidence, discipline, and readiness for the next academic step.
		</p>
	</div>

	<div class="mt-8 grid gap-6 lg:grid-cols-3">
		{#each phases as phase (phase.title)}
			<article class="border border-slate-200 bg-white p-6">
				<p class="text-sm font-semibold text-gold">{phase.grades}</p>
				<h3 class="mt-2 text-xl font-semibold text-slate-900">{phase.title}</h3>
				<p class="mt-3 text-sm leading-6 text-slate-700">{phase.text}</p>
				<ul class="mt-5 space-y-3 text-sm leading-6 text-slate-700">
					{#each phase.highlights as highlight (highlight)}
						<li class="flex gap-3">
							<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"></span>
							<span>{highlight}</span>
						</li>
					{/each}
				</ul>
			</article>
		{/each}
	</div>
</section>

<section class="border-y border-slate-200 bg-slate-50">
	<div
		class="mx-auto grid max-w-[1760px] gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] xl:px-12 2xl:px-16"
	>
		<div>
			<p class="text-sm font-semibold uppercase tracking-wide text-gold">Subjects</p>
			<h2 class="mt-3 text-2xl font-semibold text-slate-900">A broad, grounded curriculum</h2>
			<p class="mt-4 leading-7 text-slate-700">
				HCA's academic programme includes three languages and Bible Study alongside the core
				subjects and learning areas learners need as they move from Foundation Phase into the
				Intermediate and Senior Phases.
			</p>
		</div>
		<div class="grid gap-4 sm:grid-cols-3">
			{#each subjectGroups as group (group.title)}
				<article class="border border-slate-200 bg-white p-5">
					<h3 class="font-semibold text-slate-900">{group.title}</h3>
					<ul class="mt-4 flex flex-wrap gap-2">
						{#each group.items as item (item)}
							<li class="rounded-md bg-cream px-3 py-1 text-sm font-medium text-navy">{item}</li>
						{/each}
					</ul>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="bg-white">
	<div
		class="mx-auto grid max-w-[1760px] gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] xl:px-12 2xl:px-16"
	>
		<div>
			<h2 class="text-2xl font-semibold text-slate-900">Placement and support</h2>
			<p class="mt-4 leading-7 text-slate-700">
				The goal is a responsible placement decision, not a rushed application. HCA may ask for
				additional information where it affects learner safety, support, or academic planning.
			</p>
		</div>
		<ul class="space-y-3 text-slate-700">
			{#each supportNotes as note (note)}
				<li class="flex gap-3">
					<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"></span>
					<span>{note}</span>
				</li>
			{/each}
		</ul>
	</div>
</section>
