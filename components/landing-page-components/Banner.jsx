import React from 'react'
import { Globe, Youtube, Instagram, Facebook, Twitter, ArrowUpRight, Camera, Eye } from 'lucide-react'

export default function Banner() {
    return (
        <div className="bg-white min-h-screen flex items-center justify-center w-full px-4 py-8 sm:px-6 lg:px-8">
            <main className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                <div className="md:w-1/2 space-y-6">
                    <h1 className="text-7xl md:text-9xl font-bold leading-none">hello world</h1>
                    <p className="text-xl">
                        Welcome to a visual journey that transcends time and space. Discover the artistry of moments captured in motion
                    </p>
                    <div className="flex space-x-4">
                        <Youtube size={24} />
                        <Instagram size={24} />
                        <Facebook size={24} />
                        <Twitter size={24} />
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-bold">+250k</h2>
                            <p className="text-sm">Videos that reaching a wide audience and give lasting impression</p>
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-6xl font-bold">+800k</h2>
                            <p className="text-sm">Hours watched, engaging storytelling that captivates viewers</p>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 relative mt-8 md:mt-0">
                    <div className="transparent overflow-hidden">
                        <img
                            src="/images/masks/header-mask.svg"
                            alt="Photographer with vintage camera"
                            className="h-auto"
                        />
                    </div>
                    <div className="absolute top-2 right-52 bg-black text-white p-2 rounded-full">
                        <ArrowUpRight size={50} />
                    </div>
                    <div className="absolute bottom-10 left-4 flex flex-col space-y-4">
                        <div className="bg-yellow-400 p-2 rounded-full">
                            <Camera size={50} />
                        </div>
                        <div className="bg-yellow-400 p-2 rounded-full">
                            <Eye size={50} />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}