<script>
	import Dashboard from '../../lib/components/Dashboard/Dashboard.svelte';
	import data from './data';
</script>

<div class="flex justify-center h-screen">
	<div class="flex flex-col">
		<Dashboard {data} />
		<div class="relative my-14 bg-green-600">
			<div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
				<a
					class="text-center bottom-24 bg-white/80
                my-2 border border-gray-300 rounded-md p-2"
					href="/winners"
					>Past Winners 🏆
				</a>
			</div>
		</div>
	</div>
</div>
