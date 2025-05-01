"use client"
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Note = () => {

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="text-center py-4 bg-gray-100"
        >
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: false }}
                className="text-3xl font-bold"
            >
                Master Math with Ease
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: false }}
                className="text-gray-600 mt-2"
            >
                Get high-quality, exam-focused math notes designed to simplify complex concepts.
            </motion.p>
        </motion.div>
    );
};

export default Note;