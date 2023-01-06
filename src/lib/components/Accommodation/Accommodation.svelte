<script lang="ts">
	import Card from '../Card/Card.svelte';
	import type { Accommodation } from './$types';

	export let data: Accommodation;
</script>

<Card metadata={data.metadata}>
	<h1 slot="title" class="text-md text-left lext-lg text-gray-700 font-semibold p-2">
		{data.title}
	</h1>
	<div slot="content" class="px-2 pb-2">
		<p class="text-sm font-medium mt-2">{data.name}</p>
		<p class="text-sm">
			{data.description}
			<a href={data.url} target="_blank" class="text-blue-600 underline cursor-pointer">View website</a>
		</p>
	</div>
</Card>
