import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

import textutil from '../images/textutil.png'
import memories from '../images/memories.png'
import article from '../images/article.png'
import spotify from '../images/spotify.jpg'
import jsclock from '../images/jsclock.png'
import tictac from '../images/tictac.jpg'
import atm from '../images/atm.png'

const Projects: React.FC = () => {
  const projects = [
    {
      title: "ATM Simulator System",
      description: "Designed and implemented a desktop-based ATM Simulator System using Java and the JFrame libraries. Utilized JDBC connectivity to store and retrieve customer information in a MySQL database. Applied OOPs principles to ensure a user-friendly experience. Implemented a range of features typical of an ATM, such as account creation,withdrawals, deposits, fast cash withdrawal, and balance inquiries.",
      image: atm,
      technologies: ["Java", "JFrame", "JDBC", "MySQL"],
      github: "https://github.com/mahak-shar/Atm-Simulator-System",
    },
    {
      title: "Memories Mern App",
      description: "Developed a full-stack MERN application for managing personal memories with complete CRUD functionality. Implemented features like pagination, search, commenting, and secure Google OAuth authentication to enhance usability and security. Delivering a fully responsive user interface and tested with 10+ users for reliability.",
      image: memories,
      technologies: ["ReactJs", "NodeJs", "Express", "MongoDB", "Google OAuth", "Netlify", "Render"],
      github: "https://github.com/mahak-shar/Memories_Frontend",
      live: "https://memoriesapp1551.netlify.app/posts"
    },
    {
      title: "TextUtils",
      description: "Developed a responsive web application for text manipulation functions such as uppercase/lowercase, copy, and clear text. Included a real-time text summary showing word/character count, an estimated reading time, and a preview section. Utilized front-end development best practices to ensure that the application loads quickly and operates smoothly, resulting in a user-friendly experience.",
      image: textutil,
      technologies: ["ReactJs", "Vercel"],
      github: "https://github.com/mahak-shar/TextUtils-Project",
      live: "https://text-utils-project-gilt.vercel.app/"
    },
    {
      title: "AI Article Summarizer",
      description: "Built a responsive web app that summarizes articles using OpenAI's API, allowing users to input any article URL and receive concise, readable summaries. Designed a clean, minimalist UI using Tailwind CSS and implemented summary history storage for easy access to previous summaries. Developed with Vite for lightning-fast performance and seamless developer experience.",
      image: article,
      technologies: ["React", "Tailwind CSS", "Netlify"],
      github: "https://github.com/mahak-shar/AI-ArticleSummarizer",
      live: "https://articlesummarizer-ai.netlify.app/"
    },
     {
      title: "Spotify Clone",
      description: "A responsive and visually appealing Spotify clone that allows users to explore music, view playlists, and enjoy a modern, interactive UI inspired by the real Spotify platform.",
      image: spotify,
      technologies: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/mahak-shar/spotify_clone",
      live: "https://mahak-shar.github.io/spotify_clone/"
    },
    {
      title: "TicTacToe",
      description: "Developed a 2-player Tic Tac Toe game using Java, where players take alternate turns to input their moves via the console (row and column). Implemented input validation, win/draw detection",
      image: tictac,
      technologies: ["Java", "VS Code"],
      github: "https://github.com/mahak-shar/TicTacToe",
    },
    {
      title: "Javascript Clock",
      description: "Created a web application that displays the current time in HH:MM:SS format, updating every second using setInterval(). Designed with a clean and responsive layout, enhanced by a visually appealing background image for improved aesthetics and user experience. Built with HTML, CSS, and JavaScript for smooth and lightweight performance.",
      image: jsclock,
      technologies: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/mahak-shar/JavaScript-Clock",
      live: "https://mahak-shar.github.io/JavaScript-Clock/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors"
                      >
                        <ExternalLink size={20} />
                        <span>Live Demo</span>
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

export default Projects;