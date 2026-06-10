<script lang="ts">
	import { enhance } from '$app/forms'
	import {
		genderOptions,
		gradeOptions,
		maxUploadSizeLabel,
		medicalConditionOptions,
		optionalDocumentFields,
		paymentOptions,
		requiredDocumentFields,
		siblingStatusOptions,
		startTermOptions,
		transportOptions,
		uploadAccept
	} from '$lib/admissions'

	type ApplicationForm = {
		success?: boolean
		referenceId?: string
		values?: Record<string, string>
		errors?: Record<string, string[] | undefined>
	}

	type Field = {
		name: string
		label: string
		type?: string
		autocomplete?: string
		required?: boolean
		textarea?: boolean
		hint?: string
	}

	let { form }: { form?: ApplicationForm } = $props()

	const field = (name: string) => form?.values?.[name] ?? ''
	const error = (name: string) => form?.errors?.[name]?.[0]
	const checked = (name: string) => field(name) === 'on'
	let birthCertificateUnavailable = $state(checked('birthCertificateUnavailable'))

	const documents = [
		'Completed application form',
		'Parent or guardian ID copy',
		"Learner's birth certificate, or the unavailable declaration and severe-impact acknowledgement",
		"Learner's immunisation / clinic card",
		'Previous school report, transfer letter, or assessments where available'
	]

	const fatherFields: Field[] = [
		{ name: 'fatherFullNames', label: 'Full names' },
		{ name: 'fatherIdNumber', label: 'ID number' },
		{ name: 'fatherPhysicalAddress', label: 'Physical address', textarea: true },
		{ name: 'fatherPostalAddress', label: 'Postal address', textarea: true },
		{ name: 'fatherEmployer', label: 'Employer' },
		{ name: 'fatherOccupation', label: 'Occupation' },
		{ name: 'fatherWorkPhone', label: 'Phone: work no.', type: 'tel' },
		{ name: 'fatherHomePhone', label: 'Home no.', type: 'tel' },
		{ name: 'fatherCellPhone', label: 'Cell no.', type: 'tel' },
		{ name: 'fatherEmail', label: 'Email address', type: 'email' }
	]

	const motherFields: Field[] = [
		{ name: 'motherFullNames', label: 'Full names' },
		{ name: 'motherIdNumber', label: 'ID number' },
		{ name: 'motherPhysicalAddress', label: 'Physical address', textarea: true },
		{ name: 'motherPostalAddress', label: 'Postal address', textarea: true },
		{ name: 'motherEmployer', label: 'Employer' },
		{ name: 'motherOccupation', label: 'Occupation' },
		{ name: 'motherWorkPhone', label: 'Phone: work no.', type: 'tel' },
		{ name: 'motherHomePhone', label: 'Home no.', type: 'tel' },
		{ name: 'motherCellPhone', label: 'Cell no.', type: 'tel' },
		{ name: 'motherEmail', label: 'Email address', type: 'email' }
	]

	const guardianFields: Field[] = [
		{ name: 'guardianFullNames', label: 'Full names' },
		{ name: 'guardianIdNumber', label: 'ID number' },
		{ name: 'guardianPhysicalAddress', label: 'Physical address', textarea: true },
		{ name: 'guardianEmployer', label: 'Employer' },
		{ name: 'guardianOccupation', label: 'Occupation' },
		{ name: 'guardianWorkPhone', label: 'Phone: work no.', type: 'tel' },
		{ name: 'guardianHomePhone', label: 'Home no.', type: 'tel' },
		{ name: 'guardianCellPhone', label: 'Cell no.', type: 'tel' },
		{ name: 'guardianRelationship', label: 'Relationship to child' }
	]

	const medicalDetailFields: Field[] = [
		{ name: 'allergies', label: 'Allergies (specify)', textarea: true },
		{ name: 'foodAllergies', label: 'Food allergies', textarea: true },
		{
			name: 'otherMedicalConditions',
			label: 'Any other medical conditions the school needs to know about?',
			textarea: true
		},
		{ name: 'doctorName', label: 'Name of doctor' },
		{ name: 'doctorTelephone', label: 'Doctor telephone no.', type: 'tel' },
		{ name: 'medicalAidName', label: 'Medical aid name' },
		{ name: 'medicalAidNumber', label: 'Medical aid number' }
	]

	const declarationItems = [
		{
			name: 'popiaConsent',
			label:
				'I consent to HCA processing personal information for admissions, learner administration, safety, and legal compliance.'
		},
		{
			name: 'admissionsPolicyAccepted',
			label: 'I acknowledge the HCA admissions policy and family partnership expectations.'
		},
		{
			name: 'feesPolicyAccepted',
			label: 'I acknowledge the fees policy, payment deadlines, and reference requirements.'
		},
		{
			name: 'codeOfConductAccepted',
			label: 'I agree to support the learner code of conduct and school rules.'
		},
		{
			name: 'informationTruthful',
			label: 'I declare that the information and documents submitted are true and complete.'
		}
	]
</script>

<section class="bg-white">
	<div class="mx-auto max-w-[1760px] px-5 py-14 sm:px-8 xl:px-12 2xl:px-16">
		<p class="text-sm font-semibold uppercase tracking-wide text-gold">Application Form</p>
		<h1 class="mt-3 max-w-4xl text-4xl font-semibold text-navy sm:text-5xl">
			Apply to Harding Christian Academy.
		</h1>
		<p class="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
			This online form follows the paper application pack. Complete every section and upload the
			required documents before submitting. Submitting an application starts the review process; it
			does not mean that the learner has been accepted.
		</p>
	</div>
</section>

<section class="mx-auto max-w-[1760px] px-5 py-10 sm:px-8 xl:px-12 2xl:px-16">
	{#if form?.success}
		<div class="mb-8 border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
			Your application was sent successfully. Reference: {form.referenceId}. This confirms receipt,
			not acceptance.
		</div>
	{/if}
	{#if form?.errors?.form}
		<div class="mb-8 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
			{form.errors.form[0]}
		</div>
	{/if}

	<div class="mb-10 grid gap-6 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
		<div class="border-l-4 border-gold bg-white p-6 text-sm leading-6 text-slate-700">
			<p class="font-semibold text-slate-900">Before you start</p>
			<p class="mt-2">
				An application is not automatic acceptance. HCA will review the submitted information,
				supporting documents, grade space, and any placement needs before issuing an outcome in
				writing.
			</p>
			<p class="mt-2">
				Use N/A for parent or guardian fields that do not apply. At least one parent or guardian
				must include full names and a cellphone number. Uploads must be PDF, JPG, PNG, or WebP files
				and must be under {maxUploadSizeLabel}.
			</p>
		</div>

		<div class="border border-slate-200 bg-white p-6">
			<h2 class="text-xl font-semibold text-slate-900">Admissions checklist</h2>
			<p class="mt-3 text-sm leading-6 text-slate-700">
				Have your supporting documents ready before you start.
			</p>
			<ul class="mt-5 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
				{#each documents as item (item)}
					<li class="flex gap-2">
						<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"></span>
						<span>{item}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<form class="space-y-10" method="POST" enctype="multipart/form-data" use:enhance>
		<fieldset class="border border-slate-200 bg-white p-6 sm:p-8">
			<legend class="px-2 text-xl font-semibold text-slate-900">Details of child</legend>
			<div class="mt-4 grid gap-5 sm:grid-cols-2">
				<label class="text-sm font-medium text-slate-700">
					Surname
					<input
						class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
						name="learnerSurname"
						value={field('learnerSurname')}
						required
					/>
					{#if error('learnerSurname')}<span class="mt-1 block text-xs text-red-600"
							>{error('learnerSurname')}</span
						>{/if}
				</label>
				<label class="text-sm font-medium text-slate-700">
					First name(s)
					<input
						class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
						name="learnerFirstNames"
						value={field('learnerFirstNames')}
						required
					/>
					{#if error('learnerFirstNames')}<span class="mt-1 block text-xs text-red-600"
							>{error('learnerFirstNames')}</span
						>{/if}
				</label>
				<label class="text-sm font-medium text-slate-700">
					Known as
					<input
						class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
						name="learnerKnownAs"
						value={field('learnerKnownAs')}
					/>
				</label>
				<label class="text-sm font-medium text-slate-700">
					Date of birth
					<input
						class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
						name="learnerDob"
						type="date"
						value={field('learnerDob')}
						required
					/>
					{#if error('learnerDob')}<span class="mt-1 block text-xs text-red-600"
							>{error('learnerDob')}</span
						>{/if}
				</label>
				<label class="text-sm font-medium text-slate-700">
					Boy or girl
					<select
						class="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base"
						name="learnerGender"
						required
					>
						<option value="">Select</option>
						{#each genderOptions as option (option)}
							<option value={option} selected={field('learnerGender') === option}>{option}</option>
						{/each}
					</select>
					{#if error('learnerGender')}<span class="mt-1 block text-xs text-red-600"
							>{error('learnerGender')}</span
						>{/if}
				</label>
				<label class="text-sm font-medium text-slate-700">
					Grade applying for
					<select
						class="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base"
						name="grade"
						required
					>
						<option value="">Select grade</option>
						{#each gradeOptions as option (option)}
							<option value={option} selected={field('grade') === option}>{option}</option>
						{/each}
					</select>
					{#if error('grade')}<span class="mt-1 block text-xs text-red-600">{error('grade')}</span
						>{/if}
				</label>
				<label class="text-sm font-medium text-slate-700">
					Intended start term
					<select
						class="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base"
						name="startTerm"
						required
					>
						<option value="">Select term</option>
						{#each startTermOptions as option (option)}
							<option value={option} selected={field('startTerm') === option}>{option}</option>
						{/each}
					</select>
					{#if error('startTerm')}<span class="mt-1 block text-xs text-red-600"
							>{error('startTerm')}</span
						>{/if}
				</label>
				<label class="text-sm font-medium text-slate-700">
					Current school
					<input
						class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
						name="currentSchool"
						value={field('currentSchool')}
						placeholder="Use N/A if not applicable"
						required
					/>
					{#if error('currentSchool')}<span class="mt-1 block text-xs text-red-600"
							>{error('currentSchool')}</span
						>{/if}
				</label>
			</div>
		</fieldset>

		<fieldset class="border border-slate-200 bg-white p-6 sm:p-8">
			<legend class="px-2 text-xl font-semibold text-slate-900">Details of father</legend>
			<div class="mt-4 grid gap-5 sm:grid-cols-2">
				{#each fatherFields as item (item.name)}
					<label class="text-sm font-medium text-slate-700">
						{item.label}
						{#if item.textarea}
							<textarea
								class="mt-2 min-h-24 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
								name={item.name}>{field(item.name)}</textarea
							>
						{:else}
							<input
								class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
								name={item.name}
								type={item.type ?? 'text'}
								value={field(item.name)}
							/>
						{/if}
					</label>
				{/each}
			</div>
		</fieldset>

		<fieldset class="border border-slate-200 bg-white p-6 sm:p-8">
			<legend class="px-2 text-xl font-semibold text-slate-900">Details of mother</legend>
			<div class="mt-4 grid gap-5 sm:grid-cols-2">
				{#each motherFields as item (item.name)}
					<label class="text-sm font-medium text-slate-700">
						{item.label}
						{#if item.textarea}
							<textarea
								class="mt-2 min-h-24 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
								name={item.name}>{field(item.name)}</textarea
							>
						{:else}
							<input
								class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
								name={item.name}
								type={item.type ?? 'text'}
								value={field(item.name)}
							/>
						{/if}
					</label>
				{/each}
			</div>
		</fieldset>

		<fieldset class="border border-slate-200 bg-white p-6 sm:p-8">
			<legend class="px-2 text-xl font-semibold text-slate-900"
				>Guardian or reliable emergency contact</legend
			>
			<p class="mt-3 text-sm text-slate-600">
				This is the person the child lives with during the school term, or another reliable
				emergency contact.
			</p>
			{#if error('guardianFullNames')}
				<p class="mt-3 text-sm text-red-600">{error('guardianFullNames')}</p>
			{/if}
			<div class="mt-4 grid gap-5 sm:grid-cols-2">
				{#each guardianFields as item (item.name)}
					<label class="text-sm font-medium text-slate-700">
						{item.label}
						{#if item.textarea}
							<textarea
								class="mt-2 min-h-24 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
								name={item.name}>{field(item.name)}</textarea
							>
						{:else}
							<input
								class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
								name={item.name}
								type={item.type ?? 'text'}
								value={field(item.name)}
							/>
						{/if}
					</label>
				{/each}
			</div>
		</fieldset>

		<fieldset class="border border-slate-200 bg-white p-6 sm:p-8">
			<legend class="px-2 text-xl font-semibold text-slate-900"
				>How will your child arrive at school?</legend
			>
			<div class="mt-4 grid gap-4 sm:grid-cols-3">
				{#each transportOptions as option (option)}
					<label
						class="flex items-center gap-3 border border-slate-200 p-4 text-sm font-medium text-slate-700"
					>
						<input
							type="radio"
							name="transportMode"
							value={option}
							checked={field('transportMode') === option}
							required
						/>
						<span>{option}</span>
					</label>
				{/each}
			</div>
			{#if error('transportMode')}<p class="mt-2 text-sm text-red-600">
					{error('transportMode')}
				</p>{/if}
			<label class="mt-5 block text-sm font-medium text-slate-700">
				Transport contact no.
				<input
					class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
					name="transportContactNo"
					type="tel"
					value={field('transportContactNo')}
				/>
			</label>
		</fieldset>

		<fieldset class="border border-slate-200 bg-white p-6 sm:p-8">
			<legend class="px-2 text-xl font-semibold text-slate-900">Medical details</legend>
			<div class="mt-4 grid gap-4 sm:grid-cols-3">
				{#each medicalConditionOptions as option (option.name)}
					<label
						class="flex items-center gap-3 border border-slate-200 p-4 text-sm font-medium text-slate-700"
					>
						<input type="checkbox" name={option.name} checked={checked(option.name)} />
						<span>{option.label}</span>
					</label>
				{/each}
			</div>
			<div class="mt-5 grid gap-5 sm:grid-cols-2">
				{#each medicalDetailFields as item (item.name)}
					<label class="text-sm font-medium text-slate-700">
						{item.label}
						{#if item.textarea}
							<textarea
								class="mt-2 min-h-24 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
								name={item.name}>{field(item.name)}</textarea
							>
						{:else}
							<input
								class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
								name={item.name}
								type={item.type ?? 'text'}
								value={field(item.name)}
							/>
						{/if}
					</label>
				{/each}
			</div>
		</fieldset>

		<fieldset class="border border-slate-200 bg-white p-6 sm:p-8">
			<legend class="px-2 text-xl font-semibold text-slate-900"
				>Emergency medical authorisation</legend
			>
			<p class="mt-3 text-sm leading-6 text-slate-700">
				I authorise the principal, teachers, or assistants to seek medical attention or advice for
				my child when the family doctor or parents cannot be contacted. In an emergency, the person
				in charge may arrange transport to the nearest medical facility and may sign for
				anaesthetic, life-saving operation, or treatment deemed necessary by a medical practitioner.
			</p>
			<label class="mt-5 flex items-start gap-3 text-sm text-slate-700">
				<input
					class="mt-1 h-4 w-4"
					type="checkbox"
					name="medicalAuthorisation"
					checked={checked('medicalAuthorisation')}
					required
				/>
				<span
					>I give the emergency medical authorisation above and confirm immunisation proof will be
					supplied.</span
				>
			</label>
			{#if error('medicalAuthorisation')}<p class="mt-2 text-sm text-red-600">
					{error('medicalAuthorisation')}
				</p>{/if}
			<div class="mt-5 grid gap-5 sm:grid-cols-2">
				<label class="text-sm font-medium text-slate-700">
					Name of parent
					<input
						class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
						name="medicalParentName"
						value={field('medicalParentName')}
						required
					/>
					{#if error('medicalParentName')}<span class="mt-1 block text-xs text-red-600"
							>{error('medicalParentName')}</span
						>{/if}
				</label>
				<label class="text-sm font-medium text-slate-700">
					Witness
					<input
						class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
						name="medicalWitness"
						value={field('medicalWitness')}
					/>
				</label>
				<label class="text-sm font-medium text-slate-700">
					Date
					<input
						class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
						name="medicalDate"
						type="date"
						value={field('medicalDate')}
						required
					/>
					{#if error('medicalDate')}<span class="mt-1 block text-xs text-red-600"
							>{error('medicalDate')}</span
						>{/if}
				</label>
				<label class="text-sm font-medium text-slate-700">
					Place
					<input
						class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
						name="medicalPlace"
						value={field('medicalPlace')}
						required
					/>
					{#if error('medicalPlace')}<span class="mt-1 block text-xs text-red-600"
							>{error('medicalPlace')}</span
						>{/if}
				</label>
			</div>
		</fieldset>

		<fieldset class="border border-slate-200 bg-white p-6 sm:p-8">
			<legend class="px-2 text-xl font-semibold text-slate-900">Indemnity form</legend>
			<p class="mt-3 text-sm leading-6 text-slate-700">
				I indemnify and hold harmless Harding Christian Academy, its property owner, principal,
				teachers, employees, and assistants against claims arising from loss, damage, injury,
				illness, or death during school activities or excursions, while understanding that
				reasonable precautions will be taken for my child's safety and welfare.
			</p>
			<label class="mt-5 flex items-start gap-3 text-sm text-slate-700">
				<input
					class="mt-1 h-4 w-4"
					type="checkbox"
					name="indemnityAccepted"
					checked={checked('indemnityAccepted')}
					required
				/>
				<span>I accept the indemnity and agree to comply with the rules of the school.</span>
			</label>
			{#if error('indemnityAccepted')}<p class="mt-2 text-sm text-red-600">
					{error('indemnityAccepted')}
				</p>{/if}
			<div class="mt-5 grid gap-5 sm:grid-cols-2">
				<label class="text-sm font-medium text-slate-700"
					>Full names <input
						class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
						name="indemnityFullNames"
						value={field('indemnityFullNames')}
						required
					/>{#if error('indemnityFullNames')}<span class="mt-1 block text-xs text-red-600"
							>{error('indemnityFullNames')}</span
						>{/if}</label
				>
				<label class="text-sm font-medium text-slate-700"
					>ID number <input
						class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
						name="indemnityIdNumber"
						value={field('indemnityIdNumber')}
						required
					/>{#if error('indemnityIdNumber')}<span class="mt-1 block text-xs text-red-600"
							>{error('indemnityIdNumber')}</span
						>{/if}</label
				>
				<label class="text-sm font-medium text-slate-700 sm:col-span-2"
					>Address <textarea
						class="mt-2 min-h-24 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
						name="indemnityAddress"
						required>{field('indemnityAddress')}</textarea
					>{#if error('indemnityAddress')}<span class="mt-1 block text-xs text-red-600"
							>{error('indemnityAddress')}</span
						>{/if}</label
				>
				<label class="text-sm font-medium text-slate-700"
					>Parent/guardian of <input
						class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
						name="indemnityLearnerName"
						value={field('indemnityLearnerName')}
						required
					/>{#if error('indemnityLearnerName')}<span class="mt-1 block text-xs text-red-600"
							>{error('indemnityLearnerName')}</span
						>{/if}</label
				>
				<label class="text-sm font-medium text-slate-700"
					>Signed at <input
						class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
						name="indemnityPlace"
						value={field('indemnityPlace')}
						required
					/>{#if error('indemnityPlace')}<span class="mt-1 block text-xs text-red-600"
							>{error('indemnityPlace')}</span
						>{/if}</label
				>
				<label class="text-sm font-medium text-slate-700"
					>Date <input
						class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
						name="indemnityDate"
						type="date"
						value={field('indemnityDate')}
						required
					/>{#if error('indemnityDate')}<span class="mt-1 block text-xs text-red-600"
							>{error('indemnityDate')}</span
						>{/if}</label
				>
				<label class="text-sm font-medium text-slate-700"
					>Parent / guardian typed signature <input
						class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
						name="indemnityParentGuardian"
						value={field('indemnityParentGuardian')}
						required
					/>{#if error('indemnityParentGuardian')}<span class="mt-1 block text-xs text-red-600"
							>{error('indemnityParentGuardian')}</span
						>{/if}</label
				>
				<label class="text-sm font-medium text-slate-700"
					>Witness <input
						class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
						name="indemnityWitness"
						value={field('indemnityWitness')}
					/></label
				>
			</div>
		</fieldset>

		<fieldset class="border border-slate-200 bg-white p-6 sm:p-8">
			<legend class="px-2 text-xl font-semibold text-slate-900">Payment agreement</legend>
			<div class="mt-4 grid gap-5 sm:grid-cols-2">
				<label class="text-sm font-medium text-slate-700"
					>Payee full name <input
						class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
						name="paymentPayeeName"
						value={field('paymentPayeeName')}
						required
					/>{#if error('paymentPayeeName')}<span class="mt-1 block text-xs text-red-600"
							>{error('paymentPayeeName')}</span
						>{/if}</label
				>
				<label class="text-sm font-medium text-slate-700"
					>Payee ID number <input
						class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
						name="paymentPayeeId"
						value={field('paymentPayeeId')}
						required
					/>{#if error('paymentPayeeId')}<span class="mt-1 block text-xs text-red-600"
							>{error('paymentPayeeId')}</span
						>{/if}</label
				>
			</div>
			<div class="mt-6 grid gap-4 sm:grid-cols-3">
				{#each paymentOptions as option (option.value)}
					<label
						class="flex items-center gap-3 border border-slate-200 p-4 text-sm font-medium text-slate-700"
					>
						<input
							type="radio"
							name="paymentOption"
							value={option.value}
							checked={field('paymentOption') === option.value}
							required
						/>
						<span>{option.label}</span>
					</label>
				{/each}
			</div>
			{#if error('paymentOption')}<p class="mt-2 text-sm text-red-600">
					{error('paymentOption')}
				</p>{/if}
			<div class="mt-4 grid gap-4 sm:grid-cols-2">
				{#each siblingStatusOptions as option (option.value)}
					<label
						class="flex items-center gap-3 border border-slate-200 p-4 text-sm font-medium text-slate-700"
					>
						<input
							type="radio"
							name="siblingStatus"
							value={option.value}
							checked={field('siblingStatus') === option.value}
							required
						/>
						<span>{option.label}</span>
					</label>
				{/each}
			</div>
			{#if error('siblingStatus')}<p class="mt-2 text-sm text-red-600">
					{error('siblingStatus')}
				</p>{/if}
			<label class="mt-5 flex items-start gap-3 text-sm text-slate-700">
				<input
					class="mt-1 h-4 w-4"
					type="checkbox"
					name="paymentAccepted"
					checked={checked('paymentAccepted')}
					required
				/>
				<span
					>I understand the registration fee, payment deadlines, payment reference requirement, and
					arrears process.</span
				>
			</label>
			{#if error('paymentAccepted')}<p class="mt-2 text-sm text-red-600">
					{error('paymentAccepted')}
				</p>{/if}
		</fieldset>

		<fieldset class="border border-slate-200 bg-white p-6 sm:p-8">
			<legend class="px-2 text-xl font-semibold text-slate-900">Supporting documents</legend>
			<p class="mt-3 text-sm leading-6 text-slate-700">
				Accepted formats: PDF, JPG, PNG, and WebP. Combined upload size must be under {maxUploadSizeLabel}.
				The parent or guardian ID copy is required. The birth certificate is required unless you
				mark it unavailable and acknowledge the impact below.
			</p>
			{#if error('documents')}
				<p class="mt-3 text-sm text-red-600">{error('documents')}</p>
			{/if}
			<div class="mt-5 grid gap-5">
				{#each requiredDocumentFields as document (document.name)}
					<label class="block text-sm font-medium text-slate-700">
						{document.label}
						<input
							class="mt-2 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
							name={document.name}
							type="file"
							accept={uploadAccept}
							multiple={document.name === 'previousReports'}
							required={document.name !== 'previousReports' &&
								(document.name !== 'birthCertificateFile' || !birthCertificateUnavailable)}
						/>
						{#if error(document.name)}<span class="mt-1 block text-xs text-red-600"
								>{error(document.name)}</span
							>{/if}
					</label>
				{/each}
				<label class="flex items-start gap-3 text-sm text-slate-700">
					<input
						class="mt-1 h-4 w-4"
						type="checkbox"
						name="previousReportUnavailable"
						checked={checked('previousReportUnavailable')}
					/>
					<span>No previous school report, transfer letter, or assessment is available.</span>
				</label>
				<label class="flex items-start gap-3 text-sm text-slate-700">
					<input
						class="mt-1 h-4 w-4"
						type="checkbox"
						name="birthCertificateUnavailable"
						bind:checked={birthCertificateUnavailable}
					/>
					<span>
						The learner's birth certificate is not available at the time of application.
					</span>
				</label>
				<label
					class="flex items-start gap-3 border border-amber-200 bg-amber-50 p-4 text-sm text-slate-700"
				>
					<input
						class="mt-1 h-4 w-4"
						type="checkbox"
						name="birthCertificateImpactAcknowledged"
						checked={checked('birthCertificateImpactAcknowledged')}
						required={birthCertificateUnavailable}
					/>
					<span>
						I acknowledge that applying without the learner's birth certificate will severely impact
						this application and may delay or prevent admission.
					</span>
				</label>
				{#if error('birthCertificateImpactAcknowledged')}
					<p class="text-sm text-red-600">{error('birthCertificateImpactAcknowledged')}</p>
				{/if}
				{#each optionalDocumentFields as document (document.name)}
					<label class="block text-sm font-medium text-slate-700">
						{document.label} (optional)
						<input
							class="mt-2 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
							name={document.name}
							type="file"
							accept={uploadAccept}
							multiple
						/>
						{#if error(document.name)}<span class="mt-1 block text-xs text-red-600"
								>{error(document.name)}</span
							>{/if}
					</label>
				{/each}
			</div>
		</fieldset>

		<fieldset class="border border-slate-200 bg-white p-6 sm:p-8">
			<legend class="px-2 text-xl font-semibold text-slate-900"
				>Policy acknowledgements and POPIA consent</legend
			>
			<div class="mt-4 space-y-4">
				{#each declarationItems as item (item.name)}
					<label class="flex items-start gap-3 text-sm text-slate-700">
						<input
							class="mt-1 h-4 w-4"
							type="checkbox"
							name={item.name}
							checked={checked(item.name)}
							required
						/>
						<span>{item.label}</span>
					</label>
					{#if error(item.name)}
						<p class="-mt-2 pl-7 text-xs text-red-600">{error(item.name)}</p>
					{/if}
				{/each}
			</div>
			<div class="mt-6 grid gap-5 sm:grid-cols-2">
				<label class="text-sm font-medium text-slate-700"
					>Church name (optional) <input
						class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
						name="churchName"
						value={field('churchName')}
					/></label
				>
				<label class="text-sm font-medium text-slate-700"
					>Pastor / leader name (optional) <input
						class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
						name="pastorName"
						value={field('pastorName')}
					/></label
				>
				<label class="text-sm font-medium text-slate-700"
					>Pastor telephone (optional) <input
						class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
						name="pastorTelephone"
						type="tel"
						value={field('pastorTelephone')}
					/></label
				>
				<label class="text-sm font-medium text-slate-700"
					>Pastor email (optional) <input
						class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
						name="pastorEmail"
						type="email"
						value={field('pastorEmail')}
					/></label
				>
				<label class="text-sm font-medium text-slate-700 sm:col-span-2"
					>Additional notes <textarea
						class="mt-2 min-h-28 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
						name="additionalNotes">{field('additionalNotes')}</textarea
					></label
				>
				<label class="text-sm font-medium text-slate-700"
					>Typed parent/guardian signature <input
						class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
						name="typedSignature"
						value={field('typedSignature')}
						required
					/>{#if error('typedSignature')}<span class="mt-1 block text-xs text-red-600"
							>{error('typedSignature')}</span
						>{/if}</label
				>
				<label class="text-sm font-medium text-slate-700"
					>Signature date <input
						class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
						name="signatureDate"
						type="date"
						value={field('signatureDate')}
						required
					/>{#if error('signatureDate')}<span class="mt-1 block text-xs text-red-600"
							>{error('signatureDate')}</span
						>{/if}</label
				>
			</div>
		</fieldset>

		<input
			class="hidden"
			name="website"
			tabindex="-1"
			autocomplete="off"
			value={field('website')}
		/>

		<div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
			<p class="text-sm text-slate-600">
				After submission, the office will review the application and contact you with next steps.
				Acceptance is only final once HCA confirms it in writing.
			</p>
			<button
				class="inline-flex min-h-11 items-center justify-center rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
				type="submit"
			>
				Submit application
			</button>
		</div>
	</form>
</section>
