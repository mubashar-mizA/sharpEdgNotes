"use client"

import { ArrowLeft } from 'lucide-react';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';



const Articles = () => {
    const router = useRouter();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-gray-100 py-12 mt-20"
        >

            <div className=" flex items-center">
                {/* Page Heading */}
                <motion.div
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 w-full"
                >
                    <div className='flex justify-between items-center px-20'>

                        <h1 className="text-5xl font-bold text-blue-600">Articles</h1>

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
            </div>

        </motion.div>

    );
};

export default Articles;