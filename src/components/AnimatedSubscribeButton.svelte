<script lang="ts">
	import { CheckIcon, ChevronRightIcon } from 'lucide-svelte';
	import { Motion } from 'svelte-motion';

	let { subscribeStatus = false } = $props();

	let isSubscribed = $state();

	$effect(() => {
		isSubscribed = subscribeStatus;
	});
</script>

{#snippet changeText()}
	<span class="group inline-flex items-center">
		<CheckIcon class="mr-2 mt-0.5 h-4 w-4" />
		Subscribed{' '}
	</span>
{/snippet}

{#snippet initialText()}
	<span class="group inline-flex items-center">
		Subscribe{' '}
		<ChevronRightIcon
			class="ml-1 mt-0.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
		/>
	</span>
{/snippet}

{#if isSubscribed}
	<Motion initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} let:motion>
		<button
			type="submit"
			class="relative flex cursor-pointer items-center justify-center rounded-md border-none p-1 px-2 align-middle bg-[#2ff1e8] dark:bg-[#2ff1e8]"
			use:motion
		>
			<Motion initial={{ y: -50 }} animate={{ y: 0 }} let:motion>
				<span
					use:motion
					class="relative block h-full w-full font-semibold text-gray-900 dark:text-gray-800"
				>
					{@render changeText()}
				</span>
			</Motion>
		</button>
	</Motion>
{:else}
	<Motion initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} let:motion>
		<button
			type="submit"
			class="relative flex cursor-pointer items-center justify-center rounded-md border-none p-1 px-2 align-middle bg-gray-900 dark:bg-gray-100"
			use:motion
		>
			<Motion initial={{ x: 0 }} exit={{ x: 50, transition: { duration: 0.1 } }} let:motion>
				<span use:motion class="relative block font-semibold text-gray-100 dark:text-gray-900">
					{@render initialText()}
				</span>
			</Motion>
		</button>
	</Motion>
{/if}
