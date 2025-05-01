
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutFounders from "@/components/AboutFounders";
import JourneyTimeline from "@/components/JourneyTimeline";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import ServicesSection from "@/components/ServicesSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
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
      <ProjectsShowcase />
      <ServicesSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
