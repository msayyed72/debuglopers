
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Code, Boxes, Star, Video, Image as ImageIcon } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float, Text, Stars } from "@react-three/drei";
import * as THREE from "three";
import ProjectCard3D from "./3d/ProjectCard3D";

// Enhanced project data with more details
const projects = [
  {
    id: 1,
    title: "Quantum Dashboard",
    description: "Advanced analytics dashboard with real-time data visualization and AI-powered insights for business intelligence.",
    image: "/lovable-uploads/82393b3e-9be9-40f9-a437-ab14f4226712.png",
    category: "Dashboard",
    technologies: ["React", "Node.js", "D3.js", "TensorFlow"],
    github: "https://github.com",
    live: "https://example.com",
    isNew: true,
    color: "#c2ff00",
    featured: true
  },
  {
    id: 2,
    title: "Neura AI Assistant",
    description: "AI-powered virtual assistant for business automation with natural language processing and machine learning capabilities.",
    image: "/lovable-uploads/c830e3ce-b0c3-4f06-9c0b-a34bbbdf1495.png",
    category: "AI",
    technologies: ["Python", "TensorFlow", "React", "Flask"],
    github: "https://github.com",
    live: "https://example.com",
    color: "#00FFFF",
    featured: true
  },
  {
    id: 3,
    title: "Luminous Brand System",
    description: "Complete brand identity and design system with component library and customizable UI elements.",
    image: "/lovable-uploads/b815adab-25dd-4e83-8aef-87547a34d911.png",
    category: "Branding",
    technologies: ["Figma", "Adobe CC", "WebGL", "React"],
    github: "https://github.com",
    live: "https://example.com",
    isNew: true,
    color: "#ff00c2",
    featured: false
  },
  {
    id: 4,
    title: "Global Commerce Platform",
    description: "Scalable e-commerce solution with multiple payment gateways, inventory management, and customer analytics.",
    image: "/lovable-uploads/e4d47b62-e070-4b8e-ab49-742e2387678c.png",
    category: "Web Dev",
    technologies: ["Next.js", "Stripe", "MongoDB", "GraphQL"],
    github: "https://github.com",
    live: "https://example.com",
    color: "#ff9900",
    featured: true
  },
  {
    id: 5,
    title: "Immersive XR Experience",
    description: "Virtual reality application for architectural visualization and interactive 3D modeling.",
    image: "/lovable-uploads/f7c59a27-abbc-450a-9bbc-98c0d46706f8.png",
    category: "3D",
    technologies: ["Three.js", "WebXR", "GLSL", "Blender"],
    github: "https://github.com",
    live: "https://example.com",
    isNew: true,
    color: "#01c8ff",
    featured: false
  },
];

// Categories for filtering
const categories = ["All", "Web Dev", "Branding", "AI", "Dashboard", "3D"];

// View modes
const viewModes = [
  { id: "3d", icon: <Boxes size={16} />, label: "3D View" },
  { id: "grid", icon: <Code size={16} />, label: "Grid View" },
  { id: "featured", icon: <Star size={16} />, label: "Featured" },
];

const ProjectsShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"3d" | "grid" | "featured">("3d");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [rotateSpeed, setRotateSpeed] = useState(0.5);

  // Filter projects based on active category and view mode
  const filteredProjects = projects.filter(project => {
    const categoryMatch = activeCategory === "All" || project.category === activeCategory;
    const featuredMatch = viewMode === "featured" ? project.featured : true;
    return categoryMatch && featuredMatch;
  });

  // Effect to handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setActiveCategory(prev => {
          const currentIndex = categories.indexOf(prev);
          const newIndex = (currentIndex - 1 + categories.length) % categories.length;
          return categories[newIndex];
        });
      } else if (e.key === "ArrowRight") {
        setActiveCategory(prev => {
          const currentIndex = categories.indexOf(prev);
          const newIndex = (currentIndex + 1) % categories.length;
          return categories[newIndex];
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
          <Stars 
            radius={100} 
            depth={50} 
            count={1000} 
            factor={4} 
            saturation={0.5} 
            fade 
            speed={0.3}
          />
          
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
                  color={i % 3 === 0 ? "#c2ff00" : i % 3 === 1 ? "#00FFFF" : "#ff00c2"} 
                  emissive={i % 3 === 0 ? "#c2ff00" : i % 3 === 1 ? "#00FFFF" : "#ff00c2"}
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
          {viewModes.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setViewMode(mode.id as "3d" | "grid" | "featured")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                viewMode === mode.id
                  ? "bg-neon text-jet font-medium"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              {mode.icon}
              <span>{mode.label}</span>
            </button>
          ))}
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

        {/* 3D Controls - New addition */}
        {viewMode === "3d" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mb-6 flex justify-center"
          >
            <div className="bg-black/50 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-4">
              <div className="flex items-center">
                <span className="text-sm text-gray-300 mr-2">Rotation:</span>
                <input
                  type="range"
                  min="0"
                  max="2"
                  step="0.1"
                  value={rotateSpeed}
                  onChange={(e) => setRotateSpeed(parseFloat(e.target.value))}
                  className="w-24 accent-neon"
                />
              </div>
              <div className="w-px h-6 bg-gray-700"></div>
              <div className="text-sm text-gray-300">Use arrow keys to navigate categories</div>
            </div>
          </motion.div>
        )}

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
              <Stars 
                radius={50} 
                depth={50} 
                count={500} 
                factor={4} 
                saturation={0.5} 
                fade 
                speed={0.1}
              />
              
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
                autoRotate={true}
                autoRotateSpeed={rotateSpeed}
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
        )}

        {/* Featured Projects Carousel */}
        {viewMode === "featured" && (
          <div className="mb-16">
            {filteredProjects.map((project, index) => (
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
