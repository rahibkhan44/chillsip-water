"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Thermometer, Brain, Dumbbell, Sparkles, Apple, Activity,
} from "lucide-react";

const benefits = [
  {
    icon: Thermometer,
    title: "Maintains Body Temperature",
    desc: "Proper hydration regulates your core temperature and keeps you cool under pressure.",
  },
  {
    icon: Brain,
    title: "Decreases Headaches",
    desc: "Dehydration is a leading cause of headaches. Stay ahead with CHILLSIP.",
  },
  {
    icon: Dumbbell,
    title: "Improves Physical Performance",
    desc: "Hydrated muscles perform better. Power through every workout and long day.",
  },
  {
    icon: Sparkles,
    title: "Boosts Skin Health",
    desc: "Hydration from within keeps your skin radiant, plump and naturally glowing.",
  },
  {
    icon: Apple,
    title: "Prevents Kidney Stones",
    desc: "Adequate mineral water intake flushes out toxins and helps prevent stone formation.",
  },
  {
    icon: Activity,
    title: "Balances Electrolytes",
    desc: "Natural minerals restore electrolyte balance for sustained energy throughout the day.",
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-14 lg:py-20 bg-[#001A3A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0047AB]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00D4FF]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-[#00D4FF] font-semibold text-xs tracking-widest uppercase mb-2">
            Health Benefits
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            The Benefits of Drinking
            <br />
            <span className="gradient-text">CHILLSIP Daily</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-sm">
            Packed with natural minerals, CHILLSIP does more than quench your
            thirst — it fuels your body from the inside out.
          </p>
        </motion.div>

        {/* Two-column: image left, benefits right */}
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Infographic image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/5 w-full"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/40">
              <Image
                src="/Screenshot_9.png"
                alt="Health benefits of drinking CHILLSIP mineral water daily — hydration, electrolytes, skin health and physical performance"
                width={480}
                height={560}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001A3A]/60 to-transparent" />
            </div>
          </motion.div>

          {/* Benefits grid */}
          <div className="lg:w-3/5 w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass-card rounded-xl p-4 flex gap-3 items-start hover:border-[#00D4FF]/40 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0099FF] to-[#00D4FF] flex items-center justify-center flex-shrink-0 shadow-md shadow-blue-500/30 group-hover:scale-105 transition-transform duration-300">
                  <b.icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xs mb-0.5">{b.title}</h3>
                  <p className="text-white/55 text-[11px] leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
