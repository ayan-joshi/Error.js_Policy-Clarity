'use client';
import { motion } from 'framer-motion';

import React, { useState } from 'react';


const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };



  // const scrollToSection = () => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     window.scrollTo({
  //       top: section.offsetTop,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  return (
    <nav className="border-gray-200 sticky backdrop-blur-xl z-50 top-0 w-full flex lg:px-0 px-5 py-0.5 bg-gradient-to-r from-white-900 via-white-600 to-white-400 ...">
  <div className="max-w-full lg:w-4/5 relative w-full flex flex-wrap items-center justify-between mx-auto">
    {/* Logo */}
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
      <p className="text-black text-center lg:text-4xl md:text-3xl text-xl font-medium lg:w-[60%] w-2/3 lg:leading-[40px] leading-7">
        VitalInsight
      </p>
    </a>

    {/* Hamburger Menu Button */}
    <button
      onClick={toggleMobileMenu}
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
      aria-controls="navbar-solid-bg"
      aria-expanded={isMobileMenuOpen}
    >
      <span className="sr-only">Open main menu</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <g id="menu-01">
          <path id="Icon" d="M2.5 10H17.5M2.5 5H17.5M2.5 15H17.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </g>
      </svg>
    </button>

        {/* Navigation Links */}
        <motion.div
          initial="hidden"
          animate={isMobileMenuOpen ? 'visible' : 'hidden'}
          // variants={menuVariants} // Use the updated variants for pop-in animation
          transition={{ ease: 'easeOut', duration: 0.5 }}
          className={`absolute lg:top-0 top-20 backdrop-blur-xl bg-white. py-5  px-5  md:relative md:bg-transparent items-center justify-center md:flex md:items-center md:justify-center ${
            isMobileMenuOpen ? 'flex w-full' : 'hidden'
          }`}
          id="navbar-solid-bg"
        >
          <ul
            className="flex flex-col md:flex-row font-medium lg:mx-0 mr-5 lg:my-2 mt-1 rounded-lg md:space-x-8 justify-center items-center rtl:space-x-reverse"
          >
           <li>
            <button  class="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-black-500 rounded">
              <a href='#policy'>Get Started</a>
  
</button>
            </li>
            <li>
              <a href='#blogs' className="block py-2 px-3 text-gray-900 dark:text-black lg:text-lg text-sm font-medium" >
                Blogs
              </a>
            </li>
            <li>
              <a href="#contact" className='block py-2 px-3 text-gray-900 dark:text-black lg:text-lg text-sm font-medium'>
                Contact Us
              </a>
            </li>
            
            {/* Mobile Call to Action Button */}
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;