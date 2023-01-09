import { writable } from 'svelte/store';

export function createLocalStorageStore(key: string, defaultValue: never[]) {
    const store = writable(defaultValue);

    if(typeof window !== 'undefined'){

        const storedValue = JSON.parse(window.localStorage.getItem(key));
        if (storedValue !== null) {
            store.set(storedValue);
        }
        
        store.subscribe(value => {
            window.localStorage.setItem(key, JSON.stringify(value));
        });
    }

    return store;
}

export function addToStore(newEntry) {
    myStore.update(oldArray => [...oldArray, newEntry]);
}

export const myStore = createLocalStorageStore('events', []);
