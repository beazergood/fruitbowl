<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Itinerary } from './$types';
	import Card from '../Card/Card.svelte';

	export let data: Itinerary;

	const dispatch = createEventDispatcher();

	function addItineraryItems() {
		console.log('onAddItems');
		dispatch('onAddItems');
	}
</script>

<Card meta={data.meta}>
	<h1 slot="title" class="text-md text-left lext-lg text-gray-700 font-semibold p-2">
		{data.title}
	</h1>
	<div slot="content" class="px-2 pb-2">
		{#if data?.items?.length}
			<ul>
				{#each data.items as item}
					<li class="text-md py-2 border-b border-gray-200">
						⦿
						{item.date}
						{item.description}
						{#if item.url}
							<a href={data.url} target="_blank" class=" underline cursor-pointer">Website</a>
						{/if}
					</li>
				{/each}
			</ul>
		{:else}
			<div class="flex flex-col items-center">
				<button
					class="text-center text-lg text-gray-400 border border-gray-400 w-20 rounded-lg"
					on:click={addItineraryItems}>+ Items</button
				>
			</div>
		{/if}
	</div>
</Card>
