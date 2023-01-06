<script lang="ts">
	import type { Info, Location } from 'src/types';
	import Card from '../Card/Card.svelte';

	export let info: Info;
	export let location: Location;
	
</script>

<Card meta={info.meta}>
	<div
		slot="title"
		class="text-3xl font-bold text-center {info.meta.headerClasses} stroke-cyan-500 p-2 mb-2"
	>
		<span class="p-2 {info.meta.headerClasses}">
			{info.name}
		</span>
	</div>
	<div slot="content" class="pb-2">
		<h3 class="text-lg font-bold text-center">
			<!-- <span class="bg-white/80 p-2 rounded-md"> -->
				{info.emoji}
			<!-- </span> -->
		</h3>
		<div class="flex flex-col mt-2 items-center">
			<span class="text-md font-bold text-center bg-white/80 rounded-md p-1 {info.meta.headerClasses}">
				{location.city}, {location.state}
			</span>
		</div>
	</div>
</Card>
