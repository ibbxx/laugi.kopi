import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData, formatPrice } from '../data/menu';
import { Skeleton } from '../components/ui/skeleton';

// Skeleton placeholder shown while switching categories
const MenuCardSkeleton: React.FC = () => (
  <div className="flex flex-col rounded-2xl overflow-hidden border border-border/10 bg-white/60">
    <Skeleton className="w-full aspect-[4/3]" />
    <div className="p-4 flex flex-col gap-2">
      <div className="flex justify-between gap-3">
        <Skeleton className="h-4 w-3/5" />
        <Skeleton className="h-4 w-1/5" />
      </div>
      <Skeleton className="h-3 w-4/5" />
    </div>
  </div>
);

// Image with skeleton shown until loaded
const MenuImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden">
      {!loaded && <Skeleton className="absolute inset-0 rounded-none" />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-contain transition-all duration-500 group-hover:scale-105 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentCategory = menuData.find(c => c.id === activeCategory);

  const handleCategoryChange = (id: string) => {
    if (id === activeCategory) return;
    setIsTransitioning(true);
    setActiveCategory(id);
    // Brief delay so skeleton flashes on tab switch
    setTimeout(() => setIsTransitioning(false), 300);
  };

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

        {/* Category Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar border-b border-border/10 mb-12 -mx-4 px-4 md:mx-0 md:px-0">
          {menuData.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`whitespace-nowrap px-6 py-4 text-sm tracking-[0.05em] uppercase transition-colors duration-fast relative ${
                activeCategory === category.id ? 'text-espresso font-medium' : 'text-ink-3 hover:text-ink-2'
              }`}
            >
              {category.name}
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="min-h-[50vh]">
          <AnimatePresence mode="wait">
            {isTransitioning ? (
              // Skeleton grid during category switch
              <motion.div
                key="skeleton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {Array.from({ length: 6 }).map((_, i) => (
                  <MenuCardSkeleton key={i} />
                ))}
              </motion.div>
            ) : (
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
                    {item.image ? (
                      <MenuImage src={item.image} alt={item.name} />
                    ) : (
                      <div className="relative w-full aspect-[4/3] overflow-hidden flex items-center justify-center">
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
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
