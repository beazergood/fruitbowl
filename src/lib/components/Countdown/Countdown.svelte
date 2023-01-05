<script lang="ts">
	import { DateTime } from 'luxon';
	import { onMount } from 'svelte';

	import type { Info, Metadata } from './$types';

	import Card from '../Card/Card.svelte';

	export let info: Info;
	export let metadata: Metadata;

	/***
	 * @description The difference in days between the start and end date
	 */
	let diffInDays: number;

	/**
	 * @description Returns a random index from the bgClasses array
	 * @returns {number}
	 */

	let displayDates = '';

	onMount(async () => {
		var end = DateTime.fromISO(info.startDate); // the start date of the event
		var start = DateTime.now();

		diffInDays = Math.floor(end.diff(start, 'days').toObject().days);

		const startDate = DateTime.fromISO(info.startDate).toFormat('dd MMM');
		const endDate = DateTime.fromISO(info.endDate).toFormat('dd MMM yy');
		displayDates = `${startDate} - ${endDate}`;
	});
</script>

<Card {metadata}>
	<div slot="title">
		<h1 class="text-md text-left text-gray-700 font-semibold">📅 When</h1>
	</div>
	<div slot="content">
		<h1 class="text-3xl font-bold text-center text-gray-700 -mt-4">
			<span class="text-lg mr-2">In</span>{diffInDays} Days
		</h1>
		<h3 class="text-xl font-bold text-center text-gray-700">{displayDates}</h3>
	</div>
</Card>

<style>
	.mapboxgl-popup {
		max-width: 400px;
		font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
	}

	.marker {
		display: block;
		border: none;
		border-radius: 50%;
		cursor: pointer;
		padding: 0;
	}

	:global(.mapboxgl-map) {
		height: 200px;
	}
</style>
