'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Camera, Code, Palette } from 'lucide-react'

export default function AboutMe() {
    return (
        <div className="bg-white min-h-screen flex items-center justify-center w-full px-4 py-8 sm:px-6 lg:px-8">
            <main className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <motion.div
                    className="w-full lg:w-1/2 relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <div className="relative w-full h-0 pb-[100%] sm:pb-[75%] lg:pb-[100%]">
                        <img
                            src="/images/masks/about-mask.svg"
                            alt="Creative professional at work"
                            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                        />
                        <motion.div
                            className="absolute bg-black text-white p-2 rounded-full"
                            style={{
                                top: '10%',
                                right: '25%',
                                transform: 'translate(50%, -50%)'
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <ArrowUpRight className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                        </motion.div>
                        <motion.div
                            className="absolute flex flex-col space-y-4"
                            style={{
                                bottom: '20%',
                                left: '10%'
                            }}
                        >
                            {[Camera, Code, Palette].map((Icon, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-yellow-400 p-2 rounded-full"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                                >
                                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>

                
                <motion.div
                    className="w-full lg:w-1/2 space-y-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.h1
                        className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        About Me
                    </motion.h1>
                    <motion.p
                        className="text-lg sm:text-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        I&apos;m a passionate creative professional with expertise in photography, web development, and design. My goal is to create visually stunning and functionally seamless experiences.
                    </motion.p>
                    <motion.div
                        className="flex space-x-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <Camera className="w-6 h-6 sm:w-8 sm:h-8" />
                        <Code className="w-6 h-6 sm:w-8 sm:h-8" />
                        <Palette className="w-6 h-6 sm:w-8 sm:h-8" />
                    </motion.div>
                    <motion.div
                        className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        <div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">5+ Years</h2>
                            <p className="text-sm sm:text-base">Experience in creative industries</p>
                        </div>
                        <div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">100+</h2>
                            <p className="text-sm sm:text-base">Projects completed for clients worldwide</p>
                        </div>
                    </motion.div>
                </motion.div>
            </main>
        </div>
    )
}