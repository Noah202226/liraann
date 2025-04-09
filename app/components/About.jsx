"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="bg-cream px-6 py-12 md:py-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold text-brown relative inline-block">
            <span className="italic">About Lira Ann</span>
            <span className="absolute -left-2 -top-2 -z-10">
              <svg width="130" height="40" viewBox="0 0 120 30">
                <path
                  d="M10,20 Q60,-10 110,20"
                  stroke="black"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </span>
          </h2>
          <p className="text-gray-700 mt-4 leading-relaxed">
            38 years old, a mother of two. Passionate in doing data entries,
            customer support, E-commerce, Social Media Management, Marketing,
            theme designs, images, and video editing. My goal is to assist my
            clients in achieving success in their businesses.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            I would love to work with people and companies who will give me an
            opportunity to flex my sleek and polished style. Reach out if you
            believe we can create visually impactful work together.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="overflow-hidden rounded-t-full w-72 h-96 relative">
            <Image
              src="/Lira.jpg" // Change this to your image path
              alt="Lira Ann"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
