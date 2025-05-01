
import React from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  GraduationCap, 
  ShoppingBag, 
  Layers, 
  Users, 
  Heart 
} from "lucide-react";

const industries = [
  {
    id: 1,
    name: "Personal Portfolios",
    description: "Stand-out digital presences for professionals, artists, and creators",
    icon: <Briefcase className="text-neon" size={32} />,
    clients: "25+ clients"
  },
  {
    id: 2,
    name: "Educational Tech",
    description: "Interactive learning platforms and tools for modern education",
    icon: <GraduationCap className="text-neon" size={32} />,
    clients: "10+ institutions"
  },
  {
    id: 3,
    name: "E-commerce",
    description: "Converting online stores with seamless user experiences",
    icon: <ShoppingBag className="text-neon" size={32} />,
    clients: "15+ shops"
  },
  {
    id: 4,
    name: "SaaS Platforms",
    description: "Scalable software solutions with powerful user interfaces",
    icon: <Layers className="text-neon" size={32} />,
    clients: "8+ platforms"
  },
  {
    id: 5,
    name: "Creative Agencies",
    description: "Digital tools that empower other creative professionals",
    icon: <Users className="text-neon" size={32} />,
    clients: "12+ agencies"
  },
  {
    id: 6,
    name: "NGOs & Foundations",
    description: "Impactful digital presences for organizations making a difference",
    icon: <Heart className="text-neon" size={32} />,
    clients: "6+ foundations"
  }
];

const IndustriesSection: React.FC = () => {
  return (
    <section id="industries" className="section-padding bg-gradient-to-b from-black to-jet">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Industries We <span className="text-neon glow-text">Serve</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We've successfully delivered digital solutions across various industries,
            each with their unique challenges and requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
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
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">{industry.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-neon transition-colors">
                  {industry.name}
                </h3>
                <p className="text-gray-300 mb-4">
                  {industry.description}
                </p>
                {industry.clients && (
                  <div className="mt-auto">
                    <span className="text-neon text-sm font-semibold bg-neon/10 px-3 py-1 rounded-full">
                      {industry.clients}
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
            Discuss Your Industry
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;
