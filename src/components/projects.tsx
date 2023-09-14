import React from 'react'

function Projects() {
    const sites = [
        "https://www.example.com",
        "https://www.example.org",
        "https://www.samplewebsite.com",
        "https://www.demo-site.org"
      ];
    const siteDivs = sites.map((site, index) => (
        <div key={index} className="relative">
            <img 
            src="https://plus.unsplash.com/premium_photo-1663089895867-428d148a8663?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZ3JhbW1lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" 
            alt = "logo"
            />
            <a 
            href={site} 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-bold text-xl bg-zinc-900 bg-opacity-50 hover:bg-opacity-70"
            >
            {site}
            </a>
        </div>
        ));
  return (
    <div className="my-20 mx-10">
      <div className="flex justify-center text-4xl text-green-400 my-10">
        <h1>CURRENT PROJECTS</h1>
      </div>
      <div className="flex flex-nowrap justify-center grid-cols-4 gap-20">
        {siteDivs} 
      </div>
    </div>
  )
}

export default Projects
