<script lang="ts">
	import type { Metadata } from 'src/types';
	import Card from '../Card/Card.svelte';

	export let video: { src: string };
	export let metadata: Metadata;
</script>

<Card {metadata}>
	<div
		slot="title"
		class="text-md text-left lext-lg text-gray-700 font-semibold mb-2 absolute top-4 bg-white/50 left-2 p-2 rounded-lg z-10"
	>
		📽️ Live Video
	</div>
	<div slot="content">
		<div id="map" class="block ">
			<video controls autoplay loop playsinline style="max-width: 100%;" class="rounded-lg">
				<source src={video.src} />
			</video>
		</div>
	</div>
</Card>
