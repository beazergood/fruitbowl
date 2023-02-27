<script lang="ts">
	import { DateTime } from 'luxon';
	import { onMount } from 'svelte';
	import type { Info } from './$types';
	import Card from '../Card/Card.svelte';

	export let data: Info;

	let diffInDays: number | string = '...';
	let displayDates = '';
	let futureEvent = true;

	onMount(async () => {
		var end = DateTime.fromISO(data.startDate);
		var start = DateTime.now();
		const diff = end.diff(start, 'days').toObject().days ?? 0;
		diffInDays = Math.floor(diff);
		futureEvent = diffInDays > 0;
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
				{diffInDays} Days
			{/if}
			{#if !futureEvent}
				{Math.abs(diffInDays)} days ago
			{/if}
		</h1>
		<h3 class="text-xl font-bold text-center text-gray-700">{displayDates}</h3>
	</div>
</Card>
