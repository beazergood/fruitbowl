
const data = {
    event: {
        name: 'Fruitbowl 2023',
        emoji: '🫐 🍉 🍊 🥑',
        startDate: '2023-02-17',
        endDate: '2023-02-20',
        location: {
            city: 'Palm Desert',
            state: 'CA',
            country: 'USA',
            lat: 33.7222,
            lng: -116.375,
            zoom: 9,
            timezone: 'America%2FLos_Angeles',
            temperatureGuage: 'F'
        },
        meta: {
            headerColorClass: 'text-green-400',
            bgColorClass: 'bg-green-600',
            borderColorClass: 'border-green-300',
            bgImageClasses: [
                'bg-golf-1',
                'bg-golf-2',
                'bg-golf-3',
                'bg-golf-4',
                'bg-golf-5',
                'bg-golf-6',
                'bg-golf-7',
                'bg-golf-8',
                'bg-golf-9'
            ]
        },
        geoWaypoints: {
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
                        description: 'Bighorn Golf Club',
                        iconSize: [24, 24],
                        icon: '🏌🏻'
                    },
                    geometry: {
                        type: 'Point',
                        coordinates: [-116.40899741534282, 33.67953802551937]
                    }
                },
                {
                    type: 'Feature',
                    properties: {
                        description: 'Desert Willow Golf Course',
                        iconSize: [24, 24],
                        icon: '🏌🏻'
                    },
                    geometry: {
                        type: 'Point',
                        coordinates: [-116.36666367301228, 33.766793430727844]
                    }
                },
                {
                    type: 'Feature',
                    properties: {
                        description:
                            'Palm Desert Golf Club',
                        iconSize: [24, 24],
                        icon: '🏌🏻'
                    },
                    geometry: {
                        type: 'Point',
                        coordinates: [-116.31741064417697, 33.75093163733706]
                    }
                }
            ]
        },
        transport: {
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
            }
        },
        accommodation: {
            name: 'Desert Oasis',
            description: 'Spacious private home with pool and spa, fire pit, waterfall, putting green, built in barbecue...',
            url: 'https://www.airbnb.co.uk/rooms/44003044?adults=8&location=Palm%20Springs%2C%20CA&check_in=2023-02-17&check_out=2023-02-20&federated_search_id=2ca6f13f-d1c2-4dc2-8e2a-71446bba50ea&source_impression_id=p3_1671755961_%2FpVKSXwlIuRsC%20N9&_set_bev_on_new_domain=1672532399_ZjE0MjAyZmQ0Njhj',
            location: {
                lat: 47.4,
                lng: 12.7,
                city: 'Saalbach',
            }
        },
        itinerary: [
            '2/17 - 🛬 LAX, 🚙 to Palm Desert',
            '2/18 - 18 🏌🏻 @ Bighorn Golf Club',
            '2/19 - 36 🏌🏻 @ Desert Willow',
            '2/20 - 18 🏌🏻 @ Palm Desert, 🛫 LAX'
        ],
    }
};

export default data;