<script lang="ts">
	import { DateTime } from 'luxon';
	import { createEventDispatcher } from 'svelte';
	import { Edit2Icon, CheckIcon } from 'svelte-feather-icons';
	import { DateInput } from 'date-picker-svelte';

	import Card from '../Card/Card.svelte';
	import type { Transportation } from './$types';

	export let data: Transportation;
	export let eventId: string;
	export let showTransportForm = false;

	let outboundDate = '';
	let outboundTakeoff = '';
	let outboundLanding = '';

	let inboundDate = '';
	let inboundTakeoff = '';
	let inboundLanding = '';

	function setDateStrings() {
		outboundDate = DateTime.fromISO(data.outbound.from.date).toFormat('dd MMM yy');
		outboundTakeoff = DateTime.fromISO(data.outbound.from.time).toFormat('HH:mm');
		outboundLanding = DateTime.fromISO(data.outbound.to.time).toFormat('HH:mm');

		inboundDate = DateTime.fromISO(data.inbound.from.date).toFormat('dd MMM yy');
		inboundTakeoff = DateTime.fromISO(data.inbound.from.time).toFormat('HH:mm');
		inboundLanding = DateTime.fromISO(data.inbound.to.time).toFormat('HH:mm');
	}
	if (!data.other) setDateStrings();
</script>

<Card meta={data.meta}>
	<h1 slot="title" class="text-md text-left lext-lg text-gray-700 font-semibold p-2">
		{data.title}
	</h1>
	<div slot="content" class="px-2 pb-2">
		{#if data.other}
			<p class="text-sm">
				{data.other}
			</p>
		{/if}
		{#if data.outbound && data.inbound && !showTransportForm}
			<div class="flex justify-between">
				<p class="text-xs font-bold">Outbound</p>
				<div class="text-sm w-28 flex justify-around">
					<span>🛫</span>
					<span>🛬 </span>
				</div>
			</div>
			<div class="flex flex-row justify-between">
				<p>{outboundDate}</p>
				<p>{data.outbound.from.airport} > {data.outbound.to.airport}</p>
				<div>
					<p>{outboundTakeoff} - {outboundLanding}</p>
					{#if data.outbound.from.flight}
						<p class="text-xs text-center">{data.outbound.from.flight}</p>
					{/if}
				</div>
			</div>
			<hr class="my-2" />
			<div class="flex justify-between">
				<p class="text-xs font-bold">Inbound</p>
				<div class="text-sm w-28 flex justify-around">
					<span>🛫</span>
					<span>🛬 </span>
				</div>
			</div>
			<div class="flex flex-row justify-between">
				<p>{inboundDate}</p>
				<p>{data.inbound.from.airport} > {data.inbound.to.airport}</p>
				<div>
					<p>{inboundTakeoff} - {inboundLanding}</p>
					{#if data.inbound.from.flight}
						<p class="text-xs text-center">{data.inbound.from.flight}</p>
					{/if}
				</div>
			</div>
		{/if}
	</div>
</Card>

<style>
	:root {
		--date-input-width: 100%;
	}

	::-webkit-input-placeholder {
		/* WebKit browsers */
		text-transform: none;
	}
	:-moz-placeholder {
		/* Mozilla Firefox 4 to 18 */
		text-transform: none;
	}
	::-moz-placeholder {
		/* Mozilla Firefox 19+ */
		text-transform: none;
	}
	:-ms-input-placeholder {
		/* Internet Explorer 10+ */
		text-transform: none;
	}
	::placeholder {
		/* Recent browsers */
		text-transform: none;
	}
</style>
