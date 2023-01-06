<script lang="ts">
	import { Map, Marker } from '@beyonk/svelte-mapbox';
	import type {  Location, GeoWaypoints } from './$types';
	import { PUBLIC_MAPBOX_API_TOKEN } from '$env/static/public';
	import Card from '../Card/Card.svelte';

	export let location: Location;
	export let data: GeoWaypoints;

	let mapComponent: {
		flyTo: (arg0: { center: number[]; zoom: number; speed: number }) => void;
		addControl: (arg0: mapboxgl.FullscreenControl) => void;
	};

	function onReady() {
		mapComponent.flyTo({
			center: [location.lng, location.lat],
			zoom: location.zoom,
			speed: 0.6
		});
	}
</script>

<Card meta={location.meta}>
	<div
		slot="title"
		class="text-md text-left lext-lg text-gray-700 font-semibold mb-2 absolute top-2 bg-white/50 left-2 p-1 rounded-lg z-10"
	>
		{data.title}
	</div>
	<div slot="content">
		<div id="map" class="block h-64 ">
			<Map
				accessToken={PUBLIC_MAPBOX_API_TOKEN}
				style="mapbox://styles/mapbox/outdoors-v11"
				bind:this={mapComponent}
				on:ready={onReady}
				center={[location.lng, location.lat]}
				zoom="4"
			>
				{#if data}
					{#each data.features as waypoint}
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

<style>
	.mapboxgl-popup {
		max-width: 400px;
		font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
	}

	.marker {
		display: block;
		border: none;
		border-radius: 50%;
		cursor: pointer;
		padding: 0;
	}

	:global(.mapboxgl-map) {
		height: 200px;
	}
</style>
