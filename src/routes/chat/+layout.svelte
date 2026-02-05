<script lang="ts">
	let { children } = $props();
</script>

<div class="min-h-screen bg-white flex relative">
	{@render children()}
</div>
