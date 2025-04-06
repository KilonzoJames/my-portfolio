import tryhackme_icon from "../../assets/tryhackme_logo_icon_249349.png";

const socialLinks = [
    {
        href: "https://www.github.com/kilonzojames",
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        alt: "GITHUB",
        color: "bg-gradient-to-br from-white to-gray-900", // GitHub (Dark Gray/Black)
        style: { clipPath: "ellipse(50% 40%)" }, // Ellipse / Horizontal oval
    },
    {
        href: "https://tryhackme.com/r/p/Sevenly",
        imgSrc: tryhackme_icon,
        alt: "TryHackMe",
        color: "bg-gradient-to-br from-blue-300 to-purple-400", // TryHackMe (Light Blue/Purple)
        style: {
            clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", // Hexagon
        },
    },
    {
        href: "https://x.com/se_venly",
        imgSrc: "https://cdn2.iconfinder.com/data/icons/threads-by-instagram/24/x-logo-twitter-new-brand-contained-outline-512.png",
        alt: "TWITTER",
        color: "bg-gradient-to-br from-gray-700 to-gray-900", // X (Black/Gray)
        style: {
            clipPath:
                "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)", // Octagon
        },
    },
    {
        href: "https://www.linkedin.com/in/james-kilonzo-392249104",
        imgSrc: "https://cdn2.iconfinder.com/data/icons/social-media-grunge-1/28/social-media-line-drawn-grunge-linkedin-128.png",
        alt: "LINKEDIN",
        color: "bg-gradient-to-br from-blue-600 to-blue-800", // LinkedIn (Deep Blue)
        style: {
            clipPath:
                "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)", // Pentagram
        },
    },
];

export default socialLinks;
