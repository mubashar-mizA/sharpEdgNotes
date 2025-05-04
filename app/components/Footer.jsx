"use client"
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="py-6 bg-gray-800 text-white text-center"
        >
            <p>© 2025 SharpEdg.com | All Rights Reserved</p>
        </motion.footer>
    );
};

export default Footer;