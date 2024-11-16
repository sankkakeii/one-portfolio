'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Camera, Code, Palette } from 'lucide-react'

export default function AboutMe() {
    return (
        <div className="bg-transparent min-h-screen flex items-center justify-center w-full px-4 py-8 sm:px-6 lg:px-8 relative">
            <main className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

                {/* Image Section with Icon Animations */}
                {/* Image Section with Icon Animations */}
                <motion.div
                    className="w-full lg:w-1/2 relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <div className="relative w-full h-0 py-[20%] sm:pb-[75%] lg:pb-[100%]">
                        <img
                            src="/images/masks/about-mask.svg"
                            alt="Creative professional at work"
                            className="absolute top-0 left-0 w-full h-full object-fit: cover"
                        />
                        <motion.div
                            className="absolute flex flex-col space-y-4"
                            style={{
                                bottom: '15%',
                                left: '8%',
                                maxWidth: '50%',
                            }}
                        >
                            {[Camera, Code, Palette].map((Icon, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gray-50 dark:bg-yellow-500 p-3 rounded-full shadow-md hover:cursor-pointer"
                                    whileHover={{ scale: 1.15, rotate: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2, duration: 0.4 }}
                                >
                                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-black dark:text-white" />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>

                {/* Text Section */}
                <motion.div
                    className="w-full lg:w-1/2 space-y-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.h1
                        className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight dark:text-yellow-300 animate-fadeInUp"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        About Me
                    </motion.h1>
                    <motion.p
                        className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 animate-fadeInLeft"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        I&apos;m a creative professional with expertise in prototyping, web development, and design. My goal is to create visually stunning and functionally seamless experiences.
                    </motion.p>

                    {/* Icons Row */}
                    <motion.div
                        className="flex space-x-6 text-yellow-500 dark:text-yellow-400 animate-fadeInRight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <Camera className="w-8 h-8 sm:w-10 sm:h-10" />
                        <Code className="w-8 h-8 sm:w-10 sm:h-10" />
                        <Palette className="w-8 h-8 sm:w-10 sm:h-10" />
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                        className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-8 animate-fadeInUp"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center">
                            <h2 className="text-4xl font-bold text-yellow-500 dark:text-yellow-300">4+ Years</h2>
                            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Experience in creative industries</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center">
                            <h2 className="text-4xl font-bold text-yellow-500 dark:text-yellow-300">10+</h2>
                            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Projects completed and ongoing for clients and personally</p>
                        </div>
                    </motion.div>
                </motion.div>
            </main>
        </div>
    )
}
