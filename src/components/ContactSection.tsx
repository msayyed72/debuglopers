
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Instagram, Linkedin, Github, Mail, Phone } from "lucide-react";

const ContactSection: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real application, this would send data to Supabase or another backend
    // For now, we'll just show a success message
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-neon glow-text">Touch</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to learn more about our services?
            We'd love to hear from you and discuss how we can help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-neon focus:border-transparent transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-neon focus:border-transparent transition-colors"
                  placeholder="debuglopers@gmail.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-neon focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full magnetic-button"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            <div className="glow-card p-8 mb-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-neon mr-4 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Email Us</p>
                    <a href="mailto:contact@debuglopers.com" className="text-gray-300 hover:text-neon transition-colors">
                      debuglopers@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-neon mr-4 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <a href="tel:+1234567890" className="text-gray-300 hover:text-neon transition-colors">
                      +91-8108561069 | +91-9702019585
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glow-card p-8">
              <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
              
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/debuglopers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800/70 rounded-full hover:bg-neon hover:text-jet transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/company/debuglopers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800/70 rounded-full hover:bg-neon hover:text-jet transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/debuglopers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800/70 rounded-full hover:bg-neon hover:text-jet transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              </div>
              
              <p className="mt-6 text-gray-300">
                Follow us on social media for updates, tips, and insights into our work.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
