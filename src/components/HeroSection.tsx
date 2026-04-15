"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Droplets, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const bubbles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  size: Math.random() * 20 + 8,
  left: Math.random() * 100,
  duration: Math.random() * 8 + 6,
  delay: Math.random() * 6,
}));

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/Screenshot_1.png"
          alt="ChillSip hero background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001A3A]/75 via-[#002966]/60 to-[#001A3A]/90" />
      </div>

      {/* Animated bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbles.map((b) => (
          <div
            key={b.id}
            className="bubble"
            style={{
              width: b.size,
              height: b.size,
              left: `${b.left}%`,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Ripple rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-0 h-0">
          {[1, 2, 3].map((i) => (
            <div key={i} className="ripple-ring" />
          ))}
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-[#00D4FF]/30 rounded-full px-4 py-2 mb-6"
          >
            <Droplets className="w-4 h-4 text-[#00D4FF]" />
            <span className="text-sm text-white/90 font-medium tracking-wide">
              Pure Mineral Water from Peshawar
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-4"
          >
            <span className="text-white">Feel the</span>
            <br />
            <span className="gradient-text">Chill.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg sm:text-xl text-white/75 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            Taste the Refreshment — Crystal-clear mineral water, packed with
            natural minerals, sourced and purified for peak hydration.
          </motion.p>

          {/* Rating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex items-center gap-2 mb-8 justify-center lg:justify-start"
          >
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white/70 text-sm">
              Trusted by thousands across Pakistan
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button
              onClick={() => handleScroll("#contact")}
              size="lg"
              className="bg-gradient-to-r from-[#0047AB] to-[#0099FF] hover:from-[#0055CC] hover:to-[#00AAFF] text-white font-bold px-8 py-4 rounded-full text-base pulse-glow transition-all duration-300 hover:scale-105"
            >
              Order Now
            </Button>
            <Button
              onClick={() => handleScroll("#about")}
              size="lg"
              variant="outline"
              className="border-white/40 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-[#00D4FF] px-8 py-4 rounded-full text-base transition-all duration-300 hover:scale-105"
            >
              Explore More
            </Button>
          </motion.div>
        </div>

        {/* Bottle image */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.85 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="flex-shrink-0 relative"
        >
          <div className="relative w-[280px] sm:w-[340px] lg:w-[400px]">
            {/* Glow behind bottle */}
            <div className="absolute inset-0 rounded-full bg-[#0099FF]/20 blur-3xl scale-90" />
            <Image
              src="/Screenshot_12.png"
              alt="ChillSip Mineral Water bottle"
              width={400}
              height={500}
              className="relative z-10 drop-float object-contain w-full"
              priority
            />
          </div>

          {/* Floating badge: Purity */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, type: "spring" }}
            className="absolute top-8 -left-6 glass-card rounded-2xl p-3 shadow-xl"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0099FF] to-[#00D4FF] flex items-center justify-center">
                <Droplets className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-white text-xs font-bold">100% Pure</p>
                <p className="text-[#00D4FF] text-xs">Natural Minerals</p>
              </div>
            </div>
          </motion.div>

          {/* Floating badge: Hydration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, type: "spring" }}
            className="absolute bottom-12 -right-6 glass-card rounded-2xl p-3 shadow-xl"
          >
            <div className="text-center">
              <p className="text-[#00D4FF] font-black text-2xl">0</p>
              <p className="text-white text-xs">Additives</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => handleScroll("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 hover:text-[#00D4FF] transition-colors group"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.button>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[60px]">
          <path
            d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
