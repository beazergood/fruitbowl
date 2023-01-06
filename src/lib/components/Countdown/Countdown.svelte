<script lang="ts">
	import { DateTime } from 'luxon';
	import { onMount } from 'svelte';

	import type { Info } from './$types';

	import Card from '../Card/Card.svelte';

	export let data: Info;

	/***
	 * @description The difference in days between the start and end date
	 */
	let diffInDays: number | string = "...";

	/**
	 * @description Returns a random index from the bgClasses array
	 * @returns {number}
	 */

	let displayDates = '';

	onMount(async () => {
		var end = DateTime.fromISO(data.startDate); // the start date of the event
		var start = DateTime.now();

		diffInDays = Math.floor(end.diff(start, 'days').toObject().days);

		const startDate = DateTime.fromISO(data.startDate).toFormat('dd MMM');
		const endDate = DateTime.fromISO(data.endDate).toFormat('dd MMM yy');
		displayDates = `${startDate} - ${endDate}`;
	});
</script>

<Card metadata={data.metadata}>
	<div slot="title" class="text-md text-left lext-lg text-gray-700 font-semibold p-2">
		📅 When
	</div>
	<div slot="content" class="px-2 pb-2">
		<h1 class="text-3xl font-bold text-center text-gray-700 -mt-4">
			<span class="text-lg mr-2">In</span>{diffInDays} Days
		</h1>
		<h3 class="text-xl font-bold text-center text-gray-700">{displayDates}</h3>
	</div>
</Card>
