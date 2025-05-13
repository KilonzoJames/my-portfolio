/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                sweetpurple: "#18163c",
                luminous: "#0ACF11",
                crimson: "#B22222",
                citizen: "#005100",
            },
            backgroundImage: {
            /* On About and Home page */
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
            animation: {
                /* On SplashScreen page */
                "fade-in-up": "fadeInUp 1.5s ease-out forwards",
                "ping-slow": "ping 4s cubic-bezier(0, 0, 0.2, 1) infinite",
            },
            keyframes: {
                /* On SplashScreen page */
                fadeInUp: {
                    "0%": { opacity: 0, transform: "translateY(20px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" },
                },
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
