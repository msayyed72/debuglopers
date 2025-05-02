
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Stars, Sparkles } from '@react-three/drei';
import Logo3D from './Logo3D';
import * as THREE from 'three';

const MovingLights = () => {
  const light1Ref = useRef<THREE.PointLight>(null);
  const light2Ref = useRef<THREE.PointLight>(null);
  
  useFrame(({ clock }) => {
    if (light1Ref.current) {
      const time = clock.getElapsedTime();
      light1Ref.current.position.x = Math.sin(time * 0.3) * 5;
      light1Ref.current.position.z = Math.cos(time * 0.3) * 5;
      light1Ref.current.intensity = 2 + Math.sin(time) * 0.5;
    }
    
    if (light2Ref.current) {
      const time = clock.getElapsedTime();
      light2Ref.current.position.x = Math.sin(time * 0.4 + Math.PI) * 5;
      light2Ref.current.position.z = Math.cos(time * 0.4 + Math.PI) * 5;
      light2Ref.current.intensity = 2 + Math.cos(time) * 0.5;
    }
  });
  
  return (
    <>
      <pointLight ref={light1Ref} position={[5, 3, 5]} color="#c2ff00" intensity={2} distance={20} />
      <pointLight ref={light2Ref} position={[-5, -3, -5]} color="#00ffff" intensity={2} distance={20} />
    </>
  );
};

const HeroCanvas: React.FC = () => {
  return (
    <Canvas className="absolute inset-0 z-0">
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      
      <ambientLight intensity={0.2} />
      <MovingLights />
      
      <Suspense fallback={null}>
        <Logo3D />
        
        {/* Star field */}
        <Stars 
          radius={50} 
          depth={50} 
          count={1000} 
          factor={4} 
          saturation={0.5} 
          fade 
          speed={1}
        />
        
        {/* Sparkle effects */}
        <Sparkles 
          count={150}
          scale={10}
          size={1}
          speed={0.3}
          color="#c2ff00"
        />
        
        <Environment preset="night" />
      </Suspense>
      
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default HeroCanvas;
