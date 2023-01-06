export type Event = {
	id: string;
	info: Info;
	location: Location;
	accommodation: Accommodation;
	meta: meta;
	itinerary: Itinerary;
	transport: Transportation;
	geoWaypoints: GeoWaypoints;
};

export type Info = {
	name: string;
	emoji: string;
	startDate: string;
	endDate: string;
	meta: {
		bgClasses: string;
		headerClasses: string;
	};
};

export type Accommodation = {
	name: string;
	description: string;
	url: string;
	location: Location;
	meta: {
		bgClasses: string;
	}
};

export type meta = {
	bgImageClasses: string[];
	
	bgClasses: string;
	headerClasses: string;
};

export type Itinerary = {
	title: string;
	items: string[];
	meta: {
		bgClasses: string;
	}
};

export type Location = {
	city: string;
	state?: string;
	country?: string;
	lat: number;
	lng: number;
};

export type Transportation = {
	title: string;
	outbound: {
		from: FlightData;
		to: FlightData;
	};
	inbound: {
		from: FlightData;
		to: FlightData;
	};
	meta: {
		bgClasses: string;
	};
};

type FlightData = {
	date: string;
	time: string;
	city: string;
	airport: string;
	flight?: string;
};

type Waypoint = {
	type: string;
	properties: {
		description: string;
		iconSize: number[];
		icon: string;
	};
	geometry: {
		type: string;
		coordinates: number[];
	};
};

export type GeoWaypoints = {
	title: string;
	type: string;
	mapStartPoint: string;
	features: Waypoint[];
};
