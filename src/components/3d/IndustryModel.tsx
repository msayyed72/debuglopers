
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

type IndustryModelProps = {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  color?: string;
};

const IndustryModel: React.FC<IndustryModelProps> = ({
  position,
  rotation = [0, 0, 0],
  scale = 1,
  color = '#c2ff00'
}) => {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!mesh.current) return;
    
    mesh.current.rotation.y += 0.01;
    
    // Add a subtle floating animation
    mesh.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime()) * 0.05;
  });
  
  return (
    <mesh
      ref={mesh}
      position={position}
      rotation={rotation as [number, number, number]}
      scale={[scale, scale, scale]}
    >
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial 
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.3}
        metalness={0.7}
      />
    </mesh>
  );
};

export default IndustryModel;
