import React from 'react';
import { motion } from 'framer-motion';

export const AtmosphereSection: React.FC = () => {
  return (
    <section className="bg-paper-2 section-padding border-t border-border/5">
      <div className="content-max-w">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="mb-12 md:mb-20 text-center md:text-left"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-4 block">
            Atmosphere
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-espresso tracking-tight">
            The Space
          </h2>
        </motion.div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          
          {/* Large Hero Space Image Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className="md:col-span-8 aspect-[4/3] md:aspect-[16/9] bg-paper border border-border/10 flex items-center justify-center group overflow-hidden"
          >
            <div className="text-center opacity-30 group-hover:opacity-50 transition-opacity duration-base">
              <span className="block font-display italic text-2xl mb-2 text-espresso">Interior</span>
              <span className="text-[10px] uppercase tracking-widest text-ink">Image Placeholder</span>
            </div>
          </motion.div>

          {/* Vertical Detail Image Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="md:col-span-4 aspect-square md:aspect-[3/4] bg-paper border border-border/10 flex items-center justify-center group overflow-hidden"
          >
            <div className="text-center opacity-30 group-hover:opacity-50 transition-opacity duration-base">
              <span className="block font-display italic text-2xl mb-2 text-espresso">Detail</span>
              <span className="text-[10px] uppercase tracking-widest text-ink">Image Placeholder</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
