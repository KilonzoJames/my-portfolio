import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faPhone, faBriefcase, faBars, faXmark, faCrosshairs, faSnowflake } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const [open, setOpen] = useState(false)


    const navLinks = [
        {
          text: 'Home',
          icon: faHome,
          href: "#",
        },
        {
          text: 'Profile',
          icon: faUser,
          href: "#profile",
        },
        {
          text: 'Projects',
          icon: faBriefcase,
          href: "#projects",
        },
        {
          text: 'Contacts',
          icon: faPhone,
          href: "#contacts",
        },
      ];

  return (
      <nav className={`fixed top-0 left-0 w-full  h-auto  text-white py-8 px-12 flex justify-between items-center transition-shadow shadow-md md:shadow-lg lg:shadow-xl duration-500  ${open ? 'h-[1/2] ' : ''}`} id="nav" style={{
        backgroundColor: '#18163c',
    }}>
          <div className=" flex items-center text-4xl hover:scale-75 transition-all duration-500">
              <span className='mx-4'><FontAwesomeIcon icon={faSnowflake} /></span>
              <a className="text-green-500" href="/">KIL<span><FontAwesomeIcon icon={faCrosshairs}/></span>NZO JAMES</a>
          </div>

          {/* Toggle button */}
          <button
            className={`absolute right-4 top-4 lg:absolute lg:right-10 lg:top-10 lg:hidden ${open ? 'lg:block' : 'lg:hidden'}`}
            onClick={() => setOpen((prevOpen) => !prevOpen)}
          >
            {open ? (
              <FontAwesomeIcon icon={faXmark} className="text-4xl"/>
            ) : (
              <FontAwesomeIcon icon={faBars} className="text-4xl"/>
            )}
          </button>
          {/* Navbar links */}
          {open ? (
            // Display vertically on small screens when open
            <div className="lg:hidden">
              {navLinks.map((link, index) => (
                <a key={index} className="block py-2" href={link.href}>
                  <FontAwesomeIcon icon={link.icon} className="me-1" beat size="1x" />
                  {link.text}
                </a>
              ))}
            </div>
          ) : (
          // Display horizontally on large screens when closed
            <div className="hidden lg:flex space-x-6 text-2xl mx-12">
              {navLinks.map((link, index) => (
            <a key={index} className="flex flex-row items-center py-2 text-xl" href={link.href}>
            <FontAwesomeIcon icon={link.icon} className="me-1" beat size="1x" />
                  {link.text}
                </a>
              ))}
          </div>
        )}
      </nav>
  );
}

export default Header
