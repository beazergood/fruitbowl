<script lang="ts">
	import { DateTime } from 'luxon';
	import { Map, Marker } from '@beyonk/svelte-mapbox';
	import { onMount } from 'svelte';
	import type { Event } from './$types';
	import { PUBLIC_MAPBOX_API_TOKEN } from '$env/static/public';

	let mapComponent: {
		cooperativeGestures?: boolean;
		flyTo: (arg0: { center: number[]; zoom: number }) => void;
	};

	export let event: Event;
	/**
	 * @type {any[]}
	 */
	let bgImage: string = '';
	/**
	 * @description Array of background classes
	 */
	const bgClasses = event.meta.bgImageClasses;
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

	function onReady() {
		mapComponent.cooperativeGestures = true;
		// mapComponent.zoom = 2;
		mapComponent.flyTo({ center: [event.location.lng, event.location.lat], zoom: event.location.zoom, speed: 0.6 });
	}
	onMount(async () => {
		bgImage = bgClasses[randomIx()];

		var end = DateTime.fromISO(event.startDate); // the start date of the event
		var start = DateTime.now();

		diffInDays = Math.floor(end.diff(start, 'days').toObject().days);
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

	let displayDates = '';
	let outboundDate = '';
	let outboundTakeoff = '';
	let outboundLanding = '';

	let inboundDate = '';
	let inboundTakeoff = '';
	let inboundLanding = '';

	function setDateStrings() {
		// 17 - 20 Feb, 2023
		const startDate = DateTime.fromISO(event.startDate).toFormat('dd MMM');
		const endDate = DateTime.fromISO(event.endDate).toFormat('dd MMM yy');
		displayDates = `${startDate} - ${endDate}`;

		outboundDate = DateTime.fromISO(event.transport.outbound.from.date).toFormat('dd MMM yy');
		outboundTakeoff = DateTime.fromISO(event.transport.outbound.from.time).toFormat('HH:mm');
		outboundLanding = DateTime.fromISO(event.transport.outbound.to.time).toFormat('HH:mm');

		inboundDate = DateTime.fromISO(event.transport.inbound.from.date).toFormat('dd MMM yy');
		inboundTakeoff = DateTime.fromISO(event.transport.inbound.from.time).toFormat('HH:mm');
		inboundLanding = DateTime.fromISO(event.transport.inbound.to.time).toFormat('HH:mm');
	}
	setDateStrings();
</script>

<div
	class="flex flex-col gap-4 justify-start w-screen pt-10 bg-no-repeat bg-contain p-4 {event.meta
		.bgColorClass} {bgImage}"
>
	<!-- Info widget -->
	<div class="bg-white/30 mt-10 flex flex-col p-2 rounded-lg">
		<h1 class="text-3xl font-bold text-center {event.meta.headerColorClass} stroke-cyan-500">{event.name}</h1>
		<h3 class="text-xl font-bold text-center">{event.emoji}</h3>
		<h3 class="text-lg font-bold text-center {event.meta.headerColorClass}">
			{event.location.city}, {event.location.state}
		</h3>
	</div>

	<!-- Date Countdown widget -->
	<div class="bg-white/100 flex flex-col p-2 rounded-lg border-2 {event.meta.borderColorClass}">
		<h1 class="text-md text-left text-gray-700 font-semibold">📅 When</h1>

		<h1 class="text-3xl font-bold text-center text-gray-700 -mt-4">
			<span class="text-lg mr-2">In</span>{diffInDays} Days
		</h1>
		<h3 class="text-xl font-bold text-center text-gray-700">{displayDates}</h3>
	</div>

	<!-- Weather widget -->
	<div class="bg-white/100 flex flex-col p-1 rounded-lg border-2 {event.meta.borderColorClass}">
		<h1 class="text-md text-left text-gray-700 font-semibold">🌦️ Weather</h1>

		{#await weatherData}
			<p>Loading...</p>
		{:then weatherData}
			<!-- <div class="flex flex-row space-between px-4 justify-between items-center"> -->
			<h1 class="text-2xl text-center -mt-2">
				<!-- <span class="text-lg">Currently</span> -->
				{Math.floor(weatherData?.current_weather?.temperature)}&deg;
			</h1>
			<!-- <span class="text-2xl"> -->
			<!-- {weatherData?.weather_descriptions[0]} -->
			<!-- </span> -->
			<!-- {#if weatherData?.weather_icons}
					{#each weatherData?.weather_icons as icon}
						<img src={icon} width="44" height="44" alt="weather icon" />
					{/each}
				{/if} -->
			<!-- </div> -->
		{:catch error}
			<p>Error {error}</p>
		{/await}
	</div>

	<!-- Map widget TODO: add mapbox map -->
	<div class="bg-white/100 flex flex-col z-0 rounded-lg border-2 {event.meta.borderColorClass} relative">
		<h1
			class="text-md absolute top-1 bg-white/60 p-1 left-2 rounded-lg z-10 text-left text-gray-700 mb-2 font-semibold"
		>
			📍 Where
		</h1>
		<div id="map" class="block w-100 h-64">
			<Map
				accessToken={PUBLIC_MAPBOX_API_TOKEN}
				style="mapbox://styles/mapbox/outdoors-v11"
				bind:this={mapComponent}
				on:ready={onReady}
				center={[event.location.lng, event.location.lat]}
				zoom="4"
			>
				{#if event.geoWaypoints}
					{#each event.geoWaypoints.features as waypoint}
						<Marker
							lng={waypoint.geometry.coordinates[0]}
							lat={waypoint.geometry.coordinates[1]}
							label={waypoint.properties.description}
						>
							<span class="text-lg bg-white/70 rounded-full p-1">
								{waypoint.properties.icon}
							</span>
						</Marker>
					{/each}
				{/if}
			</Map>
		</div>
	</div>

	<!-- Transport widget -->
	<div class="bg-white/100 flex flex-col p-2 rounded-lg border-2 {event.meta.borderColorClass}">
		<h1 class="text-md text-left text-gray-700 mb-2 font-semibold">✈️ Transport</h1>
		<div class="flex justify-between">
			<p class="text-xs font-bold">Outbound</p>
			<div class="text-sm w-28 flex justify-around">
				<span>🛫</span>
				<span>🛬 </span>
			</div>
		</div>
		<div class="flex flex-row justify-between">
			<p>{outboundDate}</p>
			<p>{event.transport.outbound.from.airport} > {event.transport.outbound.to.airport}</p>
			<div>
				<p>{outboundTakeoff} - {outboundLanding}</p>
				{#if event.transport.outbound.from.flight}
					<p class="text-xs text-center">{event.transport.outbound.from.flight}</p>
				{/if}
			</div>
		</div>
		<hr class="my-2">
		<div class="flex justify-between">
			<p class="text-xs font-bold">Inbound</p>
			<div class="text-sm w-28 flex justify-around">
				<span>🛫</span>
				<span>🛬 </span>
			</div>
		</div>
		<div class="flex flex-row justify-between">
			<p>{inboundDate}</p>
			<p>{event.transport.inbound.from.airport} > {event.transport.inbound.to.airport}</p>
			<div>
				<p>{inboundTakeoff} - {inboundLanding}</p>
				{#if event.transport.inbound.from.flight}
					<p class="text-xs text-center">{event.transport.inbound.from.flight}</p>
				{/if}
			</div>
		</div>
	</div>

	<!-- Accomodation widget -->
	<div class="bg-white/100 flex flex-col p-2 rounded-lg border-2 {event.meta.borderColorClass}">
		<h1 class="text-md text-left lext-lg text-gray-700 font-semibold">🏡 Accommodation</h1>
		<p class="text-sm font-medium mt-2">{event.accommodation.name}</p>
		<p class="text-sm">
			{event.accommodation.description}
			<a href={event.accommodation.url} target="_blank" class="text-blue-600 underline"
				>View website</a
			>
		</p>
	</div>

	<!-- Itinerary widget -->
	<div class="bg-white/100 flex flex-col p-2 rounded-lg border-2 {event.meta.borderColorClass}">
		<h1 class="text-md text-left lext-lg text-gray-700 font-semibold">🔖 Itinerary</h1>
		<ul>
			{#each event.itinerary as item}
				<li class="text-sm">{item}</li>
			{/each}
		</ul>
	</div>
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
