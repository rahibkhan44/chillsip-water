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
    <section id="community" className="py-14 lg:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-[#0099FF] font-semibold text-xs tracking-widest uppercase mb-2">
            Community
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#001A3A] mb-3">
            More Than Water.
            <br />
            <span className="text-[#0099FF]">A Mission.</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm">
            Clean water is a right, not a luxury. Through our donation program
            we deliver water to people who need it most.
          </p>
        </motion.div>

        {/* Main CSR block */}
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <div className="relative h-[300px] sm:h-[360px] lg:h-[420px]">
            <Image
              src="/Screenshot_4.png"
              alt="CHILLSIP clean water donation initiative for the Tirah Valley community in Khyber Pakhtunkhwa, Pakistan"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#001A3A]/90 via-[#001A3A]/70 to-transparent" />

            <div className="absolute inset-0 flex items-center px-6 sm:px-10 lg:px-14">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-md"
              >
                <Badge className="bg-[#00D4FF]/20 text-[#00D4FF] border border-[#00D4FF]/40 mb-3 text-xs px-3 py-1">
                  Helping Communities in Need
                </Badge>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 leading-tight">
                  CHILLSIP
                  <br />
                  Water Donation
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  We bring water to Tirah Valley, a remote part of Khyber
                  Pakhtunkhwa where clean water is still hard to find. Every
                  bottle you buy helps us give back.
                </p>
                <Button className="bg-gradient-to-r from-[#0047AB] to-[#0099FF] text-white font-bold px-6 py-2.5 rounded-full hover:from-[#0055CC] hover:to-[#00AAFF] shadow-md hover:scale-105 transition-all duration-300 text-sm">
                  Learn About Our Mission
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Initiative stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
          {initiatives.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-[#F0F8FF] rounded-xl p-3 sm:p-4 text-center border border-[#0099FF]/10 hover:border-[#0099FF]/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0047AB] to-[#0099FF] flex items-center justify-center mx-auto mb-2 shadow-sm shadow-blue-300/40">
                <item.icon className="w-4 h-4 text-white" />
              </div>
              <p className="font-black text-[#001A3A] text-xs sm:text-sm">{item.value}</p>
              <p className="text-gray-500 text-[10px] sm:text-xs">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
