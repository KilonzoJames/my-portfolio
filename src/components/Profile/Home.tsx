import React from "react";
import ScrambleText from "./ScrambleText";
import Header from "../Heading/Header";

function Home() {
    return (
        <div>
            <Header />

            {/* Spinner overlay */}
            <div className="absolute hidden lg:block right-0 -translate-y-full mt-2">
                <div className="w-20 h-20 border-t-4 border-l-2 border-luminous rounded-full animate-spin"></div>
            </div>

            {/* Date at the bottom left */}
            <div className="z-20 fixed bottom-4 left-4 font-bold">
                <p className="italic wallpoet-regular text-lime-400 text-xl">
                    {new Date().toLocaleDateString("en-GB")}
                </p>
            </div>

            {/* Centered heading */}
            <div className="h-screen overflow-hidden relative grid place-items-center cursor-crosshair">
                <div className="z-20 flex flex-col justify-center items-center text-center text-3xl">
                    <ScrambleText text="K1L0NZ0 J4M35">
                        <div className="max-w-fit mx-auto my-10 px-3 py-2 sm:px-6 sm:py-4 border-b-4 border-blueish rounded-xl shadow-blueish">
                            <p
                                data-value="K1L0NZ0 J4M35"
                                className="text-blueish special-elite-regular font-extrabold tracking-widest text-xl sm:text-2xl cursor-default">
                                ▓▓▒▒░░▒▒ ▒▒▓░░▒▒
                            </p>
                        </div>
                    </ScrambleText>

                    <h1 className="italic protest-guerrilla-regular text-gradient sm:text-4xl mt-2">
                        {"// "}Welcome to my portfolio!
                    </h1>

                    {/* Spacer for navbar height (e.g., 64px) */}
                    <div className="h-48 w-full"></div>
                </div>
            </div>
        </div>
    );
}

export default Home;
