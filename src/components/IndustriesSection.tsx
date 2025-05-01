
import React from "react";
import { motion } from "framer-motion";

const industries = [
  {
    id: 1,
    name: "SaaS & Tech Startups",
    description: "Helping innovative startups build scalable products and establish their digital presence",
    icon: "🚀",
  },
  {
    id: 2,
    name: "E-Commerce",
    description: "Creating seamless shopping experiences that drive conversions and customer loyalty",
    icon: "🛒",
  },
  {
    id: 3,
    name: "Education & EdTech",
    description: "Building intuitive learning platforms and tools that enhance the educational experience",
    icon: "🎓",
  },
  {
    id: 4,
    name: "Healthcare & Wellness",
    description: "Developing secure, compliant solutions that improve patient care and operational efficiency",
    icon: "⚕️",
  },
  {
    id: 5,
    name: "Finance & FinTech",
    description: "Creating secure, innovative financial tools and dashboards that simplify complex data",
    icon: "💹",
  },
  {
    id: 6,
    name: "Creative Professionals",
    description: "Building stunning portfolios and professional websites that showcase creative work",
    icon: "🎨",
  },
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
            We bring our expertise to a diverse range of industries, tailoring our solutions to meet 
            the unique challenges and requirements of each sector.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glow-card p-6 flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
              <p className="text-gray-300 text-sm">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
