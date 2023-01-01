<script lang="ts">
	import { DateTime } from 'luxon';
	import mapboxgl from 'mapbox-gl';
	import { onMount } from 'svelte';
	/**
	 * @type {any[]}
	 */
	let bgImage: string = '';
	/**
	 * @description Array of background classes
	 */
	const bgClasses = [
		'bg-golf-1',
		'bg-golf-2',
		'bg-golf-3',
		'bg-golf-4',
		'bg-golf-5',
		'bg-golf-6',
		'bg-golf-7',
		'bg-golf-8',
		'bg-golf-9'
	];
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

		var end = DateTime.fromISO('2023-02-17'); // the start date of the event
		var start = DateTime.now();

		diffInDays = Math.floor(end.diff(start, 'days').toObject().days);
		console.log('diffInMonths', diffInDays);

		mapboxgl.accessToken =
			'pk.eyJ1Ijoid2ViamFtIiwiYSI6ImNsY2F5Nnl4ajBvNG0zd21wcXpmdnBnaW4ifQ.heID-NEZK16RJc8YuqN5BA';

		new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/light-v10',
			center: [-116.54, 33.8],
			zoom: 10
		});
	});

	function getWeather() {
		weatherData = new Promise((resolve, reject) => {
			return fetch(
				'https://api.open-meteo.com/v1/forecast?latitude=33.72&longitude=-116.38&daily=weathercode,sunrise,sunset&current_weather=true&temperature_unit=fahrenheit&timezone=America%2FLos_Angeles'
				// 'http://api.weatherstack.com/current?access_key=0e6f1d61b35de4fd34e0d95be159c017&query=Palm%20Desert&units=f'
			)
				.then((response) => response.json())
				.then((response) => {
					console.log(response);
					const apiResponse = response;
					// console.log(
					// 	`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`
					// );
					weatherData = apiResponse;
					return resolve(weatherData);
				})
				.catch((error) => {
					console.log(error);
					return reject(error);
				});
		});
	}
	getWeather();
</script>

<div
	class="flex flex-col gap-4 justify-start w-screen pt-10 bg-no-repeat bg-contain p-4 bg-green-700 {bgImage}"
>
	<!-- Info widget -->
	<div class="bg-white/50 mt-10 flex flex-col p-2 rounded-lg">
		<h1 class="text-3xl font-bold text-center text-gray-700">Fruitbowl 2023</h1>
		<h3 class="text-xl font-bold text-center text-gray-700">🫐 🍉 🍊 🥑</h3>
		<h3 class="text-lg font-bold text-center text-gray-700">Palm Desert, CA 🇺🇸</h3>
	</div>

	<!-- Date Countdown widget -->
	<div class="bg-white/80 flex flex-col p-4 rounded-lg border-2 border-white">
		<h1 class="text-md text-left text-gray-700">When</h1>

		<h1 class="text-3xl font-bold text-center text-gray-700 -mt-4">
			<span class="text-lg mr-2">In</span>{diffInDays} Days
		</h1>
		<h3 class="text-xl font-bold text-center text-gray-700">17 - 20 Feb, 2023</h3>
	</div>

	<!-- Weather widget -->
	<div class="bg-white/80 flex flex-col p-4 rounded-lg border-2 border-white">
		<h1 class="text-md text-left text-gray-700">Weather</h1>

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
	<div class="bg-white/80 flex flex-col rounded-lg border-2 border-white">
		<h1 class="text-md font-bold text-left text-gray-700 p-2">Where</h1>
		<div id="map" class="block w-100 h-44" />
	</div>

	<!-- Transport widget -->
	<div class="bg-white/80 flex flex-col p-4 rounded-lg border-2 border-white">
		<h1 class="text-md font-bold text-left text-gray-700">Transport</h1>
		<p>Outbound</p>
		<p>Thu 16 Feb</p>
		<p>LHR > LAX</p>
		<p>🛫 10:00 🛬 15:30</p>

		<p>Inbound</p>
		<p>Mon 20 Feb</p>
		<p>LAX > LHR</p>
		<p>🛫 22:00 🛬 16:30</p>
	</div>

	<!-- Accomodation widget -->
	<div class="bg-white/80 flex flex-col p-4 rounded-lg border-2 border-white">
		<h1 class="text-md text-left lext-lg text-gray-700">Accomodation</h1>
		<p>Welcome to the Desert Oasis.</p>
		<p>
			Spacious private home with pool and spa, fire pit, waterfall, putting green, built in
			barbecue...
			<a
				href="https://www.airbnb.co.uk/rooms/44003044?adults=8&location=Palm%20Springs%2C%20CA&check_in=2023-02-17&check_out=2023-02-20&federated_search_id=2ca6f13f-d1c2-4dc2-8e2a-71446bba50ea&source_impression_id=p3_1671755961_%2FpVKSXwlIuRsC%20N9&_set_bev_on_new_domain=1672532399_ZjE0MjAyZmQ0Njhj"
				target="_blank"
				class="text-blue-600">#tooMuch</a
			>
		</p>
	</div>

	<!-- Itinerary widget -->
	<div class="bg-white/80 flex flex-col p-4 rounded-lg border-2 border-white">
		<h1 class="text-md text-left lext-lg text-gray-700">Itinerary</h1>
		<ul>
			<li>2/17 - Arrive LA, drive to Palm Desert</li>
			<li>2/18 - 18 Holes @ Cactus Canyon</li>
			<li>2/19 - 36 Holes @ Desert Run</li>
			<li>2/20 - 18 Holes @ Rustic Canyon</li>
		</ul>
	</div>
</div>
