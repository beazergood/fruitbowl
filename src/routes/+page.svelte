<script lang="ts">
	import { myStore } from '../lib/store';
	import EventList from '../lib/components/EventList/EventList.svelte';
	import type { Event } from './$types';

	let events: Event[] = [];

	myStore.subscribe((data) => {
		console.log('events subscribe: ', data);
		events = data;
	});
</script>

<div class="flex justify-center h-screen">
	<div class="flex flex-col ">
		<h1>Homepage</h1>
		<EventList data={events} />
	</div>
</div>
