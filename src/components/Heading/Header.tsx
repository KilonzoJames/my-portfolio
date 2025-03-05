import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import Logo from "./Logo";

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
