import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { invert } from "../../redux/open";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store";

function Bars() {
    const dispatch = useDispatch();
    const isOpen = useSelector((state: RootState) => state.open.isOpen);

    return (
        <button onClick={() => dispatch(invert())}>
            {isOpen ? (
                <FontAwesomeIcon icon={faXmark} className="text-4xl" />
            ) : (
                <FontAwesomeIcon icon={faBars} className="text-4xl" />
            )}
        </button>
    );
}

export default Bars;
