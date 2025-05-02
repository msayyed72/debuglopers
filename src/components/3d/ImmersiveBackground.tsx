
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

type ImmersiveBackgroundProps = {
  color?: string;
  density?: number;
  speed?: number;
  className?: string;
}

const ImmersiveBackground: React.FC<ImmersiveBackgroundProps> = ({
  color = '#c2ff00',
  density = 800,
  speed = 0.0005,
  className = 'absolute inset-0 z-0'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Create grid of particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = density;
    
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);
    
    const colorObj = new THREE.Color(color);
    
    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Position
      posArray[i] = (Math.random() - 0.5) * 15;
      posArray[i + 1] = (Math.random() - 0.5) * 15;
      posArray[i + 2] = (Math.random() - 0.5) * 15;
      
      // Color with slight variation
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
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.015,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Handle mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    
    function mouseMove(event: MouseEvent) {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    }
    
    window.addEventListener('mousemove', mouseMove);
    
    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const animate = () => {
      particlesMesh.rotation.x += speed;
      particlesMesh.rotation.y += speed;
      
      // Reactive to mouse movement
      particlesMesh.rotation.x += mouseY * speed * 0.5;
      particlesMesh.rotation.y += mouseX * speed * 0.5;
      
      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      scene.remove(particlesMesh);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, [color, density, speed]);
  
  return <canvas ref={canvasRef} className={className} />;
};

export default ImmersiveBackground;
