
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Logo3D: React.FC = () => {
  const logoRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!logoRef.current) return;
    
    // Subtle floating animation
    logoRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    
    // Subtle rotation following mouse
    const target = new THREE.Vector3(
      state.mouse.x * 0.3,
      state.mouse.y * 0.2,
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
  });
  
  return (
    <group ref={logoRef} position={[0, 0, 0]}>
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
    </group>
  );
};

export default Logo3D;
