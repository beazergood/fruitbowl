<script>
	import Dashboard from '../../lib/components/Dashboard/Dashboard.svelte';
	import data from './data';
</script>

<head>
	<script src="https://app.embed.im/snow.js" defer></script>
</head>

<div class="grid grid-cols-1">
	<Dashboard {data} />
</div>
