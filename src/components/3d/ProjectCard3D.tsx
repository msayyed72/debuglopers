
import React, { useRef, useState } from "react";
import { ThreeEvent, useFrame } from "@react-three/fiber";
import { useCursor, Float } from "@react-three/drei";
import * as THREE from "three";
import { ProjectCard3DProps } from "./ProjectCard3DTypes";
import ProjectCardBackground from "./ProjectCardBackground";
import ProjectCardContent from "./ProjectCardContent";
import ProjectCardParticles from "./ProjectCardParticles";

const ProjectCard3D: React.FC<ProjectCard3DProps> = ({ 
  project, 
  index, 
  total, 
  isHovered,
  setHovered
}) => {
  const ref = useRef<THREE.Group>(null);
  const [clicked, setClicked] = useState(false);
  
  // Calculate position based on index and total count
  const angle = (index / total) * Math.PI * 2;
  const radius = 4.5;
  const x = Math.sin(angle) * radius;
  const z = Math.cos(angle) * radius;
  
  useCursor(isHovered);
  
  useFrame(() => {
    if (!ref.current) return;
    
    // Rotate slightly to face the camera
    ref.current.lookAt(0, 0, 0);
  });
  
  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    setClicked(!clicked);
    // Open in a new tab when clicked
    if (!clicked) {
      window.open(project.live, '_blank');
    }
  };
  
  return (
    <Float
      speed={2}
      rotationIntensity={0.2}
      floatIntensity={0.5}
      position={[x, 0, z]}
    >
      <group
        ref={ref}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={handleClick}
      >
        <ProjectCardBackground project={project} isHovered={isHovered} />
        <ProjectCardContent project={project} isHovered={isHovered} />
        <ProjectCardParticles project={project} isHovered={isHovered} />
      </group>
    </Float>
  );
};

export default ProjectCard3D;
