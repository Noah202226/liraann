"use client";
import React from "react";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen w-full">
      <div className="hero-content text-center">
        <div className="max-w-3xl">
          <motion.p
            initial={{ y: "-500%" }}
            animate={{ y: "0%" }}
            className="text-7xl font-bold"
          >
            Hello, <span className="italic text-orange-400">I am Lira!</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            className="py-6 text-2xl w-full"
          >
            I belive this will showcase my passion, dedication, and commitment
            to delivering high-quality work and exceeding client expectations.
          </motion.p>
          <button className="btn btn-success">Hire me</button>
        </div>
      </div>
    </div>
  );
}
