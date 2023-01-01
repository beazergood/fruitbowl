export type Event = {
    id: string;
    name: string;
    emoji: string[];
    location: Location;
    meta: {
        bgImageClasses: string[];
    }
}

export type Location = {
    city: string;
    state: string;
    country: string;
    lat: number;
    lng: number;
}
