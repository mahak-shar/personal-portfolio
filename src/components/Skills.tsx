import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages & Coursework",
      skills: ["Java", "JavaScript", "C", "Python"]
    },
    {
      title: "Relevant Coursework",
      skills: ["Data Structures", "Algorithms", "Object Oriented Programming", "Database Management Systems", "Operating Systems", "Computer Networks"]
    },
    {
      title: "Frontend Technologies",
      skills: ["React", "HTML", "CSS", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express.js", "MySQL", "MongoDB", "REST APIs"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "AWS", "Figma", "VS Code", "IntelliJ Idea" ,"MockUps"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-slate-800 mb-6 text-center">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 rounded-full text-sm font-medium hover:from-blue-100 hover:to-blue-200 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;