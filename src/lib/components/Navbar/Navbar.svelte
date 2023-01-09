<script>
	import Hamburger from '../Hamburger/Hamburger.svelte';

	export let sidebar = false;
</script>

<header class="absolute right-0 top-2 p-2 text-gray-600">
	<nav class="flex flex-row-reverse">
		<Hamburger bind:open={sidebar} />
	</nav>
</header>
