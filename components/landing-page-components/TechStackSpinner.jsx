'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Server, Cloud, Database, Globe, Lock } from 'lucide-react'

const techStack = [
    { category: 'Frontend', items: ['React', 'Next.js', 'HTML', 'CSS', 'TailwindCSS', 'Shadcn UI'], icon: Code },
    { category: 'Backend', items: ['Node.js', 'Python', 'Dart', 'Go', 'Express', 'Django'], icon: Server },
    { category: 'DevOps', items: ['PostgreSQL', 'Docker', 'Firebase', 'Supabase', 'Google Cloud', 'MongoDB'], icon: Cloud },
]

const technologies = [
    { name: 'React', description: 'A JavaScript library for building user interfaces', icon: Globe, proficiency: 90 },
    { name: 'Node.js', description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine', icon: Server, proficiency: 85 },
    { name: 'Python', description: 'An interpreted, high-level, general-purpose programming language', icon: Code, proficiency: 80 },
    { name: 'PostgreSQL', description: 'A powerful, open source object-relational database system', icon: Database, proficiency: 75 },
    { name: 'Docker', description: 'A platform for developing, shipping, and running applications', icon: Cloud, proficiency: 70 },
    { name: 'Cybersecurity', description: 'Protecting systems, networks, and programs from digital attacks', icon: Lock, proficiency: 65 },
]

const SpinnerWheel = ({ items, duration }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
        }, duration)

        return () => clearInterval(interval)
    }, [items, duration])

    return (
        <div className="relative h-24 overflow-hidden rounded-lg bg-gradient-to-br from-gray-50 to-gray-200 shadow-sm">
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentIndex}
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ y: '100%' }}
                    animate={{ y: '0%' }}
                    exit={{ y: '-100%' }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                    <span className="text-2xl font-bold text-yellow-400 text-shadow">{items[currentIndex]}</span>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

const FloatingIcon = ({ icon, size, position }) => {
    return (
        <motion.div
            style={{
                top: position.y,
                left: position.x,
            }}
            className="absolute text-gray-400 dark:text-gray-600"
            initial={position}
            animate={{
                x: [position.x, Math.random() * 100 + '%'],
                y: [position.y, Math.random() * 100 + '%'],
                rotate: [0, 360],
            }}
            transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
            }}
        >
            {React.createElement(icon, { size: size })}
        </motion.div>
    );
};




const FloatingIcons = () => {
    const iconComponents = [Code, Server, Cloud, Database, Globe, Lock];
    const iconCount = 50;
    const gridSize = 8; // Adjust this value to change the grid size
    const iconSize = 40; // Adjust this value to change the icon size
    const gap = 5; // Adjust this value to change the gap between icons

    const icons = [];
    for (let i = 0; i < iconCount; i++) {
        const icon = iconComponents[Math.floor(Math.random() * iconComponents.length)];
        const row = Math.floor(i / gridSize);
        const col = i % gridSize;
        const x = `${col * (iconSize + gap)}%`;
        const y = `${row * (iconSize + gap)}%`;

        icons.push(
            <FloatingIcon
                key={i}
                icon={icon}
                size={iconSize}
                position={{ x, y }}
            />
        );
    }

    return (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {icons}
        </div>
    );
};



const TechnologyCard = ({ tech }) => {
    return (
        <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center space-x-4">
                <tech.icon className="w-8 h-8 text-yellow-400" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{tech.name}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{tech.description}</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <motion.div
                    className="bg-yellow-400 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${tech.proficiency}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                />
            </div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{tech.proficiency}% Proficiency</span>
        </motion.div>
    )
}

const TechStackSection = () => {
    return (
        // <div className="relative bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center w-full px-4 py-16 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center w-full px-4 py-16 sm:px-6 lg:px-8 overflow-hidden">
            <FloatingIcons />
            {/* <main className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center space-y-16"> */}
            <main className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center space-y-16">
                {/* Tech Stack Introduction */}
                <motion.div
                    className="w-full text-center space-y-8"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.h2
                        className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900 dark:text-yellow-300"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Tech Stack
                    </motion.h2>
                    <motion.p
                        className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        These are the technologies I work with to create robust, scalable, and visually appealing web experiences.
                    </motion.p>
                </motion.div>

                {/* Tech Categories with Spinner Wheels */}
                <motion.div
                    className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    {techStack.map((category, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col w-full items-center space-y-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-out"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        >
                            <div className="w-full h-26">
                                <SpinnerWheel items={category.items} duration={5000} />
                            </div>
                            <div className="flex items-center space-x-2 mt-4">
                                <category.icon className="w-8 h-8 text-yellow-400" />
                                <span className="text-2xl font-semibold text-gray-800 dark:text-white">
                                    {category.category}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Technology Cards */}
                <motion.div
                    className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    {technologies.map((tech, index) => (
                        <TechnologyCard key={index} tech={tech} />
                    ))}
                </motion.div>
            </main>
        </div>
    )
}

export default TechStackSection