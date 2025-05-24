
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Stars, Float } from "@react-three/drei";
import ProjectCard3D from "../3d/ProjectCard3D";
import { Project } from "./ProjectData";

type Project3DViewProps = {
  projects: Project[];
  hoveredProject: number | null;
  setHoveredProject: (id: number | null) => void;
  rotateSpeed: number;
};

const Project3DView: React.FC<Project3DViewProps> = ({
  projects,
  hoveredProject,
  setHoveredProject,
  rotateSpeed,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
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
          {projects.map((project, index) => (
            <ProjectCard3D
              key={project.id}
              project={project}
              index={index}
              total={projects.length}
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
  );
};

export default Project3DView;
