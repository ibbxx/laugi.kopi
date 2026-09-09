import React from 'react';
import { motion } from 'framer-motion';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="bg-espresso text-paper section-padding py-24 md:py-32">
      <div className="content-max-w grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
        
        {/* Typographic Visual Element */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="md:col-span-5 lg:col-span-4 flex flex-col justify-center"
        >
          <span className="text-[10rem] md:text-[14rem] leading-none font-display italic text-paper/5 select-none">
            L
          </span>
        </motion.div>

        {/* Story Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="md:col-span-7 lg:col-span-6 lg:col-start-6"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-6 block">
            About Laugi.Kopi
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display leading-[1.2] mb-8 text-paper-2">
            "A space for coffee, conversation, and everyday pauses."
          </h2>
          <div className="text-paper/70 space-y-6 text-sm md:text-base max-w-lg">
            <p>
              Laugi.Kopi is a place to slow down, enjoy a good cup of coffee, and share meaningful moments.
              From quiet mornings to casual afternoon conversations, we create a warm space where every visit
              can be enjoyed at your own pace.
            </p>
            <p>
              Take a pause. Have a coffee. Stay a little longer.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
