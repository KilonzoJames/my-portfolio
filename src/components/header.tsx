import React from 'react'
import Navbar from './navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs, faSnowflake } from '@fortawesome/free-solid-svg-icons';
import {motion} from 'framer-motion'

function Logo(){
    return (
        <div className="flex text-xl md:text-4xl hover:scale-75 transition-all duration-500">
              <span className='mx-8'><FontAwesomeIcon icon={faSnowflake} /></span>
              <a className="Montserrat text-flicker-in-glow text-luminous" href="/">KIL<span><FontAwesomeIcon icon={faCrosshairs}/></span>NZO JAMES</a>
        </div>
    )
}

function Header() {
  return (
    <div
      className="header md-shape flex flex-wrap w-full top-0 mx-auto sticky z-[20] items-center justify-between p-8"
      >
      <motion.ul
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "tween", duration: 1 }}
        >
        <Logo />
      </motion.ul>
      <Navbar />
    </div>
  

  )
}

export default Header
