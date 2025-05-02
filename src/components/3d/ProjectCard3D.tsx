
import React, { useRef, useState } from "react";
import { ThreeEvent, useFrame } from "@react-three/fiber";
import { Text, Image, useCursor, Float } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion-3d";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  github: string;
  live: string;
  isNew?: boolean;
  color: string;
};

type ProjectCard3DProps = {
  project: Project;
  index: number;
  total: number;
  isHovered: boolean;
  setHovered: (isHovered: boolean) => void;
};

const ProjectCard3D: React.FC<ProjectCard3DProps> = ({ 
  project, 
  index, 
  total, 
  isHovered,
  setHovered
}) => {
  const ref = useRef<THREE.Group>(null);
  const imageRef = useRef<THREE.Mesh>(null);
  const [clicked, setClicked] = useState(false);
  
  // Calculate position based on index and total count
  const angle = (index / total) * Math.PI * 2;
  const radius = 4.5;
  const x = Math.sin(angle) * radius;
  const z = Math.cos(angle) * radius;
  
  useCursor(isHovered);
  
  useFrame((state, delta) => {
    if (!ref.current) return;
    
    // Rotate slightly to face the camera
    ref.current.lookAt(0, 0, 0);
    
    // Add some hover effect
    if (isHovered && imageRef.current) {
      imageRef.current.scale.x = THREE.MathUtils.lerp(imageRef.current.scale.x, 1.05, 0.1);
      imageRef.current.scale.y = THREE.MathUtils.lerp(imageRef.current.scale.y, 1.05, 0.1);
    } else if (imageRef.current) {
      imageRef.current.scale.x = THREE.MathUtils.lerp(imageRef.current.scale.x, 1, 0.1);
      imageRef.current.scale.y = THREE.MathUtils.lerp(imageRef.current.scale.y, 1, 0.1);
    }
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
        {/* Card background */}
        <mesh position={[0, 0, -0.05]} castShadow receiveShadow>
          <boxGeometry args={[2.5, 1.8, 0.1]} />
          <meshStandardMaterial 
            color="black" 
            roughness={0.2}
            metalness={0.8}
            emissive={project.color}
            emissiveIntensity={isHovered ? 0.5 : 0.2}
          />
        </mesh>
        
        {/* Project image */}
        <group position={[0, 0.25, 0]}>
          <mesh ref={imageRef} castShadow>
            <planeGeometry args={[2.2, 1.2]} />
            <meshBasicMaterial color="white" />
          </mesh>
          <Image 
            url={project.image} 
            position={[0, 0, 0.01]} 
            scale={[2.2, 1.2, 1]} 
            transparent={true}
          />
        </group>
        
        {/* Project title */}
        <Text
          position={[0, -0.6, 0.1]}
          fontSize={0.15}
          maxWidth={2}
          textAlign="center"
          font="/fonts/inter_bold.json"
          color="white"
        >
          {project.title}
        </Text>
        
        {/* Category badge */}
        <Text
          position={[0, -0.8, 0.1]}
          fontSize={0.08}
          maxWidth={2}
          textAlign="center"
          font="/fonts/inter_bold.json"
          color={project.color}
        >
          {project.category}
        </Text>
        
        {/* "NEW" badge if applicable */}
        {project.isNew && (
          <mesh position={[0.9, 0.8, 0.1]}>
            <circleGeometry args={[0.15, 32]} />
            <meshBasicMaterial color={project.color} />
            <Text
              position={[0, 0, 0.01]}
              fontSize={0.08}
              font="/fonts/inter_bold.json"
              color="black"
            >
              NEW
            </Text>
          </mesh>
        )}
      </group>
    </Float>
  );
};

export default ProjectCard3D;
