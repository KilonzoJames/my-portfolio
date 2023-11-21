import React from 'react';
import Expense_Tracker from "../assets/screenshots/screencapture-an-expense-tracker-onrender-2023-10-16-15_51_08.png";
import foodapp from "../assets/screenshots/screencapture-food-ordering-app-lokp-onrender-2023-09-18-19_56_19.png"
import bank from "../assets/screenshots/screencapture-localhost-3001-2023-09-18-21_20_22.png"

interface ProjectProps {
    projects: {
      name: string;
      desc: string;
      liveLink: string;
      githubLink: string;
      techs: string[];
      isOpenSource: boolean;
      backgroundImage?: string; // Make backgroundImage optional
    };
  }
const projects = [
    {
      name: "Expense Tracker",
      desc: "Track your expenses and income.",
      liveLink: "https://an-expense-tracker.onrender.com/#/",
      githubLink: "https://github.com/yourusername/expense-tracker",
      techs: ["React", "JavaScript", "CSS"],
      isOpenSource: true,
      backgroundImage: Expense_Tracker
    },
    {
      name: "Food Ordering App",
      desc: "Order your favorite food online.",
      liveLink: "https://food-ordering-app-lokp.onrender.com/#/homepage",
      githubLink: "https://github.com/yourusername/food-ordering-app",
      techs: ["React", "JavaScript", "CSS"],
      isOpenSource: true,
      backgroundImage: foodapp
    },
    {
      name: "Banking App",
      desc: "Manage your finances with our banking app.",
      liveLink: "https://bank-of-flatiron-2uyz.onrender.com",
      githubLink: "https://github.com/yourusername/banking-app",
      techs: ["React", "Node.js", "Express", "MongoDB"],
      isOpenSource: true,
      backgroundImage: bank
    },
    {
      name: "Demo Site",
      desc: "A demonstration website.",
      liveLink: "https://www.demo-site.org",
      githubLink: "https://github.com/yourusername/demo-site",
      techs: ["HTML", "CSS", "JavaScript"],
      isOpenSource: true
    }
  ];

const Project: React.FC<ProjectProps> = ({ projects }) => {
    const backgroundStyle = {
        backgroundImage: `url(${projects.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.7, // Adjust the opacity as needed
    };
  
    return (
      <div 
      className="project w-[40rem] h-[20rem] mx-8 rounded-lg object-cover" 
      style={backgroundStyle}
      >
            <h2>{projects.name}</h2>
            <p>{projects.desc}</p>
            <div className="tech-stack">
                {projects.techs.map(item => <div key={item}>{item}</div>)}
            </div>
            <div className="btns gap-4">
                <a href={projects.liveLink} target="_blank" rel="noreferrer">Live</a>
                <a href={projects.githubLink} target="_blank" rel="noreferrer">Github</a>
            </div>
            {projects.isOpenSource && <div className="open">Open Source</div>}
      </div>
    );
  };
  
  // Map over the projects array to render each project
const ProjectsList = () => {
    return (
        <div className="projects-list flex flex-col mx-auto gap-12 p-[4vw] md:p-20">
                <div className="flex justify-center text-3xl text-green-500 font-bold">
                    <h1>CURRENT PROJECTS</h1>
                </div>
                <div className='flex justify-center'>
                    {projects.map((project, index) => (
                    <Project key={index} projects={project} />
                    ))}
                </div>
        </div>
    );
  };
  
  export default ProjectsList;
  