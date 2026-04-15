"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Users, Droplets, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const initiatives = [
  { icon: Droplets, label: "Clean Water Delivered", value: "1000s of Bottles" },
  { icon: Users, label: "Communities Served", value: "Tirah Valley" },
  { icon: Heart, label: "Families Helped", value: "Hundreds" },
  { icon: MapPin, label: "Region", value: "KP, Pakistan" },
];

export default function CsrSection() {
  return (
    <section id="community" className="py-20 lg:py-28 bg-white relative overflow-hidden">
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
            Community
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#001A3A] mb-4">
            More Than Water —
            <br />
            <span className="text-[#0099FF]">A Mission.</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            At CHILLSIP, we believe clean water is not a privilege — it is a right.
            Our community donation program brings life-changing water to those who
            need it most.
          </p>
        </motion.div>

        {/* Main CSR block */}
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <div className="relative h-[420px] sm:h-[500px] lg:h-[560px]">
            <Image
              src="/Screenshot_4.png"
              alt="ChillSip Water Donation — Tirah Valley"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#001A3A]/90 via-[#001A3A]/70 to-transparent" />

            <div className="absolute inset-0 flex items-center px-8 sm:px-12 lg:px-16">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-xl"
              >
                <Badge className="bg-[#00D4FF]/20 text-[#00D4FF] border border-[#00D4FF]/40 mb-5 text-sm px-4 py-1.5">
                  Helping Communities in Need
                </Badge>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                  CHILLSIP
                  <br />
                  Water Donation
                </h3>
                <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">
                  Bringing water to the people of Tirah Valley — a remote community
                  in Khyber Pakhtunkhwa where access to clean water remains
                  a daily challenge. Every bottle you buy helps us give back.
                </p>
                <Button className="bg-gradient-to-r from-[#0047AB] to-[#0099FF] text-white font-bold px-8 py-3 rounded-full hover:from-[#0055CC] hover:to-[#00AAFF] shadow-lg shadow-blue-900/40 hover:scale-105 transition-all duration-300">
                  Learn About Our Mission
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Initiative stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {initiatives.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#F0F8FF] rounded-2xl p-5 text-center border border-[#0099FF]/10 hover:border-[#0099FF]/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0047AB] to-[#0099FF] flex items-center justify-center mx-auto mb-3 shadow-md shadow-blue-300/40">
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <p className="font-black text-[#001A3A] text-sm sm:text-base">{item.value}</p>
              <p className="text-gray-500 text-xs sm:text-sm">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center max-w-3xl mx-auto"
        >
          <p className="text-xl sm:text-2xl font-semibold text-[#001A3A] italic leading-relaxed">
            &ldquo;We believe clean water is a right, not a privilege. Every sip of
            CHILLSIP helps someone in need get access to life-giving water.&rdquo;
          </p>
          <footer className="mt-4 text-[#0099FF] font-bold">
            — CHILLSIP Mineral Water, Peshawar
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
