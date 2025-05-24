
import React, { useRef } from "react";
import { Text, Image } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Project } from "./ProjectCard3DTypes";

type ProjectCardContentProps = {
  project: Project;
  isHovered: boolean;
};

const ProjectCardContent: React.FC<ProjectCardContentProps> = ({ 
  project, 
  isHovered 
}) => {
  const imageRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (!imageRef.current) return;
    
    // Add some hover effect
    if (isHovered) {
      imageRef.current.scale.x = THREE.MathUtils.lerp(imageRef.current.scale.x, 1.05, 0.1);
      imageRef.current.scale.y = THREE.MathUtils.lerp(imageRef.current.scale.y, 1.05, 0.1);
    } else {
      imageRef.current.scale.x = THREE.MathUtils.lerp(imageRef.current.scale.x, 1, 0.1);
      imageRef.current.scale.y = THREE.MathUtils.lerp(imageRef.current.scale.y, 1, 0.1);
    }
  });

  return (
    <>
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
      >
        {project.category}
      </Text>
      
      {/* Enhanced "NEW" badge with pulsing effect */}
      {project.isNew && (
        <group position={[0.9, 0.8, 0.1]}>
          <mesh>
            <circleGeometry args={[0.18, 32]} />
            <meshBasicMaterial 
              color={project.color}
              transparent
              opacity={0.9}
            />
          </mesh>
          <mesh>
            <circleGeometry args={[0.15, 32]} />
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
    </>
  );
};

export default ProjectCardContent;
