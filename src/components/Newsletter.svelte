<script lang="ts">
	import { dev } from '$app/environment';
	import { CheckIcon, ChevronRightIcon } from 'lucide-svelte';
	import { toast } from 'svoast';
	import AnimatedSubscribeButton from './AnimatedSubscribeButton.svelte';

	const MIN_FIRST_NAME_LENGTH = 3;
	const MIN_LAST_NAME_LENGTH = 3;
	const MIN_EMAIL_LENGTH = 5;
	const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const TOAST_OPTIONS = {
		duration: 8000,
		closable: true,
		rich: true
	};

	let email = $state('');
	let name = $state('');
	let lastName = $state('');
	let button_disabled = $state(false);
	let error = $state(false);
	let submitted = $state(false);

	type NewsletterFieldErrors = Record<string, string[]>;

	function getValidationMessages() {
		const trimmedName = name.trim();
		const trimmedLastName = lastName.trim();
		const trimmedEmail = email.trim();
		const validationMessages: string[] = [];

		if (!trimmedName) {
			validationMessages.push('First name is required.');
		} else if (trimmedName.length < MIN_FIRST_NAME_LENGTH) {
			validationMessages.push(
				`First name must be at least ${MIN_FIRST_NAME_LENGTH} characters long.`
			);
		}

		if (!trimmedLastName) {
			validationMessages.push('Last name is required.');
		} else if (trimmedLastName.length < MIN_LAST_NAME_LENGTH) {
			validationMessages.push(
				`Last name must be at least ${MIN_LAST_NAME_LENGTH} characters long.`
			);
		}

		if (!trimmedEmail) {
			validationMessages.push('Email address is required.');
		} else if (trimmedEmail.length < MIN_EMAIL_LENGTH || !EMAIL_PATTERN.test(trimmedEmail)) {
			validationMessages.push('Please enter a valid email address.');
		}

		return {
			validationMessages,
			body: {
				email: trimmedEmail,
				name: trimmedName,
				lastName: trimmedLastName
			}
		};
	}

	function showValidationMessages(messages: string[]) {
		error = true;
		toast.error(messages.join('<br/>'), TOAST_OPTIONS);
	}

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();

		const { validationMessages, body } = getValidationMessages();
		if (validationMessages.length > 0) {
			showValidationMessages(validationMessages);
			return;
		}

		name = body.name;
		lastName = body.lastName;
		email = body.email;
		error = false;

		let result = await fetch('/api/newsletter', {
			method: 'post',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(body)
		});
		let responseData: { fieldErrors?: NewsletterFieldErrors; time_remaining?: number } | null =
			null;

		try {
			responseData = await result.json();
		} catch {
			responseData = null;
		}

		if (dev) console.log(result.status);

		if (result.status === 400 && responseData?.fieldErrors) {
			const messages = Object.values(responseData.fieldErrors).flat().filter(Boolean);
			showValidationMessages(
				messages.length > 0 ? messages : ['Please check your details and try again.']
			);
			return;
		}

		if (result.status === 409) {
			toast.error(
				'Oh No! 😵 This email already exists. <br/> Try a different email?',
				TOAST_OPTIONS
			);
			setTimeout(
				() => {
					button_disabled = false;
				},
				(responseData?.time_remaining ?? 0) * 1000
			);
		} else if (result.status === 201) {
			toast.success("Thanks. You've successfully signed up for the newsletter. 💌", TOAST_OPTIONS);

			email = '';
			name = '';
			lastName = '';
			error = false;
			submitted = true;
		} else {
			error = true;
			toast.error(
				'Oh No! 😵 There was an issue with the newsletter signup. <br/> Try again later',
				TOAST_OPTIONS
			);
		}

		setTimeout(() => {
			submitted = false;
		}, 8000);
	}
</script>

<div class="w-full text-gray-500 dark:text-gray-400 mb-2 py-8">
	<form onsubmit={handleSubmit}>
		<div class="flex flex-col items-center justify-center gap-4">
			<div class="flex flex-col md:flex-row gap-4 align-middle items-center">
				<div class="flex flex-col gap-4 sm:flex-row">
					<input
						bind:value={name}
						type="text"
						id="name"
						name="name"
						autocomplete="given-name"
						required
						minlength={MIN_FIRST_NAME_LENGTH}
						oninput={() => (error = false)}
						placeholder="First name"
						class="form-control block min-w-52 px-3 py-1 text-base bg-white dark:bg-gray-800 bg-clip-padding border rounded transition ease-in-out focus:text-gray-800 dark:focus:text-gray-200
						text-gray-700 dark:text-gray-100 focus:outline-none focus:ring-0
						{error
							? 'border-red-500 focus:border-red-600'
							: 'border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:dark:border-primary-500'}"
					/>
					<input
						bind:value={lastName}
						type="text"
						id="lastName"
						name="lastName"
						autocomplete="family-name"
						required
						minlength={MIN_LAST_NAME_LENGTH}
						oninput={() => (error = false)}
						placeholder="Last name"
						class="form-control block min-w-52 px-3 py-1 text-base bg-white dark:bg-gray-800 bg-clip-padding border rounded transition ease-in-out focus:text-gray-800 dark:focus:text-gray-200
						text-gray-700 dark:text-gray-100 focus:outline-none focus:ring-0
						{error
							? 'border-red-500 focus:border-red-600'
							: 'border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:dark:border-primary-500'}"
					/>
					<input
						bind:value={email}
						type="email"
						id="email"
						name="email"
						autocomplete="email"
						required
						minlength={MIN_EMAIL_LENGTH}
						oninput={() => (error = false)}
						placeholder="Email address"
						class="form-control block min-w-72 px-3 py-1 text-base bg-white dark:bg-gray-800 bg-clip-padding border rounded transition ease-in-out focus:text-gray-800 dark:focus:text-gray-200
						text-gray-700 dark:text-gray-100 focus:outline-none focus:ring-0
						{error
							? 'border-red-500 focus:border-red-600'
							: 'border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:dark:border-primary-500'}"
					/>
				</div>

				<div>
					<AnimatedSubscribeButton subscribeStatus={submitted} />
					<!-- <span slot="initialText" class="group inline-flex items-center">
							Subscribe
							<ChevronRightIcon
								class="ml-1 mt-0.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
							/>
						</span>
						<span slot="changeText" class="group inline-flex items-center">
							<CheckIcon class="mr-2 mt-0.5 h-4 w-4" />
							Subscribed
						</span> -->
					<!-- </AnimatedSubscribeButton> -->
				</div>
			</div>
		</div>
	</form>
	<p class="pt-4 font-light text-xs text-center text-balance">
		The school will never share your email with anyone else. <br /> You can unsubscribe at any time.
	</p>
</div>

<style global>
	input.newsletter-input {
		--newsletter-input-bg: rgb(255 255 255);
		background-color: var(--newsletter-input-bg) !important;
		box-shadow: 0 0 0px 1000px var(--newsletter-input-bg) inset !important;
		-webkit-box-shadow: 0 0 0px 1000px var(--newsletter-input-bg) inset !important;
		color: inherit !important;
		-webkit-text-fill-color: currentColor !important;
	}

	:global(.dark) input.newsletter-input {
		--newsletter-input-bg: rgb(31 41 55);
	}
	input.newsletter-input:-webkit-autofill,
	input.newsletter-input:-webkit-autofill:hover,
	input.newsletter-input:-webkit-autofill:focus,
	input.newsletter-input:-webkit-autofill:active,
	input.newsletter-input[data-com-onepassword-filled] {
		background-color: transparent !important;
		box-shadow: 0 0 0px 1000px var(--newsletter-input-bg) inset !important;
		-webkit-box-shadow: 0 0 0px 1000px var(--newsletter-input-bg) inset !important;
		-webkit-text-fill-color: currentColor !important;
		color: currentColor !important;
		caret-color: inherit;
	}
</style>
