import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { BottomNav } from './components/BottomNav';
import { Footer } from './components/Footer';

// Sections
import { HeroSection } from './sections/HeroSection';
import { SignatureSection } from './sections/SignatureSection';
import { MenuSection } from './sections/MenuSection';
import { StorySection } from './sections/StorySection';
import { AtmosphereSection } from './sections/AtmosphereSection';
import { VisitSection } from './sections/VisitSection';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'menu', 'story', 'visit'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-paper text-ink font-body">
      <Navbar activeSection={activeSection} />
      
      <main>
        <HeroSection />
        <SignatureSection />
        <MenuSection />
        <StorySection />
        <AtmosphereSection />
        <VisitSection />
      </main>

      <Footer />
      <BottomNav activeSection={activeSection} />
    </div>
  );
}

export default App;
