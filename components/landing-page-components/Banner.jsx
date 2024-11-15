import React from 'react'
import { Youtube, Instagram, Facebook, Twitter } from 'lucide-react'
import Image from 'next/image'

export default function Banner() {
    return (
        <div className="mt-16 bg-transparent min-h-screen flex items-center justify-center w-full px-4 sm:px-6 sm:mt-0 lg:mt-0 lg:px-8 relative">

            {/* Background Shapes */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute -top-16 -left-16 bg-orange-200 h-48 w-48 rounded-full blur-lg"></div>
                <div className="absolute bottom-16 right-16 bg-yellow-300 h-32 w-32 rounded-full blur-md"></div>
            </div>

            <main className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-10">
                <div className="md:w-1/2 space-y-6 animate-fadeInUp">
                    <h1 className="text-6xl md:text-8xl font-bold leading-none animate-popIn">hello world</h1>
                    <p className="text-xl animate-fadeInRight">
                        My name is David, and i build things for the web and beyond.
                    </p>

                    {/* Call-to-Action Button */}
                    <button className="px-6 py-2 mt-2 text-lg font-semibold text-white bg-yellow-400 rounded-md hover:bg-black transition duration-300 ease-out">
                        Explore More
                    </button>

                    {/* Social Media Icons with Labels */}
                    <div className="flex space-x-4 mt-2">
                        {[{ icon: Youtube, label: 'YouTube' }, { icon: Instagram, label: 'Instagram' }, { icon: Facebook, label: 'Facebook' }, { icon: Twitter, label: 'Twitter' }].map(({ icon: Icon, label }, index) => (
                            <div key={index} className="text-center">
                                <Icon size={24} className="transform hover:scale-125 transition-transform duration-300 ease-out animate-fadeInLeft" />
                                <p className="text-xs mt-1">{label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Divider Line */}
                    <hr className="border-t border-gray-200 my-4 w-full" />

                    {/* Animated Counters */}
                    <div className="flex justify-between animate-fadeInUp">
                        <div>
                            <h2 className="text-2xl md:text-4xl font-bold animate-bounceIn">4+ years</h2>
                            <p className="text-sm">As a professional Fullstack Engineer</p>
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-4xl font-bold animate-bounceIn delay-200">10+ years</h2>
                            <p className="text-sm">As a professional hobbyist</p>
                        </div>
                    </div>
                </div>

                {/* Image Section with Animated Mask */}
                <div className="md:w-1/2 relative mt- md:mt-0">
                    <div className="overflow-hidden animate-bob mt-10">
                        <Image
                            src="/images/masks/header-mask.svg"
                            alt="Photographer with vintage camera"
                            className="h-auto"
                            width={460}
                            height={460}
                        />
                    </div>
                </div>
            </main>

            {/* Scroll Indicator */}
            <div className="absolute bottom-2 animate-bounce text-gray-500 flex flex-col items-center">
                <span className="text-sm">Scroll down</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
    )
}