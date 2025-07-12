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
                <div className="z-20 flex flex-col justify-center items-center text-center text-3xl">
                    {/* 1. Primary Headline */}
                    <h1 className="italic protest-guerrilla-regular text-gradient text-4xl sm:text-5xl lg:text-6xl mt-12 mb-8">
                        {"// "}Welcome to My Creative Space!
                    </h1>

                    {/* 2. Scrambled Subheading */}
                    <ScrambleText
                        text="⛧ Binding Chaos to Form, Byte by Byte ⛧"
                        className="max-w-fit mx-auto mb-8 px-3 py-2 sm:px-6 sm:py-4 border-b-4 border-blueish rounded-xl shadow-blueish-glow">
                        <p
                            data-value="K1L0NZ0 J4M35"
                            className="text-blueish special-elite-regular font-extrabold text-2xl sm:text-3xl md:text-4xl cursor-default">
                            ⛧ Engineering the Impossible ⛧
                        </p>
                    </ScrambleText>

                    {/* 3. Descriptive Tagline */}
                    <p className="italic protest-guerrilla-regular text-gradient text-lg sm:text-xl lg:text-2xl max-w-2xl opacity-90">
                        Systems obey. Logic yields. Creativity defies — a mind
                        forged in code, chaos, and control.
                    </p>

                    {/* Spacer to accommodate navbar height (e.g., 64px) */}
                    <div className="h-48 w-full"></div>
                </div>
            </div>
        </div>
    );
}

export default Home;
