import React from 'react'

function Techstack() {
    const techstack = [
        "REACT",
        "JAVASCRIPT",
        "TYPESCRIPT",
        "CSS",
        "TAILWIND CSS",
        "BOOTSTRAP",
        "HTML",
        "FLASK",               
        "PYTHON",
        "PostgreSQL",
        "SQLite",
        "SQL",
        "POSTMAN",
        "GIT",
        ];
    const techList = techstack.map((tech, index) => (
        <li 
        key={index} 
        className="border border-zinc-950 rounded-md cursor-pointer hover:bg-green-400 hover:text-white-600 py-4 w-[12rem] transition-all duration-400 "
        >
          {tech}
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
