<script lang="ts">
	import { eventsStore } from '../lib/store';
	import EventList from '../lib/components/EventList/EventList.svelte';
	import type { Event } from './$types';
	import Navbar from '../lib/components/Navbar/Navbar.svelte';

	let events: Event[] = [];

	eventsStore.subscribe((data) => {
		events = data;
	});
</script>

<Navbar />
<div class="flex justify-center h-screen">
	<div class="flex flex-col ">
		<h1>Homepage</h1>
		<EventList data={events} />
		<a href="/winners">Winners</a>
	</div>
</div>
