import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Twitter, Linkedin, Facebook, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300 py-12 border-t-2 border-gray-800 w-full">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    <div className="flex flex-col justify-between col-span-1 md:col-span-2 lg:col-span-1">
                        <Image src="/images/syntegra-logo.svg" alt="Syntegra Logo" width={150} height={50} className="" />
                        <div className="flex space-x-4 mt-4 ml-1">
                            <Link href="#" className="hover:text-white"><Instagram size={24} /></Link>
                            <Link href="#" className="hover:text-white"><Twitter size={24} /></Link>
                            <Link href="#" className="hover:text-white"><Linkedin size={24} /></Link>
                            <Link href="#" className="hover:text-white"><Facebook size={24} /></Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            {['Home', 'About Us', 'Services', 'Career', 'Blog'].map((item) => (
                                <li key={item}><Link href="#" className="hover:text-white">{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            {['DevOps', 'APIs', 'Experts', 'Integrations', 'Security', 'Blog'].map((item) => (
                                <li key={item}><Link href="#" className="hover:text-white">{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Legal / Transparency</h3>
                        <ul className="space-y-2">
                            {['Privacy Policy', 'Terms of Use', 'Support Policy'].map((item) => (
                                <li key={item}><Link href="#" className="hover:text-white">{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                                <span>173, Ogudu Road, opposite Saint Andrews Anglican Church</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={20} className="mr-2 flex-shrink-0" />
                                <span>+234 806 877 6786<br />+234 902 776 1299</span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={20} className="mr-2 flex-shrink-0" />
                                <a href="mailto:info.syntegradtv@gmail.com" className="hover:text-white">info.syntegradtv@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>

                <span>
                    <div className="mt-8 py-[.5px] w-full border-t border-gray-800 bg-gradient-to-r from-gray-800 via-pink-400 to-blue-500 text-center" />
                </span>

                <div className="pt-4 text-center">
                    <p>&copy; Syntegra DTV {new Date().getFullYear()}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}