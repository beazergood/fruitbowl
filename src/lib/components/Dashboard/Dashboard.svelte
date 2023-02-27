<script lang="ts">
	import { DateTime } from 'luxon';
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

	/**
	 * @description Determine if event is in the future or not. If not, we don't show the transport widget
	 */
	let futureEvent: boolean;

	function randomIx() {
		return Math.floor(Math.random() * bgClasses.length);
	}

	onMount(async () => {
		bgClasses = data.meta.bgImageClasses;
		bgImage = bgClasses[randomIx()];
		// console.log(bgImage);

		var end = DateTime.fromISO(data.startDate);
		var start = DateTime.now();
		const diff = end.diff(start, 'days').toObject().days ?? 0;
		const diffInDays = Math.floor(diff);
		futureEvent = diffInDays > 0;
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
			{#if data.transport && futureEvent}
				<Transport data={data.transport} eventId={data._id} />
			{/if}
			<!-- Accomodation widget -->
			<Accommodation data={data.accommodation} />

			<!-- Itinerary widget -->
			<Itinerary data={data.itinerary} />

			{#if data.showWinners}
			
				<a
					class="text-center bg-white/80
                my-2 border border-gray-300 rounded-md p-2"
					href="/winners"
					>Past Winners 🏆
				</a>
			{/if}
		</div>
	</div>
</div>
