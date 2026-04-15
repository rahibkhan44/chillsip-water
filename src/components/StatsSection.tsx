"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 100, suffix: "%", label: "Natural Minerals", desc: "No synthetic additives" },
  { value: 0, suffix: "", label: "Artificial Additives", desc: "Pure as nature intended" },
  { value: 8, suffix: "+", label: "Health Benefits", desc: "Proven by science" },
  { value: 10, suffix: "K+", label: "Happy Customers", desc: "Across Pakistan" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    if (value === 0) { setCount(0); return; }
    let start = 0;
    const step = Math.ceil(value / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 40);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-r from-[#0047AB] via-[#0055CC] to-[#0099FF] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full" />
        <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/3 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">
            CHILLSIP by the Numbers
          </h2>
          <p className="text-white/70">Why thousands of Pakistanis choose CHILLSIP every day</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, type: "spring" }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-2 leading-none">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="text-[#00D4FF] font-bold text-sm sm:text-base mb-1">{s.label}</p>
              <p className="text-white/60 text-xs sm:text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
