import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="py-8 bg-white dark:bg-dark-card border-t border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Logo / Text */}
        <div className="space-y-1">
          <a 
            href="#about"
            onClick={handleLogoClick}
            className="text-lg font-medium tracking-wide text-text dark:text-gray-100 hover:text-primary dark:hover:text-blue-400 transition-colors"
          >
            sahil<span className="font-bold text-primary dark:text-blue-500">shinde</span>
          </a>
          <p className="text-xs text-muted dark:text-slate-450">
            Designed &amp; built by Sahil Shinde
          </p>
        </div>

        {/* Copyright */}
        <div className="text-sm text-slate-500 dark:text-slate-400">
          &copy; {currentYear} All rights reserved.
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/sahilshinde-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/sahil-shinde"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:sahilshinde2402@gmail.com"
            className="p-2 rounded-lg text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
            aria-label="Send Email"
          >
            <FaEnvelope className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
