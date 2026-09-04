import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/site';

export const VisitSection: React.FC = () => {
  return (
    <section id="visit" className="bg-paper section-padding border-t border-border/10">
      <div className="content-max-w">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-start">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-4 block">
              Join Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-espresso tracking-tight mb-8">
              Visit Laugi.Kopi
            </h2>
            
            <a 
              href={siteConfig.location.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-espresso text-paper font-medium tracking-[0.1em] uppercase text-sm hover:bg-brown transition-colors duration-base"
            >
              Get Directions
            </a>
          </motion.div>

          {/* Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="flex flex-col gap-10"
          >
            <div>
              <h3 className="text-sm font-medium tracking-[0.1em] uppercase text-ink-3 mb-3">Location</h3>
              <p className="text-lg text-espresso">{siteConfig.location.address}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium tracking-[0.1em] uppercase text-ink-3 mb-3">Hours</h3>
              <ul className="text-lg text-espresso space-y-1">
                <li><span className="inline-block w-24 text-ink-2">Weekdays</span> {siteConfig.hours.weekdays}</li>
                <li><span className="inline-block w-24 text-ink-2">Weekends</span> {siteConfig.hours.weekends}</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium tracking-[0.1em] uppercase text-ink-3 mb-3">Contact</h3>
              <div className="flex gap-6">
                <a 
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-espresso hover:text-accent transition-colors duration-fast"
                >
                  Instagram
                </a>
                <a 
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-espresso hover:text-accent transition-colors duration-fast"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
