<script lang="ts">
	import { TopHeading } from '../../components';
	let { children } = $props();
</script>

<TopHeading title={'ACADEMICS'} />
<div class="py-20 bg-white">
	{@render children()}
</div>
