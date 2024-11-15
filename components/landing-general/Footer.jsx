import Link from 'next/link';
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300 py-8 w-full">
            <div className="container mx-auto px-4 text-center">
                {/* Social Media Icons */}
                <div className="flex justify-center space-x-6 mb-4">
                    <Link href="#" aria-label="Instagram" className="hover:text-white transition">
                        <Instagram size={24} />
                    </Link>
                    <Link href="#" aria-label="Twitter" className="hover:text-white transition">
                        <Twitter size={24} />
                    </Link>
                    <Link href="#" aria-label="LinkedIn" className="hover:text-white transition">
                        <Linkedin size={24} />
                    </Link>
                    <Link href="#" aria-label="Facebook" className="hover:text-white transition">
                        <Facebook size={24} />
                    </Link>
                </div>

                {/* Footer Text */}
                <p className="text-sm text-gray-400">
                    &copy; ONE {new Date().getFullYear()}. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
