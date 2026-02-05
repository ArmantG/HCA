<script lang="ts">
	import { pcsAnnex2 } from '../assets/images';
	let { title } = $props<{ title: string }>();
</script>

<div class="border-b-accent relative flex h-72 items-center justify-center border-b-8 z-50">
<img
	src={pcsAnnex2}
	alt="Harding Christian Academy campus"
	class="absolute h-full w-full object-cover brightness-40"
/>
	<h1 class="z-10 text-4xl font-bold text-white text-center">{title}</h1>
</div>
