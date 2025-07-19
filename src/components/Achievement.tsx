import React from "react";
import {ExternalLink } from 'lucide-react';

import adobehack from '../images/adobehack.jpg';
import techfest from '../images/techfest.jpg';
import gdsclead from '../images/gdsclead.jpg';
import adobegensolve from '../images/adobegensolve.jpg';
import campusmantri from '../images/campusmantri.jpg';
import jpcertificate from '../images/jpcertificate.jpg';
import rookie from '../images/rookie.jpg';


const Achievement: React.FC = () => {
  const achievement = [
     {
      title: "Cleared Round 1 - Adobe India Hackathon 2025",
      location: "Virtual",
      date: "2025",
      description: [
       "Successfully cleared Round 1 of the prestigious Adobe India Hackathon 2025, securing a position among shortlisted participants nationwide.",
       "Demonstrated strong problem-solving and collaboration skills.",
       "Advanced to the next phase of the hackathon after evaluation by Adobe's technical panel."
      ],
      image: adobehack,
      link: "https://www.linkedin.com/posts/mahak-sharma-20034a247_adobehackathon-hackathon2025-adobeindia-activity-7351717090300473345-ZWrt?utm_source=share&utm_medium=member_android&rcm=ACoAAD0Y3KABkU-yaDO8UxAfwzvAIJ-FAGc9Ztk",
    },
     {
      title: "3rd Prize - Katalyst Tech Fest 2025",
      description: [
       "Won 3rd prize for a mini engineering project on 'Sign Language Detection' at the Katalyst Tech Fest 2025.",
       "Developed an AI-based solution that translates sign language gestures into readable text to aid communication for the hearing and speech impaired.",
       "Demonstrated the working prototype to a panel of judges and received appreciation for innovation and societal impact.",
       "Collaborated with peers to build the solution and ensure accuracy in gesture recognition."
      ],
      image: techfest,
      link: "https://www.linkedin.com/posts/mahak-sharma-20034a247_katalysttechfest2025-miniengineeringproject-activity-7314197372098490369-hcN4?utm_source=share&utm_medium=member_android&rcm=ACoAAD0Y3KABkU-yaDO8UxAfwzvAIJ-FAGc9Ztk",
    },
    {
      title: "Selected as Lead'25 - Google Developers Group (GDG)",
      description: [
        "Selected as the Campus Lead for Google Developers Group (GDG), formerly known as Google Developer Student Clubs (GDSC), at GL Bajaj after a competitive interview conducted by the Google Developer team.",
        "Responsible for building and leading a community of 2,000+ tech enthusiasts by organizing workshops, hackathons, speaker sessions, and hands-on projects.",
        "Acted as a bridge between Google and the student developer community, bringing access to resources, mentorship, and learning opportunities.",
      ],
      image: gdsclead,
      link: "https://www.linkedin.com/posts/mahak-sharma-20034a247_community-opportunity-googledevelopergroups-activity-7239320748991922177-zWqi?utm_source=share&utm_medium=member_android&rcm=ACoAAD0Y3KABkU-yaDO8UxAfwzvAIJ-FAGc9Ztk",
    },
     {
      title: "Reached Top 5% - Adobe Gensolve Hackathon 2024",
      description: [
        "Recognized among the Top 5% performers in the prestigious Adobe GenSolve Hackathon.",
        "Demonstrated innovative problem-solving and UI/UX prototyping skills in a competitive environment.",
        "Built a tech-driven solution addressing real-world challenges with a focus on user-centric design.",
        "Collaborated with peers to ideate, design, and present a functional prototype within limited time constraints."
      ],
      image: adobegensolve,
      link: "https://www.linkedin.com/posts/mahak-sharma-20034a247_uzee-top5-adobe-activity-7229111252881457153-FEnK?utm_source=share&utm_medium=member_android&rcm=ACoAAD0Y3KABkU-yaDO8UxAfwzvAIJ-FAGc9Ztk",
    },
     {
      title: "Selected as Campus Mantri(2024-25)- GeeksForGeeks",
      description: [
        "Selected as the official Campus Mantri for GL Bajaj Institute of Technology and Management by GeeksforGeeks.",
        "Acted as a bridge between GeeksforGeeks and the campus community to promote learning and coding culture.",
        "Organized events, coding contests, and workshops to engage and support over 1000+ students in technical upskilling.",
        "Played a key role in fostering community engagement and increasing campus participation on the GFG platform.",
      ],
      image: campusmantri,
      link: "https://www.linkedin.com/posts/mahak-sharma-20034a247_campusmantri-geeksforgeeks-gfg-activity-7188522137823973376-erdq?utm_source=share&utm_medium=member_android&rcm=ACoAAD0Y3KABkU-yaDO8UxAfwzvAIJ-FAGc9Ztk",
    },
    {
      title: "1st Prize - Generation Tech Hackathon 2023(JP Morgan & Chase)",
      description: [
        "Secured 1st position in the Generation Tech Hackathon organized by JP Morgan & Chase.",
        "Led the development of the FFA (Food for All) solution using the Moqups tool to tackle the challenge of hunger eradication.",
        "Designed an interactive prototype aimed at improving food distribution and access for underprivileged communities.",
        "Collaborated in a team environment to conceptualize and pitch a sustainable tech-driven solution.",
      ],
      image: jpcertificate,
      link: "https://www.linkedin.com/posts/mahak-sharma-20034a247_team5-jpmorgan-virtualhackathon-activity-7093797962920730624-y03p?utm_source=share&utm_medium=member_android&rcm=ACoAAD0Y3KABkU-yaDO8UxAfwzvAIJ-FAGc9Ztk/",
    },
    {
      title: "Miss Rookie Gold Award 2023 - Katalyst India",
      description: [
       "Awarded for outstanding performance and discipline in year-long corporate and technical training sessions.",
       "Recognized as the best-performing newcomer among all girls across Katalyst branches in Delhi, Pune, and Bangalore.",
       "Selected based on academic excellence, leadership, and active participation in hackathons and learning modules.",
       "Honored during Katalyst India’s national convention in Goa."
      ],
      image: rookie,
      link: "https://www.linkedin.com/posts/mahak-sharma-20034a247_firstyear-convention2023-womenempowerment-activity-7099807007087427584-H04v?utm_source=share&utm_medium=member_android&rcm=ACoAAD0Y3KABkU-yaDO8UxAfwzvAIJ-FAGc9Ztk",
    },
  ];

  return (
    <section id="achievement" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Achievements
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Highlights of my achievements that demonstrate my skills, leadership, and technical expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievement.map((ach, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={ach.image} 
                    alt={ach.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    {ach.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {ach.description}
                  </p>
                  <div className="flex space-x-4">
                    {ach.link && (
                      <a
                        href={ach.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors"
                      >
                        <ExternalLink size={20} />
                        <span>Link</span>
                      </a>
                    )}
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

export default Achievement;
