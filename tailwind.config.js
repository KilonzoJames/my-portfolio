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
                blueish: "#07f7f7",
            },
            backgroundImage: {
                /* On About and Home page */
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
            animation: {
                /* On SplashScreen page */
                "fade-in-up": "fadeInUp 1.5s ease-out forwards",
                "ping-slow": "ping 4s cubic-bezier(0, 0, 0.1, 1) infinite",
                "unveil-from-below": "unveilFromBelow 2s ease-out forwards", // Define peel-up animation here && Adjust duration and easing
                "light-burst": "lightBurst 0.5s ease-out forwards", // New animation for light burst
                "hue-rotate": "hue-rotate 10s linear infinite",
            },
            keyframes: {
                /* On SplashScreen page */
                fadeInUp: {
                    "0%": { opacity: 0, transform: "translateY(20px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" },
                },
                // NEW KEYFRAME FOR UNVEIL FROM BELOW
                unveilFromBelow: {
                    /* On SplashScreen page */
                    "0%": {
                        transform: "translateY(0%)",
                        borderBottomLeftRadius: "0px",
                        borderBottomRightRadius: "0px",
                    }, // Starts fully covering
                    "100%": {
                        transform: "translateY(-100%)",
                        borderBottomLeftRadius: "50% 30%",
                        borderBottomRightRadius: "50% 30%",
                    }, // Slides up completely
                },
                // NEW KEYFRAME FOR LIGHT BURST
                lightBurst: {
                    "0%": { opacity: "0", transform: "scale(0)" },

                    "50%": { opacity: "1", transform: "scale(1.5)" }, // Max brightness/scale

                    "100%": { opacity: "0", transform: "scale(2)" },
                },
                // ADIOS KEYFRAME
                "hue-rotate": {
                    "0%": { filter: "hue-rotate(0deg)" },
                    "100%": { filter: "hue-rotate(360deg)" },
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
