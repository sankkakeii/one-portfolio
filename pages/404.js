import Footer from "@/components/landing-general/Footer";
import Navbar from "@/components/landing-general/Navbar";
import React from "react";
import Image from "next/image";

export default function Page404() {
    return (
        <section className="h-screen bg-gradient-to-b from-gray-900 to-black">
            <section className="mx-auto p-12">

                <p className="flex justify-center mt-4 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                    404 | Error
                </p>
                <p className="flex justify-center mt-4 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                    Page not found
                </p>

                <div className="flex justify-center mt-10 rounded-lg">
                    <Image
                        src="/images/404.png"
                        alt="Logo"
                        className="rounded-lg"
                        width={1200}
                        height={1200}
                    />
                </div>
                <p className="flex justify-center mt-4 text-center text-3xl sm:text-2xl md:text-3xl lg:text-3xl text-gray-500 leading-tight">
                    Are you lost friend?
                </p>
            </section>
        </section>
    );
}
