<!-- <div class="bg-white h-screen">
  <p class="text-black text-3xl text-center">An error occured, try refreshing!</p>
</div> -->

<script lang="ts">
	import { format } from 'date-fns';
	import { Calendar } from '../../features';

	const today = format(new Date(), 'yyyy-MM-dd');

	let errorEvents = [
		{
			id: 'error',
			content: {
				title: 'Error Loading Events',
				description: 'An error occurred while fetching calendar data.',
				date: today,
				start: today,
				end: today,
				categories: []
			}
		}
	];
</script>

<div class="bg-white">
	<div class="mx-auto max-w-7xl px-4 py-10 text-center">
		<h1 class="mb-4 text-4xl font-bold text-red-600">Calendar Error</h1>
		<p class="mb-8 text-xl text-gray-600">
			Something went wrong while loading the calendar events.
		</p>
		<button
			onclick={() => window.location.reload()}
			class="rounded-lg bg-orange-500 px-6 py-2 font-bold text-white transition-colors hover:bg-orange-600"
		>
			Refresh Page
		</button>
	</div>

	<Calendar events={errorEvents} />
</div>
