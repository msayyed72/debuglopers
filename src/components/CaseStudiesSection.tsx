
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

// Sample case studies data
const caseStudies = [
  {
    id: 1,
    title: "Quantum Dashboard",
    description: "Built an advanced analytics dashboard for a fintech startup that needed real-time visualization of complex data sets",
    challenge: "The client struggled with making sense of terabytes of financial data and needed an intuitive way to visualize patterns.",
    solution: "We developed a responsive dashboard with customizable widgets and interactive charts that update in real-time.",
    results: "Reduced decision-making time by 60% and helped identify $2M in operational inefficiencies within the first month.",
    image: "/lovable-uploads/82393b3e-9be9-40f9-a437-ab14f4226712.png",
    category: "Dashboard",
    technologies: ["React", "Node.js", "D3.js", "WebSockets"],
    github: "https://github.com",
    live: "https://example.com",
    isNew: true
  },
  {
    id: 2,
    title: "Neura AI Assistant",
    description: "Developed an AI-powered virtual assistant that automates customer support for an e-commerce platform",
    challenge: "The client was overwhelmed with support tickets and couldn't scale their human support team fast enough.",
    solution: "We built a contextual AI assistant that can understand complex queries and provide accurate responses.",
    results: "Automated responses to 78% of common inquiries and reduced response time from hours to seconds.",
    image: "/lovable-uploads/c830e3ce-b0c3-4f06-9c0b-a34bbbdf1495.png",
    category: "AI",
    technologies: ["Python", "TensorFlow", "React"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    id: 3,
    title: "Luminous Brand System",
    description: "Created a comprehensive brand identity and design system for a tech startup entering a competitive market",
    challenge: "The client needed to stand out in a saturated market and establish a memorable, consistent brand presence.",
    solution: "We developed a complete brand identity including logo, color system, typography, and component library.",
    results: "Brand recognition increased by 45% in the first quarter, and development time for new features decreased by 30%.",
    image: "/lovable-uploads/b815adab-25dd-4e83-8aef-87547a34d911.png",
    category: "Branding",
    technologies: ["Figma", "Adobe CC", "WebGL"],
    github: "https://github.com",
    live: "https://example.com",
    isNew: true
  }
];

// Categories for filtering
const categories = ["All", "Web Dev", "Branding", "AI", "Dashboard", "3D"];

const CaseStudiesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedCase, setExpandedCase] = useState<number | null>(null);

  const filteredCaseStudies = 
    activeCategory === "All" 
      ? caseStudies 
      : caseStudies.filter(caseStudy => caseStudy.category === activeCategory);

  const toggleExpand = (id: number) => {
    setExpandedCase(expandedCase === id ? null : id);
  };

  return (
    <section id="case-studies" className="section-padding bg-gradient-to-b from-jet to-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Case <span className="text-neon glow-text">Studies</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Dive into the problems we've solved, the processes we follow, and the results we've achieved
            for our clients.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? "bg-neon text-jet font-medium"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Case studies */}
        <div className="space-y-16">
          <AnimatePresence>
            {filteredCaseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group glow-card overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    
                    {/* New badge */}
                    {caseStudy.isNew && (
                      <div className="absolute top-3 right-3 bg-neon text-jet px-2 py-1 rounded-full text-xs font-bold">
                        NEW
                      </div>
                    )}
                    
                    {/* Category badge */}
                    <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                      {caseStudy.category}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-neon transition-colors">
                      {caseStudy.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {caseStudy.description}
                    </p>
                    
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {caseStudy.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-800/60 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <AnimatePresence>
                      {expandedCase === caseStudy.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mb-6 space-y-4"
                        >
                          <div>
                            <h4 className="text-neon text-sm font-semibold mb-1">THE CHALLENGE</h4>
                            <p className="text-sm text-gray-300">{caseStudy.challenge}</p>
                          </div>
                          <div>
                            <h4 className="text-neon text-sm font-semibold mb-1">OUR SOLUTION</h4>
                            <p className="text-sm text-gray-300">{caseStudy.solution}</p>
                          </div>
                          <div>
                            <h4 className="text-neon text-sm font-semibold mb-1">THE RESULTS</h4>
                            <p className="text-sm text-gray-300">{caseStudy.results}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {/* Links */}
                    <div className="flex justify-between items-center">
                      <button
                        onClick={() => toggleExpand(caseStudy.id)}
                        className="flex items-center gap-1 text-sm font-medium text-neon hover:underline"
                      >
                        <span>{expandedCase === caseStudy.id ? "Show Less" : "Case Details"}</span>
                        <ArrowRight size={14} className={`transition-transform ${expandedCase === caseStudy.id ? "rotate-90" : ""}`} />
                      </button>
                      
                      <div className="flex gap-3">
                        <a
                          href={caseStudy.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-300 hover:text-neon transition-colors"
                          aria-label="View GitHub repository"
                        >
                          <Github size={18} />
                        </a>
                        <a
                          href={caseStudy.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm font-medium text-neon hover:underline"
                        >
                          <span>Live Demo</span>
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a href="#" className="neon-button">
            View More Case Studies
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
