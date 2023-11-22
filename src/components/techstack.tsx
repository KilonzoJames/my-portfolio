import React from 'react';

function Techstack() {
  const techstack = [
    { 
      name: "REACT", 
      className: "react", 
      icon:  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="70" height="70"/>,
      color: "shadow-yellow-500",
    },
    { 
      name: "JAVASCRIPT", 
      className: "javascript", 
      icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="70" height="70"/>,
      color: "shadow-blue-500",
    },
    { 
      name: "TYPESCRIPT", 
      className: "typescript",
      icon: <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="70" height="70"/>,
      color: "shadow-sky-500",
    },
    { 
      name: "CSS", 
      className: "css", 
      icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="70" height="70"/>,
      color: "shadow-blue-500",
    },
    {
      name: "TAILWIND CSS",
      className: "tailwind-css",
      icon: <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="70" height="70" />,
      color: "shadow-sky-500",
    },
    { 
      name: "BOOTSTRAP", 
      className: "bootstrap", 
      icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="70" height="70"/>,
      color: "shadow-purple-500",
    },
    { 
      name: "HTML", 
      className: "html", 
      icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="70" height="70"/>,
      color: "shadow-orange-500",
    },
    { 
      name: "FLASK", 
      className: "flask", 
      icon: <img src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" alt="flask" width="70" height="70"/>,
      color: "shadow-zinc-500",
    },
    { 
      name: "PYTHON", 
      className: "python", 
      icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="70" height="70"/>,
      color: "shadow-yellow-500",
    },
    { 
      name: "PostgreSQL", 
      className: "postgresql",
      icon: <img src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" alt="postgresql" width="70" height="70"/>,
      color: "shadow-cyan-500",
    },
    { 
      name: "SQLite", 
      className: "sqlite",
      icon: <img src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" alt="sqlite" width="70" height="70"/>,
      color: "shadow-cyan-500",
    },
    { 
      name: "SQL", 
      className: "sql",
      icon: <img src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" alt="postman" width="70" height="70"/>,
      color: "shadow-cyan-500",
    },
    { 
      name: "POSTMAN", 
      className: "postman", 
      icon: <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="git" width="70" height="70"/>,
      color: "shadow-orange-500",
    },
    { 
      name: "GIT", 
      className: "git", 
      icon: <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="70" height="70"/>,
      color: "shadow-red-500",
    },
  ];
  
  
  
    const techList = techstack.map((tech, index) => (
        <li 
        key={index} 
        className={`skill py-4 w-[12rem] cursor-pointer hover:bg-green-400 hover:scale-90 duration-500  transition-all duration-400 shadow-md ${tech.color} ${tech.className}`}
        >
          {tech.icon && <div>{tech.icon} </div>}
      {tech.name}
        </li>
      ));
    const techListContainer = <ul className="flex flex-wrap justify-center gap-4 mx-4">{techList}</ul>;

      
  return (
    <div className="relative p-[2vw]">
        <div className="flex flex-col justify-center">
            <div className="flex justify-center">
              <h1>TECH STACK</h1>
            </div>
            <div className='p-4'>
              {techListContainer}
            </div>
        </div>
    </div>  
  )
}

export default Techstack
