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

        {/* Photo Grid — 2×2 portrait, respects natural 3:4 ratio */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">

          {[
            { src: '/images/venue/lokasi.webp',    alt: 'Tampak depan Luciana Coffee', delay: 0 },
            { src: '/images/venue/outdoor-1.webp', alt: 'Area outdoor Luciana Coffee', delay: 0.08 },
            { src: '/images/venue/outdoor-2.webp', alt: 'Sudut outdoor Luciana Coffee', delay: 0.16 },
            { src: '/images/venue/indoor-1.webp',  alt: 'Interior Luciana Coffee',     delay: 0.24 },
          ].map(({ src, alt, delay }) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
              className="aspect-[3/4] overflow-hidden"
            >
              <img
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
              />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};
