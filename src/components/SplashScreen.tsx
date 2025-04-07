import React from "react";

const SplashScreen = () => {
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-black space-y-8">
            <div className="relative text-center">
                <div className="absolute inset-0 bg-gradient-radial from-black via-green-400 to-green-600 rounded-full blur-3xl opacity-75 animate-pulse duration-2000"></div>
                <h1 className="relative text-luminous rubik-vinyl-regular font-bold text-4xl md:text-7xl z-10 ">
                    <span>Loading Magic . . .</span>
                    <br />
                    <span>Sit Tight, It’ll be Worth It! &#128521;</span>
                </h1>
            </div>

            <br />

            {/* Spinner (Optional) */}
            <div className="w-24 h-24 border-t-8 border-l-2 border-luminous rounded-full animate-spin"></div>
        </div>
    );
};

export default SplashScreen;
