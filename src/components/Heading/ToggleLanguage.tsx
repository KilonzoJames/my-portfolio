import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store";
import { changeLanguage, toggleDropdown } from "../../redux/languageSlice";

function ToggleLanguage() {
    const dispatch = useDispatch();
    const isDropped = useSelector(
        (state: RootState) => state.language.isDropped
    );
    const currentLanguage = useSelector(
        (state: RootState) => state.language.language
    );
    const languages = [
        { code: "en", name: "English" },
        { code: "es", name: "Español" },
        { code: "sw", name: "Kiswahili" },
    ];

    return (
        <div className="relative inline-block">
            {/* Language Button */}
            <button
                onClick={() => dispatch(toggleDropdown())}
                className="flex items-center gap-2 p-2 border rounded-lg shadow-md">
                <FontAwesomeIcon icon={faLanguage} className="text-xl" />
                <span>{currentLanguage.toUpperCase()}</span>
            </button>

            {/* Dropdown Menu */}
            {isDropped && (
                <div className="absolute left-0 mt-2 w-32 border rounded-lg shadow-lg">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => {
                                dispatch(changeLanguage(lang.code));
                                dispatch(toggleDropdown());
                            }}
                            className="block w-full px-4 py-2 text-left hover:bg-green-600">
                            {lang.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ToggleLanguage;
