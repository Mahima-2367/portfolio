
import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about quality assurance and delivering exceptional software solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Professional Summary</h3>
            <p className="text-muted-foreground leading-relaxed">
              I am an entry-level Software Testing Engineer with 1 year and 6 months of intern experience 
              in manual and automated testing. My expertise includes test case design, defect tracking, 
              and quality assurance using industry-standard tools like Selenium, TestNG, and SQL.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I am committed to delivering high-quality results and continuously improving my skills 
              in the ever-evolving field of software testing. My experience spans across e-job portal 
              and ERP domains, where I've gained valuable insights into various testing methodologies 
              and best practices.
            </p>

            {/* Key Highlights */}
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-card rounded-lg border hover:shadow-md transition-shadow duration-300">
                <h4 className="font-semibold text-blue-600 mb-2">1.5+ Years</h4>
                <p className="text-sm text-muted-foreground">Testing Experience</p>
              </div>
              <div className="p-4 bg-card rounded-lg border hover:shadow-md transition-shadow duration-300">
                <h4 className="font-semibold text-purple-600 mb-2">2+ Projects</h4>
                <p className="text-sm text-muted-foreground">Completed Successfully</p>
              </div>
              <div className="p-4 bg-card rounded-lg border hover:shadow-md transition-shadow duration-300">
                <h4 className="font-semibold text-green-600 mb-2">Automation</h4>
                <p className="text-sm text-muted-foreground">Selenium & TestNG</p>
              </div>
              <div className="p-4 bg-card rounded-lg border hover:shadow-md transition-shadow duration-300">
                <h4 className="font-semibold text-orange-600 mb-2">Agile</h4>
                <p className="text-sm text-muted-foreground">Methodology Expert</p>
              </div>
            </div>
          </div>

          {/* Right Content - Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <div className="bg-card rounded-lg border p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold">M.SC (Microbiology)</h4>
                  <p className="text-muted-foreground">Bharathidasan University</p>
                  <p className="text-sm text-muted-foreground">
                    Dhanalakshmi Srinivasan Arts & Science College for Women, Perambalur
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Jun 2017 - May 2019</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-medium">CGPA: 8.08</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Role */}
            <div className="bg-card rounded-lg border p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-lg font-semibold mb-2">Current Role</h4>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <strong>Intern Test Engineer</strong>
                </p>
                <p className="text-muted-foreground">
                  SOFTTWIG Technology Solution OPC Pvt Ltd
                </p>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Jan 2024 - Present</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
