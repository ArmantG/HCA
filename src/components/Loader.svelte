<script lang="ts">
	import { onMount } from 'svelte';
	import { cross, pcsLogoNewOutlineWhite } from '../assets/images';

	let { style } = $props<{ style: string }>();
	let show = $state(false);

	// Just animate in code instead of CSS because CSS animations are not smooth for chromium for some reason
	onMount(() => {
		show = true;
	});
</script>

<div class={`fixed top-0 left-0 z-999 h-screen w-full transform-gpu bg-navy ${style}`}>
	<div class="flex h-full items-center justify-center">
		<!-- Circles -->
		<div class="scale-75 md:scale-100">
			<div
				class="circle-1 flex h-68.5 w-68.5 transform-gpu items-center justify-center rounded-full border-6 border-[#162b54] opacity-0"
			>
				<div
					class="circle-2 flex h-62.5 w-62.5 transform-gpu items-center justify-center rounded-full border-4 border-white opacity-0"
				>
					<div
						class="circle-3 flex h-57.5 w-57.5 transform-gpu items-center justify-center rounded-full border-2 border-[#af992b] opacity-0"
					>
						<!-- HCA logo placeholder -->
						<img
							draggable="false"
							src={pcsLogoNewOutlineWhite}
							class={`h-40 transform-gpu transition-[transform,opacity] duration-700 ease-in-out ${
								show ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
							}`}
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="fixed -bottom-60 h-60 w-full bg-linear-to-b from-black"></div>
</div>

<style>
	.circle-1 {
		animation: fade 500ms ease-in-out;
		animation-fill-mode: forwards;
	}

	.circle-2 {
		animation: fade 500ms ease-in-out 100ms;
		animation-fill-mode: forwards;
	}

	.circle-3 {
		animation: fade 500ms ease-in-out 200ms;
		animation-fill-mode: forwards;
	}

	/* Sometimes it's easier to do animations in vanilla CSS */
	@keyframes fade {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
