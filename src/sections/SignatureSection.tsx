import React from 'react';
import { motion } from 'framer-motion';
import { menuData } from '../data/menu';
import { ImageAutoSlider } from '../components/ui/image-auto-slider';

export const SignatureSection: React.FC = () => {
  // Use all signature coffee items that have images
  const signatureCoffee = menuData.find(c => c.id === 'signature-coffee');
  const sliderImages = (signatureCoffee?.items ?? [])
    .filter(item => item.image)
    .map(item => ({ src: item.image!, alt: item.name }));

  return (
    <section className="bg-paper-2 section-padding border-t border-border/10 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        className="content-max-w mb-10 md:mb-14"
      >
        <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-4 block">
          Signature
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-espresso tracking-tight">
          Signature Coffee
        </h2>
      </motion.div>

      {/* Auto-sliding image carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <ImageAutoSlider images={sliderImages} speed={25} />
      </motion.div>
    </section>
  );
};
