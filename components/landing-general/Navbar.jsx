import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ModeToggle } from '../ui/ModeToggle'
import { motion } from 'framer-motion'


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const isActive = (path) => router.pathname === path

    return (
        <nav className="fixed top-0 z-50 w-full mx-auto bg-white/30 backdrop-blur-lg border-b border-white/20">
            <div className="relative z-10 px-4 sm:px-6 lg:px-8 w-full transition-all duration-300 ease-in-out">
                <div className="flex items-center justify-between h-16 w-full">
                    <div className="flex">
                        <Link href="/" className="flex-shrink-0 font-extrabold text-2xl">
                            {/* <Image src="/images/syntegra-logo.svg" alt="Logo" width={100} height={100} /> */}
                            ONE
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        <Link href="/about" className={`px-3 py-2 rounded-md text-sm font-medium transition duration-200 ${isActive('/about') ? 'text-lochmara-500' : 'hover:text-lochmara-500'}`}>About Me</Link>
                        <Link href="/tech-stack" className={`px-3 py-2 rounded-md text-sm font-medium transition duration-200 ${isActive('/tech-stack') ? 'text-lochmara-500' : 'hover:text-lochmara-500'}`}>Tech Stack</Link>
                        <Link href="/projects" className={`px-3 py-2 rounded-md text-sm font-medium transition duration-200 ${isActive('/projects') ? 'text-lochmara-500' : 'hover:text-lochmara-500'}`}>Projects</Link>
                        <ModeToggle />
                        <Link href="/contact" className="flex items-center gap-2">
                            <button className="bg-yellow-400 hover:bg-black hover:text-white transition-colors duration-300 px-4 py-2 rounded-3xl text-sm font-medium flex items-center">
                                Contact
                                <Phone className="ml-2 h-4 w-4" />
                            </button>
                        </Link>
                    </div>

                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-400 transition-all duration-200">
                            {isOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    className="md:hidden bg-white/40 backdrop-blur-md p-4 space-y-4 border-t border-white/20"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                >
                    <Link href="/about" className={`block px-4 py-2 rounded-md text-sm font-medium transition duration-200 ${isActive('/about') ? 'text-lochmara-500' : 'hover:text-lochmara-500'}`}>About Me</Link>
                    <Link href="/tech-stack" className={`block px-4 py-2 rounded-md text-sm font-medium transition duration-200 ${isActive('/tech-stack') ? 'text-lochmara-500' : 'hover:text-lochmara-500'}`}>Tech Stack</Link>
                    <Link href="/projects" className={`block px-4 py-2 rounded-md text-sm font-medium transition duration-200 ${isActive('/projects') ? 'text-lochmara-500' : 'hover:text-lochmara-500'}`}>Projects</Link>
                    <Link href="/contact" className="flex items-center gap-2 mt-2">
                        <button className="bg-yellow-400 hover:bg-black hover:text-white transition-colors duration-300 px-4 py-2 rounded-3xl text-sm font-medium flex items-center">
                            Contact
                            <Phone className="ml-2 h-4 w-4" />
                        </button>
                    </Link>
                </motion.div>
            )}
        </nav>
    )
}
