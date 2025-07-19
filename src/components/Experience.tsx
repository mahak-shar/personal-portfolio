import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experience = [
     {
      title: "Lead",
      company: "Google Developer Groups(GDG), GLBITM",
      period: "Sep 2024 - Present",
      // location: "Remote",
      description: [
        "Mentored 2,000+ students by organizing hands-on technical workshops, sessions, and community events.",
        "Led collaborative projects using Git, Firebase, and other modern web technologies to promote practical learning.",
        "Coordinated with industry experts and Google professionals to bring real-world insights to the campus community.",
        "Fostered a culture of innovation and peer-to-peer learning through guided project building and open-source contributions."
      ],
      current: true
    },
    {
      title: "Campus Mantri",
      company: "GeeksForGeeks",
      period: "Apr 2024 - Apr 2025",
      location: "Remote",
      description: [
        "Acted as the campus ambassador for GeeksforGeeks, promoting DSA, programming, and career-focused initiatives.",
        "Organized coding contests, webinars, and awareness sessions to engage and support the student community.",
        "Built and nurtured a strong coding culture by sharing resources, opportunities, and learning paths."
      ],
      current: false
    },
    {
      title: "Core Team Member",
      company: "Google Developer Student Club (GDSC)",
      period: "Aug 2023 - July 2024",
      // location: "",
      description: [
        "Hosted and led technical sessions on Data Structures and Algorithms (DSA), explaining their real-world applications and importance in coding interviews.",
        "Collaborated with team members to plan and execute workshops focused on core computer science fundamentals.",
        "Engaged over 100+ students through sessions that enhanced problem-solving and algorithmic thinking.",
        "Contributed to fostering a collaborative and growth-driven tech community on campus."
      ],
      current: false
    },
    {
      title: "Trainee",
      company: "Katalyst India",
      period: "Feb 2023 - Present",
      location: "Remote",
      description: [
        "Selected for a structured 3-year mentorship program focused on technical, communication, and leadership development.",
        "Undergoing regular training in Data Structures, Algorithms, OOPs, and core software engineering concepts.",
        "Participated in 5+ hackathons and won multiple awards, including the Miss Rookie Gold Award 2023.",
        "Improving soft skills through sessions on communication, time management, and teamwork."
      ],
      current: true
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Experience</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              My journey through leadership, mentorship, and technical growth
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-blue-200"></div>

            {experience.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className={`absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white ${
                  exp.current ? 'bg-blue-600' : 'bg-slate-400'
                }`}></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'
                } md:w-1/2`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar size={16} className="text-blue-600" />
                      <span className="text-sm text-slate-500">{exp.period}</span>
                      {exp.current && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-blue-600 font-medium">{exp.company}</span>
                      <span className="text-slate-400">•</span>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} className="text-slate-400" />
                        <span className="text-sm text-slate-500">{exp.location}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-slate-600 flex items-start">
                          <span className="text-blue-600 mr-2 mt-1.5">•</span>
                          <span className="text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;