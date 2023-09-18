import React from 'react'
import Profile from './profile'
import Socials from './socials'
import Techstack from './techstack'
import Projects from './projects'
import Contacts from './contacts'
import Footer from './footer'
import Header from './header'


function Home() {
  return (
    <div className="relative w-full mx-auto text-center bg-zinc-600 text-white transition-all duration-500">
        <div className="App-header">
            <Header/>
        </div>
        <div id = "profile">
            <Profile/>
        </div>
        <div id = "socials">
            <Socials/>
        </div>
        <div id = "techstack">
            <Techstack/>
        </div>
        <div id = "projects">
            <Projects/>
        </div>
        <div id = "contacts">
            <Contacts/>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default Home
