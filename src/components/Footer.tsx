import React from 'react';
import { siteConfig } from '../data/site';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-paper border-t border-border/10 py-12 md:py-16 pb-24 md:pb-16 px-4 md:px-8">
      <div className="content-max-w flex flex-col items-center text-center">
        
        {/* Brand */}
        <button 
          onClick={() => handleNavClick('hero')}
          className="mb-6 cursor-pointer"
        >
          <span className="font-display text-2xl font-semibold tracking-wide text-espresso">
            Laugi
            <span className="text-accent font-light italic">.Kopi</span>
          </span>
        </button>

        <p className="text-sm text-ink-3 mb-8">
          {siteConfig.tagline}
        </p>

        {/* Links */}
        <div className="flex gap-6 mb-12">
          <a 
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.1em] uppercase text-ink-2 hover:text-espresso transition-colors duration-fast"
          >
            Instagram
          </a>
          <a 
            href={siteConfig.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.1em] uppercase text-ink-2 hover:text-espresso transition-colors duration-fast"
          >
            WhatsApp
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-ink-3">
          &copy; {currentYear} {siteConfig.name}. All rights reserved.
        </div>

      </div>
    </footer>
  );
};
