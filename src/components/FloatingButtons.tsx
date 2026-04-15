"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WA_LINK =
  "https://wa.me/923455928122?text=Hi%20CHILLSIP!%20I%20would%20like%20to%20place%20an%20order.";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp floating button */}
      <motion.a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 transition-shadow duration-300 group relative"
        aria-label="Order on WhatsApp"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        <MessageCircle className="w-7 h-7 text-white relative z-10" />

        {/* Tooltip */}
        <span className="absolute right-16 bg-[#001A3A] text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg pointer-events-none">
          Order on WhatsApp
        </span>
      </motion.a>
    </div>
  );
}
