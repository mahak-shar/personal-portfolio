import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Mahak Sharma</h3>
              <p className="text-slate-300 mb-4">
                Engineering Student passionate about creating innovative solutions 
                and building impactful applications.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/mahak-shar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mahak-sharma-20034a247/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:mahaksh0506@gmail.com"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-slate-300 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-slate-300 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#education" className="text-slate-300 hover:text-white transition-colors">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-slate-300 hover:text-white transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#achievement" className="text-slate-300 hover:text-white transition-colors">
                    Achievement
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-slate-300 hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-slate-300 hover:text-white transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-slate-300 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2">
                <p className="text-slate-300">
                  <strong>Email:</strong> mahaksh0506@gmail.com
                </p>
                <p className="text-slate-300">
                  <strong>Phone:</strong> +91 9654441779
                </p>
                <p className="text-slate-300">
                  <strong>Location:</strong> Greater Noida, Uttar Pradesh, India
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400 flex items-center justify-center">
              Made with <Heart size={16} className="text-red-500 mx-2" /> by Mahak Sharma © {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;