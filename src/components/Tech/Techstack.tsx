import React from "react";
import ToolRows from "./ToolRows";
import ResponsiveGrid from "./ResponsiveGrid";
import SpiralItems from "./SpiralItems";

function Techstack() {
    return (
        <div className="grid place-items-center ">
            <div className="flex flex-col container w-full lg:w-2/3 space-y-12 mb-12">
                <div className="flex justify-center items-center p-12">
                    <h2>Professional Skillset</h2>
                </div>

                {/* Spiral layout for large screens */}
                <div className="aspect-square hidden lg:block w-full max-h-[calc(100vh-1rem)]">
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

                <div className="flex flex-col justify-center gap-12">
                    <h2 className="text-center mx-auto">Tools I Use</h2>
                    <ToolRows />
                </div>
            </div>
        </div>
    );
}

export default Techstack;
