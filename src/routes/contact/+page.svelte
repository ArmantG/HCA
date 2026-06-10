<script lang="ts">
	import { enhance } from '$app/forms'
	import {
		FACEBOOK_URL,
		GOOGLE_DIRECTIONS_URL,
		GOOGLE_MAPS_EMBED_URL,
		GOOGLE_MAPS_URL,
		SITE_ADDRESS,
		SITE_EMAIL,
		SITE_PHONE
	} from '$lib/config'
	import { consentText } from '$lib/content/legal'

	type ContactForm = {
		success?: boolean
		referenceId?: string
		values?: Record<string, string>
		errors?: Record<string, string[] | undefined>
	}

	let { form }: { form?: ContactForm } = $props()

	const field = (name: string) => form?.values?.[name] ?? ''
	const error = (name: string) => form?.errors?.[name]?.[0]
</script>

<section class="bg-white">
	<div class="mx-auto max-w-[1760px] px-5 py-14 sm:px-8 xl:px-12 2xl:px-16">
		<p class="text-sm font-semibold uppercase tracking-wide text-gold">Contact</p>
		<h1 class="mt-3 max-w-4xl text-4xl font-semibold text-navy">Contact the school office.</h1>
		<p class="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
			For admissions, fees, policy questions, or general enquiries, contact the school office during
			working hours.
		</p>
	</div>
</section>

<section class="bg-slate-50">
	<div class="mx-auto max-w-[1760px] px-5 py-12 sm:px-8 xl:px-12 2xl:px-16">
		<div class="grid gap-6 lg:grid-cols-2">
			<div class="border border-slate-200 bg-white p-6 sm:p-7">
				<h2 class="text-xl font-semibold text-slate-900">Office details</h2>
				<ul class="mt-4 space-y-4 text-sm text-slate-700 sm:text-base">
					<li>
						<strong class="block text-slate-900">Phone</strong>
						<a class="text-navy underline" href={`tel:${SITE_PHONE.replaceAll(' ', '')}`}
							>{SITE_PHONE}</a
						>
					</li>
					<li>
						<strong class="block text-slate-900">Email</strong>
						<a class="break-words text-navy underline" href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a
						>
					</li>
					<li>
						<strong class="block text-slate-900">Address</strong>
						<a class="text-navy underline" href={GOOGLE_MAPS_URL}>{SITE_ADDRESS}</a>
					</li>
					<li>
						<strong class="block text-slate-900">Facebook</strong>
						<a class="text-navy underline" href={FACEBOOK_URL}>Harding Christian Academy</a>
					</li>
				</ul>
			</div>

			<div class="border border-slate-200 bg-white">
				<div class="h-48 overflow-hidden bg-slate-100 sm:h-56">
					<iframe
						class="h-full w-full border-0"
						title="Map showing Harding Christian Academy"
						src={GOOGLE_MAPS_EMBED_URL}
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
				<div class="p-5">
					<h2 class="text-xl font-semibold text-slate-900">Find us</h2>
					<p class="mt-2 text-sm leading-6 text-slate-700">
						Use the map preview or open directions in Google Maps to find the school.
					</p>
					<a
						class="mt-4 inline-flex min-h-11 items-center justify-center rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
						href={GOOGLE_DIRECTIONS_URL}
						target="_blank"
						rel="noreferrer"
					>
						Get directions
					</a>
				</div>
			</div>
		</div>

		<div class="mt-10 border-l-4 border-gold bg-white p-6">
			<div class="max-w-3xl">
				<h2 class="text-xl font-semibold text-slate-900">Applying?</h2>
				<p class="mt-3 text-sm leading-6 text-slate-700">
					The fastest way to start is the online application form. It collects the full application
					pack and supporting documents.
				</p>
				<a class="mt-4 inline-flex font-semibold text-navy underline" href="/admissions/apply"
					>Apply online</a
				>
			</div>
		</div>

		<div class="mt-10 bg-white p-6 sm:p-8">
			<h2 class="text-2xl font-semibold text-slate-900">Send an enquiry</h2>
			<p class="mt-2 text-sm text-slate-600">We respond during office hours.</p>

			{#if form?.success}
				<div
					class="mt-6 border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
				>
					Thank you. Your enquiry was sent successfully. Reference: {form.referenceId}
				</div>
			{/if}
			{#if form?.errors?.form}
				<div class="mt-6 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
					{form.errors.form[0]}
				</div>
			{/if}

			<form class="mt-6 grid gap-5" method="POST" use:enhance>
				<div class="grid gap-5 sm:grid-cols-2">
					<label class="text-sm font-medium text-slate-700">
						Full name
						<input
							class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
							name="name"
							autocomplete="name"
							value={field('name')}
							required
						/>
						{#if error('name')}
							<span class="mt-1 block text-xs text-red-600">{error('name')}</span>
						{/if}
					</label>
					<label class="text-sm font-medium text-slate-700">
						Phone number
						<input
							class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
							name="phone"
							type="tel"
							autocomplete="tel"
							value={field('phone')}
							required
						/>
						{#if error('phone')}
							<span class="mt-1 block text-xs text-red-600">{error('phone')}</span>
						{/if}
					</label>
				</div>
				<div class="grid gap-5 sm:grid-cols-2">
					<label class="text-sm font-medium text-slate-700">
						Email address
						<input
							class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
							name="email"
							type="email"
							autocomplete="email"
							value={field('email')}
						/>
						{#if error('email')}
							<span class="mt-1 block text-xs text-red-600">{error('email')}</span>
						{/if}
					</label>
					<label class="text-sm font-medium text-slate-700">
						Topic
						<select
							class="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base"
							name="topic"
							required
						>
							<option value="">Select a topic</option>
							<option value="General" selected={field('topic') === 'General'}>General</option>
							<option value="Admissions" selected={field('topic') === 'Admissions'}
								>Admissions</option
							>
							<option value="Fees" selected={field('topic') === 'Fees'}>Fees</option>
							<option value="Other" selected={field('topic') === 'Other'}>Other</option>
						</select>
						{#if error('topic')}
							<span class="mt-1 block text-xs text-red-600">{error('topic')}</span>
						{/if}
					</label>
				</div>
				<label class="text-sm font-medium text-slate-700">
					Message
					<textarea
						class="mt-2 min-h-36 w-full rounded-md border border-slate-300 px-3 py-2 text-base"
						name="message"
						required>{field('message')}</textarea
					>
					{#if error('message')}
						<span class="mt-1 block text-xs text-red-600">{error('message')}</span>
					{/if}
				</label>
				<label class="flex items-start gap-3 text-sm text-slate-700">
					<input
						class="mt-1 h-4 w-4"
						type="checkbox"
						name="consent"
						checked={field('consent') === 'on'}
						required
					/>
					<span>{consentText}</span>
				</label>
				{#if error('consent')}
					<span class="text-xs text-red-600">{error('consent')}</span>
				{/if}
				<input
					class="hidden"
					name="website"
					tabindex="-1"
					autocomplete="off"
					value={field('website')}
				/>
				<button
					class="inline-flex min-h-11 items-center justify-center rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
					type="submit"
				>
					Send enquiry
				</button>
			</form>
		</div>
	</div>
</section>
