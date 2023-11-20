import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faHtml5, faCss3, faReact, faBootstrap, faPython } from '@fortawesome/free-brands-svg-icons';


function Techstack() {
  const techstack = [
    { name: "REACT", className: "react", icon: faReact },
    { name: "JAVASCRIPT", className: "javascript", icon: faJs},
    { name: "TYPESCRIPT", className: "typescript" },
    { name: "CSS", className: "css", icon: faCss3 },
    { name: "TAILWIND CSS", className: "tailwind-css" },
    { name: "BOOTSTRAP", className: "bootstrap", icon: faBootstrap },
    { name: "HTML", className: "html", icon: faHtml5 },
    { name: "FLASK", className: "flask" },
    { name: "PYTHON", className: "python", icon:faPython },
    { name: "PostgreSQL", className: "postgresql" },
    { name: "SQLite", className: "sqlite" },
    { name: "SQL", className: "sql" },
    { name: "POSTMAN", className: "postman" },
    { name: "GIT", className: "git"},
  ];
  
    const techList = techstack.map((tech, index) => (
        <li 
        key={index} 
        className={`skill border border-zinc-950 cursor-pointer hover:bg-green-400 py-4 w-[12rem] transition-all duration-400 ${tech.className}`}
        >
         <span className="mr-2">
          {tech.icon && <FontAwesomeIcon className="text-6xl" icon={tech.icon} />}
          </span>

      {tech.name}
        </li>
      ));
    const techListContainer = <ul className="flex flex-wrap justify-center gap-4 mx-4">{techList}</ul>;

      
  return (
<div className="relative p-[2vw]">
    <div className="flex flex-col justify-center">
        <h2 className="text-3xl my-[2em] text-green-500 font-bold">TECH STACK</h2>
        <div className='p-4'>
          {techListContainer}
        </div>
    </div>
</div>
  
  )
}

export default Techstack
