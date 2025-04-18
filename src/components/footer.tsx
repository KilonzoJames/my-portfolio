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
            <footer className="flex nova-cut-regular font-semibold justify-center items-center bg-black text-luminous py-12 lg:py-16">
                <div className="footer_container w-4/5 md:w-1/2">
                    <div className="flex flex-col md:flex-row justify-between items-center">
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
                        <div>
                            <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
