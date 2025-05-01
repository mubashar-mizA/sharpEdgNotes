"use client"
import React from "react";
import { motion } from "framer-motion";

const FeaturedSubjects = () => {
  const subjects = [
    { name: "Mathematics", icon: "📘", color: "bg-blue-100 text-blue-800" },
    { name: "Physics", icon: "🔬", color: "bg-purple-100 text-purple-800" },
    { name: "Chemistry", icon: "🧪", color: "bg-yellow-100 text-yellow-800" },
    { name: "Biology", icon: "🌿", color: "bg-green-100 text-green-800" },
    { name: "English", icon: "📖", color: "bg-pink-100 text-pink-800" },
    { name: "Computer Science", icon: "💻", color: "bg-indigo-100 text-indigo-800" },
  ];

  return (
    <section className="py-16 bg-gray-100 text-center flex flex-col gap-2 items-center ">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-10">
        📚 Featured Subjects
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-1 gap-4 w-3/5 ">
        {subjects.map((subject, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-2xl shadow-lg border ${subject.color} hover:shadow-xl transform hover:scale-105 transition duration-300`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
          >
            <span className="text-5xl">{subject.icon}</span>
            <h3 className="text-2xl font-semibold mt-3">{subject.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSubjects;