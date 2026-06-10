<script lang="ts">
	const scope = [
		'The code applies on school premises, during school transport, on excursions, at school events, and whenever a learner represents HCA.',
		"It also applies to off-campus or online behaviour that substantially affects the school environment, learner safety, or the school's reputation."
	]

	const learnerRights = [
		'To learn in a safe environment.',
		'To be treated fairly and with dignity.',
		'To be protected from bullying and discrimination.',
		'To be heard in disciplinary processes.'
	]

	const learnerResponsibilities = [
		'To obey lawful instructions from staff.',
		'To respect learners, staff, visitors, and families.',
		'To care for school property and the property of others.',
		'To attend school, participate, and complete work honestly.',
		'To tell the truth and accept correction when behaviour falls short.'
	]

	const parentResponsibilities = [
		'Support the Code of Conduct and reinforce it at home.',
		'Partner with the school early when concerns arise.',
		'Attend meetings, respond to communication, and help the learner follow agreed support or correction steps.'
	]

	const dailyRules = [
		'School hours are 08h00 to 14h00, Monday to Friday. Learners may be received from 07h30.',
		'Learners must be handed to a staff member on arrival and collected promptly at the end of the school day.',
		'No learner may be left at the gate unattended or leave the premises without permission.',
		'Parents must notify the school in advance when someone else will collect a learner.',
		'Learners with contagious infections must stay home until cleared to return.',
		'Healthy food is expected. Chips and sweets are not permitted during the school day.',
		'Toys may not be brought to school unless specifically approved.'
	]

	const coreValues = [
		'Respect and courtesy',
		'Honesty and integrity',
		'Diligence and responsibility',
		'Kindness and self-control',
		'Peacemaking and reconciliation'
	]

	const behaviourRules = [
		'Attendance: arrive on time, attend regularly, and provide a written explanation from a parent or guardian after absence.',
		'Uniform and appearance: wear the prescribed uniform neatly; grooming must be safe, modest, and not disruptive.',
		'Respect: do not use rude, discriminatory, humiliating, threatening, or sexually inappropriate language or behaviour.',
		'Learning: do not disrupt lessons; complete schoolwork honestly; cheating and plagiarism are serious offences.',
		'Property: do not vandalise, steal, borrow without permission, or damage property; intentional damage must be made right.',
		'Safety: do not fight, threaten, intimidate, or enter out-of-bounds areas; follow staff safety instructions immediately.',
		'Bullying: physical, verbal, social, sexual, and cyber bullying are prohibited.',
		'Substances: tobacco, vapes, alcohol, illegal drugs, and misuse of medication are prohibited.',
		'Weapons: weapons and dangerous objects are prohibited.',
		'Devices: cell phones and electronic devices may not be used during the school day unless specifically authorised; authorised devices must be handed in and collected as instructed.',
		"Public conduct: when in uniform or identifiable as an HCA learner, conduct must honour the school and the learner's Christian witness."
	]

	const antiBullying = [
		'Learners must report bullying, harassment, intimidation, discrimination, or abuse to a staff member or the Principal as soon as possible.',
		'The school will support the learner who was harmed and take steps to prevent repeat harm.',
		'The response may include restorative meetings, loss of privileges, detention, suspension, and, in serious cases, a formal hearing.'
	]

	const disciplineSupport = [
		'Correction aims to teach better choices, restore relationships where possible, and protect the learning environment.',
		'Staff may use verbal correction, reflection tasks, restitution, supervised time-out, loss of privileges, detention, counselling referral, or parent meetings.',
		'Corporal punishment is prohibited. Staff may not use humiliating or degrading treatment.'
	]

	const misconductLevels = [
		{
			level: 'Level 1',
			name: 'Minor',
			examples: 'Talking in class, late homework, minor uniform issues, minor disrespect.',
			response:
				'Teacher correction, warning, reflection task, recorded note, and parent communication if repeated.'
		},
		{
			level: 'Level 2',
			name: 'Moderate',
			examples:
				'Repeated Level 1 behaviour, deliberate disruption, dishonesty, minor bullying, damaging property.',
			response:
				'Grade Head or Principal review, parent meeting, detention, restitution, or written warning.'
		},
		{
			level: 'Level 3',
			name: 'Serious',
			examples:
				'Theft, significant bullying, assault, serious defiance, vandalism, harassment, or cheating in assessments.',
			response: 'Formal disciplinary hearing, possible suspension, and a behaviour contract.'
		},
		{
			level: 'Level 4',
			name: 'Critical',
			examples: 'Weapons, drugs, serious violence, sexual misconduct, or serious threats.',
			response:
				'Immediate safety response, possible SAPS or child protection reporting, Board hearing, and possible expulsion.'
		}
	]

	const dueProcess = [
		'Minor concerns are usually managed informally by staff.',
		'Level 3 and Level 4 matters may require a disciplinary hearing.',
		'Parents or guardians receive written notice of a hearing and may attend.',
		'The learner and parents have an opportunity to respond before a decision is made.',
		'Decisions and reasons are recorded. Appeals may be submitted in writing to the Board within the time stated in the notice.'
	]

	const safetyProcedures = [
		'Suspension may be used for serious misconduct or as a precaution where safety is at risk during investigation.',
		'Expulsion is a last resort and generally functions as termination of enrolment after a fair process and Board decision.',
		'Where there is reasonable suspicion of a prohibited item, staff may require the learner to hand it over or conduct a limited search consistent with dignity and safety.',
		'Prohibited or dangerous items may be confiscated and returned only to a parent or guardian, or handed to authorities where required.',
		'Illegal drugs, weapons, serious violence, sexual misconduct, or serious threats are escalated immediately and may be reported to SAPS or child protection services.'
	]
</script>

<section class="bg-white">
	<div class="mx-auto max-w-[1760px] px-5 py-14 sm:px-8 xl:px-12 2xl:px-16">
		<p class="text-sm font-semibold uppercase tracking-wide text-gold">Policy</p>
		<h1 class="mt-3 max-w-4xl text-4xl font-semibold text-navy">Learner Code of Conduct</h1>
		<p class="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
			HCA sets clear conduct expectations so learners can grow in character, learn safely, and help
			build a respectful, orderly, Christ-honouring school environment.
		</p>
		<div class="mt-8 flex flex-wrap gap-3">
			<a
				class="inline-flex min-h-11 items-center justify-center rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
				href="/policies/code-of-conduct.pdf"
				target="_blank"
				rel="noreferrer"
			>
				Download code of conduct
			</a>
			<a
				class="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-navy transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
				href="/policies"
			>
				Back to policies
			</a>
		</div>
	</div>
</section>

<section class="mx-auto max-w-[1760px] px-5 py-12 sm:px-8 xl:px-12 2xl:px-16">
	<div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
		<div>
			<h2 class="text-2xl font-semibold text-slate-900">Purpose and scope</h2>
			<p class="mt-4 leading-7 text-slate-700">
				The Code of Conduct protects learner dignity, keeps teaching and learning effective, and
				gives staff, learners, and parents a shared standard for behaviour.
			</p>
			<ul class="mt-5 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-700">
				{#each scope as item (item)}
					<li>{item}</li>
				{/each}
			</ul>
		</div>
		<blockquote
			class="border-l-4 border-gold bg-slate-50 px-6 py-5 text-sm leading-6 text-slate-700"
		>
			"Train up a child in the way he should go; even when he is old he will not depart from it."
			(Proverbs 22:6)
		</blockquote>
	</div>
</section>

<section class="border-y border-slate-200 bg-white">
	<div
		class="mx-auto grid max-w-[1760px] gap-8 px-5 py-12 sm:px-8 lg:grid-cols-3 xl:px-12 2xl:px-16"
	>
		<div>
			<h2 class="text-xl font-semibold text-slate-900">Learner rights</h2>
			<ul class="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-700">
				{#each learnerRights as item (item)}
					<li>{item}</li>
				{/each}
			</ul>
		</div>
		<div>
			<h2 class="text-xl font-semibold text-slate-900">Learner responsibilities</h2>
			<ul class="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-700">
				{#each learnerResponsibilities as item (item)}
					<li>{item}</li>
				{/each}
			</ul>
		</div>
		<div>
			<h2 class="text-xl font-semibold text-slate-900">Parent or guardian role</h2>
			<ul class="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-700">
				{#each parentResponsibilities as item (item)}
					<li>{item}</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<section
	class="mx-auto grid max-w-[1760px] gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] xl:px-12 2xl:px-16"
>
	<div class="bg-white p-6">
		<h2 class="text-xl font-semibold text-slate-900">Core values</h2>
		<ul class="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-700">
			{#each coreValues as value (value)}
				<li>{value}</li>
			{/each}
		</ul>
	</div>
	<div class="bg-white p-6">
		<h2 class="text-xl font-semibold text-slate-900">Daily routines and safety rules</h2>
		<ul
			class="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-700 md:grid md:grid-cols-2 md:gap-x-8 md:space-y-0"
		>
			{#each dailyRules as rule (rule)}
				<li>{rule}</li>
			{/each}
		</ul>
	</div>
</section>

<section class="border-y border-slate-200 bg-slate-50">
	<div class="mx-auto max-w-[1760px] px-5 py-12 sm:px-8 xl:px-12 2xl:px-16">
		<div class="max-w-5xl">
			<h2 class="text-2xl font-semibold text-slate-900">General behaviour rules</h2>
			<p class="mt-4 leading-7 text-slate-700">
				These rules apply to all learners unless a specific arrangement has been approved by the
				Principal.
			</p>
			<ul class="mt-6 grid gap-3 text-sm leading-6 text-slate-700 md:grid-cols-2">
				{#each behaviourRules as item (item)}
					<li class="border-l-2 border-gold pl-4">{item}</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<section
	class="mx-auto grid max-w-[1760px] gap-8 px-5 py-12 sm:px-8 lg:grid-cols-2 xl:px-12 2xl:px-16"
>
	<div>
		<h2 class="text-2xl font-semibold text-slate-900">Anti-bullying commitments</h2>
		<p class="mt-4 leading-7 text-slate-700">
			Bullying harms learner dignity and safety and is incompatible with Christian character. HCA
			responds promptly and consistently.
		</p>
		<ul class="mt-5 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-700">
			{#each antiBullying as item (item)}
				<li>{item}</li>
			{/each}
		</ul>
	</div>
	<div>
		<h2 class="text-2xl font-semibold text-slate-900">Positive discipline and support</h2>
		<p class="mt-4 leading-7 text-slate-700">
			The school corrects behaviour to protect learners, teach better choices, and restore
			relationships where this is safe and appropriate.
		</p>
		<ul class="mt-5 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-700">
			{#each disciplineSupport as item (item)}
				<li>{item}</li>
			{/each}
		</ul>
	</div>
</section>

<section class="border-y border-slate-200 bg-white">
	<div class="mx-auto max-w-[1760px] px-5 py-12 sm:px-8 xl:px-12 2xl:px-16">
		<div class="max-w-6xl">
			<h2 class="text-2xl font-semibold text-slate-900">Levels of misconduct and responses</h2>
			<div class="mt-6 overflow-x-auto">
				<table class="min-w-full border-collapse text-left text-sm">
					<thead class="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
						<tr>
							<th class="border border-slate-200 px-4 py-3">Level</th>
							<th class="border border-slate-200 px-4 py-3">Examples</th>
							<th class="border border-slate-200 px-4 py-3">Typical response</th>
						</tr>
					</thead>
					<tbody class="text-slate-700">
						{#each misconductLevels as item (`${item.level}-${item.name}`)}
							<tr>
								<td class="border border-slate-200 px-4 py-3 font-semibold text-slate-900">
									{item.level} ({item.name})
								</td>
								<td class="border border-slate-200 px-4 py-3">{item.examples}</td>
								<td class="border border-slate-200 px-4 py-3">{item.response}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</section>

<section
	class="mx-auto grid max-w-[1760px] gap-8 px-5 py-12 sm:px-8 lg:grid-cols-2 xl:px-12 2xl:px-16"
>
	<div class="bg-white p-6">
		<h2 class="text-xl font-semibold text-slate-900">Disciplinary procedure and due process</h2>
		<p class="mt-4 leading-7 text-slate-700">
			For serious misconduct, HCA follows a fair process that informs the learner and parents of the
			allegation, allows a response, considers evidence, and records the decision.
		</p>
		<ul class="mt-5 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-700">
			{#each dueProcess as item (item)}
				<li>{item}</li>
			{/each}
		</ul>
	</div>
	<div class="bg-white p-6">
		<h2 class="text-xl font-semibold text-slate-900">
			Suspension, expulsion, and safety escalation
		</h2>
		<ul class="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-700">
			{#each safetyProcedures as item (item)}
				<li>{item}</li>
			{/each}
		</ul>
	</div>
</section>

<section class="border-t border-slate-200 bg-slate-50">
	<div class="mx-auto max-w-[1760px] px-5 py-12 sm:px-8 xl:px-12 2xl:px-16">
		<div class="max-w-4xl">
			<h2 class="text-2xl font-semibold text-slate-900">Reporting concerns</h2>
			<p class="mt-4 leading-7 text-slate-700">
				Learners are encouraged to speak up early. Reports of bullying, harassment, abuse, safety
				risks, or serious misconduct should be made to any staff member or the Principal. In an
				emergency, staff will act to protect learners and contact parents or guardians.
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
