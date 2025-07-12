import React from "react";

function Footer() {
    return (
        <footer className="footer text-white font-mono px-4 sm:px-6 py-10">
            <div className="max-w-6xl mx-auto">
                {/* Top Message */}
                <div className="mb-6">
                    <h2 className="text-base sm:text-lg mb-2 text-green-500">
                        [SESSION END]
                    </h2>
                    <p className="text-xs sm:text-sm">
                        Thanks for exploring the node. Logging out of
                        cyberspace...
                    </p>
                </div>

                {/* Info Section */}
                <div className="mt-8 text-xs sm:text-sm text-gray-400 space-y-2">
                    <p>[+] Node: Nairobi</p>
                    <p>[+] Local Time: {new Date().toLocaleString()}</p>
                    <p>[+] Build: v1.0.0 | Powered by React + Tailwind</p>
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 border-t border-green-800 pt-4 text-xs sm:text-sm text-gray-400 gap-4">
                    <div>
                        [ © {new Date().getFullYear()} ] — Handcrafted in the
                        terminal with coffee & bad ideas. Stay weird, Stay
                        encrypted.
                    </div>

                    <div>
                        <img
                            loading="lazy"
                            width="29"
                            height="20"
                            src="https://flagcdn.com/w40/ke.png"
                            alt="Kenya"
                            className="opacity-80"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
