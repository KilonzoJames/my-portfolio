import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import Navs from "./Navs";
import Bars from "./Bars";
import ToggleLanguage from "./ToggleLanguage";
import ToggleThemeButton from "./ToggleThemeButton";

function Navbar() {
    const isOpen = useSelector((state: RootState) => state.open.isOpen);

    return (
        <>
            <nav className="flex md:1/3 lg:w-2/3 md:justify-end items-center uppercase">
                <div className="hidden md:flex justify-between w-full text-xl">
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
            {isOpen && (
                <div
                    className={`h-screen justify-center items-center space-y-12 flex flex-col basis-full uppercase `}>
                    <Navs />
                    <ToggleLanguage />
                    <ToggleThemeButton />
                </div>
            )}
        </>
    );
}

export default Navbar;
