import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../../redux/store";
import { invert } from "../../redux/open";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faPhone,
    faBriefcase,
    faCertificate,
} from "@fortawesome/free-solid-svg-icons";

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
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isOpen = useSelector((state: RootState) => state.open.isOpen);

    return (
        <div>
            {navLinks.map((link, index) => (
                <button
                    key={index}
                    className={`${isOpen ? "flex" : "mx-4 p-3 shadow-md hover:rounded-lg hover:border-2 cursor-grab transition-all duration-100"}`}
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
        </div>
    );
}

export default Navs;
