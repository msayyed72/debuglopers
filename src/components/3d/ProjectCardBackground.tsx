
import React from "react";
import { Project } from "./ProjectCard3DTypes";

type ProjectCardBackgroundProps = {
  project: Project;
  isHovered: boolean;
};

const ProjectCardBackground: React.FC<ProjectCardBackgroundProps> = ({ 
  project, 
  isHovered 
}) => {
  return (
    <>
      {/* Enhanced holographic card background */}
      <mesh position={[0, 0, -0.05]} castShadow receiveShadow>
        <boxGeometry args={[2.5, 1.8, 0.1]} />
        <meshStandardMaterial 
          color="black" 
          roughness={0.1}
          metalness={0.9}
          emissive={project.color}
          emissiveIntensity={isHovered ? 0.8 : 0.4}
          transparent
          opacity={0.95}
        />
      </mesh>
      
      {/* Glowing border effect */}
      <mesh position={[0, 0, -0.04]} castShadow>
        <boxGeometry args={[2.6, 1.9, 0.02]} />
        <meshBasicMaterial 
          color={project.color}
          transparent
          opacity={isHovered ? 0.6 : 0.3}
        />
      </mesh>
    </>
  );
};

export default ProjectCardBackground;
