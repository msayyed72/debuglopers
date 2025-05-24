
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutFounders from "@/components/AboutFounders";
import JourneyTimeline from "@/components/JourneyTimeline";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import FloatingContactButton from "@/components/FloatingContactButton";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import ImmersiveBackground from "@/components/3d/ImmersiveBackground";
import { Toaster } from "@/components/ui/toaster";
import ProjectsShowcase from "@/components/ProjectsShowcase";

const Index = () => {
  useEffect(() => {
    // Enhanced SEO metadata
    document.title = "Debuglopers - Motion Miracle | Web Development, AI & 3D Studio";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Debuglopers - Leading digital agency creating stunning websites, AI tools, and immersive 3D experiences. Founded by visionary developers specializing in modern web technologies, motion design, and user experience.');
    }
    
    // Add keywords meta tag
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'web development, AI tools, 3D design, motion graphics, React, Three.js, digital agency, UI/UX design, full-stack development, modern web design');
    
    // Add author meta tag
    let authorMeta = document.querySelector('meta[name="author"]');
    if (!authorMeta) {
      authorMeta = document.createElement('meta');
      authorMeta.setAttribute('name', 'author');
      document.head.appendChild(authorMeta);
    }
    authorMeta.setAttribute('content', 'Debuglopers - Sayyed MD Haider & Shaikh Mohammed Saud');
    
    // Add viewport meta for mobile optimization
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      viewportMeta = document.createElement('meta');
      viewportMeta.setAttribute('name', 'viewport');
      document.head.appendChild(viewportMeta);
    }
    viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0');
    
    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Debuglopers",
      "alternateName": "Motion Miracle",
      "url": "https://debuglopers-motion-miracle.lovable.app",
      "logo": "https://debuglopers-motion-miracle.lovable.app/logo.png",
      "description": "Leading digital agency creating stunning websites, AI tools, and immersive 3D experiences",
      "foundingDate": "2023",
      "founders": [
        {
          "@type": "Person",
          "name": "Sayyed MD Haider"
        },
        {
          "@type": "Person", 
          "name": "Shaikh Mohammed Saud"
        }
      ],
      "serviceArea": "Global",
      "services": [
        "Web Development",
        "AI Tool Development", 
        "3D Design",
        "Motion Graphics",
        "UI/UX Design",
        "Full-Stack Development"
      ]
    };
    
    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);
    
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Enhanced semantic HTML structure for better SEO */}
      <header>
        <Navbar />
      </header>
      
      <main>
        {/* Hero section with enhanced animations */}
        <section aria-label="Hero Introduction">
          <HeroSection />
        </section>
        
        {/* About section */}
        <section aria-label="About Our Founders">
          <AboutFounders />
        </section>
        
        {/* Company journey */}
        <section aria-label="Our Journey Timeline">
          <JourneyTimeline />
        </section>
        
        {/* Services overview */}
        <section aria-label="Our Services">
          <ServicesSection />
        </section>
        
        {/* Portfolio showcase */}
        <section aria-label="Projects Portfolio">
          <ProjectsShowcase />
        </section>
        
        {/* Case studies */}
        <section aria-label="Case Studies">
          <CaseStudiesSection />
        </section>
        
        {/* Industries we serve */}
        <section aria-label="Industries We Serve">
          <IndustriesSection />
        </section>
        
        {/* Client reviews with immersive background */}
        <section aria-label="Client Reviews" className="relative">
          <div className="absolute inset-0 z-0">
            <Suspense fallback={<div></div>}>
              <ImmersiveBackground color="#c2ff00" density={1000} speed={0.0002} />
            </Suspense>
          </div>
          <ReviewsSection />
        </section>
        
        {/* Contact information */}
        <section aria-label="Contact Us">
          <ContactSection />
        </section>
      </main>
      
      {/* Footer */}
      <footer>
        <Footer />
      </footer>
      
      {/* Floating elements */}
      <FloatingContactButton />
      <Toaster />
    </div>
  );
};

export default Index;
