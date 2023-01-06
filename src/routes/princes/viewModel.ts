const data = {
	id: 2,
	info: {
		name: "Shane's 40th",
		emoji: '🏌🏻 🥪 🏴󠁧󠁢󠁥󠁮󠁧󠁿 🍀 🍺',
		startDate: '2023-03-16',
		endDate: '2023-03-18'
	},
	location: {
		city: 'Sandwich',
		state: 'Kent',
		country: 'UK',
		lat: 51.29578638091663,
		lng: 1.3708297050788336,
		zoom: 12,
		timezone: 'America%2FLos_Angeles',
		temperatureGuage: 'C'
	},
	metadata: {
		headerColorClass: 'text-green-900',
		bgColorClass: 'bg-green-800',
		borderClass: 'border-green-300',
		bgImageClasses: [
			'bg-princes-1',
			'bg-princes-2',
			'bg-princes-3'
		]
	},
	geoWaypoints: {
		title: '📍 Where',
		type: 'FeatureCollection',
		features: [
			{
				type: 'Feature',
				properties: {
					description: 'Air BnB',
					iconSize: [24, 24],
					icon: '🏠'
				},
				geometry: {
					type: 'Point',
					coordinates: [1.3708297050788336, 51.29378638091663]
				}
			},
			{
				type: 'Feature',
				properties: {
					description: 'Air BnB',
					iconSize: [24, 24],
					icon: '🏌🏻'
				},
				geometry: {
					type: 'Point',
					coordinates: [1.3708297050788336, 51.29578638091663]
				}
			}
		]
	},
	accommodation: {
		title: '🏡 Accommodation',
		name: 'Princes Golf Club Lodge',
		description:
			"Ask about the burger Collin Morikawa had after winning the Open and you'll get a free headache",
		url: 'https://www.princesgolfclub.co.uk/',
		location: {
			lat: 51.29578638091663,
			lng: 1.3708297050788336,
			city: 'Sandwich'
		}
	},
	itinerary: {
		title: '🎯 Itinerary',
		items: [
			'3/16 - 🚙 to fuckin\' Kent, stay in Air BnB',
			'3/17 - 18 🏌🏻 @ Princes',
			'2/18 - 18 🏌🏻 @ Princes, 🚙 home',
		]
	}
};

export default data;
