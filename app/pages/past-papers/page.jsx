"use client"
import React from 'react';
import Link from 'next/link'; // Use Next.js Link
import { motion } from 'framer-motion';
import { Construction, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const PastPapers = () => {

    const router = useRouter();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="py-12 mt-10 bg-gray-100"
        >
            <div className="flex flex-col">
                {/* Page Heading */}
                <motion.div
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 w-full"
                >
                    <div className='flex items-center justify-between py-4 px-20 mt-10'>

                        <motion.h1
                            className="text-4xl font-bold text-blue-600"
                            initial={{ x: -100 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Past Papers
                        </motion.h1>

                        {/* Back Button */}
                        <div className="">
                            <button
                                onClick={() => router.back()}
                                className="flex items-center text-blue-600 hover:underline"
                            >
                                <ArrowLeft className="" size={20} />
                                Back
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Header Section */}

                <motion.p
                    className="mt-4 text-lg text-gray-600 text-left"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Upcoming Past Papers will be available soon. Stay tuned for updates!
                </motion.p>

                {/* Aesthetic Background Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mt-12 bg-gradient-to-r from-blue-400 to-indigo-600 p-10 rounded-lg shadow-xl text-white"
                >
                    <div className="flex flex-col items-center space-y-4">
                        <motion.p
                            className="text-xl"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            We are working on adding past exam papers to our collection.
                        </motion.p>
                        <motion.p
                            className="text-lg"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Check back soon for updates!
                        </motion.p>

                        {/* Icon Section */}
                        <div className="mt-6">
                            <Construction size={80} className="mx-auto" />
                        </div>
                    </div>
                </motion.div>



            </div>
        </motion.div>
    );
};

export default PastPapers;