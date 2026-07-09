import React, { useState } from 'react';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';

const Navbar = ({ activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#hero', id: 'hero' },
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Activity', href: '#activity', id: 'activity' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl bg-black text-white rounded-full px-6 py-3 shadow-lg">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, 'hero')}
            className="text-base sm:text-lg font-bold tracking-tight"
          >
            <span className="text-white">Sahil</span>
            <span className="text-white/50"> Shinde</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-black'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full hover:bg-white/10 transition-all"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <RxCross2 className="w-4 h-4" /> : <RxHamburgerMenu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed top-20 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-4xl bg-black text-white rounded-2xl overflow-hidden transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? 'max-h-80 opacity-100 shadow-lg' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-3 space-y-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`block px-4 py-2.5 text-sm font-medium rounded-xl transition-all ${
                  isActive
                    ? 'bg-white text-black'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
