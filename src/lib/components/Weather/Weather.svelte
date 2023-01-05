<script lang="ts">
	import type { Location, Metadata } from './$types';
	import Card from '../Card/Card.svelte';

	export let data: Location;
	export let metadata: Metadata;

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

<Card {metadata}>
	<h1 slot="title">🌦️ Weather</h1>

	<div slot="content">
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
