"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi'; // Hamburger icon
import { HiX } from 'react-icons/hi'; // Close icon
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu open/close
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <header className="absolute w-full text-cyan-500 py-5 flex justify-between items-center px-10 z-10">
      <div>
       <Link href={"/"}>  <Image
        src={"/watch-logo1.png"}
        alt="Logo"
        width={40}
        height={40}
       
        /></Link>
      </div>
      
      {/* Desktop Navbar */}
      <nav className="hidden md:flex gap-10 text-cyan-500 font-bold">
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/about" onClick={closeMenu}>About</Link>
        <Link href="/shope" onClick={closeMenu}>Shop</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
      </nav>
      <div>
        <Link href={"/shope"}>
        <FaShoppingCart className="hidden md:flex text-cyan-500 text-xl" /></Link>
      </div>

      {/* Mobile Navbar (Hamburger Menu) */}
      <div className="md:hidden flex items-center">
        {!isMenuOpen && (
          <HiMenuAlt3
            className="text-cyan-500 text-3xl cursor-pointer"
            onClick={toggleMenu} // Toggle menu on click
          />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } absolute top-0 left-0 w-full h-full pt-12 p-5 flex flex-col justify-center items-center md:hidden z-20`}
      >
        {/* Close Button */}
        <div className="absolute top-5 right-5">
          <HiX
            className="text-cyan-500 text-3xl cursor-pointer"
            onClick={toggleMenu} // Close menu when clicked
          />
        </div>

        {/* Navigation */}
        <nav className="flex items-center pt-14 gap-5 text-cyan-500 font-bold">
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/about" onClick={closeMenu}>About</Link>
          <Link href="/shope" onClick={closeMenu}>Shop</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
          <FaShoppingCart className="text-cyan-500 text-xl" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
