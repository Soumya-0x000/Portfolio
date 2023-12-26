/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            darkMode: 'class',
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
                lato: ['Lato', 'sans-serif'],
                onest: ['Onest', 'sans-serif'],
                robotoMono: ['Roboto Mono', 'monospace'],
                mooli: ['Mooli', 'sans-serif'],
                mavenPro: ['Maven Pro', 'sans-serif'],
                oxanium: ['Oxanium', 'cursive'],
                mPlusp: ['M PLUS 1p'],
                jaldi: ['Jaldi', 'sans-serif'],
                k2d: ['K2D', 'sans-serif']
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
            },
            screens: {
                '3xl': '1600px' 
            },
            colors: {
                'darkBlue': '#00122c',
                'darkSlate': 'rgb(15 23 42 / 1)',
                'light': 'rgb(203 213 225 / 1)',
                'lighter': 'rgb(226 232 240 / 1)'
            }
        },
    },
    plugins: [],
}

