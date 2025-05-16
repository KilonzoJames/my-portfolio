import React, { useEffect, useRef, useState } from "react";

function BoxBg() {
    const backgroundRef = useRef<HTMLDivElement | null>(null); // ✅ tell TypeScript the ref is a div
    const [scale, setScale] = useState(1.5);

    // Pulse function to animate scale
    const pulse = () => {
        setScale(1);
        setTimeout(() => setScale(1.5), 100); // mimic ease in/out
    };

    // Apply scale via inline style
    useEffect(() => {
        if (backgroundRef.current) {
            backgroundRef.current.style.transform = `scale(${scale}) rotate(45deg)`;
        }
    }, [scale]);

    return (
        <div className="animate-hue-rotate">
            {/* Background-wrapper */}
            <section
                onClick={pulse}
                className="h-screen overflow-hidden relative grid place-items-center cursor-cell">
                <div
                    id="container"
                    ref={backgroundRef}
                    className="absolute inset-0 grid grid-cols-[repeat(24,_minmax(0,_1fr))] grid-rows-[repeat(24,_minmax(0,_1fr))] transition-transform duration-500 ease-in-out">
                    {/* Background grid boxes */}
                    {Array.from({ length: 24 * 24 }, (_, i) => (
                        <div
                            key={i}
                            className="border border-gray-800 w-full h-full duration-1000 hover:duration-100 hover:bg-luminous hover:shadow-[0_0_10px_rgba(0,255,255,0.7)] transition-all"></div>
                    ))}
                </div>

                {/* Optional radial overlay */}
                <div
                    // from-slate-900/0 to-slate-900
                    id="radialGradient"
                    className="absolute inset-0 bg-gradient-radial from-transparent via-black/40 to-black pointer-events-none"></div>

                {/* Center Text */}
                <div className="z-10 special-elite-regular text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                    Adios, curious traveller !
                </div>
            </section>
        </div>
    );
}

export default BoxBg;
