import React from "react";
import Navbar from "./navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrosshairs, faSnowflake } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function Logo() {
    return (
        <div className="flex text-xl font-bold md:text-4xl hover:scale-75 transition-all duration-500">
            <a
                className="Agustina text-flicker-in-glow text-luminous"
                href="/">
                <span className="mx-8">
                    <FontAwesomeIcon icon={faSnowflake} />
                </span>
                KIL
                <span>
                    <FontAwesomeIcon icon={faCrosshairs} />
                </span>
                NZ
                <span>
                    <FontAwesomeIcon icon={faCrosshairs} />
                </span>
                <span> JAMES</span>
            </a>
        </div>
    );
}

function Header() {
    return (
        <div className="header md-shape flex flex-wrap w-full top-0 mx-auto sticky z-[20] items-center justify-between p-8">
            <motion.ul
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "tween", duration: 1 }}>
                <Logo />
            </motion.ul>
            <Navbar />
        </div>
    );
}

export default Header;
