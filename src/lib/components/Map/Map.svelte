<script lang="ts">
	import { Map, Marker } from '@beyonk/svelte-mapbox';

	import type { Metadata, Location, GeoWaypoints } from './$types';
	import { PUBLIC_MAPBOX_API_TOKEN } from '$env/static/public';

	import Card from '../Card/Card.svelte';

	export let metadata: Metadata;

	export let location: Location;
	export let data: GeoWaypoints;

	let mapComponent: {
		flyTo: (arg0: { center: number[]; zoom: number; speed: number }) => void;
		addControl: (arg0: mapboxgl.FullscreenControl) => void;
	};



    function onReady() {
		mapComponent.flyTo({
			center: [event.location.lng, event.location.lat],
			zoom: event.location.zoom,
			speed: 0.6
		});
		mapComponent.addControl(new mapboxgl.FullscreenControl());
	}
</script>

<Card {metadata}>
	<div slot="title">{data.title}</div>
	<div slot="content">
		<div id="map" class="block w-100 h-64">
			<Map
				accessToken={PUBLIC_MAPBOX_API_TOKEN}
				style="mapbox://styles/mapbox/outdoors-v11"
				bind:this={mapComponent}
				on:ready={onReady}
				center={[location.lng, location.lat]}
				zoom="4"
				options={{ cooperativeGestures: true }}
			>
				{#if geoWaypoints}
					{#each geoWaypoints.features as waypoint}
						<Marker
							lng={waypoint.geometry.coordinates[0]}
							lat={waypoint.geometry.coordinates[1]}
							label={waypoint.properties.description}
						>
							<span class="text-lg bg-white/70 rounded-full p-1">
								{waypoint.properties.icon}
							</span>
						</Marker>
					{/each}
				{/if}
			</Map>
		</div>
	</div>
</Card>
