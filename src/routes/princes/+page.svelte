<script>
	import Dashboard from '../../lib/components/Dashboard/Dashboard.svelte';
	import data from './viewModel';
</script>

<div class="flex justify-center h-screen">
	<div class="flex flex-col">
        <Dashboard data={data} />
	</div>
</div>
