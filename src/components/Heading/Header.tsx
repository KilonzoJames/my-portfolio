import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import Logo from "./Logo";

function Header() {
    return (
        <div className="header md-shape w-full lg:w-4/5 flex flex-wrap top-0 mx-auto sticky z-[20] items-center justify-between p-6 sm:p-4">
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
