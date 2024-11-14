import Footer from "@/components/landing-general/Footer";
import Navbar from "@/components/landing-general/Navbar";
import React from "react";
import Image from "next/image";
import Description from "@/components/about-us-components/Description";
import ProfessionalTeam from "@/components/about-us-components/ProfessionalTeam";
import Partners from "@/components/about-us-components/Partners";


export default function About() {
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
        <div className="flex justify-center items-center gap-8">
          <p className="mt-10 text-[#0090D8] text-2xl font-semibold">
            Who We Are
          </p>
          <Image
            src="/images/about/icon.svg"
            alt="Logo"
            width={40}
            height={50}
          />
        </div>

        <div className="text-center space-y-2">
          <p className="text-3xl text-center sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            We’re more than just DevOps, we are partners
          </p>
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          in your digital transformation journey.
          </p>

        </div>
        <div className="flex justify-center mt-10 rounded-lg">
          <Image
            src="/images/about/header.svg"
            alt="Logo"
            className="rounded-xl"
            width={1200}
            height={1200}
          />
        </div>
      </section>

      <Description />
      <ProfessionalTeam />
      <Partners />

      <Footer />
    </section>
  );
}
