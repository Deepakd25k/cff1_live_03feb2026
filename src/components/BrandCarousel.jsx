import React from "react";
import { motion } from "framer-motion";

/**
 * BrandCarousel
 * - expects logos to be in public/logo/*.svg
 * - loops the array twice to produce a smooth infinite marquee
 */
const brands = [
  { name: "KFC", src: "/logo/kfc.svg" },
  { name: "Liberty", src: "/logo/liberty.svg" },
  { name: "Myntra", src: "/logo/myntra.svg" },
  { name: "Uber", src: "/logo/Uber.svg" },
  { name: "Head&shoulders", src: "/logo/Head&shoulders.svg" },
  { name: "Gillette", src: "/logo/Gillette.svg" },
  { name: "Royal_Enfield", src: "/logo/Royal_Enfield.svg" },
  { name: "Amazon_logo", src: "/logo/Amazon_logo.svg" },
  { name: "OYO", src: "/logo/oyo.svg" },
];


export default function BrandCarousel() {
  // duplicate the array to make the marquee seamless
  const logos = [...brands, ...brands];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Brands We Have Worked With</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Trusted by leading companies across diverse industries</p>
        </motion.div>

        <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-200">
          <motion.div
            className="flex gap-8 px-8 py-12"
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {logos.map((b, i) => (
              <motion.div
                key={b.name + "-" + i}
                className="flex-shrink-0 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={b.src}
                  alt={b.name + " logo"}
                  className="h-20 w-40 object-contain opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div class="h-20 w-40 bg-gray-200 rounded flex items-center justify-center text-gray-600 text-sm font-medium">${b.name}</div>`;
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
