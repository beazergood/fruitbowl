<script lang="ts">
	import { onMount } from 'svelte';

	/**
	 * @type {any[]}
	 */
	let bgImage: string = '';

	const bgClasses = [
		'bg-golf-1',
		'bg-golf-2',
		'bg-golf-3',
		'bg-golf-4',
		'bg-golf-5',
		'bg-golf-6',
		'bg-golf-7',
		'bg-golf-8',
		'bg-golf-9'
	];
	function randomIx() {
		return Math.floor(Math.random() * bgClasses.length);
	}

	onMount(async () => {
		setInterval(() => {
			bgImage = bgClasses[randomIx()];
		}, 5000);
	});
</script>



<div class="flex w-screen h-screen bg-no-repeat bg-cover {bgImage}" />
