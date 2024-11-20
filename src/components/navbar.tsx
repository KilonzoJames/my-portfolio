import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faPhone,
    faBriefcase,
    faBars,
    faXmark,
    faMoon,
    faSun,
    faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "./ThemeContext";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { invert } from "../redux/open";
import type { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";

const navLinks = [
    {
        text: "Home",
        icon: faHome,
        href: "",
    },
    {
        text: "Projects",
        icon: faBriefcase,
        href: "projects",
    },
    {
        text: "Certifications",
        icon: faCertificate,
        href: "course",
    },
    {
        text: "Techstack",
        icon: faBriefcase,
        href: "techstack",
    },
    {
        text: "Socials",
        icon: faBriefcase,
        href: "socials",
    },
    {
        text: "Contacts",
        icon: faPhone,
        href: "contacts",
    },
];
function Navs() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isOpen = useSelector((state: RootState) => state.isOpen);

    return (
        <>
            {navLinks.map((link, index) => (
                <button
                    key={index}
                    className="mx-4 p-3 shadow-md hover:rounded-lg hover:border-2 cursor-grab transition-all duration-100"
                    onClick={() => {
                        if (isOpen) {
                            dispatch(invert());
                            // Execute the invert action if isOpen is true
                        }
                        navigate(`/${link.href}`);
                        // Use navigate with path
                    }}>
                    <FontAwesomeIcon
                        icon={link.icon}
                        className="me-1"
                        beat
                        size="1x"
                    />
                    {link.text}
                </button>
            ))}
        </>
    );
}

function Navbar() {
    const { isDarkMode, toggleTheme } = useTheme();
    const ThemeColour = isDarkMode ? "dark" : "light";
    const isOpen = useSelector((state: RootState) => state.isOpen);
    const dispatch = useDispatch();

    useEffect(() => {
        document.body.className = ThemeColour;
    }, [ThemeColour]);

    useEffect(() => {
        document.body.className = isDarkMode ? "dark" : "light";
        const header = document.querySelector(".header");
        header?.classList?.remove("dark", "light"); // Remove existing classes
        header?.classList?.add(isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    function ToggleThemeButton() {
        return (
            <div
                className="text-4xl hover:scale-150 transition-all duration-500 mr-8"
                onClick={toggleTheme}>
                {isDarkMode ? (
                    <FontAwesomeIcon icon={faMoon} />
                ) : (
                    <FontAwesomeIcon icon={faSun} />
                )}
            </div>
        );
    }

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
                        transition={{ type: "tween", duration: 2 }}>
                        <ToggleThemeButton />
                    </motion.div>
                </div>
                <div className="md:hidden">
                    <button onClick={() => dispatch(invert())}>
                        {isOpen ? (
                            <FontAwesomeIcon
                                icon={faXmark}
                                className="text-4xl"
                            />
                        ) : (
                            <FontAwesomeIcon
                                icon={faBars}
                                className="text-4xl"
                            />
                        )}
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div
                    className={`h-screen justify-center space-y-12 flex flex-col basis-full items-center uppercase `}>
                    <Navs />
                    <ToggleThemeButton />
                </div>
            )}
        </>
    );
}

export default Navbar;
