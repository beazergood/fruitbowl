<script lang="ts">
	import type { Location } from './$types';
	import Card from '../Card/Card.svelte';

	export let data: Location;
	

	let weatherData: any;

	function getWeather() {
		weatherData = new Promise((resolve, reject) => {
			return fetch(
				`https://api.open-meteo.com/v1/forecast?latitude=${data.lat}&longitude=${
					data.lng
				}&daily=weathercode,sunrise,sunset&current_weather=true&temperature_unit=${
					data.temperatureGuage === 'F' ? 'fahrenheit' : 'celsius'
				}&timezone=${data.timezone}`
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

<Card meta={data.meta}>
	<h1 slot="title" class="text-md text-left lext-lg text-gray-700 font-semibold p-2">🌦️ Weather</h1>

	<div slot="content" class="px-2 pb-2">
		{#await weatherData}
			<p>Loading...</p>
		{:then weatherData}
			<h1 class="text-2xl text-center -mt-2">
				{Math.floor(weatherData?.current_weather?.temperature)}&deg; {data.temperatureGuage}
			</h1>
		{:catch error}
			<p>Error {error}</p>
		{/await}
	</div>
</Card>
