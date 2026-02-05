<script>
	import Wall from '../assets/images/pcsMain.png';
	import BlurFade from './BlurFade.svelte';

	// export let pageTitle = "pageTitle"
	// export let image = Wall

	let { pageTitle = 'pageTitle', image = Wall } = $props();
</script>

<div class="full-width title relative">
	<div
		class="title__extra titleTextflex text-center text-[15vh] capitalize leading-none md:text-nowrap md:text-[17vh]"
	>
		<BlurFade delay={1} once duration={1.6} class={'text-white'}>
			{pageTitle}
		</BlurFade>
	</div>
	<img class="title__bg" alt="title deco" width={1366} height={768} loading="eager" src={image} />

	<div class="title__content">
		<!-- <StarFour height="40" width="40" /> -->

		<BlurFade delay={0.5} once duration={1.4} class={'text-white'}>
			<h1 class="title__text titleText text-center text-5xl capitalize pt-16 text-white">
				{pageTitle}
			</h1>
		</BlurFade>
		<!-- <StarFour height="40" width="40" /> -->
	</div>
</div>

<style lang="scss">
	.title__extra {
		-webkit-text-stroke: 2px hsla(var(--textLight));
		-webkit-text-fill-color: transparent;
		position: absolute;
		paint-order: stroke fill;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		opacity: 20%;
		z-index: -1;
		font-weight: 100;
		letter-spacing: var(--tracking-wider);
		line-height: 70%;
	}

	.title__content {
		z-index: 3;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: var(--spaceM);
	}

	.title {
		position: relative;
		/* FLEX */
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: var(--spaceS);
		/*  */

		padding-top: var(--spaceM);
		padding-bottom: var(--spaceM);
		overflow: hidden;
		height: 30svh;

		user-select: none;
	}

	.title::after {
		pointer-events: none;
		content: '';
		position: absolute;
		inset: 0;
		z-index: -8;
		background: var(--smooth-border);
	}

	.title__bg {
		content: '';
		position: absolute;
		inset: 0;
		z-index: -10;
		width: 100%;
		height: 100%;
		object-fit: cover;
		animation: pageTitleAni 60s infinite ease-in-out;
		filter: brightness(0.5) blur(2px) !important;
		object-position: top;
	}

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

	.title__text {
		font-weight: 500;
		color: hsla(var(--textLight));
		position: relative;
		filter: drop-shadow(0px 0px 2px currentcolor);
		letter-spacing: var(--tracking-wide);
		transform: translate(0%, 10%);
		line-height: 90%;
	}

	// .tracking-in-expand {
	// 	animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;
	// }

	@keyframes tracking-in-expand {
		0% {
			letter-spacing: -0.5em;
			opacity: 0;
		}
		40% {
			opacity: 0.6;
		}
		100% {
			opacity: 1;
		}
	}

	.titleText {
		font-family: 'Figtree';
	}
</style>
