<script>
	import { myStore } from '../lib/store';
	import Navbar from '../lib/components/Navbar/Navbar.svelte';
	
	let events;
	myStore.subscribe((data) => {
		console.log('events subscribe: ', data);
		events = data;
	});
</script>

<Navbar />
<div class="flex justify-center h-screen">
	<div class="flex flex-col ">
		<h1>Homepage</h1>
		{events.length}
	</div>
</div>
