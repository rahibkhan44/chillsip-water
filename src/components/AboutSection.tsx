"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const pills = [
  "100% Natural Minerals",
  "Crystal Clear Purity",
  "0 Artificial Additives",
];

const highlights = [
  {
    title: "Pure Source",
    desc: "Our water is drawn from naturally protected sources, filtered through layers of rock over centuries.",
  },
  {
    title: "Purity Promise",
    desc: "Every bottle passes rigorous quality checks to ensure it meets the highest standards of purity.",
  },
  {
    title: "Community First",
    desc: "From Peshawar to Tirah Valley, we believe every Pakistani deserves access to clean, refreshing water.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Background blob */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#0099FF]/10 to-[#00D4FF]/10 -z-10" />
              <Image
                src="/Screenshot_2.png"
                alt="ChillSip — Pure refreshment"
                width={480}
                height={560}
                className="rounded-3xl w-full object-cover shadow-2xl shadow-blue-200/60"
              />
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -bottom-6 -right-6 bg-[#0047AB] rounded-2xl p-4 shadow-xl text-white"
              >
                <p className="text-3xl font-black">100%</p>
                <p className="text-sm text-[#00D4FF]">Natural Minerals</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <span className="inline-block text-[#0099FF] font-semibold text-sm tracking-widest uppercase mb-3">
              Our Story
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#001A3A] leading-tight mb-6">
              Born in Peshawar.
              <br />
              <span className="text-[#0099FF]">Trusted Across Pakistan.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              CHILLSIP Mineral Water was born from a simple belief — that everyone
              deserves water that is pure, crisp, and truly refreshing. Rooted in
              the heart of Peshawar, we have dedicated ourselves to delivering
              nature&apos;s finest hydration to every corner of Pakistan.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Every drop of CHILLSIP carries the richness of natural minerals,
              carefully preserved from source to bottle. We are not just a water
              brand — we are a commitment to health, purity, and community.
            </p>

            {/* Pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {pills.map((pill) => (
                <div
                  key={pill}
                  className="flex items-center gap-2 bg-[#F0F8FF] border border-[#0099FF]/20 rounded-full px-4 py-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#0099FF]" />
                  <span className="text-sm font-semibold text-[#001A3A]">{pill}</span>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0047AB] to-[#0099FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white font-black text-sm">{i + 1}</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#001A3A]">{h.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{h.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
