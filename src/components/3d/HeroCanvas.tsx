
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Logo3D from './Logo3D';

const HeroCanvas: React.FC = () => {
  return (
    <Canvas className="absolute inset-0 z-0">
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#c2ff00" />
      
      <Suspense fallback={null}>
        <Logo3D />
      </Suspense>
      
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default HeroCanvas;
