import React, { useState, useEffect } from "react";
import Techlist from "./Techlist";

function Techstack() {
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1536);

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth >= 1536);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const techList = Techlist.map((tech, index) => {
        function getGridArea(index: number): string {
            if (isWideScreen) {
                switch (index) {
                    case 0:
                        return "1 / 4 / 2 / 5"; // Top of the trianglecase 1:
                    case 1:
                        return "2 / 3 / 3 / 4";
                    case 2:
                        return "2 / 4 / 3 / 5";
                    case 3:
                        return "2 / 5 / 3 / 6";
                    case 4:
                        return "3 / 2 / 4 / 3";
                    case 5:
                        return "3 / 3 / 4 / 4";
                    case 6:
                        return "3 / 4 / 4 / 5";
                    // Center the number 5
                    case 7:
                        return "3 / 5 / 4 / 6";
                    case 8:
                        return "3 / 6 / 4 / 7";
                    case 9:
                        return "4 / 1 / 5 / 2";
                    case 10:
                        return "4 / 2 / 5 / 3";
                    case 11:
                        return "4 / 3 / 5 / 4";
                    case 12:
                        return "4 / 4 / 5 / 5";
                    case 13:
                        return "4 / 5 / 5 / 6";
                    case 14:
                        return "4 / 6 / 5 / 7";
                    case 15:
                        return "4 / 7 / 5 / 8";
                    case 16:
                        return "5 / 3 / 6 / 4";
                    case 17:
                        return "5 / 4 / 6 / 5";
                    case 18:
                        return "5 / 5 / 6 / 6";
                    case 19:
                        return "5 / 6 / 6 / 7";
                    case 20:
                        return "5 / 7 / 6 / 8";
                    default:
                        return ""; // Handle out-of-bounds index
                }
            } else {
                // If not a wide screen, you can return default values or adjust as needed
                return "";
            }
        }

        const gridArea = getGridArea(index); // Function to determine grid area based on index
        return (
            <li
                key={index}
                className={`skill py-4 w-[8rem] md:w-[12rem] mr-4 cursor-pointer hover:bg-white hover:scale-90 duration-500  transition-all shadow-md ${tech.color} ${tech.className}`}
                style={{ gridArea }}>
                {tech.icon && <div>{tech.icon}</div>}
                {tech.name}
            </li>
        );
    });

    return (
        <div className="flex flex-col mx-auto gap-32 p-4 justify-center">
            <div className="flex justify-center">
                <h2>TECH STACK</h2>
            </div>
            <div className="p-4">
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-16 ">
                    {techList}
                </ul>
            </div>
        </div>
    );
}

export default Techstack;
