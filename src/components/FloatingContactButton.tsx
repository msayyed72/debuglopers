
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Mail, Phone } from "lucide-react";

const FloatingContactButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-3 mb-4"
          >
            <a
              href="mailto:contact@debuglopers.com"
              className="w-12 h-12 rounded-full bg-snow flex items-center justify-center text-jet hover:bg-neon transition-colors shadow-lg"
              aria-label="Email us"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://wa.me/1234567890" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-snow flex items-center justify-center text-jet hover:bg-neon transition-colors shadow-lg"
              aria-label="WhatsApp us"
            >
              <Phone size={20} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        onClick={toggleOpen}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 rounded-full bg-neon text-jet flex items-center justify-center shadow-lg focus:outline-none"
        aria-label="Contact options"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
};

export default FloatingContactButton;
