/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                greenGrow: "#074028",
                white: "#FFFFFF",
                grey: "#808080",
                pink: "rgba(200, 196, 196, 0.15)",
                accentGreen: "#A4CB7B",
                offBlack: "#404040",
                aWhite: "#FEFFFF",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                Lato: ["Lato", "sans-serif"],
                SPD: ["Manrope", "san-serif"],
                MTS: ["Montserrat", "san-serif"],
            },
        },
    },
    plugins: [],
};