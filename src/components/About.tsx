import React from 'react';
import { Code, Users, Lightbulb, Target } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Full-Stack Development",
      description: "Experienced in both frontend and backend technologies"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Team Collaboration",
      description: "Strong communication and teamwork skills"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      title: "Problem Solving",
      description: "Analytical thinking and creative solution development"
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Goal-Oriented",
      description: "Focused on delivering high-quality results"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                Hello! I'm Mahak Sharma
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                I'm a final year BTech student passionate about software engineering and technology. 
                With a strong foundation in computer science principles and hands-on experience in 
                various programming languages and frameworks, I'm excited to contribute to innovative 
                software solutions.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                I actively participate in coding contests, hackathons, and open-source contributions to sharpen 
                my problem-solving skills. Whether it's building web applications or exploring backend systems,
                I thrive in collaborative environments where I can learn and contribute meaningfully.
              </p>
              <p className="text-slate-600 leading-relaxed">
                I'm now looking for exciting opportunities to apply my skills, grow as a developer, and contribute
                to impactful software projects.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="text-center p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <div className="flex justify-center mb-4">
                    {highlight.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-slate-600 text-sm">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;