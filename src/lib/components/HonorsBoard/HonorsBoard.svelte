<script lang="ts">
	import { confetti } from '@neoconfetti/svelte';
	import { onMount } from 'svelte';

	export let data: {
		title: string;
		items: { team: string; year: number; venue: string; emoji?: string }[];
	};

	function randomIx() {
		return Math.floor(Math.random() * bgClasses.length);
	}

	let bgImage = '';
	let confettiCannon = false;
	let showEmoji = false;
	let randomNum = 0;
	let bgClasses = ['bg-avocado-1', 'bg-citrus-1', 'bg-marrionberry-1'];
	let bgColors = [['rgb(122, 185, 125)'], ['rgb(234, 179, 8)'], ['rgb(34, 21, 78)']];
	onMount(async () => {
		setBackground();
	});

	function setBackground() {
		randomNum = randomIx();
		bgImage = bgClasses[randomNum];
	}
</script>

<div
	class="items-center flex flex-col w-screen {bgImage} h-screen bg-cover bg-no-repeat pt-24 justify-between"
>
	{#if confettiCannon}
		<div
			style="position: absolute; left: 50%; top: 20%; z-index: 10;"
			use:confetti={{
				force: 0.7,
				stageWidth: window.innerWidth,
				stageHeight: window.innerHeight,
				colors: bgColors[randomNum]
			}}
		/>
	{/if}
	<div class="flex flex-row justify-around items-center">
		<div class="flex flex-col w-full relative">
			<div class="block w-44 h-24 absolute top-6 left-12 z-0 rounded-full -mt-1">
				<img
					src="/images/fruitbowl.png"
					class="-mt-2 mb-2 mx-auto "
					alt="Fruitbowl"
					width="44px"
					height="44px"
				/>
			</div>
			<div
				class="bg-frame-1 bg-no-repeat bg-cover w-full flex flex-col items-center pt-14 px-1 border-b-4 border-white shadow-xl cursor-pointer"
				on:click={setBackground}
				on:keydown={setBackground}
			>
				<div class="p-4 w-100 flex flex-col items-center">
					<h1 class="font-bold text-2xl text-center mb-4 abril bg-clip-text text-gray-700">Fruitbowl Champions</h1>
					<ul class="w-full">
						{#each data.items as item}
							<li class="flex mb-2 border-b-2 border-gray-100">
								<div class="pt-1">
									{item.year}
								</div>
								<div class="ml-4 flex flex-col">
									<div class="text-lg">
										{item.team}
										{#if showEmoji}
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
			on:click={() => (showEmoji = !showEmoji)}
			on:keydown={() => (showEmoji = !showEmoji)}>{#if showEmoji}👎🏻{:else}🤩{/if}</button
		>
		<button
			class="rounded-md p-2 bg-gray-200/70 text-black"
			on:click={() => (confettiCannon = !confettiCannon)}
			on:keydown={() => (confettiCannon = !confettiCannon)}>🎉</button
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
