<script lang="ts">
	import { Email, Facebook, Location, Plus, Telephone } from '../../assets/icons';
	import { pcsLogoNew } from '../../assets/images';

	let faqs = $state([
		{
			question: 'What are the admission requirements?',
			answer:
				"Please contact our admissions office at admissions@hardingchristianacademy.co.za or call 072 248 6965 for detailed requirements.",
			show: false
		},
		{
			question: 'How much is the tuition fee?',
			answer:
				'Tuition fees vary by grade level. For specific information, please contact the school office or visit during enrollment periods.',
			show: false
		},
		{
			question: "What is the school's grading system?",
			answer:
				'The school follows the national curriculum guidelines with continuous assessment and term reporting.',
			show: false
		},
		{
			question: 'How does the school communicate with parents and guardians?',
			answer:
				'We communicate through official notices, email, and direct contact with parents and guardians.',
			show: false
		},
		{
			question: "What is the school's policy on dress code?",
			answer:
				'Students are required to wear proper school uniforms. Casual attire such as shorts, sleeveless shirts, and ripped jeans are not permitted.',
			show: false
		},
		{
			question: 'What is the class size for each grade level?',
			answer:
				'Class sizes vary by grade level. Please contact the admissions office for current capacity.',
			show: false
		},
		{
			question: 'Is Harding Christian Academy accredited?',
			answer: 'We follow the national curriculum requirements and maintain compliance with local education standards.',
			show: false
		},
		{
			question: 'What are the school hours?',
			answer:
				'School hours vary by grade level. Please contact the school office for specific schedules.',
			show: false
		},
		{
			question: 'Does the school offer extracurricular activities?',
			answer:
				'Yes, the school offers various extracurricular activities including sports, arts, and academic clubs.',
			show: false
		},
		{
			question: 'How can I schedule a school tour?',
			answer:
				'To schedule a school tour, please contact our office at 072 248 6965 or email info@hardingchristianacademy.co.za.',
			show: false
		}
	]);

	const contactInfo = {
		email: 'info@hardingchristianacademy.co.za',
		phone: '072 248 6965',
		address: '9 Philip Street, Harding, KwaZulu-Natal, South Africa',
		facebook: 'https://www.facebook.com/HardingChristianAcademy',
		maps: 'https://www.google.com/maps?q=9+Philip+Street,+Harding,+KwaZulu-Natal'
	};
</script>

<div class="shadow-custom-1 relative flex h-full w-full max-w-full flex-col lg:flex-row">
	<!-- Contact Information Section - Left Side -->
	<div class="relative h-full w-full flex-1 bg-white px-[5%] lg:px-[8%]">
		<div class="flex flex-col items-center justify-center pb-10 pt-32 sm:pb-20 sm:pt-40">
			<div class="mb-10 flex flex-col items-center justify-center">
				<img class="mb-10 h-28 w-28" src={pcsLogoNew} alt="Harding Christian Academy logo" />
				<h1 class="font-gt-walsheim-pro-medium mb-2 text-center text-2xl text-black sm:text-4xl">
					Get in Touch with Us
				</h1>
				<p class="text-center text-base text-black sm:text-lg">
					Contact Harding Christian Academy for inquiries and information
				</p>
			</div>

			<!-- Contact Cards -->
			<div class="mb-10 grid w-full max-w-2xl grid-cols-1 gap-6 md:grid-cols-2">
				<!-- Email Card -->
				<div
					class="flex flex-col items-center rounded-2xl border border-neutral-200 p-6 transition-shadow hover:shadow-lg"
				>
					<div
						class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent bg-opacity-10"
					>
						<Email style="h-8 w-8 text-accent" />
					</div>
					<h3 class="font-gt-walsheim-pro-medium mb-2 text-lg text-black">Email Us</h3>
					<a
						href="mailto:{contactInfo.email}"
						class="text-accent text-center text-sm transition-opacity hover:opacity-70 sm:text-base"
					>
						{contactInfo.email}
					</a>
				</div>

				<!-- Phone Card -->
				<div
					class="flex flex-col items-center rounded-2xl border border-neutral-200 p-6 transition-shadow hover:shadow-lg"
				>
					<div
						class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent bg-opacity-10"
					>
						<Telephone style="h-8 w-8 text-accent" />
					</div>
					<h3 class="font-gt-walsheim-pro-medium mb-2 text-lg text-black">Call Us</h3>
					<p class="text-center text-sm text-black sm:text-base">{contactInfo.phone}</p>
				</div>

				<!-- Location Card -->
				<div
					class="flex flex-col items-center rounded-2xl border border-neutral-200 p-6 transition-shadow hover:shadow-lg"
				>
					<div
						class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent bg-opacity-10"
					>
						<Location style="h-8 w-8 text-accent" />
					</div>
					<h3 class="font-gt-walsheim-pro-medium mb-2 text-lg text-black">Visit Us</h3>
					<a
						href={contactInfo.maps}
						target="_blank"
						rel="noreferrer"
						class="text-accent text-center text-sm transition-opacity hover:opacity-70 sm:text-base"
					>
						{contactInfo.address}
					</a>
				</div>

				<!-- Facebook Card -->
				<div
					class="flex flex-col items-center rounded-2xl border border-neutral-200 p-6 transition-shadow hover:shadow-lg"
				>
					<div
						class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent bg-opacity-10"
					>
						<Facebook style="h-8 w-8 text-accent" />
					</div>
					<h3 class="font-gt-walsheim-pro-medium mb-2 text-lg text-black">Follow Us</h3>
					<a
						href={contactInfo.facebook}
						target="_blank"
						rel="noreferrer"
						class="text-accent text-center text-sm transition-opacity hover:opacity-70 sm:text-base"
					>
						Harding Christian Academy
					</a>
				</div>
			</div>

			<!-- Apply Now Section -->
			<div class="w-full max-w-2xl rounded-2xl bg-accent bg-opacity-10 p-8 text-center">
				<h2 class="font-gt-walsheim-pro-medium mb-4 text-2xl text-black sm:text-3xl">
					Ready to Join Harding Christian Academy?
				</h2>
				<p class="mb-6 text-base text-black sm:text-lg">
					Start your journey of academic and personal growth at Harding Christian Academy
				</p>
				<a
					href="/admissions"
					class="inline-block rounded-full bg-accent px-6 py-3 text-white transition-all hover:scale-105 hover:brightness-110"
				>
					Admissions
				</a>
			</div>
		</div>
	</div>

	<!-- FAQs Section - Right Side -->
	<div
		class="h-full w-full overflow-x-hidden overflow-y-scroll bg-gradient-to-t from-neutral-900 to-neutral-800 px-[5%] py-20 sm:py-32 lg:w-[450px] lg:px-[6%] lg:py-40 xl:w-[500px]"
	>
		<div class="mb-10 sm:mb-16">
			<h1
				class="font-gt-walsheim-pro-medium mb-2 text-center text-2xl text-white sm:text-3xl lg:text-left"
			>
				Frequently Asked Questions
			</h1>
			<p class="text-center text-sm text-white sm:text-base lg:text-left">
				Find answers to common questions
			</p>
		</div>
		<div class="flex flex-col gap-4">
			{#each faqs as faq, idx (idx)}
				<div
					class="after:bg-accent relative before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:bg-white before:bg-opacity-20 before:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100"
				>
					<button
						class="relative flex w-full items-center transition-[filter] duration-300"
						onclick={() => (faq.show = !faq.show)}
					>
						<div
							class="font-gt-walsheim-pro-medium flex h-full w-full items-center px-4 py-2 text-left text-base text-white sm:text-lg"
						>
							{faq.question}
						</div>
						<div class="flex h-full flex-shrink-0 items-center">
							<Plus
								style={`h-10 w-10 sm:h-12 sm:w-12 text-accent transition-transform duration-300 ${
									faq.show ? 'rotate-[135deg] scale-75' : 'rotate-0 scale-100'
								}`}
							/>
						</div>
					</button>
					<div
						class={`px-4 py-2 text-sm sm:text-base w-full text-neutral-300 ${faq.show ? 'block' : 'hidden'}`}
					>
						{faq.answer}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
