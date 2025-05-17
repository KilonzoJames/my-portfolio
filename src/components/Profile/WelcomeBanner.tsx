import React from "react";
import "../../styles/WelcomeBanner.css";

export default function WelcomeBanner() {
    const text =
        ">> Booting into creative mode...👻 Presence detected. Welcome, curious traveler. You've stepped into a portal of dangerously cool ideas — explore boldly, and let your curiosity guide you.";

    return (
        <div className="relative flex justify-center items-center">
            <div className="w-2/3 overflow-hidden py-12 md:py-16 z-10">
                <div
                    className="flex marquee-container gap-[2rem] whitespace-nowrap"
                    style={{
                        maskImage:
                            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                        WebkitMaskImage:
                            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                    }}>
                    {/* Repeated block for seamless scroll */}
                    {[...Array(2)].map((_, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-[1rem] shrink-0">
                            <p className="sm:text-[3vw] font-bold protest-guerrilla-regular text-gray-400 whitespace-nowrap group-hover:text-white transition marquee-text">
                                {text}
                                <span>{text}</span>
                                <span>{text}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
