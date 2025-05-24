
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import { Project } from "./ProjectData";

type ProjectGridProps = {
  projects: Project[];
  hoveredProject: number | null;
  setHoveredProject: (id: number | null) => void;
};

const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  hoveredProject,
  setHoveredProject,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <AnimatePresence>
        {projects.map((project, index) => (
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
                
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Star size={12} />
                    <span>FEATURED</span>
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
                  <div className="flex gap-2">
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
                      className="p-2 text-gray-300 hover:text-neon transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1 bg-neon/20 rounded-full text-sm font-medium text-neon hover:bg-neon/30 transition-colors"
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
  );
};

export default ProjectGrid;
