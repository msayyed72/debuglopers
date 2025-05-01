
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import Logo from "./Logo";

const HeroSection: React.FC = () => {
  const [text, setText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const mountRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const sceneRef = useRef<THREE.Scene>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  
  const phrases = [
    "We Build Tools.",
    "We Build Brands.",
    "We Build the Future."
  ];
  
  // Set up the THREE.js scene
  useEffect(() => {
    if (!mountRef.current) return;
    
    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;
    
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: new THREE.Color("#c2ff00"),
      transparent: true,
      opacity: 0.8,
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Create wireframe sphere for logo background
    const sphereGeometry = new THREE.SphereGeometry(1.5, 24, 24);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x1A73E8,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);
    
    // Animation loop
    const animate = () => {
      particlesMesh.rotation.x += 0.001;
      particlesMesh.rotation.y += 0.001;
      
      sphere.rotation.y += 0.003;
      sphere.rotation.x += 0.001;
      
      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      if (!camera || !renderer) return;
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (rendererRef.current && mountRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);
  
  // Typewriter effect
  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentPhrase.substring(0, text.length + 1));
        
        if (text.length === currentPhrase.length) {
          setIsDeleting(true);
          setTypingSpeed(100);
          setTimeout(() => {
            setTypingSpeed(50);
          }, 1500);
        }
      } else {
        setText(currentPhrase.substring(0, text.length - 1));
        
        if (text.length === 0) {
          setIsDeleting(false);
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        }
      }
    }, isDeleting ? typingSpeed / 2 : typingSpeed);
    
    return () => clearTimeout(timer);
  }, [text, currentPhraseIndex, isDeleting, typingSpeed, phrases]);
  
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* THREE.js canvas container */}
      <div ref={mountRef} className="absolute inset-0"></div>
      
      {/* Content overlay */}
      <div className="relative z-10 text-center mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Logo className="mx-auto scale-[2.5] mb-8 animate-float" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white glow-text"
        >
          {text}
          <span className="animate-pulse">|</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          A bold and modern digital company delivering stunning digital solutions with cutting-edge technology and creative excellence.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="magnetic-button">
            Let's Build Together
          </a>
          <a href="#projects" className="neon-button">
            Explore Our Work
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-gray-400 text-sm mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ height: [6, 10, 6] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 bg-neon rounded-full"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
