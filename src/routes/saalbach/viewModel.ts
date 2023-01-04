
const data = {
    event: {
        name: 'Saalbach 2023',
        emoji: ['🎿 🇦🇹 🏔️'],
        startDate: '2023-01-27',
        endDate: '2023-02-04',
        location: {
            city: 'Saalbach',
            state: 'Salzburg',
            country: 'Austria',
            lat: 47.59936873230285,
            lng: 12.923908356488695,
            zoom: 7,
            timezone: 'Europe/Vienna',
            temperatureGuage: 'C'
        },
        meta: {
            headerColorClass: 'text-blue-900',
            bgColorClass: 'bg-blue-100',
            borderColorClass: 'border-blue-200',
            bgImageClasses: [
                'bg-ski-1',
                'bg-ski-2',
            ]
        },
        geoWaypoints: {
            type: 'FeatureCollection',
            mapStartPoint: [-1.332166187875824, 52.829542518374375],
            features: [
                {
                    type: 'Feature',
                    properties: {
                        description: 'Salzburg Airport',
                        iconSize: [24, 24],
                        icon: '✈️'
                    },
                    geometry: {
                        type: 'Point',
                        coordinates: [13.002881358558422, 47.79506553663708]
                    }
                },
                {
                    type: 'Feature',
                    properties: {
                        description: 'Hotel Panther\'A',
                        iconSize: [24, 24],
                        icon: '🏨'
                    },
                    geometry: {
                        type: 'Point',
                        coordinates: [12.63687086739732, 47.39303746653127]
                    }
                },

                {
                    type: 'Feature',
                    properties: {
                        description: 'Ski Circus',
                        iconSize: [24, 24],
                        icon: '⛷️'
                    },
                    geometry: {
                        type: 'Point',
                        coordinates: [12.65456083300746, 47.409820379870645]
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
                    date: '2023-01-27',
                    time: '15:30',
                    city: 'East Midlands',
                    airport: 'EMA',
                    flight: 'TOM7638'
                },
                to: {
                    date: '2023-01-27',
                    time: '18:30',
                    city: 'Salzburg',
                    airport: 'SZG'
                }
            },
            inbound: {
                from: {
                    date: '2023-02-04',
                    time: '19:40',
                    city: 'Salzburg',
                    airport: 'SZG',
                    flight: 'TOM7639'
                },
                to: {
                    date: '2023-02-04',
                    time: '20:45',
                    city: 'East Midlands',
                    airport: 'EMA'
                }
            }
        },
        accommodation: {
            name: 'Hotel Panther\'A',
            description: 'Thanks to its central location in the middle of Saalbach\'s pedestrian zone, the Hotel Panther\'A with Ski-In & Ski-Out is the perfect starting point for all activities',
            link: 'https://www.hotel-panthera.at/en/',
            location: {
                lat: 47.39303746653127,
                lng: 12.63687086739732,
                city: 'Saalbach',
            }
        },
        itinerary: [
            '1/28 - ✈️ Saalbach, 🏨 check in, rent 🎿',
            '1/29 - ⛷️ 🌭 🍺 😴',
            '1/30 - ⛷️ 🌭 🍺 😴',
            '1/31 - ⛷️ 🌭 🍺 😴',
            '2/01 - ⛷️ 🌭 🍺 😴',
            '2/02 - ⛷️ 🌭 🍺 😴',
            '2/03 - ⛷️ 🌭 🍺 😴',
            '2/04 - ✈️ home'
        ],
    }
};

export default data;