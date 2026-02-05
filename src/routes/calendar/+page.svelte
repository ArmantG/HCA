<script lang="ts">
	import { Calendar } from '../../features';

	let { data } = $props<{
		data: {
			events: {
				content: {
					title: string;
					date: string;
				};
			}[];
			seniorPhaseEvents: unknown[];
			intermediatePhaseEvents: unknown[];
			foundationPhaseEvents: unknown[];
		};
	}>();

	type CalendarCategory = 'senior_phase' | 'intermediate_phase' | 'foundation_phase';

	const seniorPhaseEvents = $derived(data.seniorPhaseEvents);
	const intermediatePhaseEvents = $derived(data.intermediatePhaseEvents);
	const foundationPhaseEvents = $derived(data.foundationPhaseEvents);
	const allEvents = $derived(data.events);
	const today = $derived(new Date());
	const upcomingEvents = $derived(
		[...allEvents]
			.filter((event) => new Date(event.content.date) >= today)
			.sort((a, b) => new Date(a.content.date).getTime() - new Date(b.content.date).getTime())
			.slice(0, 5)
	);
	const pastEvents = $derived(
		[...allEvents]
			.filter((event) => new Date(event.content.date) < today)
			.sort((a, b) => new Date(b.content.date).getTime() - new Date(a.content.date).getTime())
			.slice(0, 5)
	);

	// Default calendar to show
	let currentCalendar = $state<CalendarCategory>('foundation_phase');

	function handleNavigationClick(calendar: CalendarCategory) {
		currentCalendar = calendar;
	}

	const navigationItems: { name: string; value: CalendarCategory }[] = [
		{ name: 'Foundation Phase', value: 'foundation_phase' },
		{ name: 'Intermediate Phase', value: 'intermediate_phase' },
		{ name: 'Senior Phase', value: 'senior_phase' }
	];
</script>

<section class="mx-auto max-w-5xl px-6 py-10">
	<h1 class="font-gt-walsheim-pro-medium text-3xl text-neutral-900 md:text-4xl">
		Calendar highlights
	</h1>
	<div class="mt-6 grid gap-6 md:grid-cols-2">
		<div class="rounded-2xl border border-neutral-200 bg-white p-6">
			<h2 class="text-lg font-semibold text-neutral-900">Upcoming</h2>
			<ul class="mt-4 space-y-3 text-sm text-neutral-700">
				{#each upcomingEvents as event}
					<li class="flex items-center justify-between">
						<span>{event.content.title}</span>
						<span class="text-xs text-neutral-500">{event.content.date}</span>
					</li>
				{/each}
				{#if upcomingEvents.length === 0}
					<li class="text-neutral-500">No upcoming events listed.</li>
				{/if}
			</ul>
		</div>
		<div class="rounded-2xl border border-neutral-200 bg-white p-6">
			<h2 class="text-lg font-semibold text-neutral-900">Recent</h2>
			<ul class="mt-4 space-y-3 text-sm text-neutral-700">
				{#each pastEvents as event}
					<li class="flex items-center justify-between">
						<span>{event.content.title}</span>
						<span class="text-xs text-neutral-500">{event.content.date}</span>
					</li>
				{/each}
				{#if pastEvents.length === 0}
					<li class="text-neutral-500">No past events listed.</li>
				{/if}
			</ul>
		</div>
	</div>
</section>

<nav class="relative flex w-full items-center justify-center px-4 py-10">
	<ul class="flex h-full flex-row gap-8 text-xl">
		{#each navigationItems as item, idx (idx)}
			<li
				class={`text-base md:text-lg ${
					currentCalendar === item.value ? 'font-bold' : 'font-normal'
				}`}
			>
				<button onclick={() => handleNavigationClick(item.value)} type="button">{item.name}</button>
			</li>
		{/each}
	</ul>
</nav>

{#if currentCalendar === 'foundation_phase'}
	<Calendar events={foundationPhaseEvents} />
{:else if currentCalendar === 'intermediate_phase'}
	<Calendar events={intermediatePhaseEvents} />
{:else if currentCalendar === 'senior_phase'}
	<Calendar events={seniorPhaseEvents} />
{/if}
