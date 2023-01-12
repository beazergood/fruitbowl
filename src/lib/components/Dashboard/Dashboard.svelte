<script lang="ts">
	import { onMount } from 'svelte';

	import Countdown from '../Countdown/Countdown.svelte';
	import Info from '../Info/Info.svelte';
	import Weather from '../Weather/Weather.svelte';
	import Accommodation from '../Accommodation/Accommodation.svelte';
	import Itinerary from '../Itinerary/Itinerary.svelte';
	import Transport from '../Transport/Transport.svelte';
	import Map from '../Map/Map.svelte';
	import Video from '../Video/Video.svelte';

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
		bgClasses = data.meta.bgImageClasses;
		bgImage = bgClasses[randomIx()];
		// console.log(bgImage);
	});
</script>

<div class="{data.meta.bgClasses} h-full">
	<div
		class="w-screen pt-28 bg-no-repeat bg-contain flex flex-col items-center p-4 {bgImage} bg-fixed"
	>
		<div class="flex flex-col gap-4 justify-center w-full md:w-1/2">
			<!-- Info widget -->
			<Info info={data.info} location={data.location} />

			<!-- Countdown widget -->
			<Countdown data={data.info} />

			<!-- Weather widget -->
			<Weather data={data.location} />

			<!-- Video widget -->
			{#if data.video}
				<Video video={data.video} />
			{/if}

			<!-- Map widget -->
			<Map location={data.location} data={data.geoWaypoints} />

			<!-- Transport widget -->
			{#if data.transport}
				<Transport data={data.transport} />
			{/if}
			<!-- Accomodation widget -->
			<Accommodation data={data.accommodation} />

			<!-- Itinerary widget -->
			<Itinerary data={data.itinerary} />
		</div>
	</div>
</div>
