<script lang="ts">
	import Modal from '../Modal/Modal.svelte';
	import EventForm from '../EventForm/EventForm.svelte';

	export let open = false;
	export let showModal = false;
</script>

<aside class="absolute w-2/3 h-full bg-gray-200 border-r-2 shadow-lg z-10" class:open>
	<nav class="p-12 text-xl flex flex-col justify-between h-full">
		<div>
			<a class="block" href="/saalbach">⛷ Saalbach</a>
			<a class="block" href="/palm-desert">🏌🏻‍♂️ Fruitbowl</a>
			<a class="block ml-6 text-lg" href="/winners">Past Winners</a>
			<a class="block" href="/princes">🏌🏻‍♂️ Princes</a>
		</div>
		<button
			class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			on:click={() => (showModal = true)}
		>
			Add Event
		</button>
	</nav>
</aside>

<Modal bind:showModal>
	<EventForm />
</Modal>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
	}

	.open {
		left: 0;
	}
</style>
