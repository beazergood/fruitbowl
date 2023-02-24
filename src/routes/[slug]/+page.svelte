<script lang="ts">
	import Dashboard from '../../lib/components/Dashboard/Dashboard.svelte';
	import { eventsStore } from '../../lib/store';

	let data = {};

	eventsStore.subscribe((d) => {
		data = d[1];
	});
</script>

<head>
	<!-- {#if data._id === '1'} -->
		<script src="https://app.embed.im/snow.js" defer></script>
	<!-- {/if} -->
</head>

<div class="flex justify-center h-screen">
	<div class="flex flex-col ">
		<Dashboard {data} />
	</div>
</div>
