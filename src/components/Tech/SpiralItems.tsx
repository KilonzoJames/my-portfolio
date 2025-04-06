import React from "react";
import Techlist from "./Techlist";

const SpiralItems = Techlist.map((tech, index) => {
    const angle = index * 0.42; // Spiral angle step // Adjust for spiral tightness
    const radius = Math.cbrt(index) * 180; // Moderate radius growth // Increase radius over time // Adjust for spiral radius
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    let nextX = 0,
        nextY = 0,
        nextAngle,
        nextRadius; // Initialize nextX and nextY

    if (index < Techlist.length - 1) {
        nextAngle = (index + 1) * 0.42; // Use the same angle step
        nextRadius = Math.cbrt(index + 1) * 180; // Use the same radius calculation
        nextX = nextRadius * Math.cos(nextAngle);
        nextY = nextRadius * Math.sin(nextAngle);
    }

    return (
        <li
            key={index}
            className={`skill cursor-pointer hover:bg-white hover:scale-90  absolute transform translate-x-1/2 translate-y-1/2  w-[8rem] h-[8rem] rounded-full flex flex-col items-center justify-center text-center transition-all duration-300 shadow-md ${tech.color} ${tech.className}`}
            style={{
                left: "50%",
                top: "50%",
                transform: `translate(${x}px, ${y}px)`,
            }}
            onMouseEnter={(e) => {
                const line = e.currentTarget.querySelector(".orbit-line");
                if (line) {
                    line.classList.remove("hidden");
                }
            }}
            onMouseLeave={(e) => {
                const line = e.currentTarget.querySelector(".orbit-line");
                if (line) {
                    // line.classList.add("hidden");
                }
            }}>
            {/* Connecting Orbit Line */}
            {index < Techlist.length - 1 && (
                <div
                    className="absolute hidden orbit-line" // added orbit-line class
                    style={{
                        left: 0,
                        top: 0,
                        width:
                            Math.sqrt(
                                Math.pow(nextX - x, 2) + Math.pow(nextY - y, 2)
                            ) + "px",
                        transformOrigin: "0 0",
                        transform: `rotate(${
                            Math.atan2(nextY - y, nextX - x) * (180 / Math.PI)
                        }deg)`,
                        borderTop: "2px solid rgba(150, 150, 150, 0.7)",
                    }}
                />
            )}

            {/* Tech Stack Item */}
            <div className="p-2">{tech.icon}</div>
            <p className="text-xs uppercase">{tech.name}</p>
        </li>
    );
});

export default SpiralItems;
