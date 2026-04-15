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
    <section id="benefits" className="py-20 lg:py-28 bg-[#001A3A] relative overflow-hidden">
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
          className="text-center mb-16"
        >
          <span className="inline-block text-[#00D4FF] font-semibold text-sm tracking-widest uppercase mb-3">
            Health Benefits
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            The Benefits of Drinking
            <br />
            <span className="gradient-text">CHILLSIP Daily</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-lg">
            Packed with natural minerals, CHILLSIP does more than quench your
            thirst — it fuels your body from the inside out.
          </p>
        </motion.div>

        {/* Two-column: image left, benefits right */}
        <div className="flex flex-col lg:flex-row items-start gap-12">
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
                alt="ChillSip health benefits"
                width={480}
                height={560}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001A3A]/60 to-transparent" />
            </div>
          </motion.div>

          {/* Benefits grid */}
          <div className="lg:w-3/5 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                className="glass-card rounded-2xl p-5 flex gap-4 items-start hover:border-[#00D4FF]/40 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0099FF] to-[#00D4FF] flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                  <b.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm mb-1">{b.title}</h3>
                  <p className="text-white/55 text-xs leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Second infographic */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center"
        >
          <div className="rounded-3xl overflow-hidden shadow-xl shadow-blue-900/40 relative">
            <Image
              src="/Screenshot_13.png"
              alt="ChillSip hydration benefits"
              width={480}
              height={360}
              className="w-full object-cover"
            />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl shadow-blue-900/40 relative">
            <Image
              src="/Screenshot_11.png"
              alt="Packed with minerals"
              width={480}
              height={360}
              className="w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
