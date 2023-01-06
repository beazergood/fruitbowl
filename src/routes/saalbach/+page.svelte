<script>
	import Dashboard from '../../lib/components/Dashboard/Dashboard.svelte';
	import data from './viewModel';
</script>

<head>
	<script src="https://app.embed.im/snow.js" defer></script>
</head>

<div class="flex justify-center h-screen">
	<div class="flex flex-col ">
		<Dashboard {data} />
	</div>
</div>
