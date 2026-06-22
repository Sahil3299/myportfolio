import React, { useState } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';

const Navbar = ({ activeSection, isDarkMode, toggleDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/50 dark:border-slate-800/50 bg-white/70 dark:bg-dark-bg/70 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')} 
              className="text-xl font-medium tracking-wide text-text dark:text-gray-100 transition-colors"
            >
              sahil<span className="font-bold text-primary dark:text-blue-500">shinde</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`nav-link-underline text-sm font-medium transition-colors duration-300 ${
                    isActive 
                      ? 'active-link font-semibold text-primary dark:text-blue-400' 
                      : 'text-muted dark:text-slate-400 hover:text-text dark:hover:text-gray-200'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-yellow-400 hover:scale-110 transition-all duration-300"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <BsSunFill className="w-4 h-4" /> : <BsMoonFill className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile controls (hamburger & theme toggle) */}
          <div className="flex items-center space-x-4 md:hidden">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-yellow-400"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <BsSunFill className="w-4 h-4" /> : <BsMoonFill className="w-4 h-4" />}
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <RxCross2 className="w-6 h-6" />
              ) : (
                <RxHamburgerMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-72 border-t border-slate-200/50 dark:border-slate-800/50' : 'max-h-0'
        }`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 bg-white dark:bg-dark-bg/95 shadow-lg">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-blue-50 dark:bg-blue-950/30 text-primary dark:text-blue-400 font-semibold' 
                    : 'text-muted dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-850 hover:text-text dark:hover:text-gray-100'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
