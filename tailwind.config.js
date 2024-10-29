/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                sweetpurple: "#18163c",
                luminous: "#0ACF11",
                crimson: "#B22222",
            },
            gridTemplateColumns: {
                spacing: "repeat(5, 1fr)",
            },
            gridTemplateRows: {
                spacing: "repeat(5, 1fr)",
            },
            gridArea: {},
            fontSize: {
                bigfont: "2.25rem",
                mediumfont: "1.25rem",
                smallfont: "1rem",
            },
            fontWeight: {
                regular: 400,
                medium: 500,
                semibold: 600,
            },
        },
    },
    plugins: [],
};

export default tailwindConfig;
