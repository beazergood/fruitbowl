
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
            lat: 47.4,
            lng: 12.7,
            timezone: 'Europe/Vienna',
            temperatureGuage: 'C'
        },
        meta: {
            bgColorClass: 'bg-blue-100',
            bgImageClasses: [
                'bg-ski-1',
                'bg-ski-2',
            ]
        },
        waypoints: [{
            activity: 'ski',
            location: {
                lat: 47.4,
                lng: 12.7
            }
        }],
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