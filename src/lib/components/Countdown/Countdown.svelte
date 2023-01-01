<script lang="ts">
	import { DateTime } from 'luxon';
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
		// diffInDays.toObject(); //=> { months: 1 }
	});

	function getWeather() {
		weatherData = new Promise((resolve, reject) => {
			return fetch(
				'http://api.weatherstack.com/current?access_key=0e6f1d61b35de4fd34e0d95be159c017&query=Palm%20Desert&units=f'
			)
				.then((response) => response.json())
				.then((response) => {
					// console.log(response);
					const apiResponse = response;
					console.log(
						`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`
					);
					weatherData = apiResponse.current;
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
	class="flex flex-col gap-4 justify-start w-screen h-screen bg-no-repeat bg-contain p-4 pt-10 bg-green-700 {bgImage}"
>
	<!-- Info widget -->
	<div class="bg-white/50 mt-10 flex flex-col p-4 rounded-lg">
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
		<h3 class="text-3xl font-bold text-center text-gray-700">17 - 20 Feb, 2023</h3>
	</div>

	<!-- Weather widget -->
	<div class="bg-white/80 flex flex-col p-4 rounded-lg border-2 border-white">
		<h1 class="text-md text-left text-gray-700">Weather</h1>

		{#await weatherData}
			<p>Loading...</p>
		{:then weatherData}
			<div class="flex flex-row space-between px-4 justify-between items-center">
				<span class="text-2xl">
					{weatherData?.temperature}
				</span>
				<span class="text-2xl">
					{weatherData?.weather_descriptions[0]}
				</span>
				{#if weatherData?.weather_icons}
					{#each weatherData?.weather_icons as icon}
						<img src={icon} width="44" height="44" alt="weather icon" />
					{/each}
				{/if}
			</div>
		{:catch error}
			<p>Error {error}</p>
		{/await}
	</div>

	<!-- Map widget TODO: add mapbox map -->
	<!-- <div class="bg-white/80 flex flex-col p-4 rounded-lg border-2 border-white">
		<h1 class="text-md font-bold text-left text-gray-700">Where</h1>
	</div> -->

	<!-- Transport widget -->
	<!-- <div class="bg-white/80 flex flex-col p-4 rounded-lg border-2 border-white">
		<h1 class="text-md font-bold text-left text-gray-700">Transport</h1>
	</div> -->

	<!-- Accomodation widget -->
	<div class="bg-white/80 flex flex-col p-4 rounded-lg border-2 border-white">
		<h1 class="text-md text-left lext-lg text-gray-700">Accomodation</h1>
		<p>Welcome to the Desert Oasis.</p>
<p>	Spacious private home with pool and spa, fire pit, waterfall, putting green, built in barbecue covered patio, 8 lounge chairs and gated RV parking or parking behind private electric gates for 6 cars.
	<a href="https://www.airbnb.co.uk/rooms/44003044?adults=8&location=Palm%20Springs%2C%20CA&check_in=2023-02-17&check_out=2023-02-20&federated_search_id=2ca6f13f-d1c2-4dc2-8e2a-71446bba50ea&source_impression_id=p3_1671755961_%2FpVKSXwlIuRsC%20N9&_set_bev_on_new_domain=1672532399_ZjE0MjAyZmQ0Njhj" 
	target="_blank"
	class="text-blue-600">See the house</a>
</p>
	</div>

	
</div>
