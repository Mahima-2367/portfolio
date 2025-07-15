
import React from 'react';
import { ThemeProvider } from '../components/ThemeProvider';
import Header from '../components/Header';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ContactSection from '../components/sections/ContactSection';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        
        {/* Footer */}
        <footer className="py-8 px-4 bg-muted/30 border-t border-border">
          <div className="container mx-auto text-center">
            <p className="text-muted-foreground">
              © 2024 Maheswari S. Built with React & Tailwind CSS
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Software Testing Engineer | Quality Assurance Specialist
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
