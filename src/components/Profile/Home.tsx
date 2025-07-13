import React from "react";
import ScrambleText from "./ScrambleText";
import Header from "../Heading/Header";

function Home() {
    const currentDate = new Date().toLocaleDateString("en-GB");

    return (
        <div>
            <Header />

            {/* Spinner overlay (visible only on large screens) */}
            <div className="absolute hidden lg:block right-0 -translate-y-full mt-2">
                <div className="w-20 h-20 border-t-4 border-l-2 border-luminous rounded-full animate-spin"></div>
            </div>

            {/* Date display — bottom left corner */}
            <div className="fixed bottom-4 left-4 z-20 font-bold">
                <p className="italic wallpoet-regular text-lime-400 text-xl">
                    {currentDate}
                </p>
            </div>

            {/* Centered heading */}
            {/* ▓▓▒▒░░▒▒ ▒▒▓░░▒▒ */}
            <div className="h-screen overflow-hidden relative grid place-items-center cursor-crosshair">
                <div className="z-20 flex flex-col justify-center items-center text-center">
                    {/* 1. Primary Headline */}
                    <h1 className="italic protest-guerrilla-regular text-gradient text-4xl sm:text-5xl lg:text-6xl mt-12 mb-6 p-2">
                        {"// "}Welcome to My Creative Space!
                    </h1>

                    {/* 2. Descriptive Tagline */}
                    <p className="italic protest-guerrilla-regular text-gradient text-xl sm:text-2xl lg:text-3xl max-w-2xl opacity-90 mb-6 p-4 mx-4">
                        Systems obey. Logic yields. Creativity defies — a mind
                        forged in code, chaos, and control.
                    </p>

                    {/* 3. Scrambled Subheading */}
                    <ScrambleText
                        text="⛧ Binding Chaos to Form, Byte by Byte ⛧"
                        className="inline-block mb-8 border-b-4 border-blueish rounded-xl shadow-blueish-glow max-w-[95vw] mx-auto">
                        <p
                            data-value="K1L0NZ0 J4M35"
                            className="text-blueish special-elite-regular font-extrabold text-lg sm:text-xl md:text-2xl whitespace-nowrap p-4">
                            ⛧ Engineering the Impossible ⛧
                        </p>
                    </ScrambleText>

                    {/* Spacer to accommodate navbar height (e.g., 64px) */}
                    <div className="h-48 w-full"></div>
                </div>
            </div>
        </div>
    );
}

export default Home;
