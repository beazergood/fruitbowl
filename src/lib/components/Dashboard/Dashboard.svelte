<script lang="ts">
	import { onMount } from 'svelte';

	import Countdown from '../Countdown/Countdown.svelte';
	import Info from '../Info/Info.svelte';
	import Weather from '../Weather/Weather.svelte';
	import Accommodation from '../Accommodation/Accommodation.svelte';
	import Itinerary from '../Itinerary/Itinerary.svelte';
	import Transport from '../Transport/Transport.svelte';
	import Map from '../Map/Map.svelte';

	export let data: any;

	/**
	 * @description background image class for the page, gets set to a random class from the bg image array in tailwind.config
	 */
	let bgImage: string = '';
	/**
	 * @description Array of background classes to choose from for this Event
	 */
	let bgClasses = [];

	function randomIx() {
		return Math.floor(Math.random() * bgClasses.length);
	}

	onMount(async () => {
		bgClasses = data.metadata.bgImageClasses;
		bgImage = bgClasses[randomIx()];
		// console.log(bgImage);
	});
</script>

<div class="{data.metadata.bgColorClass} h-screen">
	<div
		class="flex flex-col gap-4 justify-start w-screen pt-10 bg-no-repeat bg-contain bg p-4 {bgImage}"
	>
		<!-- Info widget -->
		<Info metadata={data.metadata} info={data.info} location={data.location} />

		<!-- Countdown widget -->
		<Countdown info={data.info} metadata={data.metadata} />

		<!-- Weather widget -->
		<Weather data={data.location} metadata={data.metadata} />

		<!-- Map widget -->
		<Map location={data.location} data={data.geoWaypoints} metadata={data.metadata} />

		<!-- Transport widget -->
		<Transport data={data.transport} metadata={data.metadata} />

		<!-- Accomodation widget -->
		<Accommodation data={data.accommodation} metadata={data.metadata} />

		<!-- Itinerary widget -->
		<Itinerary data={data.itinerary} metadata={data.metadata} />
	</div>
</div>
