<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import type { Itinerary, Metadata } from './$types';

	import Card from '../Card/Card.svelte';

	export let metadata: Metadata;
	export let data: Itinerary;

	const dispatch = createEventDispatcher();

	function addItineraryItems() {
		console.log('onAddItems');
		dispatch('onAddItems');
	}
</script>

<Card {metadata}>
	<h1 slot="title">
		{data.title}
	</h1>
	<div slot="content">
		{#if data?.items?.length}
			<ul>
				{#each data.items as item}
					<li class="text-sm">⦿ {item}</li>
				{/each}
			</ul>
		{:else}
			<div class="flex flex-col items-center">
				<button class="text-center text-lg text-gray-400 border border-gray-400 w-20 rounded-lg"
					on:click={addItineraryItems}
					>+ Items</button
				>
			</div>
		{/if}
	</div>
</Card>
