/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            backgroundImage: {
                'golf-1': "url('/images/IMG_4469.jpg')",
                'golf-2': "url('/images/IMG_4470.jpg')",
                'golf-3': "url('/images/IMG_4476.jpg')",
                'golf-7': "url('/images/IMG_4493.jpg')",
                'princes-1': "url('/images/play-01.jpg')",
                'princes-2': "url('/images/IMG_2802.jpeg')",
                'princes-3': "url('/images/IMG_2762.jpeg')",
                'ski-1': "url('/images/saalbach_1.jpg')",
                'ski-2': "url('/images/saalbach_2.jpg')",
                'avocado-1': "url('/images/avocado.jpg')",
                'citrus-1': "url('/images/citrus.jpg')",
                'marrionberry-1': "url('/images/marrionberry.jpg')",
                'frame': "url('/svg/frame.svg')",
                'frame-1': "url('/svg/frame-w.svg')",
            },
            fontFamily: {
                paytone: ["'Paytone One'", 'sans-serif']
            }
        },
    },
    plugins: [],
}