import React from 'react'
import { motion } from 'framer-motion'
import { Play, Globe } from 'lucide-react'

const projectData = [
    { id: 1, title: 'Flamingo', image: '/images/services/cloud-solutions.svg', type: 'video' },
    { id: 2, title: 'Sphere', image: '/images/services/devops-consulting.svg', type: 'design' },
    { id: 3, title: 'Apple', image: '/images/services/custom-software.svg', type: 'client' },
]

const statsData = [
    { title: '251', subtitle: 'Projects' },
    { title: '156', subtitle: 'Awards' },
    { title: '172', subtitle: 'Global Design Awards' },
]

export default function PortfolioBento() {
    return (
        <div className="min-h-screen flex items-center justify-center w-full px-4 py-8 sm:px-6 lg:px-8 relative">
            <main className="w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

                    {/* Heading Section */}
                    <motion.div
                        className="md:col-span-2 bg-yellow-400 text-white p-6 rounded-lg shadow-lg relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">Check out</h1>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">These Cool Projects</h1>
                    </motion.div>

                    {/* Stats Cards */}
                    {statsData.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-center text-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 + index * 0.2, duration: 0.5 }}
                        >
                            <h2 className="text-4xl font-bold text-yellow-400">{stat.title}</h2>
                            <p className="text-sm mt-2">{stat.subtitle}</p>
                        </motion.div>
                    ))}

                    {/* Project Display */}
                    {projectData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className={`relative overflow-hidden rounded-lg shadow-lg ${index % 2 === 0 ? "md:col-span-2" : ""}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
                        >
                            <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                <Play className="text-white w-12 h-12 animate-bounce" />
                            </div>
                        </motion.div>
                    ))}

                    {/* Globe Icon Section */}
                    <motion.div
                        className="bg-yellow-400 dark:bg-yellow-500 p-6 rounded-lg shadow-lg flex items-center justify-center text-white"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <Globe className="w-12 h-12" />
                    </motion.div>
                </div>
            </main>
        </div>
    )
}
