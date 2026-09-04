import React from 'react';
import { motion } from 'framer-motion';
import { menuData, formatPrice } from '../data/menu';

export const SignatureSection: React.FC = () => {
  // We'll highlight a few top items from the menu as signature
  const americanoCategory = menuData.find(c => c.id === 'americano-series');
  const signatureItems = americanoCategory?.items.slice(0, 3) || [];

  return (
    <section className="bg-paper-2 section-padding border-t border-border/10">
      <div className="content-max-w">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="mb-12 md:mb-20"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-4 block">
            Signature
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-espresso tracking-tight">
            The Americano Series
          </h2>
        </motion.div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 md:gap-12 pb-8 snap-x snap-mandatory hide-scrollbar">
          {signatureItems.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              className="min-w-[85vw] sm:min-w-[300px] md:min-w-0 flex-shrink-0 snap-center group cursor-pointer"
            >
              {/* Image Placeholder - Asymmetrical tall aspect ratio */}
              <div className="aspect-[3/4] w-full bg-paper border border-border/5 mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-espresso/5 group-hover:bg-transparent transition-colors duration-slow" />
                {/* Fallback typography inside image box if no image provided */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-30 group-hover:opacity-50 transition-opacity duration-base">
                  <span className="font-display text-4xl italic mb-2">0{index + 1}</span>
                  <span className="text-xs uppercase tracking-widest">{item.name}</span>
                </div>
              </div>

              {/* Item Info */}
              <div className="flex flex-col">
                <span className="text-sm text-ink-3 mb-2 font-mono">0{index + 1}</span>
                <h3 className="text-xl md:text-2xl text-espresso font-display mb-2 group-hover:text-accent transition-colors duration-fast">
                  {item.name}
                </h3>
                <span className="text-sm font-medium tracking-wide text-ink-2">
                  {formatPrice(item.price)}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
