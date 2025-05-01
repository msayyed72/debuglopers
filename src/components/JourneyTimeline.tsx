
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const timelineData = [
  {
    year: "2024",
    title: "Debuglopers Founded",
    description: "The beginning of our journey to revolutionize digital solutions. Founded by Sayyed MD Haider and Shaikh Mohammed Saud with a vision to build innovative tools and brands."
  },
  {
    year: "Early 2025",
    title: "First Major Projects",
    description: "Delivered multiple successful projects including custom dashboards, responsive websites, and AI-powered tools that helped businesses scale and grow."
  },
  {
    year: "Now",
    title: "Growth & Collaboration",
    description: "Working with established brands and startups alike, providing cutting-edge solutions while expanding our team and capabilities."
  },
  {
    year: "Future",
    title: "New Horizons",
    description: "Launching our proprietary SaaS tools, branding kits, and UI systems to empower businesses with turnkey solutions."
  }
];

const JourneyTimeline: React.FC = () => {
  return (
    <section id="journey" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-neon glow-text">Journey</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            From inception to innovation, our timeline showcases the evolution of Debuglopers and
            our commitment to pushing the boundaries of what's possible.
          </p>
        </motion.div>

        <div className="relative flex flex-col items-center">
          {/* Timeline line */}
          <div className="absolute w-1 bg-gradient-to-b from-neon via-royal to-neon h-full left-6 md:left-1/2 transform md:-translate-x-1/2"></div>

          {timelineData.map((item, index) => (
            <TimelineItem 
              key={index} 
              data={item} 
              index={index} 
              isLast={index === timelineData.length - 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TimelineItemProps {
  data: {
    year: string;
    title: string;
    description: string;
  };
  index: number;
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ data, index, isLast }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="w-full flex mb-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className={`relative w-full md:w-1/2 md:px-8 ${isEven ? 'md:text-right md:self-end' : 'md:ml-auto'}`}
      >
        <div 
          className={`flex items-center mb-3 ${
            isEven ? 'md:justify-end' : 'md:justify-start'
          }`}
        >
          <div className={`w-12 h-12 rounded-full bg-jet border-2 border-neon flex items-center justify-center text-neon font-bold absolute left-0 md:left-auto ${
            isEven ? 'md:-right-6' : 'md:-left-6'
          }`}>
            {index + 1}
          </div>
          
          <span className="text-neon font-bold ml-16 md:ml-0">{data.year}</span>
        </div>
        
        <div className="ml-16 md:ml-0">
          <h3 className="text-xl md:text-2xl font-bold mb-2">{data.title}</h3>
          <p className="text-gray-300">{data.description}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default JourneyTimeline;
