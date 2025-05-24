
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float, Stars } from "@react-three/drei";
import ProjectFilters from "./projects/ProjectFilters";
import ProjectGrid from "./projects/ProjectGrid";
import Project3DView from "./projects/Project3DView";
import ProjectFeatured from "./projects/ProjectFeatured";
import { projects, categories, ViewMode } from "./projects/ProjectData";

const ProjectsShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>("3d");
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

        <ProjectFilters
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          viewMode={viewMode}
          setViewMode={setViewMode}
          rotateSpeed={rotateSpeed}
          setRotateSpeed={setRotateSpeed}
        />

        {/* Render different views based on mode */}
        {viewMode === "3d" && (
          <Project3DView
            projects={filteredProjects}
            hoveredProject={hoveredProject}
            setHoveredProject={setHoveredProject}
            rotateSpeed={rotateSpeed}
          />
        )}

        {viewMode === "grid" && (
          <ProjectGrid
            projects={filteredProjects}
            hoveredProject={hoveredProject}
            setHoveredProject={setHoveredProject}
          />
        )}

        {viewMode === "featured" && (
          <ProjectFeatured projects={filteredProjects} />
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
