import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    const localTime = new Date().toLocaleString();

    return (
        <footer
            className="footer text-white font-mono px-4 sm:px-6 py-10"
            aria-label="Footer Section">
            <div className="max-w-6xl mx-auto">
                {/* Top Message */}
                <div className="mb-6 border-b border-green-700 pb-4">
                    <h1
                        className="text-lg sm:text-xl mb-3 font-mono font-medium bg-clip-text text-transparent 
                        bg-[length:200%_200%] bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-500
                        animate-gradient-shift">
                        [Exploration Complete]
                    </h1>
                    <p className="text-xs sm:text-sm text-[#a2b8d4] hover:text-[#c2e7ff] transition-colors">
                        Terminal session archived. Returning to base reality...
                    </p>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                    <div className="p-3 bg-gray-800/50 rounded-lg border-l-2 border-cyan-400">
                        <p className="text-gray-400">📍 NODE LOCATION</p>
                        <p className="text-cyan-300">Nairobi, KE</p>
                    </div>
                    <div className="p-3 bg-gray-800/50 rounded-lg border-l-2 border-emerald-400">
                        <p className="text-gray-400">🕒 Local Time</p>
                        <p className="text-emerald-300">{localTime}</p>
                    </div>
                    <div className="p-3 bg-gray-800/50 rounded-lg border-l-2 border-purple-400">
                        <p className="text-gray-400">🛠 Build</p>
                        <p className="text-purple-300">React + Tailwind</p>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="flex flex-col sm:flex-row justify-between items-center mt-6 border-t border-green-700 pt-4 text-xs sm:text-sm text-gray-400 transition-colors gap-4 flex-wrap">
                    <div>
                        [ © {currentYear} ] | Fueled by{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-500">
                            Coffee
                        </span>{" "}
                        &{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff79c6] to-[#ffb3d1]">
                            wild ideas.
                        </span>{" "}
                        <span className="text-[#00ffcc] font-bold">
                            Embrace the chaos,
                        </span>{" "}
                        <span className="text-[#ffcc00] font-bold">
                            stay encrypted.
                        </span>
                    </div>

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
