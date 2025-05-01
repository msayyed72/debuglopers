
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
      <ReviewsSection />
      <ContactSection />
      <FloatingContactButton />
      <Footer />
    </div>
  );
};

export default Index;
