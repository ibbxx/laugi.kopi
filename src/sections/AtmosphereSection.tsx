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

        {/* Editorial Photo Grid — 4 photos */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">

          {/* Row 1: Hero (facade/lokasi) + tall outdoor-1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className="md:col-span-8 aspect-[4/3] md:aspect-[16/9] overflow-hidden"
          >
            <img
              src="/images/venue/lokasi.webp"
              alt="Tampak depan Luciana Coffee"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="md:col-span-4 aspect-square md:aspect-[3/4] overflow-hidden"
          >
            <img
              src="/images/venue/outdoor-1.webp"
              alt="Area outdoor Luciana Coffee"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Row 2: outdoor-2 + indoor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
            className="md:col-span-4 aspect-square md:aspect-[4/3] overflow-hidden"
          >
            <img
              src="/images/venue/outdoor-2.webp"
              alt="Sudut outdoor Luciana Coffee"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="md:col-span-8 aspect-[4/3] md:aspect-[16/9] overflow-hidden"
          >
            <img
              src="/images/venue/indoor-1.webp"
              alt="Interior Luciana Coffee"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
