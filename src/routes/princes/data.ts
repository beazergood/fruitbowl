const data = {
	_id: "3",
	href: '/princes',
	meta: {
		headerClasses: 'text-green-900',
		bgClasses: 'bg-gradient-to-b from-green-200 to-green-500 shadow-sm',
		borderClass: 'border-green-300',
		bgImageClasses: ['bg-princes-1', 'bg-princes-2', 'bg-princes-3']
	},
	info: {
		name: "Shane's 40th",
		emoji: '🏌🏻 🥪 🏴󠁧󠁢󠁥󠁮󠁧󠁿 🍀 🍺',
		startDate: '2023-03-16',
		endDate: '2023-03-18',
		meta: {
			bgClasses: 'bg-white/80 shadow-md',
			borderClass: 'border-white',
			headerClasses:
				'font-paytone text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600'
		}
	},
	location: {
		city: 'Sandwich',
		state: 'Kent',
		country: 'UK',
		lat: 51.29578638091663,
		lng: 1.3708297050788336,
		zoom: 12,
		timezone: 'America%2FLos_Angeles',
		temperatureGuage: 'C',
		meta: {
			bgClasses: 'bg-white/90 shadow-sm',
			borderClass: 'border-white'
		}
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
		},
		meta: {
			bgClasses: 'bg-white/90 shadow-sm',
			borderClass: 'border-white'
		}
	},
	itinerary: {
		title: '🎯 Itinerary',
		items: [
			{
				date: '3/16',
				description: '🚙 to Kent'
			},
			{
				date: '3/16',
				description: '🏡 stay in Air BnB'
			},
			{
				date: '3/17',
				description: '🏌🏻 @ Princes'
			},
			{
				date: '2/18',
				description: '🏌🏻 @ Princes'
			},
			{
				date: '2/18',
				description: '🚙 home'
			}
		],
		meta: {
			bgClasses: 'bg-white/90 shadow-md border-none'
		}
	}
};

export default data;
