import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Model from "./Model";
import { FaDribbble, FaFacebook, FaTwitter, FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/blogs", link: "Blogs" },
    { path: "/about", link: "About" },
    { path: "/services", link: "Services" },
    { path: "/contact", link: "Contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/60 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <nav className="p-4 max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-white hover:text-orange-500 transition-colors duration-300">
          WOXO <span className="text-orange-500">BLOGS</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="md:flex gap-12 text-lg hidden">
          {navItems.map(({ path, link }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `text-white hover:text-orange-500 transition-colors duration-300 ${
                    isActive ? 'active' : ''
                  }`
                }
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Social Links & Login */}
        <div className="text-white lg:flex gap-6 items-center hidden">
          <div className="flex gap-4">
            <a href="/" className="hover:text-orange-500 transition-colors duration-300 text-lg">
              <FaFacebook />
            </a>
            <a href="/" className="hover:text-orange-500 transition-colors duration-300 text-lg">
              <FaDribbble />
            </a>
            <a href="/" className="hover:text-orange-500 transition-colors duration-300 text-lg">
              <FaTwitter />
            </a>
          </div>
          <button 
            onClick={() => setIsModelOpen(true)}
            className="bg-orange-500 px-6 py-2.5 rounded-full hover:bg-white font-bold hover:text-orange-500 transition-all duration-300"
          >
            Log in
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-white hover:text-orange-500 transition-colors duration-300"
        >
          {isMenuOpen ? (
            <FaXmark className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <ul
          className={`fixed inset-x-0 bg-white/90 backdrop-blur-sm shadow-xl transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'top-[72px] opacity-100' : '-top-full opacity-0'
          }`}
        >
          {navItems.map(({ path, link }) => (
            <li key={path} className="border-b border-gray-200">
              <NavLink
                to={path}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block px-6 py-4 text-gray-800 hover:text-orange-500 transition-colors duration-300 ${
                    isActive ? 'text-orange-500' : ''
                  }`
                }
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Login Modal */}
      <Model isOpen={isModelOpen} onClose={() => setIsModelOpen(false)} />
    </header>
  );
};

export default Navbar;
