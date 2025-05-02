
import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Text3D, MeshTransmissionMaterial, Float, Trail, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

const Logo3D: React.FC = () => {
  const logoRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const { mouse } = useThree();
  
  // Create particles
  useEffect(() => {
    if (!particlesRef.current) return;
    
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 200;
    
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);
    
    const colorObj = new THREE.Color("#c2ff00");
    
    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Position particles in a sphere around the logo
      const radius = 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      posArray[i] = radius * Math.sin(phi) * Math.cos(theta);
      posArray[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      posArray[i + 2] = radius * Math.cos(phi);
      
      // Color with variation
      colorArray[i] = colorObj.r * (0.8 + Math.random() * 0.2);
      colorArray[i + 1] = colorObj.g * (0.8 + Math.random() * 0.2);
      colorArray[i + 2] = colorObj.b * (0.8 + Math.random() * 0.2);
    }
    
    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3)
    );
    
    particlesGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(colorArray, 3)
    );
    
    if (particlesRef.current) {
      particlesRef.current.geometry = particlesGeometry;
    }
  }, []);
  
  useFrame((state) => {
    if (!logoRef.current || !particlesRef.current) return;
    
    // Subtle floating animation
    logoRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    
    // Rotation following mouse
    const target = new THREE.Vector3(
      mouse.x * 0.5,
      mouse.y * 0.3,
      0
    );
    logoRef.current.rotation.x = THREE.MathUtils.lerp(
      logoRef.current.rotation.x,
      target.y,
      0.05
    );
    logoRef.current.rotation.y = THREE.MathUtils.lerp(
      logoRef.current.rotation.y,
      target.x,
      0.05
    );
    
    // Animate particles
    if (particlesRef.current) {
      particlesRef.current.rotation.x += 0.001;
      particlesRef.current.rotation.y += 0.001;
    }
  });
  
  return (
    <Float 
      speed={2} 
      rotationIntensity={0.2} 
      floatIntensity={0.5}
    >
      <group ref={logoRef} position={[0, 0, 0]}>
        {/* Glowing backdrop */}
        <mesh position={[0, 0, -0.3]}>
          <circleGeometry args={[1.2, 32]} />
          <meshBasicMaterial 
            color="#c2ff00" 
            transparent
            opacity={0.15}
          />
        </mesh>
        
        {/* Orbiting particles */}
        <points ref={particlesRef}>
          <pointsMaterial
            size={0.03}
            vertexColors
            transparent
            opacity={0.8}
            sizeAttenuation={true}
          />
        </points>
        
        {/* Main Logo Text */}
        <Trail
          width={1}
          color="#c2ff00"
          length={3}
          decay={1}
          attenuation={(width) => width}
        >
          <Text3D
            font="/fonts/inter_bold.json"
            size={0.8}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            {"{D}"}
            <MeshTransmissionMaterial
              backside
              samples={16}
              resolution={1024}
              transmission={0.95}
              roughness={0.1}
              thickness={0.2}
              ior={1.5}
              chromaticAberration={0.05}
              anisotropy={0.1}
              distortion={0.5}
              distortionScale={0.3}
              temporalDistortion={0.1}
              color="#c2ff00"
              attenuationDistance={0.5}
              attenuationColor="#ffffff"
            />
          </Text3D>
        </Trail>
        
        {/* Glowing ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.1, 0.03, 16, 100]} />
          <meshBasicMaterial color="#c2ff00" />
        </mesh>
      </group>
    </Float>
  );
};

export default Logo3D;
