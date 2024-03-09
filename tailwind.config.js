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
                    dim: "#111010",
                    light: "#252525",
                    secondary: "#1c1b1b",
                    tertiary: "#101215"
                },
                brown: {
                    DEFAULT: "#443B3B"
                },
                gray: {
                    DEFAULT: "#d9d9d9",
                    light: "#e8e8e8",
                    lighter: "#e5e5df",
                    lightest: "#c9c4c1",
                    darkish: "#888d8e",
                    dark: "#827d7d"
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
                15.5: "62px",
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
