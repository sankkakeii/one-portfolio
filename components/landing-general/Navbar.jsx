import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ModeToggle } from '../ui/ModeToggle'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const isActive = (path) => router.pathname === path

    return (
        <nav className="relative w-full mx-auto">
            <div className="relative z-10  px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex items-center justify-between h-16 w-full">
                    <div className="flex">
                        <Link href="/" className="flex-shrink-0 font-extrabold text-2xl">
                            {/* <Image src="/images/syntegra-logo.svg" alt="Logo" width={100} height={100} /> */}
                            ONE
                        </Link>
                    </div>
                    <div className="hidden md:block">

                        <div className="hidden md:block">
                            <div className="ml-10 flex items-center space-x-4">
                                <Link href="/about" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/about') ? 'text-lochmara-500' : 'hover:text-lochmara-500'}`}>About Me</Link>
                                <Link href="/tech-stack" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/tech-stack') ? 'text-lochmara-500' : 'hover:text-lochmara-500'}`}>Tech Stack</Link>
                                <Link href="/projects" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/projects') ? 'text-lochmara-500' : 'hover:text-lochmara-500'}`}>Projects</Link>
                                <ModeToggle />
                                <Link className="flex items-center gap-4 mr-4" href={'/contact'}>
                                    <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-3xl text-sm font-medium flex items-center">
                                        Contact
                                        <Phone className="ml-2 h-4 w-4" />
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            {isOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <div className="">
                            <Link href="/about" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/about') ? 'text-lochmara-500' : 'hover:text-lochmara-500'}`}>About Me</Link>
                            <Link href="/tech-stack" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/tech-stack') ? 'text-lochmara-500' : 'hover:text-lochmara-500'}`}>Tech Stack</Link>
                            <Link href="/projects" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/projects') ? 'text-lochmara-500' : 'hover:text-lochmara-500'}`}>Projects</Link>
                        </div>
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-700">
                        <Link className="flex items-center gap-4 ml-4" href={'/contact'}>
                            <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-3xl text-sm font-medium flex items-center">
                                Contact
                                <Phone className="ml-2 h-4 w-4" />
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}




// <header className="p-4 flex justify-between items-center">
// <div className="text-2xl font-bold">●◐</div>
// <nav className="hidden md:flex space-x-4">
//     <a href="#" className="hover:underline">Home</a>
//     <a href="#" className="hover:underline">About</a>
//     <a href="#" className="hover:underline">Portfolio</a>
//     <a href="#" className="hover:underline">Exhibitions</a>
//     <a href="#" className="hover:underline">Contact</a>
// </nav>
// <div className="flex items-center space-x-2">
//     <span className="text-orange-400">+ Sala Canal, 22 Nov 23</span>
//     <div className="bg-black text-white p-2 rounded-full">
//         <Globe size={20} />
//     </div>
// </div>
// </header>