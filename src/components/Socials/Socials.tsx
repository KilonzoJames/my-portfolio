import React from "react";
import socialLinks from "./socialLinks";

function Socials() {
    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center md:h-screen md:w-2/3">
                <div className="flex flex-col">
                    <h2>FIND ME @ </h2>
                </div>
                <div className="container flex flex-wrap justify-center md:gap-12 mt-20 ">
                    {socialLinks.map(
                        ({ href, imgSrc, alt, color, style }, i) => {
                            return (
                                <div key={i}>
                                    <a
                                        key={i}
                                        href={href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`w-[14rem] h-[14rem] flex place-items-center cursor-pointer transition-transform duration-300 hover:scale-90 shadow-md ${color}`}
                                        style={style}>
                                        <img
                                            src={imgSrc}
                                            alt={alt}
                                            className="mx-auto w-32 h-32"
                                        />
                                    </a>
                                    <p className="m-8 text-green-600 text-2xl font-bold">
                                        {alt}
                                    </p>
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
        </div>
    );
}

export default Socials;
