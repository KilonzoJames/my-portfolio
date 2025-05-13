import React from "react";

function Intro() {
    return (
        <div className="z-20 relative h-screen w-4/5 md:w-1/2 flex flex-col justify-center mx-auto gap-10">
            <div className="font-thin nova-cut-regular sm:text-xl">Hi, my name is</div>
            <div className="text-white font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl mt-4 rubik-vinyl-regular uppercase">
                James Kilonzo
            </div>
            <div className="text-gray-500 font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl mt-4 protest-guerrilla-regular">
                I turn abstract ideas into real, functional software.
            </div>
            <div className="text-gray-500 text-sm md:text-lg sm:text-md mt-10 tracking-wider Montserrat">
                As a software engineer, I specialize in translating abstract
                concepts into software solutions. My inherent curiosity
                constantly leads me down new paths, and currently, I'm deeply
                immersed in Cybersecurity, where I find excitement in CTFs, its
                intricate details, and the endless rabbit holes they lead down.
                When I'm not exploring the security landscape, you'll find me on
                the front-end, using React and Tailwind to build sleek,
                intuitive user interfaces. I'm also a Linux aficionado and a
                firm believer in continuous learning.
            </div>
        </div>
    );
}
export default Intro;
