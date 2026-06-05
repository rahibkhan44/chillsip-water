"use client";

import { motion } from "framer-motion";
import { Store, Dumbbell, ShoppingCart, Coffee, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const channels = [
  {
    icon: Store,
    title: "Supermarkets",
    desc: "Find CHILLSIP in leading grocery stores and mini-marts across Pakistan.",
  },
  {
    icon: Dumbbell,
    title: "Gyms & Studios",
    desc: "Stocked at partner fitness clubs, training studios and wellness spaces.",
  },
  {
    icon: ShoppingCart,
    title: "Online Orders",
    desc: "Order direct via WhatsApp and get cases delivered straight to your door.",
  },
  {
    icon: Coffee,
    title: "Cafés & Hotels",
    desc: "Served at cafés, restaurants and hospitality venues that value quality.",
  },
];

export default function StockistsSection() {
  return (
    <section
      id="stockists"
      className="py-14 lg:py-20 bg-white relative overflow-hidden"
    >
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
            Where To Find Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#001A3A] leading-tight mb-3">
            Stay Stocked.
            <br />
            <span className="text-[#0099FF]">Stay CHILLSIP.</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            CHILLSIP is reaching every corner where premium hydration matters.
          </p>
        </motion.div>

        {/* Channels grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {channels.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative bg-[#F0F8FF] rounded-2xl p-5 border border-[#0099FF]/10 hover:border-[#0099FF]/40 hover:bg-white hover:shadow-lg hover:shadow-blue-100/60 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0047AB] to-[#0099FF] flex items-center justify-center mb-3 shadow-md shadow-blue-300/40 group-hover:scale-105 transition-transform duration-300">
                <c.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-black text-[#001A3A] text-sm mb-1">
                {c.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#001A3A] via-[#002966] to-[#0047AB] p-6 sm:p-8 shadow-xl"
        >
          {/* Decorative blobs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#00D4FF]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#0099FF]/15 rounded-full blur-3xl" />
          </div>

          <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <span className="inline-block text-[#00D4FF] font-semibold text-[10px] tracking-widest uppercase mb-1">
                Become a Stockist
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight">
                Stock CHILLSIP.
                <br />
                <span className="text-[#00D4FF]">
                  Premium hydration on your shelves.
                </span>
              </h3>
            </div>
            <Button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white text-[#001A3A] hover:bg-[#00D4FF] hover:text-[#001A3A] font-black px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 group flex items-center gap-2 self-start sm:self-auto text-sm"
            >
              Partner With Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
