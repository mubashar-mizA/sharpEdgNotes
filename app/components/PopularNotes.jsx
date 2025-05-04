"use client"
import React from "react";
import { motion } from "framer-motion";

const PopularNotes = () => {
    const notes = [
        { title: "Algebra Basics", subject: "Mathematics" },
        { title: "Newton's Laws", subject: "Physics" },
        { title: "Organic Chemistry", subject: "Chemistry" },
        { title: "Cell Structure", subject: "Biology" },
    ];

    return (
        <section className="py-16 bg-gray-100 to-white text-center flex flex-col items-center gap-1">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
                📖 Popular Notes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 w-3/5">
                {notes.map((note, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transform hover:scale-105 transition duration-300"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 40 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                    >
                        <h3 className="text-2xl font-semibold text-blue-700">
                            {note.title}
                        </h3>
                        <p className="text-gray-500 mt-2">{note.subject}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default PopularNotes;