import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Phone, MapPin, Mail, Star, Instagram, Twitter, Linkedin, Facebook, Send } from 'lucide-react';
import Image from "next/image";
import Navbar from '@/components/landing-general/Navbar';
import Footer from '@/components/landing-general/Footer';

// Dynamically import the Map component with ssr disabled
const Map = dynamic(
    () => import('../components/Map'),
    {
        ssr: false,
        loading: () => <div className="h-full w-full bg-gray-100 animate-pulse"></div>
    }
);

export default function Contact() {
    const position = [6.574375184255711, 3.3941167254810165];

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // form submission logic will be added here
    };

    return (
        <div className="bg-gradient-to-b from-gray-900 to-black relative">
            <Navbar />
            <section className="mx-auto mt-10">
                {/* DECORATION */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
                    <div className="absolute -right-1/2 bottom-1/4 w-3/4 h-3/4 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
                    <div className="absolute left-1/3 top-1/2 w-1/3 h-1/3 rounded-full bg-lochmara-500 opacity-10 blur-3xl"></div>
                </div>

                {/* Header Section */}
                <div className="text-center mb-20">
                    <div className="flex justify-center items-center gap-4 mb-10">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-10">
                            Get In Touch With Us
                        </h1>
                        <Image
                            src="/images/about/icon.svg"
                            alt="Logo"
                            width={40}
                            height={50}
                        />
                    </div>
                    <p className="max-w-3xl mx-auto text-gray-400">
                        We&apos;re here to help. Whether you have questions about our services, want to discuss a project,
                        or simply need expert advice, our team is ready to assist. Get in touch today and let&apos;s start
                        building something extraordinary.
                    </p>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="text-center p-8 border-b md:border-b-0 md:border-r border-[#0589D3]">
                        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <Phone className="w-8 h-8 text-[#0589D3]" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">PHONE NUMBER</h3>
                        <p className="text-gray-400">+23480 2356 7098</p>
                    </div>
                    <div className="text-center p-8 border-b md:border-b-0 md:border-r border-[#0589D3]">
                        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <MapPin className="w-8 h-8 text-[#0589D3]" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">ADDRESS</h3>
                        <p className="text-gray-400">175, Ogudu Rd., Opp St. Andrews Anglican Church, Ogudu, Lagos.</p>
                    </div>
                    <div className="text-center p-8">
                        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <Mail className="w-8 h-8 text-[#0589D3]" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">EMAIL</h3>
                        <p className="text-gray-400">info.syntegradtv@gmail.com</p>
                    </div>
                </div>

                <div className="relative">
                    {/* Message Section */}
                    <div className="bg-[#0589D3] p-8 pt-16 pb-48 text-center rounded-t-lg">
                        <h2 className="text-2xl font-semibold mb-2">Send Us A Message</h2>
                        <p className="text-white/90">
                            If you have questions, please don&apos;t hesitate to send us a message
                        </p>
                    </div>
                    {/* Decorative curved lines */}
                    <div className="absolute top-0 right-90 z-10">
                        <Image
                            src="/images/contact/send.svg"
                            alt="Logo"
                            width={750}
                            height={200}
                        />
                    </div>

                    {/* Form Section */}
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
                        <div className="bg-white rounded-lg p-8 shadow-lg">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full p-3 border-2 rounded-md bg-white text-gray-900"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full p-3 border-2 rounded-md bg-white text-gray-900"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                                <textarea
                                    placeholder="Message"
                                    rows={6}
                                    className="w-full p-3 border-2 rounded-md bg-white text-gray-900"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-[#0589D3] text-white py-3 rounded-md hover:bg-[#0589D3]/90 transition-colors flex items-center justify-center gap-2"
                                >
                                    <Send className="w-4 h-4" />
                                    Send Message
                                </button>
                            </form>

                            <div className="mt-8 text-center">
                                <p className="text-gray-900 mb-4">Follow Us:</p>
                                <div className="flex justify-center gap-4">
                                    <a href="#" className="text-[#0589D3] hover:text-[#0589D3]/80">
                                        <Instagram className="w-6 h-6" />
                                    </a>
                                    <a href="#" className="text-[#0589D3] hover:text-[#0589D3]/80">
                                        <Twitter className="w-6 h-6" />
                                    </a>
                                    <a href="#" className="text-[#0589D3] hover:text-[#0589D3]/80">
                                        <Linkedin className="w-6 h-6" />
                                    </a>
                                    <a href="#" className="text-[#0589D3] hover:text-[#0589D3]/80">
                                        <Facebook className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="h-[460px] mt-24 overflow-hidden">
                    <Map position={position} />
                </div>
            </section>
            <Footer />
        </div>
    );
}