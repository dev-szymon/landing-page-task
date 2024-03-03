/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme"); //TODO remove if unused
const plugin = require("tailwindcss/plugin");

export default {
    content: ["./app/**/*.{ts,tsx}"],
    theme: {
        colors: {
            white: {DEFAULT: "#fff"},
            black: {DEFAULT: "#000", dim: "#111010"},
            gray: {
                DEFAULT: "#d9d9d9"
            },
            blue: {
                dim: "#404F84"
            },
            lemon: {
                DEFAULT: "#CAEA71"
            },
            purple: {
                DEFAULT: "#844071"
            }
        },
        spacing: {
            ...defaultTheme.spacing,
            15.5: "62px"
        }
    },
    plugins: [
        plugin(function ({addUtilities}) {
            addUtilities({
                ".bg-gradient-primary": {
                    "@apply bg-gradient-to-r from-lemon via-purple to-blue-dim": {}
                }
            });
        })
    ]
};
