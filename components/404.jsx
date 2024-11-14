import Footer from "@/components/landing-general/Footer";
import Navbar from "@/components/landing-general/Navbar";
import React from "react";
import Image from "next/image";

export default function Error404() {
    return (
        <section className="bg-gradient-to-b from-gray-900 to-black">
            <Navbar />
            <section className="mx-auto px-4 mt-10 mb-60">

                <p className="flex justify-center mt-4 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                    404 | Error
                </p>
                <p className="flex justify-center mt-4 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                    Page not found or is under construction
                </p>

                <div className="flex justify-center mt-10">
                    <Image
                        src="/images/404.png"
                        alt="Logo"
                        className="rounded-lg"
                        width={1200}
                        height={1200}
                    />
                </div>
            </section>

            <Footer />
        </section>
    );
}
