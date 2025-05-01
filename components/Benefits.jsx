"use client"
import React from "react";
import { motion } from "framer-motion";

const Benefits = () => {
  const benefits = [
    "Expertly Crafted Notes 📚",
    "Downloadable PDFs 📥",
    "Easy to Understand ✍️",
    "Exam-Oriented Content 🎯",
  ];

  return (
    <motion.section
      className="py-12 bg-gray-100 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-6">Why Choose Our Notes?</h2>
      <ul className="max-w-3xl mx-auto space-y-4">
        {benefits.map((benefit, index) => (
          <motion.li
            key={index}
            className="bg-gray-100 p-4 rounded-lg shadow-md text-lg"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }} // Exit animation to retrigger on scroll
            viewport={{ once: false, amount: 0.2 }} // Ensures animation re-triggers when 20% of element is in view
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {benefit}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

export default Benefits;