import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

import mahakpic from '../images/mahakpic.jpg';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            {/* <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              MS
            </div> */}
            <div className="flex justify-center items-center mb-6">
              <img
              src={mahakpic}
              alt="Mahak Sharma"
              className="w-32 h-32 rounded-full object-cover shadow-lg"
              />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
              Mahak Sharma
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-2">
              Final Year Engineering Student
            </p>
            <p className="text-lg text-slate-500 mb-8">
              Software Engineer | Full-Stack Developer
              Passionate about building impactful web solutions with Java, ReactJs, NodeJs, ExpressJs, SQL and more.
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/mahak-shar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-slate-600 hover:text-blue-600"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/mahak-sharma-20034a247/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-slate-600 hover:text-blue-600"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:mahaksh0506@gmail.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-slate-600 hover:text-blue-600"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium flex items-center justify-center space-x-2">
              <Download size={20} />
              <span>Download Resume</span>
            </button> */}
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300 font-medium"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;