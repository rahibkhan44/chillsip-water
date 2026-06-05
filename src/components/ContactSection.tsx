"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MapPin, MessageCircle, Package, Clock } from "lucide-react";

const WA_NUMBER = "923455928122";
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Hi%20CHILLSIP!%20I%20would%20like%20to%20place%20an%20order.`;

const infoCards = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+92 345 5928122",
    sub: "Mon–Sat, 9am–7pm PKT",
    bg: "from-[#0047AB] to-[#0099FF]",
    action: () => window.open("tel:+923455928122"),
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+92 345 5928122",
    sub: "Quick replies, fast orders",
    bg: "from-[#25D366] to-[#20BC5C]",
    action: () => window.open(WA_LINK, "_blank"),
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Peshawar, Pakistan",
    sub: "Delivering across KP & beyond",
    bg: "from-[#FF6B6B] to-[#FF8E53]",
    action: undefined,
  },
  {
    icon: Clock,
    title: "Same-Day Delivery",
    value: "Order Before 2pm",
    sub: "Available in Peshawar area",
    bg: "from-[#8B5CF6] to-[#06B6D4]",
    action: undefined,
  },
  {
    icon: Package,
    title: "Bulk Orders",
    value: "Shops & Businesses",
    sub: "Special rates for large orders",
    bg: "from-[#F59E0B] to-[#EF4444]",
    action: () => window.open(WA_LINK, "_blank"),
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-14 lg:py-20 bg-white">
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
            Order Now
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#001A3A] mb-3">
            Get Your <span className="text-[#0099FF]">CHILLSIP</span> Today
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Ordering is simple. Tap the button below, send us a WhatsApp
            message and we will deliver to your door.
          </p>
        </motion.div>

        {/* Big WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring" }}
          className="flex justify-center mb-10"
        >
          <div className="bg-gradient-to-br from-[#001A3A] to-[#002966] rounded-2xl p-6 sm:p-10 text-center max-w-lg w-full shadow-xl shadow-blue-900/30">
            <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/30">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
              Order via WhatsApp
            </h3>
            <p className="text-white/60 mb-5 leading-relaxed text-sm">
              Send us your name, address, and how many bottles you need.
            </p>
            <Button
              onClick={() => window.open(WA_LINK, "_blank")}
              className="bg-[#25D366] hover:bg-[#20BC5C] text-white font-black px-8 py-3 rounded-full shadow-lg shadow-green-600/30 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat &amp; Order on WhatsApp
            </Button>
            <p className="text-white/30 text-[10px] mt-3">
              Tap to open WhatsApp. We usually reply within minutes.
            </p>
          </div>
        </motion.div>

        {/* Info cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {infoCards.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Card
                className={`p-4 rounded-xl border border-[#0099FF]/10 shadow-sm hover:shadow-md hover:border-[#0099FF]/30 transition-all duration-300 h-full ${item.action ? "cursor-pointer hover:-translate-y-0.5" : ""}`}
                onClick={item.action}
              >
                <div
                  className={`w-9 h-9 rounded-lg bg-gradient-to-br ${item.bg} flex items-center justify-center mb-3 shadow-sm`}
                >
                  <item.icon className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-400 text-[10px] font-medium mb-0.5">{item.title}</p>
                <p className="font-black text-[#001A3A] text-xs leading-snug">{item.value}</p>
                <p className="text-gray-400 text-[10px] mt-0.5">{item.sub}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
