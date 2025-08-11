import React, { useEffect, useRef, useState } from "react";

// Define the interface for your component's props
interface SplashScreenProps {
    // Callback function that is called when all animations are complete.
    onAnimationEnd: () => void;
}

// A progressive splash screen that animates content in stages before showing the main application.
const SplashScreen: React.FC<SplashScreenProps> = ({ onAnimationEnd }) => {
    const [step, setStep] = useState(0);
    const timers = useRef<number[]>([]);

    useEffect(() => {
        // Chain animations with clear timeout management
        // Clear all timers on component unmount to prevent memory leaks.
        timers.current.push(
            setTimeout(() => setStep(1), 2500),
            setTimeout(() => setStep(2), 5000),
            setTimeout(onAnimationEnd, 7500)
        );

        return () => {
            timers.current.forEach(clearTimeout);
            timers.current = []; // Clear timers on unmount
        };
    }, [onAnimationEnd]);

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label="Site loading"
            className={`w-full h-screen bg-black text-white relative overflow-hidden`}>
            {/* Animated background */}
            <div
                aria-hidden
                className="absolute inset-0 pointer-events-none opacity-20 motion-safe:animate-hue-rotate"
                style={{ mixBlendMode: "screen" }}
            />

            <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="max-w-4xl w-full px-6">
                    {/* Step 0: Intro Page */}
                    {step === 0 && (
                        <div
                            className={`w-full h-64 md:h-72 flex flex-col items-center justify-center text-center transition-all ${
                                step >= 0
                                    ? "motion-safe:animate-fade-in-up"
                                    : ""
                            }`}>
                            <h1 className="text-3xl md:text-5xl font-bold text-luminous">
                                Pixels, Packets & Possibility
                            </h1>
                            <p className="text-lg md:text-2xl mt-2 text-luminous merienda-class hidden">
                                Where ideas take flight — engineering, security,
                                and scale.
                            </p>
                        </div>
                    )}
                    {/* Step 1 — Fields of Interest */}
                    {step === 1 && (
                        <div className="w-full mt-12 flex flex-col items-center gap-8 transition-opacity duration-700">
                            <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide drop-shadow-lg text-luminous animate-slideInUp">
                                Fields of Interest
                            </h1>
                            <ul className="flex flex-wrap gap-4 justify-center md:text-xl">
                                {[
                                    {
                                        label: "Cybersecurity",
                                        animationClass:
                                            "motion-safe:animate-slideInLeft",
                                        colorClasses:
                                            "text-green-300 bg-green-900/20 hover:bg-green-900/40",
                                    },
                                    {
                                        label: "Software Engineering",
                                        animationClass:
                                            "motion-safe:animate-slideInRight",
                                        colorClasses:
                                            "text-sky-300 bg-sky-900/20 hover:bg-sky-900/40",
                                    },
                                    {
                                        label: "Machine Learning",
                                        animationClass:
                                            "motion-safe:animate-slideInRight",
                                        colorClasses:
                                            "text-blue-300 bg-blue-900/20 hover:bg-blue-900/40",
                                    },
                                    {
                                        label: "Cloud / Infra",
                                        animationClass:
                                            "motion-safe:animate-slideInUp",
                                        colorClasses:
                                            "text-gray-300 bg-gray-900/20 hover:bg-gray-900/40",
                                    },
                                ].map(
                                    (
                                        { label, animationClass, colorClasses },
                                        i
                                    ) => (
                                        <li
                                            key={i}
                                            className={`
                        px-6 py-3 rounded-full transition-colors shadow-md 
                        ${colorClasses} 
                        ${animationClass}
                    `}>
                                            {label}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    )}
                    {/* Step 2 — Loader */}
                    {step === 2 && (
                        <div
                            className={`absolute inset-0 flex items-end md:items-center justify-center pb-16 md:pb-0 transition-all duration-700 z-30 pointer-events-none ${
                                step === 2 ? "opacity-100" : "opacity-0"
                            }`}
                            aria-hidden={step !== 2}>
                            <div className="flex flex-col items-center gap-3">
                                {/* Loader image (use a local SVG for performance) */}
                                <div className="motion-safe:animate-ping-slow">
                                    <img
                                        src="https://cdn.pixabay.com/photo/2013/07/12/15/30/penguin-149971_1280.png"
                                        alt="loader"
                                        className="w-20 h-20"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="flex items-center gap-2 text-sm merienda-class ">
                                    <span>Preparing experience</span>
                                    <span
                                        className="h-3 w-3 rounded-full bg-green-900 inline-block animate-blink"
                                        aria-hidden
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;
