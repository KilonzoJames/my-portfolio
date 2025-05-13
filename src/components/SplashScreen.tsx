import React, { useEffect, useState } from "react";

const SplashScreen = () => {
    const [step, setStep] = useState(0); // 0 = intro, 1 = list, 2 = linux

    useEffect(() => {
        const timers = [
            setTimeout(() => setStep(1), 2000), // Show list after 2s
            setTimeout(() => setStep(2), 4000), // Show linux after 4s total
        ];

        return () => timers.forEach(clearTimeout);
    }, []);

    return (
        <div className="w-full h-screen flex items-center justify-center space-y-8 bg-black text-luminous text-3xl md:text-5xl rubik-vinyl-regular">
            {step === 0 && (
                <div className="intro animate-fade-in-up flex flex-col items-center space-y-2 tracking-wide">
                    <span>K1L0NZ0.J4M35</span>
                    <span>P0RTF0L1O</span>
                </div>
            )}

            <div className="list">
                {step === 1 && (
                    <>
                        <div className="hidden md:block animate-fade-in-up">
                            Cybersecurity | SoftwareDev
                        </div>
                        <div className="md:hidden flex flex-col animate-fade-in-up">
                            <span>Cybersecurity</span>
                            <span>SoftwareDev</span>
                        </div>
                    </>
                )}
            </div>

            {step === 2 && (
                <div className="linux fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                    {/* Spotlight effect with light from above */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: `radial-gradient(circle at top center, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.1) 10%, rgba(0, 0, 0, 1) 60%)`,
                            // Optional: Add a subtle blur for a softer light effect
                            /* Increased opacity to 0.5 and light spread to 10% */
                            filter: "blur(2px)",
                        }}></div>

                    {/* Your image, now positioned above the spotlight gradient */}
                    <img
                        src="https://cdn.pixabay.com/photo/2013/07/12/15/30/penguin-149971_1280.png"
                        alt="loader-logo"
                        className="w-48 h-48 animate-ping-slow relative z-10" // z-10 ensures the image is on top of the spotlight gradient
                    />
                </div>
            )}
        </div>
    );
};

export default SplashScreen;
