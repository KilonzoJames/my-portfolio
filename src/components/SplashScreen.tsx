import React, { useEffect, useRef, useState } from "react";

// Define the interface for your component's props
interface SplashScreenProps {
    onAnimationEnd: () => void; // Specifies that onAnimationEnd is a function that returns nothing (void)
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onAnimationEnd }) => {
    const [step, setStep] = useState(0);
    const timers = useRef<number[]>([]);

    useEffect(() => {
        // Chain animations with clear timeout management
        timers.current.push(
            setTimeout(() => setStep(1), 2000),
            setTimeout(() => setStep(2), 5000),
            setTimeout(onAnimationEnd, 7500)
        );

        return () => {
            timers.current.forEach(clearTimeout);
            timers.current = []; // Clear timers on unmount
        };
    }, [onAnimationEnd]);

    return (
        <div className="w-full h-screen bg-black text-luminous rubik-vinyl-regular relative overflow-hidden">
            {/* Step 0: Intro Page */}
            {step === 0 && (
                <div className="w-full h-full flex flex-col items-center justify-center text-center animate-fade-in-up space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Pixels, Packets & Possibility
                    </h1>
                    <p className="text-2xl merriweather">
                        Where Ideas Take Flight
                    </p>
                </div>
            )}

            {/* Step 1: Skills Page */}
            {step === 1 && (
                <div className="w-full h-full flex flex-col items-center justify-center text-left animate-fade-in-up space-y-6">
                    <h2 className="text-4xl font-medium">Fields of Interest</h2>
                    <ul className="space-y-2 text-xl merriweather">
                        {[
                            "Cybersecurity",
                            "Software Development",
                            "AI Innovations",
                        ].map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Step 2: Penguin Loader Page */}
            {step === 2 && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-90 z-30">
                    <img
                        src="https://cdn.pixabay.com/photo/2013/07/12/15/30/penguin-149971_1280.png"
                        alt="Linux Penguin Loader"
                        className="w-24 h-24 md:w-48 md:h-48 animate-ping-slow"
                        loading="lazy"
                    />
                </div>
            )}
        </div>
    );
};

export default SplashScreen;
