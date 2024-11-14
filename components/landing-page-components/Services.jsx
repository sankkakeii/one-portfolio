/* eslint-disable @next/next/no-img-element */
import React from 'react'

const services = [
    {
        title: "Devops Consulting",
        description: "Unlock the full potential of your operations with end-to-end consulting.",
        image: "/images/services/devops-consulting.svg?height=100&width=100"
    },
    {
        title: "Cloud Solutions",
        description: "Migrate, manage, and optimize your infrastructure with ease.",
        image: "/images/services/cloud-solutions.svg?height=100&width=100"
    },
    {
        title: "Security Solutions",
        description: "Safeguard your assets with comprehensive security protocols.",
        image: "/images/services/security-solutions.svg?height=100&width=100"
    },
    {
        title: "Custom Software Development",
        description: "Tailored software solutions to meet your unique business needs.",
        image: "/images/services/custom-software.svg?height=100&width=100"
    }
]

export default function Services() {
    return (
        <section className="bg-transparent text-white py-16 px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-lochmara-500 text-xl font-semibold mb-4">Our Services</h2>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        We listen, we understand and we deliver custom solutions
                    </h3>
                    <p className="text-gray-400 py-8  text-lg sm:text-xl">
                        Let&apos;s streamline your operations and enhance your agility
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
                    {services.map((service, index) => (
                        <div key={index} className={`flex ${index === 1 || index === 2 ? 'md:-translate-y-8' : ''}`}>
                            <div className="bg-zinc-900 border border-gray-600 rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 w-full flex flex-col">
                                <div className="p-6 flex-grow">
                                    <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                                    <p className="text-gray-400">{service.description}</p>
                                </div>
                                <div className="h-40 md:h-52 w-full">
                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}