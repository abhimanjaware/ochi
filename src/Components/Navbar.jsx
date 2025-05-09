import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <div
      data-scroll
      data-scroll-speed=".5"
      className="bg-black sticky top-0 z-[9]"
    >
      <nav
        className="bg-black w-full text-white"
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="navbar-content flex items-center justify-between px-6 md:px-14 py-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.8 }}
            className="w-[72px] h-auto max-h-[50px]"
          >
           

            <img src="src\assets\ChatGPT Image Apr 10, 2025, 05_37_58 PM.png" alt="" />
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex nav-links">
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.8 }}
              className="flex justify-evenly gap-10 text-md font-[Prosto_One] mt-2"
            >
              <li><a href="#services">Services</a></li>
              <li><a href="#ourwork">Our Work</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#insights">Insights</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </motion.ul>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden z-[10001] cursor-pointer" onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </div>

          {/* Mobile Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: isOpen ? 0 : "100%" }}
            transition={{ duration: 0.3 }}
            className={`fixed top-0 right-0 h-screen w-[70%] bg-black text-white shadow-lg p-6 flex flex-col gap-6 md:hidden transition-transform duration-300 ease-in-out ${
              isOpen ? 'pointer-events-auto z-[10000]' : 'pointer-events-none z-[0]'
            }`}
          >
            <ul className="flex flex-col text-lg font-[Prosto_One] bg-black  gap-4">
              <li><a href="#services" onClick={toggleMenu}>Services</a></li>
              <li><a href="#ourwork" onClick={toggleMenu}>Our Work</a></li>
              <li><a href="#about" onClick={toggleMenu}>About Us</a></li>
              <li><a href="#insights" onClick={toggleMenu}>Insights</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact Us</a></li>
            </ul>
          </motion.div>
        </div>
      </nav>
    </div>
  );
}
