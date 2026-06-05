"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Story" },
  { href: "#products", label: "Product" },
  { href: "#benefits", label: "Benefits" },
  { href: "#leadership", label: "Leadership" },
  { href: "#stockists", label: "Stockists" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#001A3A]/95 backdrop-blur-md shadow-lg shadow-blue-900/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => handleNavClick("#home")}
              whileHover={{ scale: 1.03 }}
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0099FF] to-[#00D4FF] flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <span className="font-black text-xl tracking-wider text-white">
                CHILL<span className="text-[#00D4FF]">SIP</span>
              </span>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-sm font-medium text-white/80 hover:text-[#00D4FF] transition-colors duration-200 rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                onClick={() => handleNavClick("#contact")}
                className="bg-gradient-to-r from-[#0047AB] to-[#0099FF] hover:from-[#0055CC] hover:to-[#00AAFF] text-white font-semibold px-6 py-2 rounded-full shadow-lg shadow-blue-600/30 transition-all duration-300 hover:shadow-blue-500/50 hover:scale-105"
              >
                Order Now
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#001A3A]/97 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-white/90 hover:text-[#00D4FF] hover:bg-white/5 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="pt-2 pb-1">
                <Button
                  onClick={() => handleNavClick("#contact")}
                  className="w-full bg-gradient-to-r from-[#0047AB] to-[#0099FF] text-white font-semibold rounded-full py-3"
                >
                  Order Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
