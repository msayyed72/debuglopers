
import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";

const founderData = [
  {
    name: "Sayyed MD Haider",
    title: "Tech Lead & Visionary",
    mission: "Building tomorrow's technology today",
    image: "/lovable-uploads/f7c59a27-abbc-450a-9bbc-98c0d46706f8.png", 
    skills: ["Full-Stack Dev", "AI Tools", "Cloud Architecture"],
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/"
  },
  {
    name: "Shaikh Mohammed Saud",
    title: "Design Wizard & UX Strategist",
    mission: "Crafting experiences that inspire and engage",
    image: "/lovable-uploads/e4d47b62-e070-4b8e-ab49-742e2387678c.png",
    skills: ["UI/UX Design", "Brand Strategy", "Motion Design"],
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/"
  }
];

const AboutFounders: React.FC = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet the <span className="text-neon glow-text">Founders</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            The visionary minds behind Debuglopers, bringing together technical expertise
            and creative brilliance to deliver exceptional digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {founderData.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 } 
              }}
              className="glow-card p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-xl">
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-1">{founder.name}</h3>
                  <p className="text-neon mb-3">{founder.title}</p>
                  <p className="text-gray-300 mb-4">"{founder.mission}"</p>
                  
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                    {founder.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-3 py-1 bg-gray-800/50 text-sm rounded-full border border-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-center md:justify-start space-x-3">
                    <a 
                      href={founder.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 text-gray-300 hover:text-neon transition-colors"
                      aria-label={`${founder.name}'s LinkedIn`}
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href={founder.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 text-gray-300 hover:text-neon transition-colors"
                      aria-label={`${founder.name}'s GitHub`}
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutFounders;
