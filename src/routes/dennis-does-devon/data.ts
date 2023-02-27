const data = {
	_id: '4',
	href: '/dennis-does-devon',
	meta: {
		headerClasses: 'text-green-900',
		bgClasses: 'bg-gradient-to-b from-yellow-200/80 to-green-200 shadow-sm border-green-300',
		bgImageClasses: ['bg-dennis-1', 'bg-dennis-2', 'bg-rectory-house']
	},
	info: {
		name: 'Dennis Does Devon',
		emoji: '🏄‍♂️ 🍺 😎 🎱 🏴󠁧󠁢󠁥󠁮󠁧󠁿',
		startDate: '2023-05-05',
		endDate: '2023-05-08',
		meta: {
			bgClasses: 'bg-white/80 shadow-md',
			headerClasses:
				'font-paytone text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-600 text-orange-400'
		}
	},
	location: {
		city: 'Chumleigh',
		state: 'Devon',
		country: 'UK',
		lat: 50.91277887298863,
		lng: -3.867953253968434,
		zoom: 7,
		timezone: 'America%2FLos_Angeles',
		temperatureGuage: 'C',
		meta: {
			bgClasses: 'bg-white/80 shadow-md border-white rounded-md'
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
					coordinates: [-3.867953253968434, 50.91277887298863]
				}
			}
		]
	},
	transport: {
		title: '🚙 Transport',
		other:
			"We'll be making our way down in carpools to save the planet and for emotional support on the return journey.",
		// outbound: {
		// 	from: {
		// 		date: '2023-02-16',
		// 		time: '12:20',
		// 		city: 'London',
		// 		airport: 'LHR T3',
		// 		flight: 'VS 7'
		// 	},
		// 	to: {
		// 		date: '2023-02-16',
		// 		time: '15:35',
		// 		city: 'Los Angeles',
		// 		airport: 'LAX'
		// 	}
		// },
		// inbound: {
		// 	from: {
		// 		date: '2023-02-20',
		// 		time: '22:10',
		// 		city: 'Los Angeles',
		// 		airport: 'LAX',
		// 		flight: 'VS 24'
		// 	},
		// 	to: {
		// 		date: '2023-02-21',
		// 		time: '16:25',
		// 		city: 'London',
		// 		airport: 'LHR T3'
		// 	}
		// },
		meta: {
			bgClasses: 'bg-white shadow-md border-none'
		}
	},
	accommodation: {
		title: '🏡 Accommodation',
		name: 'The Old Rectory',
		description:
			'A stylish and spacious 19th Century country house situated in the unspoiled North Devon countryside, nestled between Exmoor and Dartmoor.',
		url: 'https://theoldrectorychulmleigh.co.uk/',
		location: {
			lat: 50.91277887298863,
			lng: -3.867953253968434,
			city: 'Chumleigh'
		},
		meta: {
			bgClasses: 'bg-white shadow-md border-none'
		}
	},
	itinerary: {
		title: '🎯 Itinerary',
		items: [
			{
				date: '5/5',
				description: '🚙 to Chumleigh, 🍻 🎱 🕺🏻',
			},
			{
				date: '6/5',
				description: '🏄🏻‍♂️ @ xxx'
			},
			{
				date: '7/5',
				description: '🍻 brewery tour @ xxx'
			},
			{
				date: '8/5',
				description: '🚙 back home 🫣'
			}
		],
		meta: {
			bgClasses: 'bg-white shadow-md border-none'
		}
	}
};

export default data;
