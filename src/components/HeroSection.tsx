
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Logo from "./Logo";
import HeroCanvas from "./3d/HeroCanvas";
import ImmersiveBackground from "./3d/ImmersiveBackground";

const HeroSection: React.FC = () => {
  const [text, setText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const phrases = [
    "We Build Tools.",
    "We Build Brands.",
    "We Build the Future."
  ];
  
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
  
  // Mouse parallax effect for hero elements
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX / innerWidth - 0.5;
      const y = e.clientY / innerHeight - 0.5;
      setMousePosition({ x, y });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <ImmersiveBackground 
        color="#c2ff00"
        density={1500}
        speed={0.0003}
      />
      
      {/* 3D Logo */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>
      </div>
      
      {/* Flying particles */}
      <div className="absolute inset-0 z-0 opacity-50">
        <Canvas ref={canvasRef}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={0.3} />
          
          {Array.from({ length: 50 }).map((_, i) => (
            <mesh 
              key={i}
              position={[
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 5
              ]}
            >
              <sphereGeometry args={[0.05, 16, 16]} />
              <meshStandardMaterial 
                color="#c2ff00" 
                emissive="#c2ff00"
                emissiveIntensity={0.5}
              />
            </mesh>
          ))}
        </Canvas>
      </div>
      
      {/* Content overlay with parallax effect */}
      <div className="relative z-10 text-center mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
          style={{
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
          }}
        >
          <Logo className="mx-auto scale-[2.5] mb-8 animate-float" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white glow-text"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          }}
        >
          {text}
          <span className="animate-pulse">|</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          style={{
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
          }}
        >
          A bold and modern digital company delivering stunning digital solutions with cutting-edge technology and creative excellence.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
          }}
        >
          <a href="#contact" className="magnetic-button group relative overflow-hidden">
            <span className="relative z-10">Let's Build Together</span>
            <span className="absolute inset-0 bg-gradient-to-r from-neon/30 to-cyan/30 transform group-hover:translate-y-0 translate-y-full transition-transform duration-300"></span>
          </a>
          <a href="#projects" className="neon-button group">
            <span className="group-hover:animate-pulse">Explore Our Work</span>
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
