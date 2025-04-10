import React from "react";
import ToolRows from "./ToolRows";
import ResponsiveGrid from "./ResponsiveGrid";
import SpiralItems from "./SpiralItems";
const cyberskills = [
    "PenTesting",
    "Cryptography",
    "Network Security",
    "Privilege Escalation",
];

function Techstack() {
    return (
        <div className="grid place-items-center ">
            <div className="flex flex-col container w-full lg:w-2/3 mb-12">
                <div className="flex flex-col justify-center items-center p-12">
                    <h2>Professional Skillset</h2>
                    <h2 className="text-center mx-auto">SoftwareDev</h2>
                </div>
                {/* Spiral layout for large screens */}
                <div className="aspect-square hidden lg:block w-full max-h-[calc(100vh-1rem)] mb-40">
                    <div className="merienda-class flex flex-col text-sm text-right text-gray-500">
                        <span>Psst... wanna see some magic! </span>
                        <span> Hover to reveal the hidden pathways.</span>
                    </div>
                    <ul className="relative w-full h-full">{SpiralItems}</ul>
                </div>

                {/* Responsive grid layout for smaller screens */}
                <div className="flex justify-center lg:hidden">
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-12">
                        {ResponsiveGrid}
                    </ul>
                </div>

                <div className="flex flex-col justify-center gap-12 mb-16">
                    <h2 className="text-center mx-auto">Tools I Use</h2>
                    <ToolRows />
                </div>
                <div className="flex flex-col justify-center gap-8">
                    <h2 className="text-center mx-auto">
                        Cybersecurity Skills
                    </h2>
                    <div className="p-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
                        {cyberskills.map((skill, i) => (
                            <div
                                key={i}
                                className="border border-luminous w-[8rem] h-[8rem] flex items-center justify-center text-center rounded-full p-2">
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Techstack;
