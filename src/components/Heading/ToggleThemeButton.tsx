import React, { useEffect } from "react";
import { useTheme } from "../ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function ToggleThemeButton() {
    const { isDarkMode, toggleTheme } = useTheme();
    const ThemeColour = isDarkMode ? "dark" : "light";

    useEffect(() => {
        document.body.className = ThemeColour;
    }, [ThemeColour]);

    useEffect(() => {
        document.body.className = isDarkMode ? "dark" : "light";
        const header = document.querySelector(".header");
        header?.classList?.remove("dark", "light"); // Remove existing classes
        header?.classList?.add(isDarkMode ? "dark" : "light");
    }, [isDarkMode]);
    
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

export default ToggleThemeButton;
