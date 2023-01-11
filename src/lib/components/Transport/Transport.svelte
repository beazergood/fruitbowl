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
	if (data.outbound && data.inbound) setDateStrings();

	let outboundTakeoffDate: Date;
	let outboundFlightNumber: string;
	let outboundTakeoffTime: string;
	let outboundTakeoffAirport: string;

	let outboundLandingDate: Date;
	let outboundLandingTime: string;
	let outboundLandingAirport: string;

	let inboundTakeoffDate: Date;
	let inboundFlightNumber: string;
	let inboundTakeoffTime: string;
	let inboundTakeoffAirport: string;

	let inboundLandingDate: Date;
	let inboundLandingTime: string;
	let inboundLandingAirport: string;

	function handleSubmit() {
		const formData = {
			_eventId: eventId,
			transportation: {
				outbound: {
					from: {
						date: outboundTakeoffDate,
						time: outboundTakeoffTime,
						airport: outboundTakeoffAirport
					},
					to: {
						date: outboundLandingDate,
						time: outboundLandingTime,
						airport: outboundLandingAirport
					},
					flightNumber: outboundFlightNumber
				},
				inbound: {
					from: {
						date: inboundTakeoffDate,
						time: inboundTakeoffTime,
						airport: inboundTakeoffAirport
					},
					to: {
						date: inboundTakeoffDate,
						time: inboundTakeoffTime,
						airport: inboundTakeoffAirport
					},
					flightNumber: inboundFlightNumber
				}
			}
		};
		console.log('formData', formData);
	}
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
		{:else if !showTransportForm && !data.other}
			<div class="flex flex-col items-center">
				<button
					class="text-center text-lg text-gray-400 border-2 border-gray-300 w-44 rounded-lg p-1"
					on:click={() => (showTransportForm = true)}>+ Flights</button
				>
			</div>
		{/if}
		{#if showTransportForm}
			<div class="flex flex-col">
				<div class="flex flex-row-reverse">
					<button on:click={() => (showTransportForm = false)}
						><CheckIcon size="22" class="color-red-400" /></button
					>
				</div>
				<p>You can add your flight details here</p>
				<form on:submit|preventDefault={handleSubmit} class="gap-2 flex flex-col mt-4">
					<h3 class="text-md">Outbound</h3>

					<div class="flex flex-row justify-between items-start">
						<div class="flex flex-col gap-2">
							<div class="flex">
								<p class="mr-2">🛫</p>
								<DateInput
									bind:value={outboundTakeoffDate}
									format="yyyy-MM-dd"
									placeholder="Takeoff"
								/>
							</div>
							<input
								type="time"
								class="form-input border-gray-300 rounded-md uppercase"
								placeholder="Time"
								id="outboundFlightTime"
								bind:value={outboundTakeoffTime}
							/>
							<input
								type="text"
								class="form-input border-gray-300 rounded-md uppercase"
								placeholder="Airport code"
								id="outboundFlightAirport"
								bind:value={outboundTakeoffAirport}
							/>
							<input
								type="text"
								class="form-input border-gray-300 rounded-md uppercase"
								placeholder="Flight #"
								id="outboundFlight"
								bind:value={outboundFlightNumber}
							/>
						</div>
						<div class="flex flex-col gap-2">
							<div class="flex">
								<p class="mr-2">🛬</p>
								<DateInput
									bind:value={outboundLandingDate}
									format="yyyy-MM-dd"
									placeholder="Landing"
								/>
							</div>
							<input
								type="time"
								class="form-input border-gray-300 rounded-md"
								placeholder="Time"
								id="outboundFlightTime"
								bind:value={outboundLandingTime}
							/>
							<input
								type="text"
								class="form-input border-gray-300 rounded-md uppercase"
								placeholder="Airport code"
								id="outboundFlightAirport"
								bind:value={outboundLandingAirport}
							/>
						</div>
					</div>

					<hr class="my-2" />

					<h3 class="text-md">Inbound</h3>
					<div class="flex flex-row justify-between items-start">
						<div class="flex flex-col gap-2">
							<div class="flex">
								<p class="mr-2">🛫</p>
								<DateInput
									bind:value={inboundTakeoffDate}
									format="yyyy-MM-dd"
									placeholder="Takeoff"
								/>
							</div>
							<input
								type="time"
								class="form-input border-gray-300 rounded-md"
								placeholder="Time"
								id="inboundFlightTime"
								bind:value={inboundTakeoffTime}
							/>
							<input
								type="text"
								class="form-input border-gray-300 rounded-md uppercase"
								placeholder="Airport code"
								id="inboundFlightAirport"
								bind:value={inboundTakeoffAirport}
							/>
							<input
								type="text"
								class="form-input border-gray-300 rounded-md uppercase"
								placeholder="Flight #"
								id="inboundFlight"
								bind:value={inboundFlightNumber}
							/>
						</div>
						<div class="flex flex-col gap-2">
							<div class="flex">
								<p class="mr-2">🛬</p>
								<DateInput
									bind:value={inboundLandingDate}
									format="yyyy-MM-dd"
									placeholder="Landing"
								/>
							</div>
							<input
								type="time"
								class="form-input border-gray-300 rounded-md"
								placeholder="Time"
								id="inboundFlightTime"
								bind:value={inboundLandingTime}
							/>
							<input
								type="text"
								class="form-input border-gray-300 rounded-md uppercase"
								placeholder="Airport code"
								id="inboundFlightAirport"
								bind:value={inboundLandingAirport}
							/>
						</div>
					</div>
					<button type="submit" class="p-2 border-2 border-green-400 rounded-md">Submit</button>
				</form>
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
