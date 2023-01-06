<script lang="ts">
	import type { Metadata, Info, Location } from 'src/types';
	import Card from '../Card/Card.svelte';

	export let metadata: Metadata;
	export let info: Info;
	export let location: Location;
	
	const metadataUpdated = {
		...metadata,
		borderClass: 'border-transparent',
		bgColorClass: 'bg-transparent',
	};
</script>

<Card metadata={metadataUpdated}>
	<div
		slot="title"
		class="text-3xl font-bold text-center {metadata.headerColorClass} stroke-cyan-500 p-2 mb-2"
	>
		<span class="bg-white/80 p-2 rounded-md">
			{info.name}
		</span>
	</div>
	<div slot="content" class="pb-2">
		<h3 class="text-lg font-bold text-center">
			<span class="bg-white/80 p-2 rounded-md">
				{info.emoji}
			</span>
		</h3>
		<div class="flex flex-col mt-2 items-center">
			<span class="text-md font-bold text-center bg-white/80 rounded-md p-1 {metadata.headerColorClass}">
				{location.city}, {location.state}
			</span>
		</div>
	</div>
</Card>
