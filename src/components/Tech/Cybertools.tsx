import React from "react";

const tools = [
    {
        name: "Debian",
        logo: "https://files.softicons.com/download/system-icons/os-affiliates-icons-by-tatice/ico/Debian.ico",
    },
    {
        name: "Burp Suite",
        logo: "https://assets.bishopfox.com/prod-1437/Images/channels/blog/tiles/Bishop-Fox-Blog-Burp-Suite.jpg",
    },
    {
        name: "Autopsy",
        logo: "https://avatars.githubusercontent.com/u/866922?v=4",
    },
    {
        name: "Ghidra",
        logo: "https://ghidra-sre.org/images/GHIDRA_1.png",
    },
    {
        name: "Radare2",
        logo: "https://www.logo.wine/a/logo/Radare2/Radare2-Logo.wine.svg",
    },
    {
        name: "Metasploit",
        logo: "https://img.icons8.com/color/96/metasploit.png",
    },
    {
        name: "Wireshark",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Wireshark_icon.svg/100px-Wireshark_icon.svg.png",
    },
    {
        name: "John the Ripper",
        logo: "https://srv.latostadora.com/designall.dll/john-the-ripper-logo-sudadera-roja-chica--i:1413855880541413859;d:588054;w:240;b:9f0e04;m:1.jpg",
    },
    {
        name: "Nmap",
        logo: "https://nmap.org/images/nmap-logo-256x256.png",
    },
    {
        name: "Aircrack-ng",
        logo: "https://digitalrajan22m.github.io/anondgr/assets/img/tools/kali-aircrack-ng.png",
    },
];

function Cybertools() {
    return (
            <div className="w-full p-16 md:p-32">
                <div className="flex flex-col place-items-center gap-12">
                    <h2 className="divtitle">Tools I Use (Cybersecurity)</h2>
                    <p className="mb-16 text-sm md:text-lg sm:text-md tracking-wider Montserrat">
                        My security assessments delve deep, utilizing powerful
                        tools like Linux, Burp Suite, Ghidra, Autopsy,
                        Metasploit, Wireshark, and other top-tier industry
                        tools. I conduct thorough security assessments to
                        pinpoint vulnerabilities and strengthen systems against
                        the ever-changing threat landscape.
                    </p>
                </div>

                <div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-10 gap-6 justify-items-center">
                        {tools.map((tool, index) => (
                            <div
                                key={index}
                                className="transition-transform duration-300 hover:scale-110">
                                <img
                                    src={tool.logo}
                                    alt={tool.name}
                                    className="w-20 h-20 object-contain"
                                />
                                <p className="mt-2 text-center text-sm">
                                    {tool.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    );
}

export default Cybertools;
