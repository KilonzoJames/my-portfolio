import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="footer bg-gradient-to-b from-[#0f1115] via-[#12161c] to-black text-white font-mono px-4 sm:px-6 py-8"
            aria-label="Footer Section">
            <div className="max-w-6xl mx-auto">
                {/* Footer Bottom */}
                <div className="flex flex-col sm:flex-row justify-between items-center mt-6 border-t border-orange-700 pt-4 text-xs sm:text-sm text-gray-400 flex-wrap">
                    {/* Signature */}
                    <div>
                        [ © {currentYear} ] | Fueled by{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-500">
                            Coffee
                        </span>{" "}
                        &{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff79c6] to-[#ffb3d1]">
                            rogue ideas
                        </span>
                        .
                    </div>

                    {/* Hacker motto */}
                    <div className="text-center sm:text-left">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-500">
                            Chaos isn’t a glitch
                        </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-pink-300">
                            {" "}
                            — it’s the default. Embrace it.
                        </span>
                    </div>

                    {/* Flag */}
                    <div className="flex items-center gap-2">
                        <img
                            src="https://flagcdn.com/w40/ke.png"
                            alt="Kenya Flag"
                            className="h-5 w-auto rounded-sm opacity-90 hover:opacity-100 transition-opacity"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
