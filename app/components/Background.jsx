"use client";
import { motion } from "framer-motion";
import { GraduationCap, Building, RefreshCcw } from "lucide-react";

const items = [
  {
    icon: <GraduationCap className="w-10 h-10 text-accent-content" />,
    title: "La Consolacion College, Manila",
    subtitle: "BSBA Major in Banking and Finance, 2005",
  },
  {
    icon: <Building className="w-10 h-10 text-accent-content" />,
    title: "St. Marys College, Meycauayan City",
    subtitle: "Professional Caregiving, June 2008",
  },
  {
    icon: <RefreshCcw className="w-10 h-10 text-accent-content" />,
    title: "Freelancer",
    subtitle: "2022 - Present",
  },
];

export default function BackgroundSection() {
  return (
    <motion.section
      className="bg-cream text-center py-16 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-4xl font-serif text-brown mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Background
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-brown rounded-full p-6 mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-dark-brown">
              {item.title}
            </h3>
            <p className="text-sm text-gray-700">{item.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
