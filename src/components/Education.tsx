import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
     {
      title: "Bachelor Of Technology(BTech)",
      company: "GL Bajaj Institute Of Technology and Management",
      period: "2022 - 2026",
      location: "Greater Noida, Uttar Pradesh",
      description: [
        "Pursuing BTech in Electronics and Communication Engineering",
        "CGPA: 8.52/10",
        "Active member of coding club and technical societies"
      ],
      current: true
    },
    {
      title: "Intermediate(XII)",
      company: "Vishwa Bharati Public School",
      period: "2021 - 2022",
      location: "Greater Noida, Uttar Pradesh",
      description: [
        "Completed Intermediate with a focus on Physics, Chemistry, and Mathematics (PCM stream)",
        "Achieved 86.6% overall score in the CBSE Board Examinations",
        "Actively participated in science exhibitions"
      ],
      current: false
    },
    {
      title: "Matriculation(X)",
      company: "Vishwa Bharati Public School",
      period: "2019 - 2020",
      location: "Greater Noida, Uttar Pradesh",
      description: [
       "Completed Matriculation with an overall score of 87.2% under the CBSE curriculum",
       "Built strong fundamentals in Mathematics and Science",
       "Won several prizes in inter-school racing competitions, showcasing competitive spirit and focus"
      ],
      current: false
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Education</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Academic Background and Technical Foundation
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-blue-200"></div>

            {education.map((exp, index) => (
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

export default Education;