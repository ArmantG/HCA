<script lang="ts">
	const fees = [
		{ item: 'Registration fee (once-off per child)', eldest: 'R 2,500', sibling: 'R 2,500' },
		{ item: 'Monthly tuition instalment (Jan-Nov)', eldest: 'R 1,400', sibling: 'R 1,200' },
		{ item: 'Quarterly tuition instalment', eldest: 'R 3,850', sibling: 'R 3,300' },
		{ item: 'Annual tuition once-off', eldest: 'R 15,400', sibling: 'R 13,200' },
		{
			item: 'Total including registration and annual tuition',
			eldest: 'R 17,900',
			sibling: 'R 15,700'
		}
	]
</script>

<section class="bg-white">
	<div class="mx-auto max-w-[1760px] px-5 py-14 sm:px-8 xl:px-12 2xl:px-16">
		<p class="text-sm font-semibold uppercase tracking-wide text-gold">Fees</p>
		<h1 class="mt-3 max-w-4xl text-4xl font-semibold text-navy">
			Fee structure and payment rules.
		</h1>
		<p class="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
			HCA is a fee-paying independent school. Fees fund staffing, learning resources, operations,
			and safety. Fees are payable in advance and reviewed annually by the Board.
		</p>
	</div>
</section>

<section class="mx-auto max-w-[1760px] px-5 py-12 sm:px-8 xl:px-12 2xl:px-16">
	<div class="overflow-x-auto border border-slate-200 bg-white">
		<table class="min-w-full text-left text-sm">
			<thead class="bg-slate-50 text-slate-900">
				<tr>
					<th class="px-4 py-3 font-semibold">Item</th>
					<th class="px-4 py-3 font-semibold">Eldest child</th>
					<th class="px-4 py-3 font-semibold">Sibling discount</th>
				</tr>
			</thead>
			<tbody class="divide-y divide-slate-200 text-slate-700">
				{#each fees as fee (fee.item)}
					<tr>
						<td class="px-4 py-3">{fee.item}</td>
						<td class="px-4 py-3 font-semibold text-navy">{fee.eldest}</td>
						<td class="px-4 py-3 font-semibold text-navy">{fee.sibling}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<p class="mt-4 text-sm leading-6 text-slate-600">
		These rates apply to the current school year and are likely to increase for the new academic
		year.
	</p>
</section>

<section class="border-y border-slate-200 bg-slate-50">
	<div
		class="mx-auto grid max-w-[1760px] gap-8 px-5 py-12 sm:px-8 md:grid-cols-3 xl:px-12 2xl:px-16"
	>
		<div class="bg-white p-6">
			<h2 class="text-xl font-semibold text-slate-900">Payment options</h2>
			<p class="mt-3 text-sm leading-6 text-slate-700">
				Families choose monthly, quarterly, or annual payment and commit to the relevant deadline.
			</p>
		</div>
		<div class="bg-white p-6">
			<h2 class="text-xl font-semibold text-slate-900">References matter</h2>
			<p class="mt-3 text-sm leading-6 text-slate-700">
				All payments must use the learner reference number and name, such as H1999Andrew.
			</p>
		</div>
		<div class="bg-white p-6">
			<h2 class="text-xl font-semibold text-slate-900">Arrears</h2>
			<p class="mt-3 text-sm leading-6 text-slate-700">
				The school prefers early engagement and written arrangements before arrears accumulate.
			</p>
		</div>
	</div>
</section>

<section class="mx-auto max-w-[1760px] px-5 py-12 sm:px-8 xl:px-12 2xl:px-16">
	<h2 class="text-2xl font-semibold text-slate-900">Full fees policy</h2>
	<p class="mt-4 leading-7 text-slate-700">
		The full policy explains due dates, allocation of payments, arrears management, sibling
		discounts, concessions, cancellation, and refunds.
	</p>
	<a
		class="mt-6 inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-navy transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
		href="/policies/fees"
	>
		View fees policy
	</a>
</section>
