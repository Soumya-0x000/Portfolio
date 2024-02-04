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
                'lsm': '460px',
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
                "infinite-slider": "infiniteSlider 20s linear infinite",
                first: "moveVertical 30s ease infinite",
                second: "moveInCircle 20s reverse infinite",
                third: "moveInCircle 40s linear infinite",
                fourth: "moveHorizontal 40s ease infinite",
                fifth: "moveInCircle 20s ease infinite",
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
                'infiniteSlider': {
                    "0%": { transform: "translateX(0)" },
                    "100%": {
                        transform: "translateX(calc(-250px * 5))",
                    },
                },
                moveHorizontal: {
                    "0%": {
                        transform: "translateX(-50%) translateY(-10%)",
                    },
                    "50%": {
                        transform: "translateX(50%) translateY(10%)",
                    },
                    "100%": {
                        transform: "translateX(-50%) translateY(-10%)",
                    },
                },
                moveInCircle: {
                    "0%": {
                        transform: "rotate(0deg)",
                    },
                    "50%": {
                        transform: "rotate(180deg)",
                    },
                    "100%": {
                        transform: "rotate(360deg)",
                    },
                },
                moveVertical: {
                    "0%": {
                        transform: "translateY(-50%)",
                    },
                    "50%": {
                        transform: "translateY(50%)",
                    },
                    "100%": {
                        transform: "translateY(-50%)",
                    },
                },
            },
            dropShadow: {
                'mdDark': '10px 10px 0px rgba(158, 228, 255, 0.95)',
                'mdLight': '10px 10px 0px rgba(35, 195, 255, 0.95)',
            },
            boxShadow: {
                '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
            }
        },
    },
    plugins: [],
}
