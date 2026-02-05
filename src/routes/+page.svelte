<script lang="ts">
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import { inview } from 'svelte-inview';
	import { CurveWhiteBottom, CurveWhiteTop } from '../assets/curves';
	import { pcsAnnex } from '../assets/images';
	import { Hero, Programs } from '../components';
	import '../styles/curves.css';

	let { data } = $props();

	let isInView = $state<boolean[]>([false, false]);

	const options: Options = { rootMargin: '-10%', unobserveOnEnter: true };

	function handleChangeFactory(index: number) {
		return function handleChange({ detail }: CustomEvent<ObserverEventDetails>) {
			isInView[index] = detail.inView;
		};
	}
</script>

<!-- Hero section -->
<Hero />

<!-- Homepage body -->
<div class="relative flex w-full bg-white px-[10%] py-24 text-black lg:px-[20%] lg:py-40">
	<div class="flex flex-col justify-center">
		<h2
			class={`font-gt-walsheim-pro-medium transition-transform-opacity-filter transform-gpu text-start text-3xl duration-1000 ease-in-out md:text-center md:text-5xl ${
				isInView[0]
					? 'lg:translate-y-0 lg:opacity-100 lg:blur-0'
					: 'lg:translate-y-full lg:opacity-0 lg:blur-[2px]'
			}`}
			use:inview={options}
			oninview_change={handleChangeFactory(0)}
		>
			Your home for Christ-centered learning from early years to graduation
		</h2>
		<span
			class={`bg-accent my-8 h-0.5 w-full transform-gpu rounded-full transition-transform duration-1000 ease-in-out ${
				isInView[0] ? 'lg:scale-x-100 lg:delay-700' : 'lg:scale-x-0'
			}`}
		></span>
		<p
			class={`transition-transform-opacity-filter transform-gpu text-base delay-700 duration-1000 ease-in-out md:text-center md:text-2xl ${
				isInView[0]
					? 'lg:translate-y-0 lg:opacity-100 lg:blur-0'
					: 'lg:translate-y-full lg:opacity-0 lg:blur-[2px]'
			}`}
		>
			Harding Christian Academy offers a caring, disciplined environment where learners grow in
			faith, character, and academic excellence. We partner with families to build confident
			students who are ready to serve and lead.
		</p>
	</div>
</div>

<!-- Academic programs and latest events -->
<div class="relative bg-black">
	<CurveWhiteTop />
	<Programs events={data.events} />
	<CurveWhiteBottom />
</div>

<div class="relative h-full bg-white px-[10%] py-24 lg:py-40">
	<img
		loading="lazy"
		src={pcsAnnex}
		alt="Harding Christian Academy campus"
		class="transition-transform-opacity-filter hidden md:block absolute bottom-0 right-0 max-w-sm opacity-20 saturate-0 duration-300 sm:right-[10%] md:max-w-lg lg:max-w-none lg:hover:opacity-75 lg:hover:saturate-100"
	/>
	<div
		class="flex justify-between gap-10 lg:w-2/3"
		use:inview={options}
		oninview_change={handleChangeFactory(1)}
	>
		<div class="flex flex-col">
			<div
				class={`transition-transform-opacity-filter relative flex transform-gpu flex-col whitespace-nowrap duration-1000 ease-in-out  ${
					isInView[1]
						? 'lg:translate-y-0 lg:opacity-100 lg:blur-0'
						: 'lg:translate-y-full lg:opacity-0 lg:blur-[2px]'
				}`}
			></div>
			<h2
				class={`font-gt-walsheim-pro-medium transition-transform-opacity-filter mb-8 text-3xl duration-1000 ease-in-out md:text-5xl ${
					isInView[1]
						? 'lg:translate-y-0 lg:opacity-100 lg:blur-0'
						: 'lg:translate-y-full lg:opacity-0 lg:blur-[2px]'
				}`}
			>
				Join Harding Christian Academy
			</h2>
			<div>
				<div class="relative pl-3 sm:pl-6">
					<span
						class={`bg-accent absolute inset-y-0 left-0 w-1 origin-top rounded-full transition-transform delay-700 duration-1000 sm:w-2 ${
							isInView[1] ? 'lg:scale-y-100' : 'lg:scale-y-0'
						}`}
					></span>
					<p
						class={`mb-10 w-full text-base delay-700 duration-1000 ease-in-out sm:max-w-[75%] md:mb-20 md:text-2xl ${
							isInView[1]
								? 'lg:translate-y-0 lg:opacity-100 lg:blur-0'
								: 'lg:translate-y-full lg:opacity-0 lg:blur-[2px]'
						}`}
					>
						Your journey of academic and personal growth begins here. Discover purposeful learning
						in a community that values faith, excellence, and service.
					</p>
				</div>
				<div class="flex gap-4">
					<a
						class="hover:bg-accent z-30 rounded-full bg-black px-4 py-2 text-sm text-white transition-[transform,background-color] duration-300 hover:scale-90 md:px-5 md:py-3 md:text-xl"
						href="/admissions"
						type="button">Admissions</a
					>
					<a
						class="z-30 rounded-full border border-black px-4 py-2 text-sm text-black transition-transform duration-300 hover:scale-90 md:px-5 md:py-3 md:text-xl"
						href="/contact"
						type="button">Contact Us</a
					>
				</div>
			</div>
		</div>
	</div>
</div>
