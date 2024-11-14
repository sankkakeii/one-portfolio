import Footer from "@/components/landing-general/Footer";
import Navbar from "@/components/landing-general/Navbar";
import JoinUs from "@/components/career-page-components/JoinUs";
import Interns from "@/components/career-page-components/Interns";
import React from "react";
import Image from "next/image";
import Positions from "@/components/career-page-components/Positions";

export default function Career() {
    return (
        <section className="bg-gradient-to-b from-gray-900 to-black relative">
            {/* Vibrant blurred background blobs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
                <div className="absolute -right-1/2 bottom-1/4 w-3/4 h-3/4 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
                <div className="absolute left-1/3 top-1/2 w-1/3 h-1/3 rounded-full bg-lochmara-500 opacity-10 blur-3xl"></div>
            </div>
            <Navbar />
            <section className="mx-auto flex flex-col justify-center items-center my-24 relative z-10">
                {/* CAREER HEADER */}
                <div className="flex justify-center items-center gap-8 mt-10">
                    <p className="text-3xl text-center sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        We’re Building  Something<br />Work With Us
                    </p>
                    <Image
                        src="/images/about/icon.svg"
                        alt="Logo"
                        width={40}
                        height={50}
                    />
                </div>
                <div className="flex justify-center mt-10">
                    <Image
                        src="/images/career/work.svg"
                        alt="Logo"
                        width={1200}
                        height={1200}
                    />
                </div>
                <div className="text-center max-w-5xl mx-auto text-gray-400 text-base">
                    <p className="pt-8 pb-2">
                        Choosing the right company to work for—or partner with—can be one of the most important decisions you make. At Syntegra, we believe in creating an environment that fosters growth, values creativity, and rewards collaboration.
                        Here’s why we think we’re the perfect fit for both potential team members and partners.
                    </p>
                </div>
                <JoinUs />
                <Interns />
                <Positions />
            </section>

            <Footer />
        </section>
    );
}
