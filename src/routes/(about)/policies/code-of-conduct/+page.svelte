<script lang="ts">
	const meta = [
		{ label: 'Document owner', value: 'Principal / School Management Team' },
		{ label: 'Approval authority', value: 'School Governing Body / Board' },
		{ label: 'Effective date', value: '2026-02-05' },
		{ label: 'Review date', value: '2027-02-05' },
		{ label: 'Version', value: '1.0' },
		{ label: 'Contact', value: '8 Phillip Street, Harding, 4680 (KwaZulu-Natal)' }
	];

	const scope = [
		'Applies on school premises, during school transport, on excursions, at school events, and when a learner represents the school.',
		"Applies to off-campus behaviour (including online behaviour) that affects the school environment, learner safety, or the school's reputation."
	];

	const rights = [
		'To learn in a safe environment.',
		'To be treated fairly.',
		'To be protected from bullying and discrimination.',
		'To be heard in disciplinary processes.'
	];

	const responsibilities = [
		'To obey lawful instructions.',
		'To respect others.',
		'To care for property.',
		'To attend and participate.',
		'To be honest.'
	];

	const parentResponsibilities = [
		'To support the Code of Conduct and reinforce it at home.',
		'To partner with the school when concerns arise.'
	];

	const dailyRules = [
		'Arrivals: no learner may be left at the gate unattended.',
		'Departures: learners may not leave the premises without permission.',
		'Healthy food: chips and sweets are not permitted during the school day.',
		'Toys: no toys are to be brought to school unless specifically approved.',
		'Illness: learners with contagious infections must stay home until cleared.'
	];

	const coreValues = [
		'Respect and courtesy',
		'Honesty and integrity',
		'Diligence and responsibility',
		'Kindness and self-control',
		'Peacemaking and reconciliation'
	];

	const generalRules = [
		'Attendance: be on time and attend regularly. Absence must be explained in writing by a parent or guardian.',
		'Uniform and appearance: wear the prescribed uniform neatly; grooming must be neat and not disruptive or unsafe.',
		'Respect: no disrespectful, rude, discriminatory, or humiliating language or behaviour.',
		'Learning: no disruption of lessons; complete work honestly; cheating and plagiarism are serious offences.',
		'Property: no vandalism, theft, or unauthorised borrowing; intentional damage must be paid for.',
		'Safety: fighting, threats, and intimidation are prohibited; follow safety rules and stay within bounds.',
		'Bullying: any bullying (physical, verbal, social, sexual, or cyber) is prohibited.',
		'Substances: no tobacco, vapes, alcohol, illegal drugs, or misuse of medication.',
		'Weapons: no weapons or dangerous objects.',
		'Devices: cell phones and electronic devices are not permitted during the school day unless specifically authorised; if authorised, the device is handed in to the office and collected afterwards.',
		'Public conduct: when in uniform or identifiable as an HCA learner, behaviour must honour the school and the Christian witness of the learner.'
	];

	const antiBullying = [
		'Learners must report bullying to a staff member as soon as possible.',
		'The school will support the target of bullying and take steps to prevent repeat harm.',
		'Consequences may include restorative meetings, loss of privileges, detention, suspension, and in serious cases a formal hearing.'
	];

	const disciplineSupport = [
		'Correction aims to teach better choices, not simply to punish.',
		'Staff may use verbal correction, reflection tasks, restitution, supervised time-out, loss of privileges, detentions, and referral for counselling or support.',
		'Corporal punishment is prohibited. Staff will not use humiliating or degrading treatment.'
	];

	const misconductLevels = [
		{
			level: 'Level 1 (minor)',
			examples: 'Talking in class, late homework, minor uniform issues, minor disrespect.',
			response: 'Teacher correction, warning, reflection task, recorded note; parent informed if repeated.'
		},
		{
			level: 'Level 2 (moderate)',
			examples: 'Repeated Level 1, deliberate disruption, dishonesty, minor bullying, damaging property.',
			response: 'Grade Head or Principal review, parent meeting, detention, restitution, written warning.'
		},
		{
			level: 'Level 3 (serious)',
			examples: 'Theft, significant bullying, assault, serious defiance, vandalism, harassment, cheating in assessments.',
			response: 'Formal disciplinary hearing, suspension may be considered, behaviour contract.'
		},
		{
			level: 'Level 4 (critical)',
			examples: 'Weapons, drugs, serious violence, sexual misconduct, serious threats.',
			response: 'Immediate safety response, possible SAPS or child protection reporting, Board hearing, expulsion may be considered.'
		}
	];

	const dueProcess = [
		'Informal management is used for minor issues (Levels 1-2).',
		'A disciplinary hearing may be convened for Level 3 and Level 4 matters.',
		'Parents or guardians receive written notice of a hearing and may attend.',
		'Decisions and reasons are recorded. Appeals may be submitted in writing to the Board within the time stated in the notice.'
	];

	const suspension = [
		'The school will consider the best interests of the child, the safety of others, and the seriousness of the misconduct.',
		'Where required by law or where a criminal offence is suspected, the school may involve SAPS and or child protection services.'
	];

	const searchSeizure = [
		'Prohibited or dangerous items may be confiscated and returned only to a parent or guardian, or handed to authorities where required.',
		'Illegal drugs, weapons, and serious threats are escalated immediately to the Principal and may be reported to SAPS.'
	];

	const childProtection = [
		'Report bullying, harassment, or abuse to any staff member or the Principal.',
		'In emergencies, staff will act to protect learners and contact parents or guardians.'
	];
</script>

<section class="mx-auto max-w-4xl px-6 py-16">
	<p class="text-sm uppercase tracking-[0.3em] text-accent">Policies</p>
	<h1 class="font-gt-walsheim-pro-medium mt-2 text-4xl text-neutral-900 sm:text-5xl">
		Learner Code of Conduct
	</h1>
	<p class="mt-4 text-base text-neutral-600 sm:text-lg">
		Harding Christian Academy sets clear expectations to keep our community safe, respectful, and
		focused on learning.
	</p>

	<div class="mt-8 rounded-2xl border border-neutral-200 bg-white p-6">
		<div class="flex flex-col gap-2 text-sm text-neutral-700 sm:flex-row sm:items-center sm:justify-between">
			<span class="font-semibold">Website and General Use</span>
			<a
				href="/policies/code-of-conduct.pdf"
				class="text-accent font-semibold"
				target="_blank"
				rel="noreferrer"
			>
				Download PDF
			</a>
		</div>
		<div class="mt-4 grid gap-3 text-sm text-neutral-600 sm:grid-cols-2">
			{#each meta as item (item.label)}
				<div class="flex flex-col gap-1">
					<span class="text-xs uppercase tracking-wide text-neutral-500">{item.label}</span>
					<span class="font-medium text-neutral-900">{item.value}</span>
				</div>
			{/each}
		</div>
	</div>

	<blockquote class="mt-8 rounded-2xl border border-accent/20 bg-accent/10 px-6 py-4 text-sm text-neutral-700">
		"Train up a child in the way he should go; even when he is old he will not depart from it." (Proverbs 22:6)
	</blockquote>

	<div class="mt-10 space-y-10 text-sm text-neutral-700 sm:text-base">
		<section>
			<h2 class="text-xl font-semibold text-neutral-900">1. Introduction and purpose</h2>
			<p class="mt-2">
				This Code of Conduct sets out the standards of behaviour expected from learners at HCA. It
				exists to protect the rights and safety of learners and staff, to keep teaching and learning
				effective, and to help learners grow in character.
			</p>
			<p class="mt-2">
				The school uses a positive, restorative approach to discipline wherever possible: we correct,
				teach, reconcile, and restore. Consequences still exist, but they are applied fairly and with a
				view to growth.
			</p>
		</section>

		<section>
			<h2 class="text-xl font-semibold text-neutral-900">2. Scope</h2>
			<ul class="mt-3 list-disc space-y-2 pl-5">
				{#each scope as item (item)}
					<li>{item}</li>
				{/each}
			</ul>
		</section>

		<section>
			<h2 class="text-xl font-semibold text-neutral-900">3. Rights and responsibilities</h2>
			<p class="mt-2">HCA upholds learner dignity and lawful rights. Learners also carry responsibilities.</p>
			<div class="mt-4 grid gap-4 sm:grid-cols-3">
				<div>
					<h3 class="font-semibold text-neutral-900">Learner rights</h3>
					<ul class="mt-2 list-disc space-y-1 pl-5">
						{#each rights as item (item)}
							<li>{item}</li>
						{/each}
					</ul>
				</div>
				<div>
					<h3 class="font-semibold text-neutral-900">Learner responsibilities</h3>
					<ul class="mt-2 list-disc space-y-1 pl-5">
						{#each responsibilities as item (item)}
							<li>{item}</li>
						{/each}
					</ul>
				</div>
				<div>
					<h3 class="font-semibold text-neutral-900">Parent or guardian responsibilities</h3>
					<ul class="mt-2 list-disc space-y-1 pl-5">
						{#each parentResponsibilities as item (item)}
							<li>{item}</li>
						{/each}
					</ul>
				</div>
			</div>
		</section>

		<section>
			<h2 class="text-xl font-semibold text-neutral-900">4. Daily routines and safety rules</h2>
			<p class="mt-2">School hours: 08h00 to 14h00 (Monday to Friday).</p>
			<p class="mt-2">
				For safety, learners must be handed to a staff member on arrival and collected promptly. The
				school must be told in advance if someone else will collect a learner.
			</p>
			<ul class="mt-3 list-disc space-y-2 pl-5">
				{#each dailyRules as item (item)}
					<li>{item}</li>
				{/each}
			</ul>
		</section>

		<section>
			<h2 class="text-xl font-semibold text-neutral-900">5. Core values (what we are aiming at)</h2>
			<ul class="mt-3 list-disc space-y-2 pl-5">
				{#each coreValues as item (item)}
					<li>{item}</li>
				{/each}
			</ul>
		</section>

		<section>
			<h2 class="text-xl font-semibold text-neutral-900">6. General behaviour rules</h2>
			<p class="mt-2">
				These rules apply to all learners unless a specific arrangement has been approved by the
				Principal.
			</p>
			<ul class="mt-3 list-disc space-y-2 pl-5">
				{#each generalRules as item (item)}
					<li>{item}</li>
				{/each}
			</ul>
		</section>

		<section>
			<h2 class="text-xl font-semibold text-neutral-900">7. Anti-bullying commitments</h2>
			<p class="mt-2">
				Bullying harms the dignity and safety of learners and is incompatible with Christian
				character. The school responds promptly and consistently.
			</p>
			<ul class="mt-3 list-disc space-y-2 pl-5">
				{#each antiBullying as item (item)}
					<li>{item}</li>
				{/each}
			</ul>
		</section>

		<section>
			<h2 class="text-xl font-semibold text-neutral-900">8. Positive discipline and support</h2>
			<ul class="mt-3 list-disc space-y-2 pl-5">
				{#each disciplineSupport as item (item)}
					<li>{item}</li>
				{/each}
			</ul>
		</section>

		<section>
			<h2 class="text-xl font-semibold text-neutral-900">9. Levels of misconduct and responses</h2>
			<div class="mt-4 overflow-x-auto rounded-xl border border-neutral-200">
				<table class="min-w-full text-left text-sm">
					<thead class="bg-neutral-50 text-xs uppercase tracking-wide text-neutral-500">
						<tr>
							<th class="px-4 py-3">Level</th>
							<th class="px-4 py-3">Examples</th>
							<th class="px-4 py-3">Typical response</th>
						</tr>
					</thead>
					<tbody>
						{#each misconductLevels as item (item.level)}
							<tr class="border-t border-neutral-200">
								<td class="px-4 py-3 font-medium text-neutral-900">{item.level}</td>
								<td class="px-4 py-3">{item.examples}</td>
								<td class="px-4 py-3">{item.response}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</section>

		<section>
			<h2 class="text-xl font-semibold text-neutral-900">10. Disciplinary procedure and due process</h2>
			<p class="mt-2">
				For serious misconduct, HCA follows a fair process. This includes informing the learner and
				parents of the allegation, giving an opportunity to respond, and considering evidence before
				deciding on a consequence.
			</p>
			<ul class="mt-3 list-disc space-y-2 pl-5">
				{#each dueProcess as item (item)}
					<li>{item}</li>
				{/each}
			</ul>
		</section>

		<section>
			<h2 class="text-xl font-semibold text-neutral-900">11. Suspension and expulsion</h2>
			<p class="mt-2">
				Suspension may be used as a corrective measure for serious misconduct or as a precautionary
				measure where safety is at risk, pending investigation. Expulsion is a last resort. Because
				HCA is an independent school, expulsion generally functions as termination of enrolment after a
				fair process and Board decision.
			</p>
			<ul class="mt-3 list-disc space-y-2 pl-5">
				{#each suspension as item (item)}
					<li>{item}</li>
				{/each}
			</ul>
		</section>

		<section>
			<h2 class="text-xl font-semibold text-neutral-900">12. Search, seizure, and confiscation</h2>
			<p class="mt-2">
				Where there is reasonable suspicion that a learner has a prohibited item, staff may require
				the learner to hand it over and may conduct a limited search consistent with dignity and
				safety. Searches should, where possible, be conducted with a witness and recorded.
			</p>
			<ul class="mt-3 list-disc space-y-2 pl-5">
				{#each searchSeizure as item (item)}
					<li>{item}</li>
				{/each}
			</ul>
		</section>

		<section>
			<h2 class="text-xl font-semibold text-neutral-900">13. Complaints, reporting, and child protection</h2>
			<p class="mt-2">
				Learners are encouraged to speak up early. Reports will be handled sensitively and promptly.
				Staff have legal duties to report certain forms of harm to the relevant authorities.
			</p>
			<ul class="mt-3 list-disc space-y-2 pl-5">
				{#each childProtection as item (item)}
					<li>{item}</li>
				{/each}
			</ul>
		</section>

		<section class="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
			<h2 class="text-xl font-semibold text-neutral-900">Annexure A: Learner and Parent or Guardian Commitment</h2>
			<p class="mt-3">
				We acknowledge that we have read and understood the HCA Learner Code of Conduct and agree to
				support and comply with it.
			</p>
			<div class="mt-4 grid gap-4 text-sm text-neutral-700 sm:grid-cols-2">
				<div>
					<p>Learner name: ______________________________</p>
					<p class="mt-2">Grade: __________</p>
					<p class="mt-2">Learner signature: ______________________________</p>
					<p class="mt-2">Date: ____/____/______</p>
				</div>
				<div>
					<p>Parent or guardian name: ______________________________</p>
					<p class="mt-2">Parent or guardian signature: ______________________________</p>
					<p class="mt-2">Date: ____/____/______</p>
				</div>
			</div>
		</section>

		<section class="rounded-2xl border border-neutral-200 bg-white p-6">
			<h2 class="text-xl font-semibold text-neutral-900">Annexure B: Notice of Disciplinary Hearing (template)</h2>
			<div class="mt-3 space-y-2 text-sm text-neutral-700">
				<p>To: Parent or Guardian ______________________</p>
				<p>Learner: ______________________ Grade: ______</p>
				<p>You are hereby notified that a disciplinary hearing will be held as follows:</p>
				<p>Date: ____/____/______</p>
				<p>Time: __________</p>
				<p>Venue: ______________________________</p>
				<p>Allegation(s): ________________________________________________</p>
				<p>Chairperson: ______________________________</p>
				<p>Signed (Principal or Delegate): ______________________________</p>
			</div>
		</section>
	</div>

	<div class="mt-8">
		<a
			href="/policies/code-of-conduct.pdf"
			class="inline-flex items-center text-sm font-semibold text-accent"
			target="_blank"
			rel="noreferrer"
		>
			Download Code of Conduct (PDF)
		</a>
	</div>
</section>
