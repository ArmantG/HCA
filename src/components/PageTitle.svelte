<script lang="ts">
	import Wall from '../assets/images/pcsMain.png'
	import BlurFade from './BlurFade.svelte'

	let { pageTitle = 'pageTitle', image = Wall }: { pageTitle?: string; image?: string } = $props()
</script>

<div
	class="relative flex flex-col items-center justify-center gap-4 h-[30svh] py-8 overflow-hidden select-none"
>
	<!-- Background image with overlay -->
	<div
		class="absolute inset-0 -z-10 after:absolute after:inset-0 after:bg-linear-to-t after:from-navy/60 after:to-navy/40"
	>
		<img
			class="h-full w-full object-cover object-top brightness-50 blur-[2px]"
			style="animation: pageTitleAni 60s infinite ease-in-out"
			alt="title deco"
			width="1366"
			height="768"
			loading="eager"
			src={image}
		/>
	</div>

	<!-- Watermark text -->
	<div
		class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-20 font-figtree text-[15vh] capitalize leading-none text-center md:text-nowrap md:text-[17vh] font-thin tracking-wider"
		style="-webkit-text-stroke: 2px rgba(255,255,255,0.8); -webkit-text-fill-color: transparent; paint-order: stroke fill;"
	>
		<BlurFade delay={1} once duration={1.6} class="text-white">
			{pageTitle}
		</BlurFade>
	</div>

	<!-- Foreground title -->
	<div class="z-[3] flex flex-row justify-center items-center gap-4">
		<BlurFade delay={0.5} once duration={1.4} class="text-white">
			<h1
				class="font-figtree font-medium text-5xl capitalize text-center pt-16 text-white relative tracking-wide translate-y-[10%] leading-[90%]"
				style="filter: drop-shadow(0px 0px 2px currentcolor)"
			>
				{pageTitle}
			</h1>
		</BlurFade>
	</div>
</div>

<style>
	@keyframes pageTitleAni {
		0% {
			object-position: top;
		}
		50% {
			object-position: bottom;
		}
		100% {
			object-position: top;
		}
	}
</style>
