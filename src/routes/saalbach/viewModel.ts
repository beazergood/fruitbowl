
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
                    time: '12:00',
                    city: 'East Midlands',
                    airport: 'EMA'
                },
                to: {
                    date: '2023-01-27',
                    time: '14:00',
                    city: 'Salzburg',
                    airport: 'SZG'
                }
            },
            inbound: {
                from: {
                    date: '2023-02-04',
                    time: '21:00',
                    city: 'Salzburg',
                    airport: 'SZG'
                },
                to: {
                    date: '2023-02-04',
                    time: '19:30',
                    city: 'East Midlands',
                    airport: 'EMA'
                }
            }
        },
        accommodation: {
            name: 'Hotel Alpenhof',
            description: 'Lade blah blah blah',
            link: 'https://www.alpenhof-saalbach.at/en/',
            location: {
                lat: 47.4,
                lng: 12.7,
                city: 'Saalbach',
            }
        },
        itinerary: [
            '1/27 - Travel to Saalbach, check in to hotel, hire ski equipment',
			'1/28 - Ski day 1',
			'1/29 - Ski day 2',
			'1/30 - Ski day 3',
            '1/31 - Ski day 4',
            '2/01 - Ski day 5',
            '2/02 - Ski day 6',
            '2/03 - Ski day 7',
            '2/04 - Travel home'
        ],
    }
};

export default data;