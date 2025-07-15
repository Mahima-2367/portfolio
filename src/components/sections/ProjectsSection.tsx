
import React from 'react';
import { ExternalLink, Calendar, Code, TestTube } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Myjobbie - Job Portal Testing",
      duration: "Aug 2024 - Present",
      framework: "TestNG",
      website: "https://www.myjobbie.com/",
      description: "Comprehensive testing of a job portal platform that supports major job board services, candidate registration, resume management, and employer services.",
      keyFeatures: [
        "Job Portal with candidate registration and profile management",
        "Resume posting and modification functionality",
        "Job search and bookmark features",
        "Employer access to jobseeker database",
        "Recruitment bridging and technical assessment platform"
      ],
      responsibilities: [
        "Test Automation using Selenium WebDriver, Cucumber and TestNG Framework",
        "Creating comprehensive test scenarios and collecting test data",
        "Implementing Data-driven testing and framework execution",
        "Defect analysis, reporting, and tracking",
        "In-sprint test automation integration"
      ],
      technologies: ["Selenium", "TestNG", "Cucumber", "Java", "Data-Driven Framework"],
      color: "blue"
    },
    {
      title: "School Optima - ERP System Testing",
      duration: "Jan 2024 - July 2024",
      framework: "Manual & Automation Testing",
      description: "Testing of a comprehensive School ERP Application designed to streamline administrative tasks in educational institutions.",
      keyFeatures: [
        "Student information management system",
        "Academic records and grade management",
        "Fee collection and financial tracking",
        "Library management system",
        "Transportation management module"
      ],
      responsibilities: [
        "Business requirements analysis and understanding",
        "Test case preparation and execution with result capture",
        "Black-box testing and bug reporting to developers",
        "Daily status reporting and progress tracking",
        "Knowledge transfer to new team members",
        "Regression test case identification and automation"
      ],
      technologies: ["Selenium WebDriver", "Manual Testing", "Test Case Design", "Bug Tracking"],
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
      purple: "from-purple-500 to-purple-600 bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world testing experience across different domains and technologies
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => {
            const colorClasses = getColorClasses(project.color);
            
            return (
              <div 
                key={project.title}
                className={`group bg-card rounded-xl border p-8 hover:shadow-xl transition-all duration-300 ${colorClasses.split(' ').slice(2).join(' ')}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Project Header */}
                  <div className="lg:col-span-3">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{project.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Code className="h-4 w-4" />
                            <span>{project.framework}</span>
                          </div>
                          {project.website && (
                            <a 
                              href={project.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors duration-300"
                            >
                              <ExternalLink className="h-4 w-4" />
                              <span>Visit Site</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <TestTube className="h-5 w-5 text-blue-600" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.keyFeatures.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">My Responsibilities</h4>
                    <ul className="space-y-2">
                      {project.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className={`px-3 py-1 bg-gradient-to-r ${colorClasses.split(' ').slice(0, 2).join(' ')} text-white text-sm rounded-full font-medium`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
