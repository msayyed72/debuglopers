
import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Video, Image as ImageIcon } from "lucide-react";
import { Project } from "./ProjectData";

type ProjectFeaturedProps = {
  projects: Project[];
};

const ProjectFeatured: React.FC<ProjectFeaturedProps> = ({ projects }) => {
  return (
    <div className="mb-16">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="mb-16 last:mb-0"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
              <div className="sticky top-24">
                <div className="mb-4 flex items-center">
                  <div className="inline-block px-3 py-1 bg-black/50 backdrop-blur-sm border border-gray-800 rounded-full text-sm text-neon mr-3">
                    {project.category}
                  </div>
                  {project.isNew && (
                    <div className="inline-block px-3 py-1 bg-neon text-jet rounded-full text-xs font-bold">
                      NEW
                    </div>
                  )}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{project.title}</h3>
                
                <p className="text-gray-300 mb-6">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-medium mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-neon/20 hover:bg-neon/30 text-neon rounded-lg transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
              <div className="relative rounded-xl overflow-hidden aspect-video glow-card group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                  <div className="flex gap-4">
                    <button className="flex items-center gap-1 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                      <ImageIcon size={16} />
                      <span>Gallery</span>
                    </button>
                    <button className="flex items-center gap-1 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                      <Video size={16} />
                      <span>Demo</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectFeatured;
