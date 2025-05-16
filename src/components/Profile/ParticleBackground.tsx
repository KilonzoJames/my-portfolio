// components/ParticleBackground.tsx
import React, { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import { useTheme } from "../ThemeContext";

const ParticleBackground = () => {
    const { isDarkMode } = useTheme();

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(
        async (container: Container | undefined) => {
            await console.log(container);
        },
        []
    );

    // Determine the background color based on the theme
    const backgroundColor = isDarkMode ? "#000" : "#18163c"; // Black for dark mode, dark blue for light mode

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: { enable: false }, // ⛔️ Disable full screen so it doesn't cover all content
                background: {
                    color: {
                        value: backgroundColor, // Use the dynamically determined color
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 10,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            area: 800,
                        },
                    },
                    color: {
                        value: "#0ACF11",
                    },
                    shape: {
                        type: "circle",
                    },
                    opacity: {
                        value: 0.8,
                    },
                    size: {
                        value: 3,
                        animation: {
                            enable: true,
                            speed: 2,
                            minimumValue: 1,
                            sync: false,
                        },
                    },
                    links: {
                        color: "#0ACF11",
                        distance: 10,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "out",
                        },
                        random: false,
                        speed: 1.2,
                        straight: false,
                    },
                },
                detectRetina: true,
            }}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
            }}
        />
    );
};

export default ParticleBackground;
