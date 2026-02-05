<script lang="ts">
	import { page } from '$app/state';
	import { TopHeading } from '../../components';
	let { children } = $props();

	const titles: Record<string, string> = {
		'/history': 'HISTORY',
		'/philosophy': 'PHILOSOPHY',
		'/inst-dir': 'INSTITUTIONAL DIRECTION',
		'/services': 'SERVICES',
		'/paascu': 'PAASCU ACCREDITATION',
		'/about/events': 'EVENTS'
	};

	const currentPath = $derived(page.url.pathname);
	const headingTitle = $derived(titles[currentPath] || 'ABOUT');
</script>

<TopHeading title={headingTitle} />
<div class="p-10 h-full bg-white">
	<div class="page-content mx-auto max-w-5xl">
		{@render children()}
	</div>
</div>
