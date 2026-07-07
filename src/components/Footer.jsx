import React from 'react';
import { FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
        <p>&copy; {year} Sahil Shinde. All rights reserved.</p>

        <p>Designed &amp; built by Sahil Shinde</p>

        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-1 hover:text-black transition-colors"
        >
          Back to top
          <FiArrowUp className="w-3 h-3" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
