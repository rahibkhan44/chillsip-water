"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Where is CHILLSIP Mineral Water from?",
    a: "CHILLSIP is sourced and bottled in Peshawar, Khyber Pakhtunkhwa, Pakistan. We deliver across Pakistan with a focus on Peshawar, Islamabad, Lahore and Karachi.",
  },
  {
    q: "How can I order CHILLSIP water?",
    a: "You can order CHILLSIP directly on WhatsApp. Tap any Order Now button on the site, send us your address and how many bottles you need, and we will confirm delivery.",
  },
  {
    q: "What sizes does CHILLSIP come in?",
    a: "CHILLSIP is currently available in 500ml and 1.5L bottles. Bulk and case orders are available for homes, offices, gyms and events.",
  },
  {
    q: "Does CHILLSIP contain any additives or chemicals?",
    a: "No. CHILLSIP contains zero artificial additives. It is naturally rich in calcium, magnesium and potassium, with nothing added that does not belong in clean drinking water.",
  },
  {
    q: "Is CHILLSIP safe for daily drinking?",
    a: "Yes. CHILLSIP is purified through a multi-stage process and tested for purity before bottling. It is safe and recommended for daily hydration for the whole family.",
  },
  {
    q: "Do you deliver outside Peshawar?",
    a: "Yes. We serve customers across Pakistan. Message us on WhatsApp with your city and quantity and we will share delivery options and timing.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-14 lg:py-20 bg-[#F0F8FF] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-[#0099FF] font-semibold text-xs tracking-widest uppercase mb-2">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#001A3A] leading-tight mb-3">
            Questions, <span className="text-[#0099FF]">Answered.</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Quick answers about CHILLSIP, ordering and delivery across Pakistan.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className={`bg-white rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#0099FF]/40 shadow-md shadow-blue-100/60"
                    : "border-[#0099FF]/10 hover:border-[#0099FF]/30"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left p-4 sm:p-5"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-[#001A3A] text-sm sm:text-base">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#0099FF] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-gray-600 text-sm leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
