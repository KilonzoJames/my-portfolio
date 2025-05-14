import React from "react";

function Logo() {
    return (
        <div className="flex text-2xl font-bold md:text-3xl hover:scale-75 transition-all duration-500">
            <a
                className="protest-guerrilla-regular text-flicker-in-glow text-luminous"
                href="/">
                <span className="md:mx-8"></span>
                <span>KILONZO</span>
                <span> JAMES</span>
            </a>
        </div>
    );
}

export default Logo;
