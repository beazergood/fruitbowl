<script lang="ts">
	import { onMount } from 'svelte';
	import type { Event } from './$types';

	import { DateTime } from 'luxon';

	import Accommodation from '../Accommodation/Accommodation.svelte';
	import Itinerary from '../Itinerary/Itinerary.svelte';
	import Transport from '../Transport/Transport.svelte';
	import Map from '../Map/Map.svelte';
	/**
	 * @description All the data required to render the dashboard page for an Event
	 */
	export let event: Event;

	/**
	 * @description background image class for the page, gets set to a random class from the bg image array in tailwind.config
	 */
	let bgImage: string = '';
	/**
	 * @description Array of background classes to choose from for this Event
	 */
	const bgClasses = event.metadata.bgImageClasses;
	/***
	 * @description The difference in days between the start and end date
	 */
	let diffInDays: number;
	let weatherData: any;

	/**
	 * @description Returns a random index from the bgClasses array
	 * @returns {number}
	 */

	function randomIx() {
		return Math.floor(Math.random() * bgClasses.length);
	}

	let displayDates = '';
	
	onMount(async () => {
		bgImage = bgClasses[randomIx()];

		var end = DateTime.fromISO(event.startDate); // the start date of the event
		var start = DateTime.now();

		diffInDays = Math.floor(end.diff(start, 'days').toObject().days);

		// 17 - 20 Feb, 2023
		const startDate = DateTime.fromISO(event.startDate).toFormat('dd MMM');
		const endDate = DateTime.fromISO(event.endDate).toFormat('dd MMM yy');
		displayDates = `${startDate} - ${endDate}`;

	});

	function getWeather() {
		weatherData = new Promise((resolve, reject) => {
			return fetch(
				`https://api.open-meteo.com/v1/forecast?latitude=${event.location.lat}&longitude=${
					event.location.lng
				}&daily=weathercode,sunrise,sunset&current_weather=true&temperature_unit=${
					event.location.temperatureGuage === 'F' ? 'fahrenheit' : 'celsius'
				}&timezone=${event.location.timezone}`
			)
				.then((response) => response.json())
				.then((response) => {
					const apiResponse = response;
					weatherData = apiResponse;
					return resolve(weatherData);
				})
				.catch((error) => {
					return reject(error);
				});
		});
	}
	getWeather();


</script>

<div
	class="flex flex-col gap-4 justify-start w-screen pt-10 bg-no-repeat bg-contain p-4 {event
		.metadata.bgColorClass} {bgImage}"
>
	<!-- Info widget -->
	<div class="bg-white/30 mt-10 flex flex-col p-2 rounded-lg">
		<h1 class="text-3xl font-bold text-center {event.metadata.headerColorClass} stroke-cyan-500">
			{event.name}
		</h1>
		<h3 class="text-xl font-bold text-center">{event.emoji}</h3>
		<h3 class="text-lg font-bold text-center {event.metadata.headerColorClass}">
			{event.location.city}, {event.location.state}
		</h3>
	</div>

	<!-- Date Countdown widget -->
	<div class="bg-white/100 flex flex-col p-2 rounded-lg border-2 {event.metadata.borderColorClass}">
		<h1 class="text-md text-left text-gray-700 font-semibold">📅 When</h1>

		<h1 class="text-3xl font-bold text-center text-gray-700 -mt-4">
			<span class="text-lg mr-2">In</span>{diffInDays} Days
		</h1>
		<h3 class="text-xl font-bold text-center text-gray-700">{displayDates}</h3>
	</div>

	<!-- Weather widget -->
	<div class="bg-white/100 flex flex-col p-1 rounded-lg border-2 {event.metadata.borderColorClass}">
		<h1 class="text-md text-left text-gray-700 font-semibold">🌦️ Weather</h1>
		{#await weatherData}
			<p>Loading...</p>
		{:then weatherData}
			<h1 class="text-2xl text-center -mt-2">
				{Math.floor(weatherData?.current_weather?.temperature)}&deg;
			</h1>
		{:catch error}
			<p>Error {error}</p>
		{/await}
	</div>

	<!-- Map widget -->
	<Map location={event.location} data={event.geoWaypoints} metadata={event.metadata}/>

	<!-- Transport widget -->
	<Transport data={event.transport} metadata={event.metadata} />

	<!-- Accomodation widget -->
	<Accommodation data={event.accommodation} metadata={event.metadata} />

	<!-- Itinerary widget -->
	<Itinerary data={event.itinerary} metadata={event.metadata} />
</div>

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
