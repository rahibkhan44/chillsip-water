"use client";

import { motion } from "framer-motion";
import { Droplets, Sparkles, ShieldCheck, Leaf } from "lucide-react";

const pillars = [
  {
    icon: Droplets,
    title: "Pure Source",
    desc: "Naturally sourced water from protected springs, filtered through centuries of rock formations.",
    bg: "from-[#0047AB] to-[#0099FF]",
    glow: "shadow-blue-500/30",
  },
  {
    icon: Sparkles,
    title: "Rich Minerals",
    desc: "Naturally rich in calcium, magnesium and potassium — the essential electrolytes your body craves.",
    bg: "from-[#0099FF] to-[#00AAFF]",
    glow: "shadow-sky-400/30",
  },
  {
    icon: ShieldCheck,
    title: "Crystal Clear",
    desc: "Every batch tested for purity. Zero contaminants, zero compromise — just crystal-clear perfection.",
    bg: "from-[#00AAFF] to-[#00D4FF]",
    glow: "shadow-cyan-400/30",
  },
  {
    icon: Leaf,
    title: "Always Fresh",
    desc: "Sealed at the source to lock in freshness. From our facility straight to your hands.",
    bg: "from-[#00C4FF] to-[#00E5FF]",
    glow: "shadow-teal-400/30",
  },
];

export default function WhyChillsip() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#0099FF] font-semibold text-sm tracking-widest uppercase mb-3">
            Why Choose Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#001A3A] mb-4">
            Why <span className="text-[#0099FF]">CHILLSIP?</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            We do not just sell water. We deliver a promise of purity, quality and
            refreshment in every single bottle.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="group relative bg-white rounded-3xl p-8 text-center border border-gray-100 hover:border-[#0099FF]/30 shadow-sm hover:shadow-xl hover:shadow-blue-100/60 hover:-translate-y-2 transition-all duration-400 cursor-default"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#F0F8FF] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-400 -z-10" />

              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${p.bg} flex items-center justify-center mx-auto mb-5 shadow-xl ${p.glow} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
              >
                <p.icon className="w-8 h-8 text-white" />
              </div>

              {/* Number */}
              <div className="absolute top-5 right-5 text-6xl font-black text-[#0047AB]/5 leading-none select-none">
                0{i + 1}
              </div>

              <h3 className="font-black text-xl text-[#001A3A] mb-3 group-hover:text-[#0047AB] transition-colors duration-300">
                {p.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-[#001A3A]/50 text-sm mt-12 italic"
        >
          &ldquo;So Cool. So Fresh. — CHILLSIP Mineral Water&rdquo;
        </motion.p>
      </div>
    </section>
  );
}
