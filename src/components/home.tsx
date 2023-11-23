import React from 'react'
import Profile from './profile'
import Socials from './socials'
import Techstack from './techstack'
import Contacts from './contacts'
import Footer from './footer'
import Header from './header'
import ProjectsList from './ProjectsList'


function Home() {
  return (
    <div className="relative w-full mx-auto text-center transition-all duration-500" >
        <Header/>
        <div id = "profile" className='lg:h-screen lg:flex place-items-end mt-16 md:mt-32 '>
            <Profile/>
        </div>
        <div id = "socials" className='lg:h-screen lg:flex flex-col place-content-center flex gap-16'>
            <Socials/>
        </div>
        <div id = "techstack" className='lg:h-screen lg:flex place-items-center'>
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

export default Home
