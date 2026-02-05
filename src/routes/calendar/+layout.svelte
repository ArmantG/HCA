<script lang="ts">
	import { TopHeading } from '../../components';
	let { children } = $props();
</script>

<TopHeading title={'SCHOOL CALENDAR'} />
<div class="h-full bg-white">
	{@render children()}
</div>
