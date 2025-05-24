
import React from "react";
import { Project } from "./ProjectCard3DTypes";

type ProjectCardParticlesProps = {
  project: Project;
  isHovered: boolean;
};

const ProjectCardParticles: React.FC<ProjectCardParticlesProps> = ({ 
  project, 
  isHovered 
}) => {
  return (
    <>
      {/* Floating particles around the card */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 3,
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 0.5
          ]}
        >
          <sphereGeometry args={[0.02]} />
          <meshBasicMaterial 
            color={project.color}
            transparent
            opacity={isHovered ? 0.8 : 0.4}
          />
        </mesh>
      ))}
    </>
  );
};

export default ProjectCardParticles;
