<script lang="ts">
	import type { meta } from 'src/types';
	import Card from '../Card/Card.svelte';

	export let video: { src: string, meta: any };
	
</script>

<Card meta={video.meta}>
	<div
		slot="title"
		class="text-md text-left text-gray-700 font-semibold mb-2 absolute top-2 bg-white/50 left-2 p-1 rounded-lg z-10"
	>
		📽️ Live Video
	</div>
	<div slot="content">
		<div id="map" class="block ">
			<!-- svelte-ignore a11y-media-has-caption -->
			<video controls autoplay loop playsinline style="max-width: 100%;" class="rounded-md">
				<source src={video.src} />
			</video>
		</div>
	</div>
</Card>
