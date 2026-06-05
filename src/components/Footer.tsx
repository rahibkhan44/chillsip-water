"use client";

import { motion } from "framer-motion";
import { Droplets, MessageCircle, ArrowUp } from "lucide-react";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const footerLinks = {
  Company: ["About Us", "Our Mission", "Community", "Careers"],
  Products: ["500ml Bottle", "1500ml Bottle", "Bulk Orders", "Where to Buy"],
  Support: ["Order Now", "Track Order", "Contact Us", "FAQs"],
};

const WA_LINK = "https://wa.me/923455928122";
const FB_LINK = "https://www.facebook.com/profile.php?id=61579034075612";
const IG_LINK = "https://www.instagram.com/ahmii_xxo/";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#001A3A] text-white relative overflow-hidden">
      {/* Top wave */}
      <div className="overflow-hidden leading-none -mb-1">
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-10">
          <path
            d="M0,20 C240,40 480,0 720,20 C960,40 1200,0 1440,20 L1440,0 L0,0 Z"
            fill="#F0F8FF"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0099FF] to-[#00D4FF] flex items-center justify-center shadow-lg">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <span className="font-black text-xl tracking-wider">
                CHILL<span className="text-[#00D4FF]">SIP</span>
              </span>
            </div>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs mb-6">
              Pure mineral water from Peshawar. Crisp, refreshing and packed
              with natural minerals. Taste the chill in every sip.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { icon: FacebookIcon, href: FB_LINK, label: "Facebook" },
                { icon: InstagramIcon, href: IG_LINK, label: "Instagram" },
                { icon: MessageCircle, href: WA_LINK, label: "WhatsApp" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center hover:bg-[#0099FF]/40 hover:border-[#0099FF]/60 transition-all duration-300 hover:scale-110"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-black text-sm tracking-widest uppercase text-[#00D4FF] mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/55 text-sm hover:text-[#00D4FF] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} CHILLSIP Mineral Water, Peshawar, Pakistan.
            All rights reserved.
          </p>
          <button
            onClick={scrollTop}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0047AB] to-[#0099FF] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#0099FF]/5 rounded-full blur-3xl pointer-events-none" />
    </footer>
  );
}
