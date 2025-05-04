"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-900 text-center px-6"
        >
            <motion.h1
                className="text-4xl font-bold mb-3"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false }}
            >
                Ace Your Exams with Expert Notes
            </motion.h1>

            <motion.p
                className="text-lg text-gray-600 max-w-md mb-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
            >
                Access high-quality notes and study materials designed to help you succeed in your exams.
            </motion.p>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link
                    href="/notes"
                    className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-all"
                >
                    Explore Notes
                </Link>
            </motion.div>
        </motion.section>
    );
};

export default Hero;