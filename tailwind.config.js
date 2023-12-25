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
            }
        },
    },
    plugins: [],
}

