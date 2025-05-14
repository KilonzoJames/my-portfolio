import React, { useEffect } from "react";
import { useAnimate } from "framer-motion";
import { useTranslation } from "react-i18next";

const baseClass =
    "h-9 hover-text flex justify-center items-center bg-clip-text text-center text-transparent bg-gradient-to-r";

const NAMES = [
    {
        text: "James",
        className: `${baseClass} from-[#ff1835] to-[#ffc900]`,
    },
    {
        text: "Kilonzo",
        className: `${baseClass} text-shadow-glow from-[#0077ff] to-[#00e7df]`,
    },
    {
        text: "Mutio.",
        className: `${baseClass} from-[#7f00de] to-[#ff007f]`,
    },
];

function Footer() {
    const [scope, animate] = useAnimate();
    const numberOfNames = NAMES.length;
    const transitionDuration = 4; // Total time for one cycle
    const stepDuration = transitionDuration / numberOfNames; // Equal spacing for each name
    const { t } = useTranslation();

    useEffect(() => {
        void animate(
            [
                [scope.current, { y: "-0%" }, { duration: 0 }],
                [
                    scope.current,
                    { y: `-${100 / numberOfNames}%` },
                    { duration: stepDuration, at: "+1.0" },
                ],
                [
                    scope.current,
                    { y: `-${200 / numberOfNames}%` },
                    { duration: stepDuration, at: "+1.0" },
                ],
                [
                    scope.current,
                    { y: `-${300 / numberOfNames}%` },
                    { duration: stepDuration, at: "+1.0" },
                ],
            ],
            {
                repeat: Number.POSITIVE_INFINITY,
            }
        );
    }, [animate, scope, numberOfNames]);

    return (
        <div>
            <footer className="flex merriweather font-semibold justify-center items-center bg-black text-luminous py-12 text-sm">
                <div className="footer_container w-4/5 md:w-1/2">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        {/* Footer Text*/}
                        <div className="flex">
                            <span>{t("footer")} </span>
                            <div className="h-9 w-24 overflow-hidden">
                                <div ref={scope}>
                                    {NAMES.map(({ text, className }, i) => (
                                        <div className={className} key={i}>
                                            {text}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Country Flag */}
                        <div className="hidden sm:block">
                            <div className="flex items-center gap-2">
                                <img
                                    loading="lazy"
                                    width="29"
                                    height="20"
                                    src="https://flagcdn.com/w40/ke.png"
                                    alt="Kenya"
                                />
                                <span className="text-opacity-70">Kenya</span>
                            </div>
                        </div>
                    </div>
                    <hr className="border-2 border-dotted border-citizen mb-3" />
                    <div className="flex justify-between sm:justify-center">
                        <p>
                            &copy; {new Date().getFullYear()}. All rights
                            reserved.
                        </p>
                        {/* Country Flag */}
                        <div className="flex justify-end sm:hidden">
                            <div className="flex items-center gap-2">
                                <img
                                    loading="lazy"
                                    width="29"
                                    height="20"
                                    src="https://flagcdn.com/w40/ke.png"
                                    alt="Kenya"
                                />
                                <span className="text-opacity-70">Kenya</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
