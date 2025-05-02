import React from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { ArrowUp, Instagram, Linkedin, Github, Code } from "lucide-react";
import ImmersiveBackground from "./3d/ImmersiveBackground";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-black py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <ImmersiveBackground 
          color="#1A73E8" 
          density={500} 
          speed={0.0001}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Logo className="mb-6 md:mb-0" />
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.1, backgroundColor: "#c2ff00", color: "#000" }}
            onClick={scrollToTop}
            className="p-4 bg-gray-800/70 rounded-full transition-colors group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="group-hover:animate-bounce" />
          </motion.button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <Code size={18} className="mr-2 text-neon" /> Debuglopers
            </h3>
            <p className="text-gray-400 text-sm">
              A bold and modern digital company delivering cutting-edge solutions with precision and creativity.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-neon transition-colors text-sm flex items-center">
                  <span className="w-1.5 h-1.5 bg-neon rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-neon transition-colors text-sm flex items-center">
                  <span className="w-1.5 h-1.5 bg-neon rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-neon transition-colors text-sm flex items-center">
                  <span className="w-1.5 h-1.5 bg-neon rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Projects
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-neon transition-colors text-sm flex items-center">
                  <span className="w-1.5 h-1.5 bg-neon rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Services
                </a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm group flex items-center">
                <span className="w-1.5 h-1.5 bg-neon rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Branding & UI/UX Design
              </li>
              <li className="text-gray-400 text-sm group flex items-center">
                <span className="w-1.5 h-1.5 bg-neon rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Full Stack Development
              </li>
              <li className="text-gray-400 text-sm group flex items-center">
                <span className="w-1.5 h-1.5 bg-neon rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                AI Tool Development
              </li>
              <li className="text-gray-400 text-sm group flex items-center">
                <span className="w-1.5 h-1.5 bg-neon rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Dashboard Development
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">debuglopers@gmail.com</li>
              <li className="text-gray-400 text-sm">+91-8108561069 | +91-9702019585</li>
            </ul>
            
            <div className="flex space-x-4 mt-4">
              <motion.a
                whileHover={{ y: -3, color: "#E1306C" }}
                href="https://www.instagram.com/debuglopers/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a
                whileHover={{ y: -3, color: "#0A66C2" }}
                href="https://www.linkedin.com/company/debuglopers/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a
                whileHover={{ y: -3, color: "#f5f5f5" }}
                href="https://github.com/debuglopers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-gray-800 pt-8"
        >
          <p className="text-center text-gray-500 text-sm">
            Copyright © {new Date().getFullYear()} Debuglopers. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
