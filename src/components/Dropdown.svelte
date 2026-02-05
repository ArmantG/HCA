<script lang="ts">
	import { page } from '$app/state';
	import { dropdownItems } from '../constants';
	let { drop, scrolled } = $props<{ drop: string; scrolled: boolean }>();
	const isChat = $derived(page.url.pathname === '/chat');
</script>

<div
	class={`absolute left-0 pt-2 ${scrolled || isChat ? '' : 'top-26'}`}
	onclick={(e) => e.stopPropagation()}
	onkeydown={(e) => e.stopPropagation()}
	role="menu"
	tabindex="-1"
>
	<ul
		class="bg-white rounded-lg shadow-lg border border-neutral-200 py-2 min-w-50 animate-in fade-in slide-in-from-top-2 duration-200"
	>
		{#each dropdownItems[drop] as item, idx (idx)}
			<li>
				<a
					href={item.path}
					class="block px-6 py-3 text-base text-neutral-700 transition-colors duration-200 hover:bg-accent hover:bg-opacity-10 hover:text-accent"
				>
					{item.title}
				</a>
			</li>
		{/each}
	</ul>
</div>
