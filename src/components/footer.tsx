import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    const localTime = new Date().toLocaleString();

    // Centralized gradient class for reuse
    const gradientText =
        "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-500";

    return (
        <footer
            className="footer bg-gradient-to-b from-[#0f1115] via-[#12161c] to-black text-white font-mono px-4 sm:px-6 py-8"
            aria-label="Footer Section">
            <div className="max-w-6xl mx-auto">
                {/* Top Message */}
                <div className="mb-2 border-b border-green-700 pb-4">
                    <h1
                        className={`text-lg sm:text-xl mb-3 font-medium ${gradientText}`}>
                        [EOF]
                    </h1>
                    <p className="text-xs sm:text-sm text-gray-400 hover:text-[#c2e7ff] transition-colors">
                        Terminal session archived. Returning to base reality...
                    </p>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs sm:text-sm text-gray-400">
                    {[
                        { label: "📍 NODE LOCATION", value: "Nairobi, KE" },
                        { label: "🕒 Local Time", value: localTime },
                        { label: "🛠 Build", value: "React + Tailwind" },
                    ].map(({ label, value }, idx) => (
                        <div
                            key={idx}
                            className="p-3 bg-gray-800/50 border-l-2 rounded-lg ">
                            <p>{label}</p>
                            <p className={gradientText}>{value}</p>
                        </div>
                    ))}
                </div>

                {/* Footer Bottom */}
                <div className="flex flex-col sm:flex-row justify-between items-center mt-6 border-t border-green-700 pt-4 text-xs sm:text-sm text-gray-400 flex-wrap">
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
