import { writable } from 'svelte/store';
import saalbach from '../routes/_saalbach/data';
import palmDesert from '../routes/_palm-desert/data';
import princes from '../routes/_princes/data';

export function createLocalStorageStore(key: string, defaultValue: never[]) {
	const store = writable(defaultValue);

	if (typeof window !== 'undefined') {
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

export function addToStore(newEntry) {
	myStore.update((oldArray) => [...oldArray, newEntry]);
}

export const myStore = createLocalStorageStore('events', []);
