"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      className="footer sm:footer-horizontal bg-orange-600 text-white p-10"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-2xl"
      >
        <p className="text-3xl">
          Reach out if you want to create impactful visual work together.
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="w-80">
          <label>Enter your email address</label>
          <div className="join">
            <motion.input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
              whileFocus={{ scale: 1.05 }}
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary join-item"
            >
              Subscribe
            </motion.button>
          </div>
        </fieldset>
      </motion.form>
    </motion.footer>
  );
};
