<script lang="ts">
	import { v4 as uuidv4 } from 'uuid';
	import { DateInput } from 'date-picker-svelte';
	import { eventsStore, addEventToStore } from '../../store';

	let events: any;

	eventsStore.subscribe((data) => {
		console.log('events subscribe: ', data);
		events = data;
	});

	let name: string;
	let emoji: string;
	let startDate: Date;
	let endDate: Date;

	function handleSubmit() {
		const formData = {
			_id: uuidv4(),
			_created: new Date(),
			info: {
				name,
				emoji,
				startDate,
				endDate
			}
		};

		addEventToStore(formData);
	}
</script>

<h3>New Event</h3>
<form on:submit|preventDefault={handleSubmit} class="gap-2 flex flex-col mt-4">
	<input
		type="text"
		class="form-input border-gray-300 rounded-md"
		placeholder="Event name"
		id="name"
		bind:value={name}
	/>
	<input
		type="text"
		class="form-input border-gray-300 rounded-md"
		placeholder="Emoji"
		id="emoji"
		bind:value={emoji}
	/>

	<DateInput bind:value={startDate} format="yyyy-MM-dd" />

	<DateInput bind:value={endDate} format="yyyy-MM-dd" />

	<button class="pointer-cursor p-2 m-2 border-2 border-blue-400 rounded-lg" type="submit"
		>Save</button
	>
</form>

<style>
	:root{

		--date-input-width: 100%;
	}
</style>