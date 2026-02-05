<script lang="ts">
	import { Calendar } from '../../features';

	let { data } = $props<{
		data: {
			seniorHighEvents: unknown[];
			juniorHighEvents: unknown[];
			gradeSchoolEvents: unknown[];
		};
	}>();

	type CalendarCategory = 'senior_high' | 'junior_high' | 'grade_school';

	const seniorHighEvents = $derived(data.seniorHighEvents);
	const juniorHighEvents = $derived(data.juniorHighEvents);
	const gradeSchoolEvents = $derived(data.gradeSchoolEvents);

	// Default calendar to show
	let currentCalendar = $state<CalendarCategory>('senior_high');

	function handleNavigationClick(calendar: CalendarCategory) {
		currentCalendar = calendar;
	}

	const navigationItems: { name: string; value: CalendarCategory }[] = [
		{ name: 'Grade School', value: 'grade_school' },
		{ name: 'Junior High', value: 'junior_high' },
		{ name: 'Senior High', value: 'senior_high' }
	];
</script>

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

{#if currentCalendar === 'grade_school'}
	<Calendar events={gradeSchoolEvents} />
{:else if currentCalendar === 'junior_high'}
	<Calendar events={juniorHighEvents} />
{:else if currentCalendar === 'senior_high'}
	<Calendar events={seniorHighEvents} />
{/if}
