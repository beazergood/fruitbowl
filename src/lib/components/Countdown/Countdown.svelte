<script lang="ts">
	import { DateTime } from 'luxon';
	import { onMount } from 'svelte';
	import type { Info } from './$types';
	import Card from '../Card/Card.svelte';

	export let data: Info;

	let diffInDaysTilStart: number;
	let diffInDaysFromEnd: number;
	let displayDates = '';
	let futureEvent = true;

	onMount(async () => {
		const start = DateTime.fromISO(data.startDate);
		const end = DateTime.fromISO(data.endDate);
		const now = DateTime.now();
		const diff = start.diff(now, 'days').toObject().days ?? 0;
		
		diffInDaysTilStart = Math.floor(diff);
		futureEvent = diffInDaysTilStart > 0;
		diffInDaysFromEnd = Math.floor(end.diff(DateTime.now(), 'days').toObject().days ?? 0);
		
		const startDate = DateTime.fromISO(data.startDate).toFormat('dd MMM');
		const endDate = DateTime.fromISO(data.endDate).toFormat('dd MMM yy');
		displayDates = `${startDate} - ${endDate}`;
	});
</script>

<Card meta={data.meta}>
	<div slot="title" class="text-md text-left lext-lg text-gray-700 font-semibold p-2">📅 When</div>
	<div slot="content" class="px-2 pb-2">
		<h1 class="text-3xl font-bold text-center text-gray-700 -mt-4">
			{#if futureEvent}
				<span class="text-lg mr-2"> In </span>
				{diffInDaysTilStart} Days
			{/if}
			{#if !futureEvent}
				{Math.abs(diffInDaysFromEnd)} days ago
			{/if}
		</h1>
		<h3 class="text-xl font-bold text-center text-gray-700">{displayDates}</h3>
	</div>
</Card>
