<script>
	import '../app.css';
	import Navbar from '../lib/components/Navbar/Navbar.svelte';
	import Sidebar from '../lib/components/Sidebar/Sidebar.svelte';

	let open = false;
</script>

<Sidebar bind:open />
<Navbar bind:sidebar={open} />

<slot />
