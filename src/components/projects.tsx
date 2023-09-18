import React, { useState } from 'react';

function Projects() {
    const sites = [
        "https://ki-lonzo.onrender.com/",
        "https://bank-of-flatiron-2uyz.onrender.com",
        "https://food-ordering-app-lokp.onrender.com/#/homepage",
        "https://www.demo-site.org"
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
            src="https://plus.unsplash.com/premium_photo-1663089895867-428d148a8663?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZ3JhbW1lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" 
            alt = "logo"
            className="w-full rounded-lg"
            />
            <a 
            href={site} 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-bold text-xl bg-zinc-900 bg-opacity-50 hover:bg-opacity-70 rounded-lg"
            >
            {/* {site} */}
            </a>
        </div>
        ));
  return (
    <div className="relative p-[8vw] md:p-20">
      <div className="flex flex-wrap justify-center text-4xl text-green-500 font-bold">
        <h1>CURRENT PROJECTS</h1>
      </div>
      <div className="flex flex-wrap lg:flex-row justify-center gap-10 my-[5vw]">
        {siteDivs}
        <button onClick={prevSlide} className="absolute left-20 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-[1vw] rounded-full opacity-50 hover:opacity-100">
          &lt;
        </button>

        <button onClick={nextSlide} className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-[1vw] rounded-full opacity-50 hover:opacity-100">
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Projects;
