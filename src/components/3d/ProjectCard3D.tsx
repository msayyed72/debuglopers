
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
  
  useFrame((_state, _delta) => {
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
        
        {/* Project image with enhanced effects */}
        <group position={[0, 0.25, 0]}>
          <mesh ref={imageRef} castShadow>
            <planeGeometry args={[2.2, 1.2]} />
            <meshBasicMaterial color="white" />
          </mesh>
          <Image 
            url={project.image} 
            position={[0, 0, 0.01]} 
            scale={[2.2, 1.2, 1]}
          />
          
          {/* Image overlay for hover effect */}
          <mesh position={[0, 0, 0.02]}>
            <planeGeometry args={[2.2, 1.2]} />
            <meshBasicMaterial 
              color={project.color}
              transparent
              opacity={isHovered ? 0.2 : 0}
            />
          </mesh>
        </group>
        
        {/* Enhanced project title with 3D effect */}
        <Text
          position={[0, -0.6, 0.1]}
          fontSize={0.16}
          maxWidth={2}
          textAlign="center"
          font="/fonts/inter_bold.json"
          color="white"
          outlineColor={project.color}
          outlineWidth={0.008}
        >
          {project.title}
        </Text>
        
        {/* Glowing category badge */}
        <Text
          position={[0, -0.8, 0.1]}
          fontSize={0.08}
          maxWidth={2}
          textAlign="center"
          font="/fonts/inter_bold.json"
          color={project.color}
          outlineColor="black"
          outlineWidth={0.003}
        >
          {project.category}
        </Text>
        
        {/* Enhanced "NEW" badge with pulsing effect */}
        {project.isNew && (
          <group position={[0.9, 0.8, 0.1]}>
            <mesh>
              <circleGeometry args={[0.18]} />
              <meshBasicMaterial 
                color={project.color}
                transparent
                opacity={0.9}
              />
            </mesh>
            <mesh>
              <circleGeometry args={[0.15]} />
              <meshBasicMaterial 
                color="black"
                transparent
                opacity={0.8}
              />
            </mesh>
            <Text
              position={[0, 0, 0.01]}
              fontSize={0.08}
              font="/fonts/inter_bold.json"
              color={project.color}
              fontWeight="bold"
            >
              NEW
            </Text>
          </group>
        )}
        
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
      </group>
    </Float>
  );
};

export default ProjectCard3D;
