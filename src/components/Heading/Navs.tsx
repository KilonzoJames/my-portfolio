import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../../redux/store";
import { invert } from "../../redux/open";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faBriefcase,
    faCertificate,
    faTools,
    faShareAlt,
    faEnvelope,
    faGripHorizontal,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

function Navs() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isOpen = useSelector((state: RootState) => state.open.isOpen);
    const { t } = useTranslation();

    interface navigation {
        link1: string;
        link2: string;
        link3: string;
        link4: string;
        link5: string;
        link6: string;
        link7: string;
    }
    const { link1, link2, link3, link4, link5, link6, link7 } = t("navigation", {
        returnObjects: true,
    }) as navigation;

    const navLinks = [
        {
            text: link1,
            icon: faHome,
            href: "",
        },
        {
            text: link2,
            icon: faBriefcase,
            href: "projects",
        },
        {
            text: link3,
            icon: faCertificate,
            href: "course",
        },
        {
            text: link4,
            icon: faTools,
            href: "techstack",
        },
        {
            text: link5,
            icon: faShareAlt,
            href: "socials",
        },
        {
            text: link6,
            icon: faEnvelope,
            href: "contacts",
        },
        {
            text: link7,
            icon: faGripHorizontal,
            href: "misc",
        },
    ];

    return (
        <div>
            {navLinks.map((link, index) => (
                <button
                    key={index}
                    className={`${
                        isOpen
                            ? "flex my-8 border-2 border-transparent rounded-lg hover:border-white  hover:shadow-lg transition-all duration-100"
                            : "mx-4 shadow-md rounded-lg border-b-2 border-transparent hover:border-white hover:shadow-lg cursor-grab transition-all duration-100"
                    }`}
                    onClick={() => {
                        if (isOpen) {
                            dispatch(invert());
                            // Execute the invert action if isOpen is true
                        }
                        navigate(`/${link.href}`);
                        // Use navigate with path
                    }}>
                    <div className="merriweather font-bold">
                        <FontAwesomeIcon
                            icon={link.icon}
                            className="me-1"
                            beat
                            size="1x"
                        />
                        {link.text}
                    </div>
                </button>
            ))}
        </div>
    );
}

export default Navs;
