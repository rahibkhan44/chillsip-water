"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Raza",
    city: "Peshawar",
    rating: 5,
    text: "CHILLSIP is the best mineral water I have ever tasted! It is so crisp and refreshing. My whole family drinks it daily now. Highly recommended for everyone in Pakistan.",
    avatar: "AR",
    color: "from-[#0047AB] to-[#0099FF]",
  },
  {
    name: "Fatima Khan",
    city: "Lahore",
    rating: 5,
    text: "I switched to CHILLSIP 6 months ago and honestly the quality is outstanding. You can feel the difference — it tastes pure and natural. My skin has even improved since I started drinking more water!",
    avatar: "FK",
    color: "from-[#0099FF] to-[#00D4FF]",
  },
  {
    name: "Usman Tariq",
    city: "Islamabad",
    rating: 5,
    text: "As a fitness trainer I am very particular about hydration. CHILLSIP has the perfect mineral balance for before and after workouts. The fact that it is from Peshawar and supports local communities makes me love it even more.",
    avatar: "UT",
    color: "from-[#00AAFF] to-[#00D4FF]",
  },
  {
    name: "Zainab Malik",
    city: "Karachi",
    rating: 5,
    text: "Ordered CHILLSIP through their website and the customer service was amazing! Water arrived quickly and the taste is incredible — so clean and refreshing. Will definitely order again and again!",
    avatar: "ZM",
    color: "from-[#0055CC] to-[#0099FF]",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section className="py-14 lg:py-20 bg-[#001A3A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0099FF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#00D4FF]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-[#00D4FF] font-semibold text-xs tracking-widest uppercase mb-2">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            What Our Customers Say
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.45 }}
              className="glass-card rounded-2xl p-6 sm:p-10 text-center"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-[#00D4FF]/40 mx-auto mb-4" />

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Avatar + name */}
              <div className="flex items-center justify-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-black text-xs`}
                >
                  {t.avatar}
                </div>
                <div className="text-left">
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-[#00D4FF] text-xs">{t.city}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-8 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#0099FF]/40 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-8 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#0099FF]/40 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-[#00D4FF]" : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
