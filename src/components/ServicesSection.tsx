
import React from "react";
import { motion } from "framer-motion";
import { Code, Layers, Lightbulb, LayoutGrid } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Branding & UI/UX Design",
    description: "Create stunning visual identities and user experiences that captivate and engage your audience",
    icon: <Layers className="text-neon" size={32} />
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    description: "Build powerful, scalable web applications with modern technologies and best practices",
    icon: <Code className="text-neon" size={32} />
  },
  {
    id: 3,
    title: "AI Tool Development",
    description: "Leverage artificial intelligence to create intelligent solutions that automate and optimize processes",
    icon: <Lightbulb className="text-neon" size={32} />
  },
  {
    id: 4,
    title: "Dashboard & Admin Panel Development",
    description: "Develop custom dashboards and admin panels that provide actionable insights and streamline operations",
    icon: <LayoutGrid className="text-neon" size={32} />
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <p className="text-gray-300">
                  {service.description}
                </p>
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
