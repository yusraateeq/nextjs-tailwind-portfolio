"use client";
import React, { useEffect, useState } from 'react';
import menu_icon from '../assets/menu.png';
import Image from 'next/image';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenu(prev => !prev);

  return (
    <nav className={`w-full fixed top-0 left-0 z-10  ${sticky ? 'bg-black' : 'bg-transparent'} transition-colors`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-8 border-b-2 border-red-500">
        <a href="#hero" className="text-red-500 text-2xl font-bold ">Yusra Ateeq</a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-bold transition-all">
          <li><a href="#home" className="hover:text-red-500">Home</a></li>
          <li><a href="#about" className="hover:text-red-500">About</a></li>
          <li><a href="#skills" className="hover:text-red-500">Skills</a></li>
          <li><a href="#projects" className="hover:text-red-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-red-500">Contact</a></li>
        </ul>
        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <Image
            src={menu_icon}
            alt="Menu icon"
            width={30}
            height={30}
            className="cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-black text-white w-full px-6 py-4 space-y-4">
          <a href="#home" onClick={toggleMenu} className="block">Home</a>
          <a href="#about" onClick={toggleMenu} className="block">About</a>
          <a href="#skills" onClick={toggleMenu} className="block">Skills</a>
          <a href="#projects" onClick={toggleMenu} className="block">Projects</a>
          <a href="#contact" onClick={toggleMenu} className="block">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
