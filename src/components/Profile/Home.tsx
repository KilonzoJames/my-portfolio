import React from "react";
import { useEffect, useRef, useState } from "react";
import ScrambleText from "./ScrambleText";
import Header from "../Heading/Header";

function Home() {
    const backgroundRef = useRef<HTMLDivElement | null>(null); // ✅ tell TypeScript the ref is a div
    const [scale, setScale] = useState(1.5);

    // Pulse function to animate scale
    const pulse = () => {
        setScale(1);
        setTimeout(() => setScale(1.5), 100); // mimic ease in/out
    };

    // Apply scale via inline style
    useEffect(() => {
        if (backgroundRef.current) {
            backgroundRef.current.style.transform = `scale(${scale})`;
        }
    }, [scale]);

    return (
        <div>
            <Header />

            {/* Spinner overlay */}
            <div className="z-20 absolute mt-8 right-4 -translate-y-1/2">
                <div className="w-24 h-24 border-t-4 border-l-2 border-luminous rounded-full animate-spin"></div>
            </div>

            <div className="z-20 fixed bottom-4 left-4 font-bold">
                <p className="italic wallpoet-regular text-lime-400 text-xl">
                    {"// "}Kilonzo James
                </p>
            </div>

            {/* Background by Hyperplexed */}
            <section
                id="background-wrapper"
                onClick={pulse}
                className="h-screen overflow-hidden relative grid place-items-center">
                <div
                    id="container"
                    ref={backgroundRef}
                    className="absolute inset-0 grid grid-cols-[repeat(60,_minmax(0,_1fr))] grid-rows-[repeat(60,_minmax(0,_1fr))]">
                    {/* Background grid boxes */}
                    {Array.from({ length: 60 * 60 }, (_, i) => (
                        <div
                            key={i}
                            className="duration-1000 hover:duration-0 hover:bg-luminous w-full h-full inline-block"></div>
                    ))}
                </div>

                {/* Optional radial overlay */}
                <div
                // from-slate-900/0 to-slate-900 
                    id="radialGradient"
                    className="absolute inset-0 bg-gradient-radial pointer-events-none"></div>

                {/* Centered heading */}
                <div className="z-20 flex flex-col justify-center items-center text-center text-3xl">
                    <ScrambleText text="K1L0NZ0 J4M35">
                        <div className="max-w-fit mx-auto my-10 px-6 py-4 bg-black border-4 border-green-500 rounded-lg shadow-md">
                            <p
                                data-value="K1L0NZ0 J4M35"
                                className="text-green-400 nova-cut-regular tracking-widest text-3xl cursor-default">
                                K1L0NZ0 J4M35
                            </p>
                        </div>
                    </ScrambleText>

                    <h1 className="italic Shojumaru text-lime-400 mt-2">
                        {"// "}Welcome to my portfolio!
                    </h1>

                    {/* Spacer for navbar height (e.g., 64px) */}
                    <div className="h-48 w-full"></div>
                </div>
            </section>
        </div>
    );
}

export default Home;
