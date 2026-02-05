<script lang="ts">
	import { goto } from '$app/navigation';
	import { showMobileDropdown } from '$lib/stores';
	import { dropdownItems } from '../../constants';

	let { drop } = $props<{ drop: string }>();

	let show = $state(false);

	showMobileDropdown.subscribe((value) => (show = value));
</script>

<ul class="flex flex-col overflow-hidden text-white">
	{#each dropdownItems[drop] as item, idx (idx)}
		<li>
			<a
				class="flex py-1 pl-10 pr-1"
				href={item.path}
				data-nav-link="true"
				onclick={() => {
					showMobileDropdown.update(() => (show = false));
					goto(item.path);
				}}>{item.title}</a
			>
		</li>
	{/each}
</ul>
