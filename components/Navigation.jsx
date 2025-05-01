"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = [
        { name: "Notes", path: "/pages/notes" },
        { name: "Past Papers", path: "/pages/past-papers" },
        { name: "Quizzes", path: "/pages/quizzes" },
        { name: "Articles", path: "/pages/articles" },
        { name: "Admin", path: "/pages/admin-login" },
    ];

    return (
        <motion.header
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full fixed top-0 left-0 bg-white shadow-md z-50 py-3"
        >
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <Link href="https://sharpedg.vercel.app/" className="text-4xl font-bold text-blue-600">
                    sharpEdg.com
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    {navItems.map((item, index) => (
                        <motion.div key={index} whileHover={{ scale: 1.1 }}>
                            <Link href={item.path} className="text-gray-700 hover:text-blue-600">
                                {item.name}
                            </Link>
                        </motion.div>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden bg-white shadow-md absolute top-full left-0 w-full"
                >
                    <nav className="flex flex-col ml-10 py-4 space-y-4">
                        {navItems.map((item, index) => (
                            <Link key={index} href={item.path} className="text-gray-700 hover:text-blue-600">
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </motion.div>
            )}

        </motion.header>
    );
};

export default Navigation;