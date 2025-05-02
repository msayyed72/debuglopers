
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

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Debuglopers | Motion Miracle";
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutFounders />
      <JourneyTimeline />
      <ServicesSection />
      <CaseStudiesSection />
      <IndustriesSection />
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <Suspense fallback={<div></div>}>
            <ImmersiveBackground color="#c2ff00" density={1000} speed={0.0002} />
          </Suspense>
        </div>
        <ReviewsSection />
      </div>
      <ContactSection />
      <FloatingContactButton />
      <Footer />
    </div>
  );
};

export default Index;
