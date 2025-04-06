import React, { useState, useEffect } from "react";
import Tools from "./Tools";

const ToolRows = () => {
    const rowPattern = [3, 2, 1];
    const smallScreen = [2, 2, 2];
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const pattern = isSmallScreen ? smallScreen : rowPattern;
    let start = 0;

    useEffect(() => {
        const handleResize = () => {
            // Check if the screen is considered "small" based on Tailwind's sm breakpoint (640px)
            setIsSmallScreen(window.matchMedia("(max-width: 639px)").matches);
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="space-y-8">
            {pattern.map((count, rowIdx) => {
                const rowItems = Tools.slice(start, start + count);
                start += count;
                return (
                    <div key={rowIdx} className="flex justify-center space-x-8">
                        {rowItems.map((tech, i) => (
                            <div
                                key={i}
                                className={`${tech.className} ${tech.color} skill py-4 cursor-pointer hover:bg-white hover:scale-90 duration-500 transition-all shadow-md`}>
                                {tech.icon}
                                <span className="mt-2 text-sm uppercase">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                );
            })}
        </div>
    );
};

export default ToolRows;
