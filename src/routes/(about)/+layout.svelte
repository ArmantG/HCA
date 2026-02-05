<script lang="ts">
	import { TopHeading } from '../../components';
	let { children } = $props();
</script>

<TopHeading title={'ABOUT'} />
<div class="py-20 bg-white">
	{@render children()}
</div>
