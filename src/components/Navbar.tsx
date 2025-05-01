
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Journey", path: "#journey" },
  { name: "Projects", path: "#projects" },
  { name: "Services", path: "#services" },
  { name: "Reviews", path: "#reviews" },
  { name: "Contact", path: "#contact" },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2 bg-jet/80 backdrop-blur-md border-b border-gray-800"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.path}
                className="text-gray-300 hover:text-neon transition-colors relative py-2 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="neon-button ml-4"
            >
              Let's Build
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-snow hover:text-neon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gradient-to-b from-jet to-black/80 backdrop-blur-lg border-b border-gray-800"
        >
          <div className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className="text-gray-300 hover:text-neon block py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="neon-button w-full flex justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Let's Build
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
