<script lang="ts">
	import { onMount } from 'svelte';

	export let data: {
		title: string;
		items: { team: string; year: number; venue: string; emoji?: string }[];
	};

	function randomIx() {
		return Math.floor(Math.random() * bgClasses.length);
	}

	let bgImage = '';
	let bgColor = '';

	let bgClasses = ['bg-avocado-1', 'bg-citrus-1', 'bg-marrionberry-1'];
	let bgColors = ['bg-green-100',  'bg-orange-400', 'bg-green-100'];
	onMount(async () => {
		setBackground();
	});

	function setBackground() {
		const num = randomIx();
		console.log('bgImage:', num);
		bgImage = bgClasses[num];
		bgColor = bgColors[num];
	}
</script>

<div class="items-center flex flex-col w-screen {bgImage} h-screen bg-cover bg-no-repeat pt-44">
	<div class="flex flex-row items-start h-screen">
		<div class="shadow-lg rounded-lg {bgColor} p-6 flex flex-col items-center" on:click={setBackground} on:keydown={setBackground}>
			<img src="/images/fruitbowl.png" class="mb-2" alt="Fruitbowl" width="64px" height="64px" />
			<h1 class="font-bold text-xl text-center mb-4">Fruitbowl Champions</h1>
			<ul>
				{#each data.items as item}
					<li>
						{item.year} |
						{item.team} |
						{item.venue}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
