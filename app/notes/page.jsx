"use client";
import React from "react";
import { motion } from "framer-motion";
import FileList from "../components/FileList";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gray-100 flex flex-col items-center py-12"
    >
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-5 mb-8 w-full  mt-10 "
      >
        <h1 className="text-4xl font-bold text-blue-600 mt-10">Notes</h1>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full px-4"
      >
        <FileList />
      </motion.div>
    </motion.div>
  );
};

export default Home;
