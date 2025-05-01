
import React from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { ArrowUp, Instagram, Linkedin, Github } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-black py-16 px-4 relative">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <Logo className="mb-6 md:mb-0" />
          
          <button
            onClick={scrollToTop}
            className="p-4 bg-gray-800/70 rounded-full hover:bg-neon hover:text-jet transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">Debuglopers</h3>
            <p className="text-gray-400 text-sm">
              A bold and modern digital company delivering cutting-edge solutions with precision and creativity.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-neon transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-neon transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-neon transition-colors text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-neon transition-colors text-sm">
                  Services
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Branding & UI/UX Design</li>
              <li className="text-gray-400 text-sm">Full Stack Development</li>
              <li className="text-gray-400 text-sm">AI Tool Development</li>
              <li className="text-gray-400 text-sm">Dashboard Development</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">debuglopers@gmail.com</li>
              <li className="text-gray-400 text-sm">+91-8108561069 | +91-9702019585</li>
            </ul>
            
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.instagram.com/debuglopers/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/debuglopers/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/debuglopers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500 text-sm">
            Copyright © {new Date().getFullYear()} Debuglopers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
