import React from 'react';
import { Home, Coffee, BookOpen, MapPin } from 'lucide-react';

interface BottomNavProps {
  activeSection: string;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'menu', label: 'Menu', icon: Coffee },
    { id: 'story', label: 'Story', icon: BookOpen },
    { id: 'visit', label: 'Visit', icon: MapPin },
  ];

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-paper/90 backdrop-blur-md border-t border-border/10 pb-safe md:hidden">
      <div className="flex justify-around items-center h-16 px-4">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;
          
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors duration-fast ${
                isActive ? 'text-espresso' : 'text-ink-3 hover:text-ink-2'
              }`}
              aria-label={item.label}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium tracking-wide uppercase">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
