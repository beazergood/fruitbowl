<script lang="ts">
	import { DateTime } from 'luxon';
	import mapboxgl, { type EventData } from 'mapbox-gl';
	import { onMount } from 'svelte';

	import type { Event } from './$types';

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
	/**
	 * @description weather data
	 * {
	
		"observation_time": "11:31 PM",
		"temperature": 17,
		"weather_code": 116,
		"weather_icons": [
			"https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
		],
		"weather_descriptions": [
			"Partly cloudy"
		],
		"wind_speed": 7,
		"wind_degree": 170,
		"wind_dir": "S",
		"pressure": 1013,
		"precip": 0,
		"humidity": 71,
		"cloudcover": 75,
		"feelslike": 17,
		"uv_index": 4,
		"visibility": 16,
		"is_day": "yes"
}
	*/
	let weatherData: any;

	/**
	 * @description Returns a random index from the bgClasses array
	 * @returns {number}
	 */

	function randomIx() {
		return Math.floor(Math.random() * bgClasses.length);
	}

	onMount(async () => {
		bgImage = bgClasses[randomIx()];

		var end = DateTime.fromISO(event.startDate); // the start date of the event
		var start = DateTime.now();

		diffInDays = Math.floor(end.diff(start, 'days').toObject().days);
		console.log('diffInMonths', diffInDays);

		mapboxgl.accessToken =
			'pk.eyJ1Ijoid2ViamFtIiwiYSI6ImNsY2F5Nnl4ajBvNG0zd21wcXpmdnBnaW4ifQ.heID-NEZK16RJc8YuqN5BA';

		const map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v12',
			center: [event.location.lng, event.location.lat],
			zoom: 10
		});

		const geojson = {
			type: 'FeatureCollection',
			features: [
				{
					type: 'Feature',
					properties: {
						description: '<p>Desert Willow Golf Resort</p>',
						iconSize: [24, 24]
					},
					geometry: {
						type: 'Point',
						coordinates: [-116.366, 33.765]
					}
				},
				{
					type: 'Feature',
					properties: {
						description: '<strong>Bighorn Golf Club</strong>',
						iconSize: [24, 24]
					},
					geometry: {
						type: 'Point',
						coordinates: [-116.243, 33.405]
					}
				},
				{
					type: 'Feature',
					properties: {
						description:
							'<strong>Big Backyard Beach Bash and Wine Fest</strong><p>EatBar (2761 Washington Boulevard Arlington VA) is throwing a <a href="http://tallulaeatbar.ticketleap.com/2012beachblanket/" target="_blank" title="Opens in a new window">Big Backyard Beach Bash and Wine Fest</a> on Saturday, serving up conch fritters, fish tacos and crab sliders, and Red Apron hot dogs. 12:00-3:00 p.m. $25.grill hot dogs.</p>',
						iconSize: [24, 24]
					},
					geometry: {
						type: 'Point',
						coordinates: [-77.09, 38.881]
					}
				}
			]
		};

		map.on('load', () => {
			// Load an image from an external URL.
			// map.loadImage('https://docs.mapbox.com/mapbox-gl-js/assets/cat.png', (error, image) => {
			// 	if (error) throw error;

			// 	// Add the image to the map style.
			// 	if (image) {
			// 		map.addImage('cat', image);
			// 	}

			// 	// Add a data source containing one point feature.
			// 	map.addSource('point', {
			// 		type: 'geojson',
			// 		data: {
			// 			type: 'FeatureCollection',
			// 			features: [
			// 				{
			// 					type: 'Feature',
			// 					properties: {
			// 						description: '<strong>Bighorn Golf Club</strong>',
			// 						icon: 'theatre'
			// 					},
			// 					geometry: {
			// 						type: 'Point',
			// 						coordinates: [-116.366, 33.765]
			// 					}
			// 				}
			// 			]
			// 		}
			// 	});

			// 	// Add a layer to use the image to represent the data.
			// 	map.addLayer({
			// 		id: 'points',
			// 		type: 'symbol',
			// 		source: 'point', // reference the data source
			// 		layout: {
			// 			'icon-image': 'cat', // reference the image
			// 			'icon-size': 0.15
			// 		}
			// 	});
			// });

			for (const marker of geojson.features) {
				// Create a DOM element for each marker.
				const el = document.createElement('div');
				const width = marker.properties.iconSize[0];
				const height = marker.properties.iconSize[1];
				el.className = 'marker';
				el.style.backgroundImage = `url(icons/12-arrow-down-solid.gif)`; // 46-notification-bell-solid.gif
				el.style.width = `${width}px`;
				el.style.height = `${height}px`;
				el.style.backgroundSize = '100%';
				el.style.borderRadius = '50%';

				// Add markers to the map.
				new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
			}
		});
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
	<div class="bg-white/50 mt-10 flex flex-col p-2 rounded-lg">
		<h1 class="text-3xl font-bold text-center text-gray-700">{event.name}</h1>
		<h3 class="text-xl font-bold text-center text-gray-700">{event.emoji}</h3>
		<h3 class="text-lg font-bold text-center text-gray-700">
			{event.location.city}, {event.location.state}
		</h3>
	</div>

	<!-- Date Countdown widget -->
	<div class="bg-white/80 flex flex-col p-2 rounded-lg border-2 border-white">
		<h1 class="text-md text-left text-gray-700">📅 When</h1>

		<h1 class="text-3xl font-bold text-center text-gray-700 -mt-4">
			<span class="text-lg mr-2">In</span>{diffInDays} Days
		</h1>
		<h3 class="text-xl font-bold text-center text-gray-700">{displayDates}</h3>
	</div>

	<!-- Weather widget -->
	<div class="bg-white/80 flex flex-col p-1 rounded-lg border-2 border-white">
		<h1 class="text-md text-left text-gray-700">🌦️ Weather</h1>

		{#await weatherData}
			<p>Loading...</p>
		{:then weatherData}
			<!-- <div class="flex flex-row space-between px-4 justify-between items-center"> -->
			<h1 class="text-2xl text-center">
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
	<div class="bg-white/80 flex flex-col z-0 rounded-lg border-2 border-white relative">
		<h1 class="text-md absolute top-1 bg-white/60 p-1 left-2 rounded-lg z-10 text-left text-gray-700 mb-2">📍 Where</h1>
		<div id="map" class="block w-100 h-64" />
	</div>

	<!-- Transport widget -->
	<div class="bg-white/80 flex flex-col p-2 rounded-lg border-2 border-white">
		<h1 class="text-md text-left text-gray-700 mb-2">✈️ Transport</h1>
		<p class="text-sm">Outbound</p>
		<div class="flex flex-row justify-between">
			<p>{outboundDate}</p>
			<p>{event.transport.outbound.from.airport} > {event.transport.outbound.to.airport}</p>
			<p>🛫 {outboundTakeoff} 🛬 {outboundLanding}</p>
		</div>

		<p class="text-sm">Inbound</p>
		<div class="flex flex-row justify-between">
			<p>{inboundDate}</p>
			<p>{event.transport.inbound.from.airport} > {event.transport.inbound.to.airport}</p>
			<p>🛫 {inboundTakeoff} 🛬 {inboundLanding}</p>
		</div>
	</div>

	<!-- Accomodation widget -->
	<div class="bg-white/80 flex flex-col p-2 rounded-lg border-2 border-white">
		<h1 class="text-md text-left lext-lg text-gray-700">🏡 Accommodation</h1>
		<p>{event.accommodation.name}</p>
		<p>
			{event.accommodation.description}
			<a href={event.accommodation.url} target="_blank" class="text-blue-600">View Link</a>
		</p>
	</div>

	<!-- Itinerary widget -->
	<div class="bg-white/80 flex flex-col p-2 rounded-lg border-2 border-white">
		<h1 class="text-md text-left lext-lg text-gray-700">🔖 Itinerary</h1>
		<ul>
			{#each event.itinerary as item}
				<li>{item}</li>
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
</style>
