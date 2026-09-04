import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { siteConfig } from '../data/site';

export const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[100svh] flex flex-col items-center justify-center section-padding"
    >
      <div className="content-max-w w-full flex flex-col items-center text-center z-10">
        
        {/* Brand Logo or Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="mb-8 md:mb-12"
        >
          {/* Use image if available, fallback to typography. 
              Assuming user drops logo.jpg/png to assets later. */}
          <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.9] tracking-tight">
            Laugi<br/>
            <span className="text-accent italic font-light">.Kopi</span>
          </h1>
        </motion.div>

        {/* Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
          className="max-w-md mx-auto mb-12"
        >
          <p className="text-xl md:text-2xl font-display text-espresso/80 italic">
            "{siteConfig.tagline}"
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button 
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 bg-espresso text-paper font-medium tracking-[0.1em] uppercase text-sm hover:bg-brown transition-colors duration-base"
          >
            Explore Menu
          </button>
          <button 
            onClick={() => document.getElementById('visit')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-espresso/20 text-espresso font-medium tracking-[0.1em] uppercase text-sm hover:bg-espresso/5 transition-colors duration-base"
          >
            Visit Us
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-3 hidden md:flex"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
};
