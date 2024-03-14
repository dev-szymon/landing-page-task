/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme"); //TODO remove if unused
const plugin = require("tailwindcss/plugin");

export default {
    content: ["./app/**/*.{ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                primary: ["Inter", ...defaultTheme.fontFamily.sans],
                secondary: ["Exo", ...defaultTheme.fontFamily.sans]
            },
            colors: {
                white: {DEFAULT: "#fff"},
                black: {
                    DEFAULT: "#000",
                    950: "#111010",
                    900: "#101215",
                    850: "#1c1b1b",
                    800: "#252525",
                    600: "#41423e",
                    200: "#888d8e"
                },
                brown: {
                    DEFAULT: "#443B3B",
                    800: "#443b3b",
                    700: "#5f5959",
                    600: "#827d7d",
                    500: "#c9c4c1"
                },
                gray: {
                    DEFAULT: "#d9d9d9",
                    250: "#d9d9d9",
                    200: "#e5e5df",
                    150: "#e8e8e8",
                    100: "#ececec"
                },
                blue: {
                    DEFAULT: "#404f84"
                },
                lemon: {
                    DEFAULT: "#cae771",
                    600: "#cae771",
                    550: "#cae871"
                },
                purple: {
                    DEFAULT: "#844071",
                    600: "#844071"
                }
            },
            spacing: {
                ...defaultTheme.spacing,
                15: "60px",
                15.5: "62px",
                17.5: "70px",
                25: "100px",
                33: "132px",
                leet: "1337px"
            }
        }
    },
    plugins: [
        plugin(function ({addUtilities}) {
            addUtilities({
                ".bg-gradient-primary": {
                    "@apply bg-gradient-to-r from-lemon via-purple to-blue": {}
                },
                ".tracking-07": {
                    "@apply tracking-[0.07em]": {}
                }
            });
        })
    ]
};
