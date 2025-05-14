import React from "react";
import ToolRows from "./ToolRows";
import ResponsiveGrid from "./ResponsiveGrid";
import SpiralItems from "./SpiralItems";
import Cybersecurity from "./Cybersecurity";
import Cybertools from "./Cybertools";

function Techstack() {
    return (
        <div className="grid place-items-center">
            {/* Container1 */}
            <div className="container1 flex flex-col w-full lg:w-2/3 mb-12">
                <div className="flex flex-col place-items-center p-12">
                    <h1 className="divtitle">Professional Skillset</h1>
                    <h1 className="divtitle">SoftwareDev</h1>
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
                <div className="flex justify-center lg:hidden mb-12">
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-12">
                        {ResponsiveGrid}
                    </ul>
                </div>

                {/* SoftwareDev Skills layout */}
                <div className="flex flex-col place-items-center gap-12 mb-16">
                    <h1 className="divtitle">Tools I Use (SoftwareDev)</h1>
                    <ToolRows />
                </div>
            </div>

            {/* Container2 */}
            <div className="container2 w-full flex flex-col place-items-center gap-8">
                <h1 className="divtitle">Cybersecurity Skills</h1>
                {/* Cybersecurity Skills layout */}
                <div className="w-full">
                    <Cybersecurity />
                </div>
            </div>

            {/* Container3 - Cybersecurity Tools */}
            <Cybertools />
        </div>
    );
}

export default Techstack;
