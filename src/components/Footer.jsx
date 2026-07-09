import React from 'react';
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  const year = new Date().getFullYear();

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Experience', href: '#experience' },
    { name: 'Activity', href: '#activity' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/Sahil3299', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/sahil-shinde-a30948329', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:sahilshinde2402@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <a href="#hero" className="text-lg font-black text-white tracking-tight">
              Sahil<span className="text-gray-500">Shinde</span>
            </a>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Full Stack Developer &amp; AI/ML student. Building software that bridges ideas and production.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-gray-500">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById(link.href.slice(1));
                      if (el) {
                        const top = el.getBoundingClientRect().top + window.pageYOffset - 100;
                        window.scrollTo({ top, behavior: 'smooth' });
                      }
                    }}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-gray-500">
              Connect
            </h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <a
              href="mailto:sahilshinde2402@gmail.com"
              className="block text-sm text-gray-500 hover:text-gray-300 transition-colors mt-3"
            >
              sahilshinde2402@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            &copy; {year} Sahil Shinde. All rights reserved.
          </p>
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition-colors"
          >
            Back to top
            <FiArrowUp className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
