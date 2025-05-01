
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Code } from "lucide-react";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Quantum Dashboard",
    description: "Advanced analytics dashboard with real-time data visualization",
    image: "/lovable-uploads/82393b3e-9be9-40f9-a437-ab14f4226712.png",
    category: "Dashboard",
    technologies: ["React", "Node.js", "D3.js"],
    github: "https://github.com",
    live: "https://example.com",
    isNew: true
  },
  {
    id: 2,
    title: "Neura AI Assistant",
    description: "AI-powered virtual assistant for business automation",
    image: "/lovable-uploads/c830e3ce-b0c3-4f06-9c0b-a34bbbdf1495.png",
    category: "AI",
    technologies: ["Python", "TensorFlow", "React"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    id: 3,
    title: "Luminous Brand System",
    description: "Complete brand identity and design system",
    image: "/lovable-uploads/b815adab-25dd-4e83-8aef-87547a34d911.png",
    category: "Branding",
    technologies: ["Figma", "Adobe CC", "WebGL"],
    github: "https://github.com",
    live: "https://example.com",
    isNew: true
  },
  {
    id: 4,
    title: "Global Commerce Platform",
    description: "Scalable e-commerce solution with multiple payment gateways",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop",
    category: "Web Dev",
    technologies: ["Next.js", "Stripe", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com"
  },
];

// Categories for filtering
const categories = ["All", "Web Dev", "Branding", "AI", "Dashboard"];

const ProjectsShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = 
    activeCategory === "All" 
      ? projects 
      : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-jet to-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work That <span className="text-neon glow-text">Speaks</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of innovative projects that showcase our technical expertise
            and creative vision across various domains.
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

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 } 
                }}
                className="group"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden rounded-xl glow-card h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    
                    {/* New badge */}
                    {project.isNew && (
                      <div className="absolute top-3 right-3 bg-neon text-jet px-2 py-1 rounded-full text-xs font-bold">
                        NEW
                      </div>
                    )}
                    
                    {/* Category badge */}
                    <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                      {project.category}
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-neon transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 flex-1">
                      {project.description}
                    </p>
                    
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-800/60 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Links */}
                    <div className="flex justify-between items-center">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-300 hover:text-neon transition-colors"
                        aria-label="View GitHub repository"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={project.live}
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
            View More Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
