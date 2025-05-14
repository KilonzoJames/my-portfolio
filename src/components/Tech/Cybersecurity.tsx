import React, { useEffect, useState, useRef } from "react";

function Cybersecurity() {
    const [scrollY, setScrollY] = useState(0);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const cyberSkills = [
        "PenTesting",
        "Cryptography",
        "Privilege Escalation",
        "Malware Analysis and Reverse Engineering",
        "Web Exploitation and Binary Exploitation",
        "Forensics",
        "OSINT",
        "Social Engineering",
        "Red Teaming",
        "SIEM & Log Analysis",
        "Vulnerability Assessment",
    ];

    // Add padding: one extra screen height before and after
    const paddedSkills = ["", ...cyberSkills, ""];
    const totalScreens = paddedSkills.length;

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const offsetTop = rect.top + window.scrollY;
            const relativeScrollY = window.scrollY - offsetTop;
            setScrollY(Math.max(relativeScrollY, 0));
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const activeTextIndex = Math.min(
        Math.floor(scrollY / window.innerHeight),
        totalScreens - 1
    );

    return (
        <div
            ref={containerRef}
            className="relative"
            style={{ height: `${totalScreens * 100}vh` }}>
            {/* Fixed background relative to this section */}
            <div
                className="sticky top-0 w-full h-screen bg-cover bg-center z-0"
                style={{
                    backgroundImage:
                        "url('https://img.freepik.com/free-photo/white-notebook-black-data-firewall_1150-1733.jpg')",
                }}
            />

            {/* Text block pinned to center */}
            <div className="sticky top-0 w-full h-screen flex items-center justify-center z-10">
                {paddedSkills[activeTextIndex] && (
                    <div className="playfair-display text-green-600 text-2xl sm:text-3xl md:text-4xl tracking-wider font-extrabold backdrop-blur-sm mt-80 bg-black/40 rounded-lg transition-all duration-500 px-4 py-2">
                        {paddedSkills[activeTextIndex]}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cybersecurity;
