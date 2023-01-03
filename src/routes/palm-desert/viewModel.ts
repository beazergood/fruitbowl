
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
            timezone: 'America%2FLos_Angeles',
            temperatureGuage: 'F'
        },
        geoWaypoints: {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    properties: {
                        description: '<p>Air BnB</p>',
                        iconSize: [24, 24],
                        iconType: 'house'
                    },
                    geometry: {
                        type: 'Point',
                        coordinates: [-116.28497708500616, 33.73027613101971]
                    }
                },
                {
                    type: 'Feature',
                    properties: {
                        description: '<p>Desert Willow Golf Resort</p>',
                        iconSize: [24, 24]
                    },
                    geometry: {
                        type: 'Point',
                        coordinates: [-116.366, 33.765]
                    }
                },
                {
                    type: 'Feature',
                    properties: {
                        description: '<strong>Bighorn Golf Club</strong>',
                        iconSize: [24, 24]
                    },
                    geometry: {
                        type: 'Point',
                        coordinates: [-116.243, 33.405]
                    }
                },
                {
                    type: 'Feature',
                    properties: {
                        description:
                            '<strong>Big Backyard Beach Bash and Wine Fest</strong><p>EatBar (2761 Washington Boulevard Arlington VA) is throwing a <a href="http://tallulaeatbar.ticketleap.com/2012beachblanket/" target="_blank" title="Opens in a new window">Big Backyard Beach Bash and Wine Fest</a> on Saturday, serving up conch fritters, fish tacos and crab sliders, and Red Apron hot dogs. 12:00-3:00 p.m. $25.grill hot dogs.</p>',
                        iconSize: [24, 24]
                    },
                    geometry: {
                        type: 'Point',
                        coordinates: [-77.09, 38.881]
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
            '2/17 - Arrive LA, drive to Palm Desert',
            '2/18 - 18 Holes @ Cactus Canyon',
            '2/19 - 36 Holes @ Desert Run',
            '2/20 - 18 Holes @ Rustic Canyon'
        ],
        meta: {
            bgColorClass: 'bg-green-600',
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
        }
    }
};

export default data;