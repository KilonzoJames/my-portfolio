import React, { useEffect, useState } from "react";

// Define the interface for your component's props
interface SplashScreenProps {
    onAnimationEnd: () => void; // Specifies that onAnimationEnd is a function that returns nothing (void)
}

const SplashScreen = ({ onAnimationEnd }: SplashScreenProps) => {
    // Directly type the destructured props

    // 0 = intro, 1 = list, 2 = linux penguin, 3 = peel animation
    const [step, setStep] = useState(0);

    useEffect(() => {
        const timers = [
            setTimeout(() => setStep(1), 2000), // Show list after 2s
            setTimeout(() => setStep(2), 4000), // Show linux after 4s total
            // setTimeout(() => setStep(3), 8000), // Trigger light burst after 8s total

            // This is the crucial timer for the smooth transition.
            // It waits for the penguin to be fully visible and any related animations to finish,
            // then immediately triggers the App to show the main content.
            // Adjust the 6500ms (6.5 seconds) as needed based on your visual timing.
            // Hide completely after all animations
            setTimeout(() => {
                onAnimationEnd(); // Call the parent callback to hide the splash screen
            }, 6500),
        ];

        return () => timers.forEach(clearTimeout);
    }, [onAnimationEnd]); // Add onAnimationEnd to dependencies

    return (
        <div className="w-full h-screen flex items-center justify-center space-y-8 bg-black text-luminous text-3xl md:text-5xl rubik-vinyl-regular">
            {/* name intro */}
            {step === 0 && (
                <div className="animate-fade-in-up flex flex-col items-center space-y-2 tracking-wide">
                    <span>K1L0NZ0.J4M35</span>
                    <span>P0RTF0L1O</span>
                </div>
            )}

            {/* list */}
            <div>
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

            {/* linux penguin */}
            {/* && Unveiling The Layer */}
            {step === 2 && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 
                " // transform animate-unveil-from-below
                >
                    {/* Spotlight effect with light from above */}
                    <div
                        className="absolute inset-0 pointer-events-none z-10"
                        style={{
                            background: `radial-gradient(circle at top center, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.1) 10%, rgba(0, 0, 0, 1) 60%)`,
                            /* Increased opacity to 0.5 and light spread to 10% */
                            filter: "blur(2px)",
                        }}></div>

                    {/* Your image, now positioned above the spotlight gradient */}
                    <img
                        src="https://cdn.pixabay.com/photo/2013/07/12/15/30/penguin-149971_1280.png"
                        alt="loader-logo"
                        className="w-24 h-24 md:w-48 md:h-48 animate-ping-slow z-20"
                    />
                </div>
            )}

            {/* Light Burst Effect */}
            {/* {step === 3 && (
                <div className="absolute inset-0 bg-white animate-light-burst pointer-events-none z-50"></div>
            )} */}
        </div>
    );
};

export default SplashScreen;
