import React from "react";
import { motion } from "framer-motion";
import { 
  Code, 
  Layers, 
  Lightbulb, 
  LayoutDashboard, 
  Box, 
  Palette, 
  Search, 
  Star, 
  Bot 
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "3D Web Development",
    description: "Create immersive 3D experiences that captivate users and increase engagement by 70%",
    icon: <Box className="text-neon" size={32} />,
    metric: "70% higher engagement rates"
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    description: "Build powerful, scalable web applications with modern technologies that convert visitors",
    icon: <Code className="text-neon" size={32} />,
    metric: "99.9% uptime guarantee"
  },
  {
    id: 3,
    title: "AI Tool Development",
    description: "Leverage artificial intelligence to create intelligent solutions that automate processes",
    icon: <Bot className="text-neon" size={32} />,
    metric: "80% reduction in manual tasks"
  },
  {
    id: 4,
    title: "Dashboard & Admin Panels",
    description: "Develop custom dashboards that provide actionable insights and streamline operations",
    icon: <LayoutDashboard className="text-neon" size={32} />,
    metric: "Visualize data 5x faster"
  },
  {
    id: 5,
    title: "Branding & UI/UX Design",
    description: "Create stunning visual identities and experiences that make your brand memorable",
    icon: <Palette className="text-neon" size={32} />,
    metric: "40% higher brand retention"
  },
  {
    id: 6,
    title: "SEO & Performance Optimization",
    description: "Improve your search rankings and site performance for better visibility and user experience",
    icon: <Search className="text-neon" size={32} />,
    metric: "200% increase in organic traffic"
  },
  {
    id: 7,
    title: "Real-time Review Systems",
    description: "Implement feedback collection tools that help you understand customers and improve services",
    icon: <Star className="text-neon" size={32} />,
    metric: "60% higher customer satisfaction"
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-neon glow-text">Services</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We offer a comprehensive range of digital services to help your business thrive
            in the rapidly evolving technological landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 } 
              }}
              className="gradient-border p-8 hover:animate-glow relative group"
            >
              <div className="flex flex-col">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-neon transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
                {service.metric && (
                  <div className="mt-auto">
                    <span className="text-neon text-sm font-semibold bg-neon/10 px-3 py-1 rounded-full">
                      {service.metric}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="magnetic-button"
          >
            Let's Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
