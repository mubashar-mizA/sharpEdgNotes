"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, ArrowLeft } from 'lucide-react'; // Updated import
import Link from 'next/link'; // Using next/link for navigation
import { useRouter } from 'next/navigation';


const Quizzes = () => {

    const router = useRouter();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-gray-100 flex flex-col items-center py-12"
        >
            {/* Page Heading */}
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8 w-full"
            >
                <div className='flex items-center justify-between py-4 px-16 mt-10'>

                    <h1 className="text-5xl font-bold text-blue-600">Notes</h1>

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

            {/* Under Construction Box */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-lg shadow-lg "
            >
                <Wrench size={48} className="text-yellow-500 mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-gray-700">This feature is under construction</h2>
                <p className="text-gray-500 mt-4">We&apos;re working on adding quizzes. Stay tuned for updates!</p>

                {/* Back Button */}
                <div className="mt-6">
                    <Link
                        href="/"
                        className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition duration-200"
                    >
                        Back to Home
                    </Link>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Quizzes;