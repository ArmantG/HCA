<script lang="ts">
	import { dev } from '$app/environment';
	import { onMount } from 'svelte';
	import video from '../assets/videos/video.mp4';

	const HERO_VIDEO_READY_EVENT = 'hca:hero-video-ready';

	let videoElement = $state<HTMLVideoElement | null>(null);

	let url = dev
		? 'http://localhost:5174/admissions/apply'
		: 'https://www.hardingchristianacademy.co.za/admissions/apply';

	function notifyVideoReady() {
		const win = window as Window & { __hcaHeroVideoReady?: boolean };
		if (win.__hcaHeroVideoReady) {
			return;
		}

		win.__hcaHeroVideoReady = true;
		window.dispatchEvent(new Event(HERO_VIDEO_READY_EVENT));
	}

	onMount(() => {
		if (!videoElement) {
			return;
		}

		videoElement.playbackRate = 0.75;

		const handleCanPlay = () => notifyVideoReady();
		const handleError = () => notifyVideoReady();

		videoElement.addEventListener('canplay', handleCanPlay, { once: true });
		videoElement.addEventListener('error', handleError, { once: true });

		if (videoElement.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
			notifyVideoReady();
		}

		return () => {
			videoElement?.removeEventListener('canplay', handleCanPlay);
			videoElement?.removeEventListener('error', handleError);
		};
	});
</script>

<section class="relative h-screen min-h-180 lg:min-h-200">
	<div class="absolute bottom-0 left-0 z-20 h-40 w-full bg-linear-to-t from-black/85"></div>
	<video
		bind:this={videoElement}
		src={video}
		preload="auto"
		autoplay
		loop
		muted
		playsinline
		class="absolute bottom-0 left-0 -z-10 h-full w-full object-cover brightness-30"
	></video>
	<div class="flex min-h-full items-end px-[5%] pb-20 pt-52">
		<div class="flex h-full flex-col items-start text-center text-white">
			<h1
				class="font-gt-walsheim-pro-medium mb-10 w-4/5 text-start text-4xl md:w-2/3 md:text-5xl lg:w-1/2 lg:text-6xl"
			>
				An education with a strong Christian foundation for a brighter future.
			</h1>
			<p class="mb-10 text-start text-lg lg:text-2xl">Thy word is our lamp</p>
			<div class="z-30 flex gap-4">
				<a
					class="bg-linear-to-r from-amber-500 to-accent z-30 rounded-full py-2 px-4 text-sm text-white transition-[transform,filter] duration-300 hover:scale-90 hover:brightness-90 md:py-3 md:px-5 md:text-xl"
					href={url}
					target="_self"
					type="button">Apply Now</a
				>
			</div>
		</div>
	</div>
</section>
