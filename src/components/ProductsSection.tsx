"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Droplets, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "Natural Source",
    desc: "Drawn from pristine natural sources, retaining the essential minerals your body needs.",
    color: "from-[#0047AB] to-[#0099FF]",
  },
  {
    icon: Shield,
    title: "Rich in Minerals",
    desc: "Contains calcium, magnesium, potassium and other essential electrolytes for optimal health.",
    color: "from-[#0099FF] to-[#00D4FF]",
  },
  {
    icon: Zap,
    title: "Zero Additives",
    desc: "No preservatives, no artificial flavours. Just pure, clean mineral water the way nature intended.",
    color: "from-[#00AAFF] to-[#00E0FF]",
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 lg:py-28 bg-[#F0F8FF]">
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
            Our Product
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#001A3A] mb-4">
            Pure. Crisp.{" "}
            <span className="text-[#0099FF]">Refreshing.</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            CHILLSIP Mineral Water delivers the perfect balance of taste, purity
            and natural goodness in every single drop.
          </p>
        </motion.div>

        {/* Main product display */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          {/* Product image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#0099FF]/20 to-[#00D4FF]/10 blur-3xl" />
              <Image
                src="/Screenshot_3.png"
                alt="ChillSip mineral water bottle"
                width={420}
                height={520}
                className="relative z-10 w-full max-w-sm object-contain drop-shadow-2xl"
              />
              <Badge className="absolute top-6 right-0 bg-[#0099FF] text-white font-bold px-4 py-1.5 text-sm rounded-full shadow-lg">
                New Look
              </Badge>
            </div>
          </motion.div>

          {/* Feature cards */}
          <div className="flex-1 space-y-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="bg-white rounded-2xl p-6 flex gap-5 items-start shadow-sm border border-[#0099FF]/10 hover:shadow-lg hover:shadow-blue-100/50 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <f.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#001A3A] text-lg mb-1">{f.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Second product image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden relative h-64 sm:h-80 shadow-2xl"
        >
          <Image
            src="/Screenshot_7.png"
            alt="ChillSip New Look"
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001A3A]/80 to-transparent flex items-center px-10">
            <div>
              <Badge className="bg-[#00D4FF] text-[#001A3A] font-bold mb-4">New Look</Badge>
              <h3 className="text-3xl sm:text-4xl font-black text-white mb-2">
                Same Great Taste,
                <br />
                Bold New Design.
              </h3>
              <p className="text-white/70 text-sm">Now available at retailers near you</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
