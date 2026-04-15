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
    <section id="contact" className="py-20 lg:py-28 bg-white">
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
            Order Now
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#001A3A] mb-4">
            Get Your <span className="text-[#0099FF]">CHILLSIP</span> Today
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Ordering is simple — just tap the button below and send us a WhatsApp message.
            We will confirm your order and deliver right to your door.
          </p>
        </motion.div>

        {/* Big WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring" }}
          className="flex justify-center mb-16"
        >
          <div className="bg-gradient-to-br from-[#001A3A] to-[#002966] rounded-3xl p-10 sm:p-14 text-center max-w-xl w-full shadow-2xl shadow-blue-900/30">
            <div className="w-20 h-20 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-500/30">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Order via WhatsApp
            </h3>
            <p className="text-white/60 mb-8 leading-relaxed">
              Send us your name, address, and how many bottles you need.
              We will confirm your order and get it delivered fast!
            </p>
            <Button
              onClick={() => window.open(WA_LINK, "_blank")}
              className="bg-[#25D366] hover:bg-[#20BC5C] text-white font-black text-lg px-10 py-4 rounded-full shadow-xl shadow-green-600/30 hover:scale-105 hover:shadow-green-500/50 transition-all duration-300 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat &amp; Order on WhatsApp
            </Button>
            <p className="text-white/30 text-xs mt-4">
              Tap to open WhatsApp — we reply within minutes
            </p>
          </div>
        </motion.div>

        {/* Info cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {infoCards.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Card
                className={`p-5 rounded-2xl border border-[#0099FF]/10 shadow-sm hover:shadow-lg hover:border-[#0099FF]/30 transition-all duration-300 h-full ${item.action ? "cursor-pointer hover:-translate-y-1" : ""}`}
                onClick={item.action}
              >
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.bg} flex items-center justify-center mb-4 shadow-md`}
                >
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-400 text-xs font-medium mb-1">{item.title}</p>
                <p className="font-black text-[#001A3A] text-sm leading-snug">{item.value}</p>
                <p className="text-gray-400 text-xs mt-1">{item.sub}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
