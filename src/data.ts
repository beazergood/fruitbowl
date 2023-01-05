export const getEvents = () => {
    return [{
        id: 1,
        metadata: {
            theme: 'Golf',
            type: 'Trip',
            status: 'Planned',
            created: new Date('2022-12-30T00:00:00'),
        },
        name: 'FruitBowl 2023',
        emojis: '🫐 🥑 🍊 🍉',
        timeDate: {
            start: new Date('2023-02-17T00:00:00'),
            end: new Date('2023-02-20T00:00:00'),
            countdown: '49 Days'
        },
        location: {
            city: 'Palm Desert',
            state: 'CA',
            country: 'USA'
        },
        transport: {
            outbound: {
                flight: {
                    airline: 'Virgin Atlantic',
                    flightNo: 'VS 123',
                    departure: {
                        airport: 'LHR',
                        terminal: '3',
                        time: new Date('2023-02-17T00:00:00')
                    }
                }
            },
            inbound: {
                flight: {
                    airline: 'Virgin Atlantic',
                    flightNo: 'VS 123',
                    departure: {
                        airport: 'LAX',
                        terminal: '3',
                        time: new Date('2023-02-20T00:00:00')
                    }
                }
            },
            carRental: {
                cost: '$40',
                whoToPay: 'Zak',
                paid: false,
                notes: 'Zak has booked an SUV, Suggett will use his car, too.'
            }
        },
        accommodation: {
            id: 1,
            address: {
                link: 'https://www.airbnb.com/rooms/44003044?adults=8&location=Palm%20Springs,%20CA&check_in=2023-02-17&check_out=2023-02-20&federated_search_id=2ca6f13f-d1c2-4dc2-8e2a-71446bba50ea&source_impression_id=p3_1671755961_/pVKSXwlIuRsC+N9'
            },
            cost: {
                perPerson: '$272',
                whoToPay: 'Trav',
                paid: false
            }
        },
        itinerary: [
            {
                id: 1,
                dayNo: 1,
                date: new Date('2023-02-17T00:00:00'),
                description: 'Arrive in LA, get car, drive to Palm Desert',
                accomodationId: 1
            },
            {
                id: 2,
                dayNo: 2,
                date: new Date('2023-02-18T00:00:00'),
                description: 'Golf @ Desert Willow',
                accomodationId: 1
            },
            {
                id: 3,
                dayNo: 3,
                date: new Date('2023-02-19T00:00:00'),
                description: 'Golf @ Canyon South',
                accomodationId: 1
            },
            {
                id: 4,
                dayNo: 4,
                date: new Date('2023-02-20T00:00:00'),
                description: 'Early Golf, drive back to LA, drop off car, depart',
                accomodationId: 1
            }
        ],
        participants: [
            { id: 1, name: 'Michael Hicks', email: 'michaelaaronhicks@gmail.com' },
            { id: 1, name: 'Matt Suggett', email: 'mattsuggett@gmail.com' },
            { id: 1, name: 'Zak Atkinson', email: 'atkinsonzachary@gmail.com' },
            { id: 1, name: 'Dave Beazer', email: 'davebeazer@me.com' },
            { id: 1, name: 'Brian Norman', email: 'bpnorman3@gmail.com' },
            { id: 1, name: 'Matt Leazer', email: 'mattyleaz@gmail.com' },
            { id: 1, name: 'Danny Swanick', email: 'dswanick@gmail.com' },
        ]
    }];
}