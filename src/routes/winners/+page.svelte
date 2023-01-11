<script>
	import HonorsBoard from '../../lib/components/HonorsBoard/HonorsBoard.svelte';
	import data from './data';
</script>

<div class="flex justify-start w-full h-screen">
	<div class="flex flex-col">
		<HonorsBoard {data} />
		<div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
			<a
				class="text-center bottom-24 bg-white/80
                my-2 border border-gray-300 rounded-md p-2"
				href="/palm-desert"
				>&larr; Fruitbowl
			</a>
		</div>
	</div>
</div>
