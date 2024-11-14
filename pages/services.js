import Footer from "@/components/landing-general/Footer";
import Navbar from "@/components/landing-general/Navbar";
import ExploreService from "@/components/service-page-components/ExploreService";
import React from "react";
import Image from "next/image";
import Agents from "@/components/service-page-components/Agents";
import Ideas from "@/components/service-page-components/Ideas";

export default function Services() {
    return (
        <section className="bg-gradient-to-b from-gray-900 to-black relative">
            {/* Vibrant blurred background blobs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
                <div className="absolute -right-1/2 bottom-1/4 w-3/4 h-3/4 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
                <div className="absolute left-1/3 top-1/2 w-1/3 h-1/3 rounded-full bg-lochmara-500 opacity-10 blur-3xl"></div>
            </div>
            <Navbar />
            <section className="mx-auto flex flex-col justify-center items-center  my-24 relative z-10">
                <div className="flex justify-center items-center gap-8">
                    <p className="mt-10 text-[#0090D8] text-2xl font-semibold">
                        What We Offer
                    </p>
                    <Image
                        src="/images/about/icon.svg"
                        alt="Logo"
                        width={40}
                        height={50}
                    />
                </div>
                <p className="text-3xl sm:text-4xl md:text-5xl text-center lg:text-6xl font-bold leading-tight">
                    We listen, we understand and we deliver <br></br> custom solutions
                </p>

                <div className="flex justify-center mt-10">
                    <Image
                        src="/images/services/service-page1.png"
                        alt="Logo"
                        width={1200}
                        height={1200}
                    />
                </div>
                <div className="text-center max-w-5xl mx-auto text-gray-400 text-base">
                    <p className="pt-8 pb-2">
                        At Syntegra, we offer a full spectrum of DevOps services tailored to meet the unique needs of your business.
                        From cloud migration and infrastructure management to automation and security solutions.
                    </p>
                    <p className="text-[#0090D8]">
                        Let&apos;s help you achieve operational excellence through our expert services.
                    </p>
                </div>
                <ExploreService />
                <Agents />
                <Ideas />
            </section>
            <Footer />
        </section>
    );
}
