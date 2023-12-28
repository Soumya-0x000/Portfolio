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
            screens: {
                'xxl': '1400px',
                '3xl': '1600px',
                '4xl': '1670px'
            },
            colors: {
                'darkBlue': '#00122c',
                'darkSlate': 'rgb(15 23 42 / 1)',
                'light': 'rgb(203 213 225 / 1)',
                'lighter': 'rgb(226 232 240 / 1)'
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
                "text-reveal": "text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s",
            },
            keyframes: {
                "text-reveal": {
                    "0%": {
                        transform: "translate(0, 100%)",
                    },
                    "100%": {
                        transform: "translate(0, 0)",
                    },
                },
            },
            dropShadow: {
                'mdDark': '10px 10px 0px rgba(158, 228, 255, 0.95)',
                'mdLight': '10px 10px 0px rgba(35, 195, 255, 0.95)',
            }
        },
    },
    plugins: [],
}

