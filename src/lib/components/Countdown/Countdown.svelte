<script lang="ts">
	import { DateTime } from 'luxon';
	import { onMount } from 'svelte';

	/**
	 * @type {any[]}
	 */
	let bgImage: string = '';

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

	function randomIx() {
		return Math.floor(Math.random() * bgClasses.length);
	}

	let diffInDays:number;
	onMount(async () => {
		bgImage = bgClasses[randomIx()];

		var end = DateTime.fromISO('2023-02-17');
		var start = DateTime.now();

		diffInDays = Math.floor(end.diff(start, 'days').toObject().days);
		console.log('diffInMonths',diffInDays);
		// diffInDays.toObject(); //=> { months: 1 }
	});
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
		<h1 class="text-3xl font-bold text-center text-gray-700">
			<span class="text-lg mr-2">In</span>{diffInDays} Days
		</h1>
		<h3 class="text-3xl font-bold text-center text-gray-700">17 - 20 Feb, 2023</h3>
	</div>

	<!-- Map widget TODO: add mapbox map -->
	<div class="bg-white/80 flex flex-col p-4 rounded-lg border-2 border-white">
		<h1 class="text-md font-bold text-left text-gray-700">Where</h1>
	</div>

	<!-- Transport widget -->
	<div class="bg-white/80 flex flex-col p-4 rounded-lg border-2 border-white">
		<h1 class="text-md font-bold text-left text-gray-700">Transport</h1>
	</div>

	<!-- Accomodation widget -->
	<div class="bg-white/80 flex flex-col p-4 rounded-lg border-2 border-white">
		<h1 class="text-md font-bold text-left text-gray-700">Accomodation</h1>
	</div>

	<!-- Weather widget -->
	<div class="bg-white/80 flex flex-col p-4 rounded-lg border-2 border-white">
		<h1 class="text-md font-bold text-left text-gray-700">Weather</h1>
	</div>
</div>
