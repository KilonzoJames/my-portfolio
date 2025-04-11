import React from "react";
import "../../styles/WelcomeBanner.css";

export default function WelcomeBanner() {
    const text =
        ">> Booting creative mode... Presence detected. Welcome, curious traveler. 👻 This portal hosts dangerously cool ideas. Proceed adventurously.";

    return (
        <div className="w-full overflow-hidden py-12 md:py-16 z-10">
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
                        <p className="text-[5vw] sm:text-[3vw] font-bold uppercase text-gray-400 whitespace-nowrap group-hover:text-white transition marquee-text">
                            {text}
                            <span>{text}</span>
                            <span>{text}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
