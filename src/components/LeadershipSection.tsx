"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function LeadershipSection() {
  return (
    <section
      id="leadership"
      className="relative bg-[#001A3A] overflow-hidden"
    >
      {/* Subtle background accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#0099FF]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-[#00D4FF]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 lg:pt-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 lg:mb-14"
        >
          <span className="inline-block text-[#00D4FF] font-semibold text-xs tracking-[0.3em] uppercase mb-3">
            Our Leadership
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight">
            Guided by <span className="gradient-text">Vision.</span>
          </h2>
        </motion.div>
      </div>

      {/* Founder block — full bleed cinematic */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          {/* Founder image — tall, no card, soft bottom fade into section bg */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5"
          >
            <div className="relative w-full max-w-[480px] mx-auto lg:mx-0 aspect-[4/5] overflow-hidden">
              <Image
                src="/founder-portrait.jpg"
                alt="Ahmad Alam — Founder & Chief Executive Officer of CHILLSIP Mineral Water"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 480px"
              />
              {/* Cinematic bottom fade into section bg */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#001A3A] via-[#001A3A]/40 to-transparent" />
            </div>
          </motion.div>

          {/* Statement — larger flowing body, big tracked name */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <Quote className="w-10 h-10 text-[#00D4FF]/40 mb-6" />

            <p className="text-white/90 text-lg lg:text-xl leading-[1.7] mb-5 font-light">
              At CHILLSIP, our mission transcends commercial success — it is
              rooted in the pursuit of purity, responsible innovation, and a
              commitment to community. We believe everyone in Pakistan deserves
              access to truly refreshing hydration.
            </p>
            <p className="text-white/65 text-base lg:text-lg leading-[1.7] mb-10 font-light">
              We aspire to position CHILLSIP as a benchmark of quality and trust
              — demonstrating that entrepreneurship, when guided by purpose and
              principle, can serve as a catalyst for meaningful progress. Our
              commitment is not merely to build a brand, but to cultivate a
              legacy that inspires future generations.
            </p>

            {/* Signature block — big, tracked, Aquative-style */}
            <div className="border-l-2 border-[#00D4FF] pl-6">
              <p className="font-black text-white text-2xl sm:text-3xl tracking-[0.15em] uppercase leading-tight">
                Ahmad Alam
              </p>
              <p className="text-[#00D4FF] font-semibold text-xs tracking-[0.3em] uppercase mt-2">
                Founder &amp; Chief Executive Officer
              </p>
              <p className="text-white/50 text-sm mt-1">
                CHILLSIP Mineral Water
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
