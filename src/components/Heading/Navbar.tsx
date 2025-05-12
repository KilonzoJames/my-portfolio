import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import Navs from "./Navs";
import Bars from "./Bars";
import ToggleLanguage from "./ToggleLanguage";
import ToggleThemeButton from "./ToggleThemeButton";

function Navbar() {
    const isOpen = useSelector((state: RootState) => state.open.isOpen);

    function useIsMediumScreen() {
        const [isMd, setIsMd] = useState(false);

        useEffect(() => {
            const checkScreen = () => setIsMd(window.innerWidth <= 768);
            checkScreen();
            window.addEventListener("resize", checkScreen);
            return () => window.removeEventListener("resize", checkScreen);
        }, []);

        return isMd;
    }
    const isMd = useIsMediumScreen();

    return (
        <>
            <nav className="flex lg:w-2/3 md:justify-end items-center uppercase">
                <div className="hidden md:flex justify-between items-center w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -500 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: "tween", duration: 2 }}>
                        <Navs />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 500 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: "tween", duration: 2 }}
                        className="flex gap-8 justify-center items-center">
                        <ToggleLanguage />
                        <ToggleThemeButton />
                    </motion.div>
                </div>
                <div className="md:hidden">
                    <Bars />
                </div>
            </nav>
            {isOpen && isMd && (
                <div
                    className={`h-1/2 flex justify-center items-center text-lg basis-full`}>
                    <div className="h-full flex flex-row gap-12">
                        <div className="h-full flex flex-col">
                            <Navs />
                        </div>
                        <div className="h-full flex flex-col flex-1 items-center justify-around">
                            <ToggleLanguage />
                            <ToggleThemeButton />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;
