import React from 'react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'menu', label: 'Menu' },
    { id: 'story', label: 'Story' },
    { id: 'visit', label: 'Visit' },
  ];

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-base bg-gradient-to-b from-paper/90 to-transparent">
      <div className="content-max-w px-8 flex justify-between items-center">
        {/* Logo Mark */}
        <button 
          onClick={() => handleNavClick('hero')}
          className="group flex items-center gap-3 cursor-pointer"
          aria-label="Laugi.Kopi Home"
        >
          <img
            src="/logo.png"
            alt="Laugi.Kopi"
            className="h-20 w-auto object-contain"
          />
        </button>

        {/* Links */}
        <div className="flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm tracking-[0.05em] uppercase transition-colors duration-fast ${
                  isActive ? 'text-espresso font-medium' : 'text-ink-2 hover:text-espresso'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
