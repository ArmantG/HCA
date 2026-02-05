<script lang="ts">
	import {
		pcsAnnex,
		pcsAnnex2,
		gradeSchool,
		juniorHigh,
		seniorHigh,
		kinaadman,
		kinaadman2,
		kinaadman3
	} from '../../assets/images';

	const images = [
		{ src: pcsAnnex, alt: 'Campus view' },
		{ src: pcsAnnex2, alt: 'Campus courtyard' },
		{ src: gradeSchool, alt: 'Grade School' },
		{ src: juniorHigh, alt: 'Junior High' },
		{ src: seniorHigh, alt: 'Senior High' },
		{ src: kinaadman, alt: 'Student activity' },
		{ src: kinaadman2, alt: 'Learner showcase' },
		{ src: kinaadman3, alt: 'Community event' }
	];
</script>

<section class="mx-auto max-w-6xl px-6 py-16">
	<p class="text-sm uppercase tracking-[0.3em] text-accent">Gallery</p>
	<h1 class="font-gt-walsheim-pro-medium mt-2 text-4xl text-neutral-900 sm:text-5xl">
		Campus life
	</h1>
	<p class="mt-4 max-w-2xl text-base text-neutral-600 sm:text-lg">
		A glimpse into learning, worship, and community at Harding Christian Academy.
	</p>

	<div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each images as image}
			<figure class="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
				<img
					class="h-56 w-full object-cover"
					src={image.src}
					alt={image.alt}
					loading="lazy"
				/>
				<figcaption class="px-4 py-3 text-sm text-neutral-600">{image.alt}</figcaption>
			</figure>
		{/each}
	</div>
</section>
