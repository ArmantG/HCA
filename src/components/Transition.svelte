<script lang="ts">
	let { url, children }: { url: string; children: () => any } = $props()
</script>

{#key url}
	<div class="fade-in">
		{@render children()}
	</div>
{/key}

<style>
	.fade-in {
		animation: fade-in 2s;
	}

	@keyframes fade-in {
		0% {
			opacity: 0;
		}
		50%,
		100% {
			opacity: 1;
		}
	}
</style>
