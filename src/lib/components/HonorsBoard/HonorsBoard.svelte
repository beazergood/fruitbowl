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
	let showImg = true;

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

<div
	class="items-center flex flex-col w-screen {bgImage} h-screen bg-cover bg-no-repeat pt-24 justify-between"
>
	<div class="flex flex-row justify-around items-center">
		<div class="flex flex-col w-full relative">
			<div class="block w-44 h-24 absolute top-4 left-12 z-0 rounded-full -mt-1">
				<img
					src="/images/fruitbowl.png"
					class="-mt-2 mb-2 mx-auto "
					alt="Fruitbowl"
					width="54px"
					height="54px"
				/>
			</div>
			<div
				class="bg-frame-1 bg-no-repeat bg-cover w-full flex flex-col items-center pt-12 px-1 border-b-4 border-stone-500"
			>
				<div class="p-4 w-full flex flex-col items-center">
					<h1
						class="font-bold text-2xl text-center mb-4 abril"
						on:click={() => (showImg = !showImg)}
						on:keydown={() => (showImg = !showImg)}
					>
						Fruitbowl Champions
					</h1>
					<ul class="w-full">
						{#each data.items as item}
							<li class="flex mb-2">
								<div class="pt-1">
									{item.year}
								</div>
								<div class="ml-4 flex flex-col">
									<div class="text-lg">
										{item.team}
										{#if variation === 1}
											{item.emoji}
										{/if}
									</div>
									<div class="text-sm font-medium">
										{item.venue}
									</div>
								</div>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="mb-10">
		<button
			class="rounded-md p-2 bg-gray-200/70 text-black"
			on:click={() => (variation = 1)}
			on:keydown={() => (variation = 1)}>👍🏻</button
		>
		<button
			class="rounded-md p-2 bg-gray-200/70 text-black"
			on:click={() => (variation = 2)}
			on:keydown={() => (variation = 2)}>👎🏻</button
		>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Vollkorn:wght@800&display=swap');

	.volkorn {
		font-family: 'Vollkorn', serif;
	}
	.abril {
		font-family: 'Abril Fatface', cursive;
	}
</style>
