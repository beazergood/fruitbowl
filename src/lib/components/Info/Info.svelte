<script lang="ts">
	import type { Metadata, Info, Location } from 'src/types';
	import Card from '../Card/Card.svelte';

	export let metadata: Metadata;
	export let info: Info;
	export let location: Location;
	
</script>

<Card {metadata}>
	<div
		slot="title"
		class="text-3xl font-bold text-center {metadata.headerColorClass} stroke-cyan-500 p-2"
	>
		{info.name}
	</div>
	<div slot="content" class="pb-2">
		<h3 class="text-xl font-bold text-center">{info.emoji}</h3>
		<h3 class="text-lg font-bold text-center {metadata.headerColorClass}">
			{location.city}, {location.state}
		</h3>
	</div>
</Card>
