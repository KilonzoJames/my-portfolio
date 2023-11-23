import React from 'react'
import Navbar from './navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs, faSnowflake } from '@fortawesome/free-solid-svg-icons';
import {motion} from 'framer-motion'

function Logo(){
    return (
        <div className="flex text-4xl hover:scale-75 transition-all duration-500">
              <span className='mx-8'><FontAwesomeIcon icon={faSnowflake} /></span>
              <a className="name text-green-500" href="/">KIL<span><FontAwesomeIcon icon={faCrosshairs}/></span>NZO JAMES</a>
        </div>
    )
}

function Header() {
  return (
    <div
      className="header md-shape flex flex-wrap w-full top-0 mx-auto sticky z-[20] items-center justify-between p-8 shadow-md md:shadow-lg lg:shadow-xl"
    >
      <motion.ul
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "tween", duration: 2 }}
        >
        <Logo />
      </motion.ul>
      <Navbar />
    </div>
  

  )
}

export default Header
