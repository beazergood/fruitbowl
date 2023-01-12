const data = {
	_id: "2",
	href: '/fruitbowl',
	meta: {
		headerClasses: 'text-green-900',
		bgClasses: 'bg-gradient-to-b from-yellow-200/80 to-green-200 shadow-sm border-green-300',
		bgImageClasses: ['bg-golf-1', 'bg-golf-2', 'bg-golf-3', 'bg-golf-7']
	},
	info: {
		name: 'Fruitbowl 2023',
		emoji: '🫐 🍉 🍊 🥑',
		startDate: '2023-02-17',
		endDate: '2023-02-20',
		meta: {
			bgClasses: 'bg-yellow-100/80 shadow-md',
			headerClasses:
				'font-paytone text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-600 text-orange-400'
		}
	},
	location: {
		city: 'Palm Desert',
		state: 'CA',
		country: 'USA',
		lat: 33.7222,
		lng: -116.375,
		zoom: 9,
		timezone: 'America%2FLos_Angeles',
		temperatureGuage: 'F',
		meta: {
			bgClasses: 'bg-yellow-100/80 shadow-md border-white rounded-md'
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
					coordinates: [-116.28497708500616, 33.73027613101971]
				}
			},
			{
				type: 'Feature',
				properties: {
					description: 'Shadow Ridge',
					iconSize: [24, 24],
					icon: '🏌🏻'
				},
				geometry: {
					type: 'Point',
					coordinates: [-116.38446162917555, 33.782479649851254]
				}
			},
			{
				type: 'Feature',
				properties: {
					description: 'Classic Club',
					iconSize: [24, 24],
					icon: '🏌🏻'
				},
				geometry: {
					type: 'Point',
					coordinates: [-116.34412154727086, 33.784819031611924]
				}
			},
			{
				type: 'Feature',
				properties: {
					description: 'SilverRock Resort',
					iconSize: [24, 24],
					icon: '🏌🏻'
				},
				geometry: {
					type: 'Point',
					coordinates: [-116.28187167327688, 33.66838170615431]
				}
			}
		]
	},
	transport: {
		title: '✈️ Transport',
		// other: 'Coming Soon',
		outbound: {
			from: {
				date: '2023-02-16',
				time: '12:20',
				city: 'London',
				airport: 'LHR T3',
				flight: 'VS 7'
			},
			to: {
				date: '2023-02-16',
				time: '15:35',
				city: 'Los Angeles',
				airport: 'LAX'
			}
		},
		inbound: {
			from: {
				date: '2023-02-20',
				time: '22:10',
				city: 'Los Angeles',
				airport: 'LAX',
				flight: 'VS 24'
			},
			to: {
				date: '2023-02-21',
				time: '16:25',
				city: 'London',
				airport: 'LHR T3'
			}
		},
		meta: {
			bgClasses: 'bg-white shadow-md border-none'
		}
	},
	accommodation: {
		title: '🏡 Accommodation',
		name: 'Desert Oasis',
		description:
			'Spacious private home with pool 🏊🏻‍♂️ 🎱 spa 🧖🏻 fire pit 🔥 waterfall 💦 putting green ⛳️  barbecue 🍗',
		url: 'https://www.airbnb.co.uk/rooms/44003044?adults=8&location=Palm%20Springs%2C%20CA&check_in=2023-02-17&check_out=2023-02-20&federated_search_id=2ca6f13f-d1c2-4dc2-8e2a-71446bba50ea&source_impression_id=p3_1671755961_%2FpVKSXwlIuRsC%20N9&_set_bev_on_new_domain=1672532399_ZjE0MjAyZmQ0Njhj',
		location: {
			lat: 47.4,
			lng: 12.7,
			city: 'Palm Desert'
		},
		meta: {
			bgClasses: 'bg-white shadow-md border-none'
		}
	},
	itinerary: {
		title: '🎯 Itinerary',
		items: [
			{
				date: '2/17 pm',
				description: '🛬 arrive LAX, 🚙 to Palm Desert 🌴',
			},
			{
				date: '2/18 am',
				description: '🏌🏻 @ Shadow Ridge 9:00',
				url: 'http://www.golfshadowridge.com/course/'
			},
			{
				date: '2/19 am',
				description: '🏌🏻 @ Classic Club - 8:50AM & 9:00AM',
				url: 'https://classicclubgolf.com/course-information/'
			},
			{
				date: '2/19 pm',
				description: '🏌🏻 @ Classic Club - possible replay deal for additional 9 or 18 in afternoon'
			},
			{
				date: '2/20 am',
				description: '🏌🏻 @ SilverRock - 8:10AM & 8:20AM',
				url: 'https://www.silverrock.org'
			},
			{
				date: '2/20 pm',
				description: '🛫 LAX'
			}
		],
		meta: {
			bgClasses: 'bg-white shadow-md border-none'
		}
	}
};

export default data;
