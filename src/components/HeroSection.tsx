
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
  
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <ImmersiveBackground 
        color="#c2ff00"
        density={1200}
        speed={0.0003}
      />
      
      {/* 3D Logo */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>
      </div>
      
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
