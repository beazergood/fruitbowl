<script lang="ts">
	import { DateInput } from 'date-picker-svelte';
	import { CheckIcon } from 'svelte-feather-icons';
	import { setTransportationForEvent } from '../../store';

	export let eventId: string;
	export let showTransportForm: boolean;

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
		// find the event in local storage and update the transport property
		setTransportationForEvent(formData);
	}
</script>

<div class="flex flex-col transition-height duration-500 ease-in-out">
	<div class="flex flex-row-reverse">
		<button on:click={() => (showTransportForm = false)}
			><CheckIcon size="22" class="color-red-400" /></button
		>
	</div>
	<p>Add your flight details below</p>
	<form on:submit|preventDefault={handleSubmit} class="gap-2 flex flex-col mt-4">
		<h3 class="text-md">Outbound</h3>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-2 ">
			<div class="flex flex-col gap-2 ">
				<DateInput
					bind:value={outboundTakeoffDate}
					format="yyyy-MM-dd"
					placeholder="🛫 Takeoff date"
				/>
				<input
					type="time"
					class="form-input border-gray-300 rounded-md uppercase"
					placeholder="Departure takeoff time"
					aria-label="Departure takeoff time"
					id="outboundFlightTime"
					bind:value={outboundTakeoffTime}
				/>
				<input
					type="text"
					class="form-input border-gray-300 rounded-md uppercase"
					placeholder="Departure airport code"
					aria-label="Departure airport code"
					id="outboundFlightAirport"
					bind:value={outboundTakeoffAirport}
				/>
			</div>
			<div class="flex flex-col gap-2 ">
				<DateInput
					bind:value={outboundLandingDate}
					format="yyyy-MM-dd"
					placeholder="🛬 Landing date"
				/>
				<input
					type="time"
					class="form-input border-gray-300 rounded-md"
					placeholder="Arrival landing time"
					aria-label="Arrival landing time"
					id="outboundFlightTime"
					bind:value={outboundLandingTime}
				/>
				<input
					type="text"
					class="form-input border-gray-300 rounded-md uppercase"
					placeholder="Arrival airport code"
					aria-label="Arrival airport code"
					id="outboundFlightAirport"
					bind:value={outboundLandingAirport}
				/>
			</div>
		</div>
		<input
			type="text"
			class="form-input border-gray-300 rounded-md uppercase"
			placeholder="Flight #"
			aria-label="Flight #"
			id="outboundFlight"
			bind:value={outboundFlightNumber}
		/>
		<hr class="my-2" />

		<h3 class="text-md">Inbound</h3>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-2 ">
			<div class="flex flex-col gap-2 ">
				<DateInput
					bind:value={inboundTakeoffDate}
					format="yyyy-MM-dd"
					placeholder="🛫 Takeoff date"
				/>
				<input
					type="time"
					class="form-input border-gray-300 rounded-md uppercase"
					placeholder="Departure takeoff time"
					aria-label="Departure takeoff time"
					id="inboundFlightTime"
					bind:value={inboundTakeoffTime}
				/>
				<input
					type="text"
					class="form-input border-gray-300 rounded-md uppercase"
					placeholder="Departure airport code"
					aria-label="Departure airport code"
					id="inboundFlightAirport"
					bind:value={inboundTakeoffAirport}
				/>
			</div>
			<div class="flex flex-col gap-2 ">
				<DateInput
					bind:value={inboundLandingDate}
					format="yyyy-MM-dd"
					placeholder="🛬 Landing date"
				/>
				<input
					type="time"
					class="form-input border-gray-300 rounded-md"
					placeholder="Inbound landing time"
					aria-label="Inbound landing time"
					id="inboundFlightTime"
					bind:value={inboundLandingTime}
				/>
				<input
					type="text"
					class="form-input border-gray-300 rounded-md uppercase"
					placeholder="Arrival airport code"
					aria-label="Arrival airport code"
					id="inboundFlightAirport"
					bind:value={inboundLandingAirport}
				/>
			</div>
		</div>
		<input
			type="text"
			class="form-input border-gray-300 rounded-md uppercase"
			placeholder="Flight #"
			aria-label="Flight #"
			id="inboundFlight"
			bind:value={inboundFlightNumber}
		/>

		<button type="submit" class="p-2 border-2 border-green-400 rounded-md hover:bg-green-400 transition ease-in-out delay-150 hover:-translate-y-1 duration-300">Submit</button>
	</form>
</div>
