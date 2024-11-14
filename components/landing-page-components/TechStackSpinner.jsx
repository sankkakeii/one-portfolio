import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Code, Server, Cloud } from 'lucide-react'

const techStack = [
    { category: 'Frontend', items: ['React', 'Vue.js', 'Angular'], icon: Code },
    { category: 'Backend', items: ['Node.js', 'Python', 'Java'], icon: Server },
    { category: 'DevOps', items: ['Docker', 'Kubernetes', 'AWS'], icon: Cloud },
]

const SpinnerWheel = ({ items, duration }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
        }, duration / items.length)

        return () => clearInterval(interval)
    }, [items, duration])

    return (
        <div className="relative h-24 overflow-hidden rounded-lg bg-gradient-to-br from-yellow-400 to-gray-500 shadow-lg">
            {/* This div will hold the spinning items */}
            <div className="absolute inset-0 flex flex-col justify-center items-center">
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        className="absolute w-full flex items-center justify-center"
                        initial={{ y: '100%' }} // Initial position off-screen
                        animate={{ 
                            y: index === currentIndex ? '0%' : '100%',  // Only show current item at 0%
                            opacity: index === currentIndex ? 1 : 0, // Hide non-current items
                        }}
                        transition={{ duration: 0.7, ease: 'easeInOut' }}
                    >
                        <span className="text-2xl font-bold text-white text-shadow">{item}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

const TechStackSection = () => {
    return (
        <div className="bg-gradient-to-b from-white to-orange-100 dark:from-black dark:to-yellow-600 min-h-screen flex items-center justify-center w-full px-4 py-16 sm:px-6 lg:px-8">
            <main className="w-full max-w-7xl mx-auto flex flex-col items-center space-y-16 lg:space-y-0 lg:flex-row lg:items-start gap-12 lg:gap-16">
                
                {/* Tech Stack Introduction */}
                <motion.div
                    className="w-full lg:w-1/2 space-y-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.h2
                        className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight dark:text-yellow-300"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Tech Stack
                    </motion.h2>
                    <motion.p
                        className="text-lg sm:text-xl text-gray-700 dark:text-gray-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        These are the technologies I work with to create robust, scalable, and visually appealing web experiences.
                    </motion.p>
                </motion.div>

                {/* Tech Categories with Spinner Wheels */}
                <motion.div
                    className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    {techStack.map((category, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col w-full items-center space-y-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-out"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        >
                            {/* Spinner Wheel for items */}
                            <div className="w-full h-26">
                                <SpinnerWheel items={category.items} duration={3000} />
                            </div>

                            <div className="flex items-center space-x-2">
                                <category.icon className="w-8 h-8 text-yellow-400 dark:text-yellow-400" />
                                <span className="text-2xl font-semibold text-gray-800 dark:text-white">
                                    {category.category}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </main>
        </div>
    )
}

export default TechStackSection
