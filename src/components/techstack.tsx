import React, { useState, useEffect } from 'react';

function Techstack() {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1536);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1536);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const techstack = [
    {
      name: "Bash",
      className: "bash",
      icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bash/bash-original.svg" alt="bash" width="70" height="70"/>,
      color: "shadow-green-500",
    },
    { 
      name: "PYTHON", 
      className: "python", 
      icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="70" height="70"/>,
      color: "shadow-yellow-500",
    },
    { 
      name: "FLASK", 
      className: "flask", 
      icon: <img src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" alt="flask" width="70" height="70"/>,
      color: "shadow-zinc-500",
    },
    {
      name: "C",
      className: "c",
      icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="70" height="70"/>,
      color: "shadow-blue-700",
    },
    { 
      name: "REACT", 
      className: "react", 
      icon:  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="react" width="50" height="50"/>,
      color: "shadow-yellow-500",
    },
    { 
      name: "JAVASCRIPT", 
      className: "javascript", 
      icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="70" height="70"/>,
      color: "shadow-blue-500",
    },
    { 
      name: "TYPESCRIPT", 
      className: "typescript",
      icon:  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="70" height="70"/>,
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
      icon: <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="70" height="70"/>,
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
  
  
  
  const techList = techstack.map((tech, index) => {
    function getGridArea(index: number): string {
    
      if (isWideScreen) {
        switch (index) {
          case 0:
            return '1 / 4 / 2 / 5'; // Top of the trianglecase 1:
          case 1:
            return '2 / 3 / 3 / 4';
          case 2:
            return '2 / 4 / 3 / 5';
          case 3:
            return '2 / 5 / 3 / 6';
          case 4:
            return '3 / 2 / 4 / 3';
          case 5:
            return '3 / 3 / 4 / 4';
          case 6:
            return '3 / 4 / 4 / 5';
            // Center the number 5
          case 7:
            return '3 / 5 / 4 / 6';
          case 8:
            return '3 / 6 / 4 / 7';
          case 9:
            return '4 / 1 / 5 / 2';
          case 10:
            return '4 / 2 / 5 / 3';
          case 11:
            return '4 / 3 / 5 / 4';
          case 12:
            return '4 / 4 / 5 / 5';
          case 13:
            return '4 / 5 / 5 / 6';
          case 14:
            return '4 / 6 / 5 / 7';
          case 15:
            return '4 / 7 / 5 / 8';
          default:
            return ''; // Handle out-of-bounds index
        }
      } else {
        // If not a wide screen, you can return default values or adjust as needed
        return '';
      }
    }
    
    const gridArea = getGridArea(index); // Function to determine grid area based on index
    return (
      <li
        key={index}
        className={`skill py-4 w-[8rem] md:w-[12rem] mr-4 cursor-pointer hover:bg-white hover:scale-90 duration-500  transition-all shadow-md ${tech.color} ${tech.className}`}
        style={{ gridArea }}
      >
        {tech.icon && <div>{tech.icon}</div>}
        {tech.name}
      </li>
    );
  });
  

      
  return (
    <div className="flex flex-col mx-auto gap-32 p-4">
        <div className="flex justify-center">
          <h2>TECH STACK</h2>
        </div>
        <div className="p-4">
          <ul
            className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-16 '
          >    
                {techList}          
          </ul>
        </div>

    </div>  
  )
}

export default Techstack
