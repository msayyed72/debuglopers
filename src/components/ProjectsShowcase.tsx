
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Code, Boxes } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Float, Text } from "@react-three/drei";
import * as THREE from "three";
import ProjectCard3D from "./3d/ProjectCard3D";

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
    isNew: true,
    color: "#c2ff00"
  },
  {
    id: 2,
    title: "Neura AI Assistant",
    description: "AI-powered virtual assistant for business automation",
    image: "/lovable-uploads/c830e3ce-b0c3-4f06-9c0b-a34bbbdf1495.png",
    category: "AI",
    technologies: ["Python", "TensorFlow", "React"],
    github: "https://github.com",
    live: "https://example.com",
    color: "#00FFFF"
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
    isNew: true,
    color: "#ff00c2"
  },
  {
    id: 4,
    title: "Global Commerce Platform",
    description: "Scalable e-commerce solution with multiple payment gateways",
    image: "/lovable-uploads/e4d47b62-e070-4b8e-ab49-742e2387678c.png",
    category: "Web Dev",
    technologies: ["Next.js", "Stripe", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    color: "#ff9900"
  },
];

// Categories for filtering
const categories = ["All", "Web Dev", "Branding", "AI", "Dashboard"];

const ProjectsShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"3d" | "grid">("3d");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const filteredProjects = 
    activeCategory === "All" 
      ? projects 
      : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-jet to-black relative">
      {/* Background effect */}
      <div className="absolute inset-0 opacity-40 z-0">
        <Canvas>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.3} />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
          <Environment preset="city" />
          
          {Array.from({ length: 10 }).map((_, i) => (
            <Float
              key={i}
              speed={i % 2 === 0 ? 1 : 2}
              rotationIntensity={i % 2 === 0 ? 0.2 : 0.5}
              floatIntensity={i % 2 === 0 ? 0.5 : 1}
              position={[
                (Math.random() - 0.5) * 15,
                (Math.random() - 0.5) * 15,
                (Math.random() - 0.5) * 5
              ]}
            >
              <mesh>
                <octahedronGeometry args={[0.6, 0]} />
                <meshStandardMaterial 
                  color="#c2ff00" 
                  emissive="#c2ff00"
                  emissiveIntensity={0.5}
                  wireframe={i % 3 === 0}
                />
              </mesh>
            </Float>
          ))}
        </Canvas>
      </div>
      
      <div className="container mx-auto relative z-10">
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

        {/* View mode toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-4 mb-8"
        >
          <button
            onClick={() => setViewMode("3d")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
              viewMode === "3d"
                ? "bg-neon text-jet font-medium"
                : "bg-gray-800/50 text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
          >
            <Boxes size={16} />
            <span>3D View</span>
          </button>
          <button
            onClick={() => setViewMode("grid")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
              viewMode === "grid"
                ? "bg-neon text-jet font-medium"
                : "bg-gray-800/50 text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
          >
            <Code size={16} />
            <span>Grid View</span>
          </button>
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

        {/* 3D Projects Showcase */}
        {viewMode === "3d" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative h-[800px] mb-12 glow-card overflow-hidden"
          >
            <Canvas ref={canvasRef} camera={{ position: [0, 0, 8], fov: 40 }}>
              <ambientLight intensity={0.2} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
              <Environment preset="city" />
              
              <group position={[0, 0, 0]}>
                {filteredProjects.map((project, index) => (
                  <ProjectCard3D
                    key={project.id}
                    project={project}
                    index={index}
                    total={filteredProjects.length}
                    isHovered={hoveredProject === project.id}
                    setHovered={(isHovered) => {
                      setHoveredProject(isHovered ? project.id : null);
                    }}
                  />
                ))}
              </group>
              
              <OrbitControls 
                enableZoom={true}
                enablePan={true}
                minPolarAngle={Math.PI / 6}
                maxPolarAngle={Math.PI / 2}
                minDistance={4}
                maxDistance={15}
              />
            </Canvas>
            
            {/* Overlay instructions */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-md px-6 py-3 rounded-full">
              <p className="text-sm text-gray-300">Drag to rotate • Scroll to zoom • Click to view details</p>
            </div>
          </motion.div>
        )}

        {/* Grid Projects */}
        {viewMode === "grid" && (
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
        )}

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
