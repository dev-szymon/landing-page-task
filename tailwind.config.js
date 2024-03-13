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
                white: {DEFAULT: "#fff", milk: "#ececec"},
                black: {
                    DEFAULT: "#000",
                    tertiary: "#101215",
                    dim: "#111010",
                    secondary: "#1c1b1b",
                    light: "#252525"
                },
                brown: {
                    DEFAULT: "#443B3B",
                    dark: "#41423e"
                },
                gray: {
                    darkish: "#888d8e",
                    dark: "#827d7d",
                    lightest: "#c9c4c1",
                    lighter: "#e5e5df",
                    DEFAULT: "#d9d9d9",
                    light: "#e8e8e8"
                },
                blue: {
                    dim: "#404f84"
                },
                lemon: {
                    DEFAULT: "#caea71"
                },
                purple: {
                    DEFAULT: "#844071"
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
                    "@apply bg-gradient-to-r from-lemon via-purple to-blue-dim": {}
                },
                ".tracking-07": {
                    "@apply tracking-[0.07em]": {}
                }
            });
        })
    ]
};
