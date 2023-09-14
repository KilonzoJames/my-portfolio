import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faPhone, faBriefcase, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

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
<div>
    <nav className='top-0 left-0 w-full h-full flex justify-between items-center bg-zinc-950 text-white py-4 px-12 h-24 transition-all duration-500'>
        <a className="text-4xl text-green-500 animate-bounce" href="/">KILONZO JAMES</a>
        {window.innerWidth < 768 ? ( // Check for small screens (less than 768px)
            <button
                className="absolute right-10 top-10 lg:hidden"
                onClick={() => setOpen((prevOpen) => !prevOpen)}
            >
                {open ? (
                <FontAwesomeIcon icon={faXmark} />
                ) : (
                <FontAwesomeIcon icon={faBars} />
                )}
            </button>
            ) : (
            // For medium and large screens, display the mapped icons
            <div className="text-2xl  px-3">
                {navLinks.map((link, index) => (
                <a key={index} className="nav-link mx-6" href={link.href}>
                    <FontAwesomeIcon icon={link.icon} className="me-1" beat size="1x" />
                {link.text}
                </a>
            ))}
        </div>
        )}
    </nav>
</div>

  )
}

export default Header
