<script lang="ts">
	import { TopHeading } from '../../components';
	import PageTitle from '../../components/PageTitle.svelte';
	let { children } = $props();
</script>

<!-- <TopHeading title={'ACADEMICS'} /> -->
<PageTitle pageTitle={'ACADEMICS'} />
<div class="py-20 bg-white">
	{@render children()}
</div>
