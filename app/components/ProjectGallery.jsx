"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Data Entry",
    image: "/data-entry/image1.PNG",
  },
  {
    title: "Portfolio Website",
    image: "https://source.unsplash.com/400x300/?portfolio,design",
  },
  {
    title: "Mobile App UI",
    image: "https://source.unsplash.com/400x300/?app,ui",
  },
  {
    title: "Dashboard Analytics",
    image: "https://source.unsplash.com/400x300/?dashboard,analytics",
  },
];

export default function ProjectGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Project Gallery</h2>
        <p className="text-gray-600 mt-2">
          Here are some of the projects I worked on!
        </p>
      </div>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
          >
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
              width={500}
              height={500}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-accent-content">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
