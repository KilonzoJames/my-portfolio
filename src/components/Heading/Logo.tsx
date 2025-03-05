import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrosshairs, faSnowflake } from "@fortawesome/free-solid-svg-icons";

function Logo() {
    return (
        <div className="flex text-xl font-bold md:text-4xl hover:scale-75 transition-all duration-500">
            <a className="Agustina text-flicker-in-glow text-luminous" href="/">
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

export default Logo;
