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
	let variation = 1;

	let bgClasses = ['bg-avocado-1', 'bg-citrus-1', 'bg-marrionberry-1'];
	let bgColors = ['bg-green-100/90', 'bg-orange-400/90', 'bg-green-100/90'];
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

<div class="items-center flex flex-col w-screen {bgImage} h-screen bg-cover bg-no-repeat pt-24 justify-between">
	<div class="flex flex-row justify-around w-full p-6 ">
		<div
			class="shadow-lg rounded-lg {bgColor} p-6 w-2/3 md:w-1/3 flex flex-col items-center"
			on:click={setBackground}
			on:keydown={setBackground}
		>
			<img src="/images/fruitbowl.png" class="mb-2" alt="Fruitbowl" width="64px" height="64px" />
			<h1 class="font-bold text-xl text-center mb-4">Fruitbowl Champions</h1>
			<ul class="">
				{#each data.items as item}
					{#if variation === 1}
						<li class="flex mb-2">
							<div class="pt-1">
								{item.year}
							</div>
							<div class="ml-2 flex flex-col">
								<div class="text-lg">
									{item.team}
								</div>
								<div class="text-sm font-medium">
									{item.venue}
								</div>
							</div>
						</li>
					{:else}
						<li>
							{item.year} |
							{item.team} |
							{item.venue}
						</li>
					{/if}
				{/each}
			</ul>
		</div>
	</div>
	<div class="mb-10">
		<button
			class="rounded-md p-2 bg-gray-200/70 text-black"
			on:click={() => (variation = 1)}
			on:keydown={() => (variation = 1)}>v1</button
		>
		<button
			class="rounded-md p-2 bg-gray-200/70 text-black"
			on:click={() => (variation = 2)}
			on:keydown={() => (variation = 2)}>v2</button
		>
	</div>
</div>
