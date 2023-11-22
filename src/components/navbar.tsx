import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faPhone, faBriefcase, faBars, faXmark, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import { useTheme } from './ThemeContext';

const navLinks = [
    {
      text: 'Home',
      icon: faHome,
      href: "home",
    },
    {
      text: 'Profile',
      icon: faUser,
      href: "profile",
    },
    {
      text: 'Socials',
      icon: faBriefcase,
      href: 'socials', 
    },
    {
      text: 'Techstack',
      icon: faBriefcase,
      href: 'techstack', 
    },
    {
      text: 'Projects',
      icon: faBriefcase,
      href: "projects",
    },
    {
      text: 'Contacts',
      icon: faPhone,
      href: "contacts",
    },
   
  ];
function Navs() {
    return (
      <>
        {navLinks.map((link, index) => (
          <Link key={index} to={link.href} smooth={true} duration={500}>
              <FontAwesomeIcon icon={link.icon} className="me-1" beat size="1x" />
              {link.text}   
          </Link>
        ))}
      </>
    );
  }
  
function Navbar() {
    const [isOpen, setOpen] = useState(false)
    const { isDarkMode, toggleTheme } = useTheme();
    const ThemeColour = isDarkMode ? 'dark' : 'light' ;

    useEffect( () => 
    {document.body.className = ThemeColour; }, [ThemeColour])

    useEffect(() => {
      document.body.className = isDarkMode ? 'dark' : 'light';
      const header = document.querySelector('.header');
     header?.classList?.remove('dark', 'light'); // Remove existing classes
    header?.classList?.add(isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);
    
    function handleToggle() {
        setOpen((prevOpen) => !prevOpen);
    }    

  return (
    <>
        <nav className='flex w-1/2 justify-end items-center uppercase'>
            <div className='hidden md:flex justify-between w-full text-xl'>
                <Navs/>
            </div>
            <div className='md:hidden'>
                <button className='absolute right-4 top-4 lg:absolute lg:right-10 lg:top-10' onClick={handleToggle}>
                {isOpen ? (
                <FontAwesomeIcon icon={faXmark} className="text-4xl"/>
                ) : (
                <FontAwesomeIcon icon={faBars} className="text-4xl"/>
                )}
                </button>
            </div>
        </nav>
        {isOpen && (
            <div className='flex flex-col basis-full items-center gap-4 uppercase'>
                <Navs/>
            </div>
        )}
        <div className='text-4xl hover:scale-150 transition-all duration-500' onClick={toggleTheme}>
          {isDarkMode ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
        </div>
    </>
  )
}

export default Navbar
