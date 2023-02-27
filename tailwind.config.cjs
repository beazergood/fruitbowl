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
                'golf-8': "url('/images/IMG_7668-short.jpg')",
                'princes-1': "url('/images/play-01.jpg')",
                'princes-2': "url('/images/IMG_2802.jpeg')",
                'princes-3': "url('/images/IMG_2762.jpeg')",
                'ski-1': "url('/images/saalbach_1.jpg')",
                'ski-2': "url('/images/saalbach_2.jpg')",
                'avocado-1': "url('/images/avocado.jpg')",
                'citrus-1': "url('/images/citrus.jpg')",
                'marionberry-1': "url('/images/marionberry.jpg')",
                'frame': "url('/svg/frame.svg')",
                'frame-1': "url('/svg/frame-w.svg')",
                'dennis-1': "url('/images/IMG_2609.jpg')",
                'dennis-2': "url('/images/IMG_2712.JPG')",
                'rectory-house': "url('/images/rectory-house.webp')",
            },
            fontFamily: {
                paytone: ["'Paytone One'", 'sans-serif']
            }
        }
    },
    plugins: [require('@tailwindcss/forms')]
};