"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const images = [
  { src: "/Screenshot_5.png", alt: "Purity you can trust", caption: "Purity You Can Trust" },
  { src: "/Screenshot_6.png", alt: "Natural freshness", caption: "Natural Freshness" },
  { src: "/Screenshot_7.png", alt: "New look beach", caption: "New Look — Same Great Taste" },
  { src: "/Screenshot_8.png", alt: "Great in winters", caption: "Great in Winters Too" },
  { src: "/Screenshot_10.png", alt: "Feel the chill", caption: "Feel the Chill" },
  { src: "/Screenshot_1.png", alt: "So cool so fresh", caption: "So Cool. So Fresh." },
];

export default function GallerySection() {
  const [active, setActive] = useState<null | (typeof images)[0]>(null);

  return (
    <section className="py-20 lg:py-28 bg-[#F0F8FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[#0099FF] font-semibold text-sm tracking-widest uppercase mb-3">
            Gallery
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#001A3A] mb-4">
            Life with <span className="text-[#0099FF]">CHILLSIP</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Every moment is better with pure, refreshing CHILLSIP Mineral Water.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group shadow-md hover:shadow-xl transition-shadow duration-300 ${
                i === 0 || i === 3 ? "row-span-2" : ""
              }`}
              style={{ aspectRatio: i === 0 || i === 3 ? "3/4" : "4/3" }}
              onClick={() => setActive(img)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001A3A]/80 via-[#001A3A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white font-bold text-sm sm:text-base">{img.caption}</p>
                <div className="flex items-center gap-1 text-[#00D4FF] text-xs mt-1">
                  <ZoomIn className="w-3 h-3" />
                  <span>View</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-3xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActive(null)}
                className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-7 h-7" />
              </button>
              <Image
                src={active.src}
                alt={active.alt}
                width={800}
                height={700}
                className="w-full h-auto rounded-2xl object-contain max-h-[80vh]"
              />
              <p className="text-white/80 text-center mt-3 font-medium">{active.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
