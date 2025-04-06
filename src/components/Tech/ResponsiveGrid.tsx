import React from "react";
import Techlist from "./Techlist";

const ResponsiveGrid = Techlist.map((tech, index) => (
    <li
        key={index}
        className={`skill py-4 w-[8rem] md:w-[8rem] mr-4 cursor-pointer hover:bg-white hover:scale-90 duration-500  transition-all shadow-md ${tech.color} ${tech.className}`}>
        {tech.icon && <div>{tech.icon}</div>}
        <p>{tech.name}</p>
    </li>
));

export default ResponsiveGrid;
