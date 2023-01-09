<script lang="ts">
	import { v4 as uuidv4 } from 'uuid';

	import { myStore, addToStore } from '../../store';

	let events: any;

	myStore.subscribe((data) => {
		console.log('events subscribe: ', data);
		events = data;
	});

	let name: string;
	let emoji: string;
	let startDate: string;
	let endDate: string;

	function handleSubmit() {
		const formData = {
			_id: uuidv4(),
			_created: new Date(),
			name,
			emoji,
			startDate,
			endDate
		};
		console.log('formData: ', formData);
		console.log('events length: ', events.length);

		const updatedEvents = [...events, formData];
		console.log('updated events array: ', updatedEvents);

		addToStore(updatedEvents);
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
	<input
		type="text"
		class="form-input border-gray-300 rounded-md"
		placeholder="Start Date"
		id="startDate"
		bind:value={startDate}
	/>
	<input
		type="text"
		class="form-input border-gray-300 rounded-md"
		placeholder="End Date"
		id="endDate"
		bind:value={endDate}
	/>

	<button type="submit">Save</button>
</form>
