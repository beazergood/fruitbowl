<script>
	import HonorsBoard from '../../lib/components/HonorsBoard/HonorsBoard.svelte';
	import data from './data';
</script>

<div class="flex justify-start w-full h-screen">
	<div class="flex flex-col">
		<div class="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
			<a
				class="text-center bottom-24 bg-white/20
                my-2 border border-gray-300 rounded-md p-2"
				href="/palm-desert"
				>&larr; Fruitbowl
			</a>
		</div>
		<HonorsBoard {data} />
	</div>
</div>
