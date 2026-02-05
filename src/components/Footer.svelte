<script lang="ts">
	import { Email, Facebook, Location, Telephone } from '../assets/icons';
	import { pcsLogoNew, pcsLogoNewOutlineWhite } from '../assets/images';

	const currentYear = new Date().getFullYear();
</script>

<footer
	class="border-t-accent w-full border-t-8 bg-navy px-[5%] py-20 text-white [&>h2]:text-2xl [&>p]:text-neutral-300"
>
	<div class="flex flex-col-reverse lg:flex-row lg:gap-40">
		<!-- HCA logo -->
		<a href="/" class="flex justify-center">
			<div class="relative h-52 w-52">
				<img
					src={pcsLogoNewOutlineWhite}
					class="absolute z-9 h-52 w-52 bg-cover bg-no-repeat hover:scale-105 transform duration-200 ease-in-out"
					alt="Harding Christian Academy logo"
					loading="lazy"
				/>
			</div>
		</a>
		<div class="w-full">
			<div class="mb-16 flex flex-col gap-10 xl:flex-row">
				<!-- Contacts -->
				<div class="flex xl:w-1/2">
					<span class="text-5xl font-black">Get in Touch</span>
				</div>
				<div class="flex xl:w-1/2">
					<div class="flex flex-col gap-4">
						<div class="flex items-center gap-4">
							<a href="mailto:info@hardingchristianacademy.co.za">
								<Email style="w-7 h-7 transition-colors duration-300 hover:text-accent" />
							</a>
							<a
								href="mailto:info@hardingchristianacademy.co.za"
								class="transition-colors duration-300 hover:text-neutral-400"
							>
								<span class="text-base md:text-lg">info@hardingchristianacademy.co.za</span>
							</a>
						</div>
						<div class="flex items-center gap-4">
							<Telephone style="w-7 h-7" />
							<span class="text-base md:text-lg">072 248 6965</span>
						</div>
						<div class="flex items-center gap-4">
							<a
								href="https://www.facebook.com/HardingChristianAcademy"
								target="_blank"
								rel="noreferrer"
							>
								<Facebook style="w-7 h-7 transition-colors duration-300 hover:text-blue-500" />
							</a>
							<a
								href="https://www.facebook.com/HardingChristianAcademy"
								class="transition-colors duration-300 hover:text-neutral-400"
								target="_blank"
								rel="noreferrer"
							>
								<span class="text-base md:text-lg">Harding Christian Academy</span>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="mb-16 flex flex-col gap-10 xl:flex-row">
				<!-- Main building -->
				<div class="flex flex-col gap-4 xl:w-1/2">
					<span class="text-base font-bold md:text-lg">Campus</span>
					<div class="flex items-center gap-4">
						<a
							href="https://www.google.com/maps?q=9+Philip+Street,+Harding,+KwaZulu-Natal"
							target="_blank"
							rel="noreferrer"
						>
							<Location style="w-7 h-7 transition-colors duration-300 hover:text-red-500" />
						</a>
						<a
							href="https://www.google.com/maps?q=9+Philip+Street,+Harding,+KwaZulu-Natal"
							class="transition-colors duration-300 hover:text-neutral-400 xl:w-1/2"
							target="_blank"
							rel="noreferrer"
						>
							<span class="text-base md:text-lg"
								>9 Philip Street, Harding, KwaZulu-Natal, South Africa.</span
							>
						</a>
					</div>
				</div>
				<!-- Annex building -->
				<div class="flex flex-col gap-4 xl:w-1/2">
					<span class="text-base font-bold md:text-lg">Office Hours</span>
					<div class="flex items-center gap-4">
						<span class="text-base md:text-lg">Mon–Fri, 8:00–15:30</span>
					</div>
				</div>
			</div>
		</div>
	</div>
	<hr class="my-5 opacity-20" />
	<div class="flex flex-col items-center gap-2">
		<div class="flex gap-6 text-sm text-neutral-300">
			<a class="transition-colors duration-300 hover:text-white" href="/privacy">Privacy</a>
			<a class="transition-colors duration-300 hover:text-white" href="/contact">Contact</a>
		</div>
		<span class="mb-4 text-center"
			>© {currentYear}. Harding Christian Academy. All Rights Reserved.</span
		>
	</div>
</footer>
