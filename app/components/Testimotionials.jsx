"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Transcriptionist",
    role: "Vibrant and encouraging enthusiasm",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    quote:
      "Good worker. Lira followed the instructionsgiven and completed the task in a timely manner, and to the best of her ability",
  },
  {
    name: "Data entry",
    role: "A truly inspiring Data Entry",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    quote:
      "Submitted on time with precision. Lira was really responsive got started quickly and completed the task quickly and to a high standard. I was impressed and I would definitely work with her again! Great work!",
  },
  {
    name: "Virtual Assistant",
    role: "Add a one-liner testimonial",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    quote: "Great work, thank you.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 mt-2">
          Real feedback from our happy customers
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white shadow-lg rounded-lg p-6 max-w-sm text-center"
          >
            {/* <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 mx-auto rounded-full border-2 border-gray-300"
            /> */}
            <h3 className="text-lg font-semibold mt-4">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
            <p className="mt-3 text-gray-700">"{testimonial.quote}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
