import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData, formatPrice } from '../data/menu';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);

  const currentCategory = menuData.find(c => c.id === activeCategory);

  return (
    <section id="menu" className="bg-paper section-padding min-h-screen">
      <div className="content-max-w">
        
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-4 block">
            Offerings
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-espresso tracking-tight">
            Menu
          </h2>
        </div>

        {/* Category Tabs (Horizontal Scroll) */}
        <div className="flex overflow-x-auto hide-scrollbar border-b border-border/10 mb-12 -mx-4 px-4 md:mx-0 md:px-0">
          {menuData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`whitespace-nowrap px-6 py-4 text-sm tracking-[0.05em] uppercase transition-colors duration-fast relative ${
                activeCategory === category.id ? 'text-espresso font-medium' : 'text-ink-3 hover:text-ink-2'
              }`}
            >
              {category.name}
              {activeCategory === category.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Menu Items List */}
        <div className="min-h-[50vh]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12"
            >
              {currentCategory?.items.map((item) => (
                <div 
                  key={item.id} 
                  className="flex flex-col border-b border-border/5 pb-6 group"
                >
                  <div className="flex justify-between items-baseline mb-2 gap-4">
                    <h3 className="text-xl text-espresso font-display leading-tight group-hover:text-accent transition-colors duration-fast">
                      {item.name}
                    </h3>
                    <div className="flex-grow border-b border-dotted border-border/20 hidden sm:block mx-4" />
                    <span className="text-sm font-medium tracking-wide text-ink shrink-0">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                  {item.description && (
                    <p className="text-sm text-ink-3 pr-12">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
