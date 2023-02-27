import { writable } from 'svelte/store';
import saalbach from '../routes/_saalbach/data';
import palmDesert from '../routes/palm-desert/data';
import princes from '../routes/_princes/data';

/***
 * creates a store in localstorage and adds default trip data to it (saalbach, palmDesert, princes)
 **/
export function hydrateEventsStore(key: string, defaultValue: never[]) {
	const store = writable(defaultValue);

	if (typeof window !== 'undefined') {
		console.log('hydrating local storage');

		const storedValue = JSON.parse(window.localStorage.getItem(key));

		if (storedValue !== null) {
			const existingData = [saalbach, palmDesert, princes];

			const missingEvents = existingData.filter(
				(existingEvent) => !storedValue.some((event) => existingEvent._id === event._id)
			);

			store.set(storedValue.concat(missingEvents));
		}

		store.subscribe((value) => {
			window.localStorage.setItem(key, JSON.stringify(value));
		});
	}

	return store;
}

export function addEventToStore(newEntry) {
	eventsStore.update((oldArray) => [...oldArray, newEntry]);
}

export const eventsStore = hydrateEventsStore('events', []);

export const setTransportationForEvent = async (data) => {
	console.log('setTransportationForEvent: ', data);

	let updatedEvents;
	let updated = false;
	eventsStore.subscribe((events) => {
		console.log('events in set transportation for event', events);

		const ix = events.findIndex((event) => event._id === data._eventId);

		if (ix > -1 && !updated) {
			events[ix].transport.outbound = data.transportation.outbound;
			events[ix].transport.inbound = data.transportation.inbound;
			updatedEvents = events;
			updated = true;
		}
	});
	console.log('updatedEvents: ', updatedEvents);
	eventsStore.set(updatedEvents);
};
