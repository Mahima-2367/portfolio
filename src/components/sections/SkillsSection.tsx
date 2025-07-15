
import React from 'react';
import { Code, Database, Settings, GitBranch, TestTube, Zap } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Technologies",
      icon: Code,
      skills: ["Core Java", "Selenium", "SQL"],
      color: "blue"
    },
    {
      title: "Frameworks",
      icon: Settings,
      skills: ["TestNG", "Cucumber", "J-Unit", "POM", "Data-Driven"],
      color: "purple"
    },
    {
      title: "Build Tools",
      icon: Zap,
      skills: ["Maven", "Agile Methodology"],
      color: "green"
    },
    {
      title: "Bug Tracking",
      icon: TestTube,
      skills: ["My Tracker", "My Planner"],
      color: "orange"
    },
    {
      title: "Version Control",
      icon: GitBranch,
      skills: ["Git", "SVN"],
      color: "red"
    },
    {
      title: "Testing Tools",
      icon: Database,
      skills: ["API Postman", "JMeter", "Jenkins"],
      color: "teal"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 bg-blue-100 dark:bg-blue-900/30 text-blue-600",
      purple: "from-purple-500 to-purple-600 bg-purple-100 dark:bg-purple-900/30 text-purple-600",
      green: "from-green-500 to-green-600 bg-green-100 dark:bg-green-900/30 text-green-600",
      orange: "from-orange-500 to-orange-600 bg-orange-100 dark:bg-orange-900/30 text-orange-600",
      red: "from-red-500 to-red-600 bg-red-100 dark:bg-red-900/30 text-red-600",
      teal: "from-teal-500 to-teal-600 bg-teal-100 dark:bg-teal-900/30 text-teal-600"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise in modern testing tools and methodologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colorClasses = getColorClasses(category.color);
            
            return (
              <div 
                key={category.title}
                className="group bg-card rounded-xl border p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-full ${colorClasses.split(' ').slice(2).join(' ')}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill}
                      className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors duration-300"
                    >
                      <span className="font-medium">{skill}</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < 4 ? `bg-gradient-to-r ${colorClasses.split(' ').slice(0, 2).join(' ')}` : 'bg-muted'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Manual Testing", "Automation Testing", "Test Case Design", 
              "Defect Tracking", "Quality Assurance", "OOPS Concepts",
              "API Testing", "Performance Testing", "Framework Development",
              "Agile-Scrum", "Sprint Planning", "Regression Testing"
            ].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-200 dark:border-blue-800 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
