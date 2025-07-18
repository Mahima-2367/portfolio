
import React from 'react';
import { Mail, Phone, Linkedin, Download, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-in-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="text-black dark:text-white">
                Maheswari
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              Software Testing Engineer
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Entry-level Software Testing Engineer with 1.5 years of intern experience in manual and automated testing. 
              Proficient in test case design, defect tracking, and quality assurance using Selenium, TestNG, and SQL.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              <a 
                href="mailto:maheswari0206s@gmail.com" 
                className="flex items-center gap-2 text-muted-foreground hover:text-blue-600 transition-colors duration-300"
              >
                <Mail className="h-5 w-5" />
                <span className="hidden sm:block">maheswari0206s@gmail.com</span>
              </a>
              <a 
                href="tel:7825991995" 
                className="flex items-center gap-2 text-muted-foreground hover:text-blue-600 transition-colors duration-300"
              >
                <Phone className="h-5 w-5" />
                <span>7825991995</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/maheswari-saminathan-3744a6354/" 
                className="flex items-center gap-2 text-muted-foreground hover:text-blue-600 transition-colors duration-300"
              >
                
                <span>LinkedIn</span>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                Get In Touch
              </button>
              <button className="px-8 py-3 border border-border rounded-full font-medium hover:bg-accent transition-all duration-300 flex items-center gap-2 justify-center">
                <Download className="h-4 w-4" />
                Download CV
              </button>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full flex items-center justify-center animate-float">
              <div className="w-72 h-72 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                <span style={{ color: '#000' }}>M</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <button 
            onClick={scrollToAbout}
            className="p-2 rounded-full hover:bg-accent transition-colors duration-300"
          >
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
