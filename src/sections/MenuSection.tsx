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
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {currentCategory?.items.map((item) => (
                <div
                  key={item.id}
                  className="group flex flex-col rounded-2xl overflow-hidden border border-border/10 bg-white/60 hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Image area */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-stone-100">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <svg
                          className="w-10 h-10 text-stone-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M6 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM3 20l4-8 4 4 4-6 6 10H3Z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Content area */}
                  <div className="flex flex-col flex-grow p-4 gap-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-base text-espresso font-display leading-snug group-hover:text-accent transition-colors duration-fast">
                        {item.name}
                      </h3>
                      <span className="text-sm font-medium tracking-wide text-ink shrink-0 pt-0.5">
                        {formatPrice(item.price)}
                      </span>
                    </div>
                    {item.description && (
                      <p className="text-xs text-ink-3 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
