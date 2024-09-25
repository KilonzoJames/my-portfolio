import React, { useState, useEffect } from 'react';
import Profile from './profile'
import Socials from './socials'
import Techstack from './techstack'
import Contacts from './contacts'
import Footer from './footer'
import Header from './header'
import ProjectsList from './ProjectsList'
import Loader from'./Loader'

function Home() {
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    // initial loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 500); // 2-second delay (adjust as needed)
  }, []);

  return (
    <div>
        {isLoading ?
            (<Loader/>)
            :
            ( 
                <div className="relative w-full mx-auto text-center transition-all duration-500" >
                    <Header/>
                    <div id = "profile" className='lg:flex place-items-end md:mt-32 '>
                        <Profile/>
                    </div>
                    <div id = "socials" className='lg:h-screen lg:flex flex-col place-content-center flex gap-16'>
                        <Socials/>
                    </div>
                    <div id = "techstack" className='lg:flex place-items-center'>
                        <Techstack/>
                    </div>
                    <div id = "projects" className='lg:h-screen'>
                        <ProjectsList/>
                    </div>
                    <div id = "contacts" className='lg:h-screen lg:flex place-items-center'>
                        <Contacts/>
                    </div>
                    <div>
                        <Footer/>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Home
