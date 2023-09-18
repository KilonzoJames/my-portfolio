import React, { useState } from 'react';
import portfolio from "../assets/screenshots/screencapture-ki-lonzo-onrender-2023-09-18-19_53_46.png";
import foodapp from "../assets/screenshots/screencapture-food-ordering-app-lokp-onrender-2023-09-18-19_56_19.png"
import bank from "../assets/screenshots/screencapture-localhost-3001-2023-09-18-21_20_22.png"
function Projects() {
    const sites = [
        {url: "https://ki-lonzo.onrender.com/", pic: portfolio},
        {url: "https://food-ordering-app-lokp.onrender.com/#/homepage", pic: foodapp},
        {url: "https://bank-of-flatiron-2uyz.onrender.com", pic: bank},
        {url: "https://www.demo-site.org"}
      ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? sites.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === sites.length - 1 ? 0 : prevIndex + 1));
    };

    const visibleSites = sites.slice(currentIndex, currentIndex + 3);

    const siteDivs = visibleSites.map((site, index) => (
        <div key={index} className="relative lg:w-1/4 transition-transform duration-500 ease-in-out">
            <img
            src={site.pic} 
            alt = "logo"
            className="w-[40rem] h-[20rem] rounded-lg object-cover"
            />
            <a 
            href={site.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-bold text-xl bg-white-300 bg-opacity-50 hover:bg-opacity-70 rounded-lg"
            >
            </a>
        </div>
        ));
  return (
    <div className="relative p-[8vw]  bg-zinc-300 md:p-20">
      <div className="flex flex-wrap justify-center text-4xl text-green-500 font-bold">
        <h1>CURRENT PROJECTS</h1>
      </div>
      <div className="flex flex-wrap lg:flex-row justify-center gap-10 my-[5vw]">
        {siteDivs}
        <button onClick={prevSlide} className="absolute left-20 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-[1vw] rounded-full opacity-50 hover:opacity-100">
          &lt;
        </button>

        <button onClick={nextSlide} className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-[1vw] rounded-full opacity-50 hover:opacity-100">
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Projects;
