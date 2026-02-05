<script lang="ts">
	import { enhance } from '$app/forms';
	import { consentText } from '$lib/content/legal';

	let { form } = $props();
</script>

<section class="mx-auto max-w-5xl px-6 py-16">
	<div class="mb-10">
		<p class="text-sm uppercase tracking-[0.3em] text-accent">Admissions Application</p>
		<h1 class="font-gt-walsheim-pro-medium mt-2 text-4xl text-neutral-900 sm:text-5xl">
			Apply to Harding Christian Academy
		</h1>
		<p class="mt-4 max-w-2xl text-base text-neutral-600 sm:text-lg">
			Complete the application form below. We will confirm availability and next steps after
			reviewing your submission.
		</p>
	</div>

	<div class="grid gap-8 lg:grid-cols-[1.2fr,1fr]">
		<div class="rounded-2xl border border-neutral-200 bg-white p-8">
			<h2 class="font-gt-walsheim-pro-medium text-2xl text-neutral-900">
				Before you apply
			</h2>
			<div class="mt-6 space-y-4 text-sm text-neutral-700 sm:text-base">
				<p class="font-semibold text-neutral-900">Please have the following information ready:</p>
				<ul class="space-y-2">
					<li>• Learner's personal details (full name, date of birth, ID number)</li>
					<li>• Current school and grade information</li>
					<li>• Medical information and special needs (if applicable)</li>
					<li>• Both parents'/guardians' contact information</li>
					<li>• Emergency contact details</li>
				</ul>
				<div class="rounded-xl bg-neutral-50 px-4 py-3 text-sm text-neutral-600">
					<p class="font-semibold text-neutral-900">Next steps</p>
					<p class="mt-1">After submission, we will contact you within 2-3 business days to schedule an interview and discuss required documents.</p>
				</div>
				<div class="rounded-xl bg-accent/5 px-4 py-3 text-sm">
					For fee information, contact us at <span class="font-semibold">072 248 6965</span>
				</div>
			</div>
		</div>

		<div class="rounded-2xl border border-neutral-200 bg-white p-8">
			<h2 class="font-gt-walsheim-pro-medium text-2xl text-neutral-900">
				Application form
			</h2>
			{#if form?.success}
				<div class="mt-6 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
					Your application was sent successfully. Reference: {form.referenceId}
				</div>
			{/if}
			{#if form?.errors?.form}
				<div class="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
					{form.errors.form[0]}
				</div>
			{/if}
			<form class="mt-6 flex flex-col gap-5" method="POST" use:enhance>
				<!-- Parent/Guardian Information -->
				<div class="space-y-4">
					<h3 class="font-gt-walsheim-pro-medium text-base text-neutral-900">
						Parent/Guardian information
					</h3>
					<label class="text-sm text-neutral-700">
						Full name
						<input
							class="mt-2 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm"
							name="parentName"
							autocomplete="name"
							value={form?.values?.parentName ?? ''}
							required
						/>
						{#if form?.errors?.parentName}
							<span class="mt-1 block text-xs text-red-600">{form.errors.parentName[0]}</span>
						{/if}
					</label>
					<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<label class="text-sm text-neutral-700">
							Phone number
							<input
								class="mt-2 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm"
								name="parentPhone"
								type="tel"
								autocomplete="tel"
								value={form?.values?.parentPhone ?? ''}
								required
							/>
							{#if form?.errors?.parentPhone}
								<span class="mt-1 block text-xs text-red-600">{form.errors.parentPhone[0]}</span>
							{/if}
						</label>
						<label class="text-sm text-neutral-700">
							Email address
							<input
								class="mt-2 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm"
								name="parentEmail"
								type="email"
								autocomplete="email"
								value={form?.values?.parentEmail ?? ''}
								required
							/>
							{#if form?.errors?.parentEmail}
								<span class="mt-1 block text-xs text-red-600">{form.errors.parentEmail[0]}</span>
							{/if}
						</label>
					</div>
					<label class="text-sm text-neutral-700">
						Relationship to learner
						<select
							class="mt-2 w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm"
							name="relationship"
							value={form?.values?.relationship ?? ''}
							required
						>
							<option value="">Select relationship</option>
							<option value="Mother">Mother</option>
							<option value="Father">Father</option>
							<option value="Legal Guardian">Legal Guardian</option>
							<option value="Other">Other</option>
						</select>
						{#if form?.errors?.relationship}
							<span class="mt-1 block text-xs text-red-600">{form.errors.relationship[0]}</span>
						{/if}
					</label>
				</div>

				<!-- Learner Information -->
				<div class="space-y-4 border-t border-neutral-200 pt-5">
					<h3 class="font-gt-walsheim-pro-medium text-base text-neutral-900">
						Learner information
					</h3>
					<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<label class="text-sm text-neutral-700">
							First name
							<input
								class="mt-2 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm"
								name="learnerFirstName"
								value={form?.values?.learnerFirstName ?? ''}
								required
							/>
							{#if form?.errors?.learnerFirstName}
								<span class="mt-1 block text-xs text-red-600">{form.errors.learnerFirstName[0]}</span>
							{/if}
						</label>
						<label class="text-sm text-neutral-700">
							Last name
							<input
								class="mt-2 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm"
								name="learnerLastName"
								value={form?.values?.learnerLastName ?? ''}
								required
							/>
							{#if form?.errors?.learnerLastName}
								<span class="mt-1 block text-xs text-red-600">{form.errors.learnerLastName[0]}</span>
							{/if}
						</label>
					</div>
					<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<label class="text-sm text-neutral-700">
							Date of birth
							<input
								class="mt-2 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm"
								name="learnerDOB"
								type="date"
								value={form?.values?.learnerDOB ?? ''}
								required
							/>
							{#if form?.errors?.learnerDOB}
								<span class="mt-1 block text-xs text-red-600">{form.errors.learnerDOB[0]}</span>
							{/if}
						</label>
						<label class="text-sm text-neutral-700">
							Gender
							<select
								class="mt-2 w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm"
								name="learnerGender"
								value={form?.values?.learnerGender ?? ''}
								required
							>
								<option value="">Select gender</option>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
							</select>
							{#if form?.errors?.learnerGender}
								<span class="mt-1 block text-xs text-red-600">{form.errors.learnerGender[0]}</span>
							{/if}
						</label>
					</div>
					<label class="text-sm text-neutral-700 hidden">
						Full name (legacy)
						<input
							class="mt-2 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm"
							name="learnerName"
							value={form?.values?.learnerName ?? ''}
						/>
						{#if form?.errors?.learnerName}
							<span class="mt-1 block text-xs text-red-600">{form.errors.learnerName[0]}</span>
						{/if}
					</label>
				</div>

				<!-- Academic Information -->
				<div class="space-y-4 border-t border-neutral-200 pt-5">
					<h3 class="font-gt-walsheim-pro-medium text-base text-neutral-900">
						Academic information
					</h3>
					<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<label class="text-sm text-neutral-700">
							Grade applying for
							<select
								class="mt-2 w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm"
								name="grade"
								value={form?.values?.grade ?? ''}
								required
							>
								<option value="">Select grade</option>
								<option value="Grade R">Grade R</option>
								<option value="Grade 1">Grade 1</option>
								<option value="Grade 2">Grade 2</option>
								<option value="Grade 3">Grade 3</option>
								<option value="Grade 4">Grade 4</option>
								<option value="Grade 5">Grade 5</option>
								<option value="Grade 6">Grade 6</option>
								<option value="Grade 7">Grade 7</option>
								<option value="Grade 8">Grade 8</option>
								<option value="Grade 9">Grade 9</option>
								<option value="Grade 10">Grade 10</option>
								<option value="Grade 11">Grade 11</option>
								<option value="Grade 12">Grade 12</option>
							</select>
							{#if form?.errors?.grade}
								<span class="mt-1 block text-xs text-red-600">{form.errors.grade[0]}</span>
							{/if}
						</label>
						<label class="text-sm text-neutral-700">
							Intended start date
							<select
								class="mt-2 w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm"
								name="startDate"
								value={form?.values?.startDate ?? ''}
								required
							>
								<option value="">Select term</option>
								<option value="2026 Term 1">2026 Term 1</option>
								<option value="2026 Term 2">2026 Term 2</option>
								<option value="2026 Term 3">2026 Term 3</option>
								<option value="2026 Term 4">2026 Term 4</option>
								<option value="2027 Term 1">2027 Term 1</option>
							</select>
							{#if form?.errors?.startDate}
								<span class="mt-1 block text-xs text-red-600">{form.errors.startDate[0]}</span>
							{/if}
						</label>
					</div>
					<label class="text-sm text-neutral-700">
						Current school
						<input
							class="mt-2 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm"
							name="currentSchool"
							placeholder="Enter current school name or 'N/A' if not applicable"
							value={form?.values?.currentSchool ?? ''}
							required
						/>
						{#if form?.errors?.currentSchool}
							<span class="mt-1 block text-xs text-red-600">{form.errors.currentSchool[0]}</span>
						{/if}
					</label>
				</div>

				<!-- Additional Information -->
				<div class="space-y-4 border-t border-neutral-200 pt-5">
					<h3 class="font-gt-walsheim-pro-medium text-base text-neutral-900">
						Additional information
					</h3>
					<label class="text-sm text-neutral-700">
						Does the learner have any medical conditions or special needs we should know about?
						<textarea
							class="mt-2 min-h-[80px] w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm"
							name="medicalInfo"
							placeholder="Please provide details or enter 'None'"
						>{form?.values?.medicalInfo ?? ''}</textarea>
						{#if form?.errors?.medicalInfo}
							<span class="mt-1 block text-xs text-red-600">{form.errors.medicalInfo[0]}</span>
						{/if}
					</label>
					<label class="text-sm text-neutral-700">
						How did you hear about Harding Christian Academy?
						<select
							class="mt-2 w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm"
							name="referralSource"
							value={form?.values?.referralSource ?? ''}
						>
							<option value="">Select one</option>
							<option value="Friend/Family">Friend or family recommendation</option>
							<option value="Social Media">Social media</option>
							<option value="Website">School website</option>
							<option value="Church">Church</option>
							<option value="Advertisement">Advertisement</option>
							<option value="Other">Other</option>
						</select>
						{#if form?.errors?.referralSource}
							<span class="mt-1 block text-xs text-red-600">{form.errors.referralSource[0]}</span>
						{/if}
					</label>
					<label class="text-sm text-neutral-700">
						Additional comments or questions (optional)
						<textarea
							class="mt-2 min-h-[100px] w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm"
							name="message"
							placeholder="Any additional information you'd like us to know..."
						>{form?.values?.message ?? ''}</textarea>
					</label>
				</div>
				<label class="flex items-start gap-3 text-sm text-neutral-700">
					<input
						class="mt-1 h-4 w-4"
						type="checkbox"
						name="consent"
						checked={form?.values?.consent === 'on'}
						required
					/>
					<span>{consentText}</span>
				</label>
				{#if form?.errors?.consent}
					<span class="text-xs text-red-600">{form.errors.consent[0]}</span>
				{/if}
				<input
					class="hidden"
					name="website"
					tabindex="-1"
					autocomplete="off"
					value={form?.values?.website ?? ''}
				/>
				<button
					class="mt-2 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm text-white transition-all hover:scale-105 hover:brightness-110"
					type="submit"
				>
					Submit application
				</button>
			</form>
		</div>
	</div>
</section>
