/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                fraunces: ['Fraunces', 'serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            },
            colors: {
                darkCyan: {
                    500: 'hsl(158, 36%, 37%)',
                },
                cream: {
                    500: 'hsl(30, 38%, 92%)',
                },
                veryDarkBlue: {
                    500: 'hsl(212, 21%, 14%)',
                },
                darkGrayishBlue: {
                    500: 'hsl(228, 12%, 48%)',
                },
            },
        },
    },
    plugins: [],
};