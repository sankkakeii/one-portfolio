import Image from "next/image";

export default function Component() {
  return (
    <section className="relative bg-[#16171A] text-white w-full">
      {/* Main content container */}
      <div className="container mx-auto px-4 py-10  flex justify-center">
        <div className=" text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Interns Are Partners
          </h2>
          <p className="text-gray-300 text-base leading-relaxed max-w-6xl">
            Just like with our employees and business partners, we view our interns as part of the bigger picture.
            You are not just here to observe; you are here to contribute, collaborate, and be an integral part of our journey. We invest in our interns because we believe in building relationships that last well beyond the program.
          </p>
        </div>
      </div>

      {/* Decorative curved lines */}
      <div className="absolute top-0 right-0">
        <Image
          src="/images/career/vector.svg"
          alt="Logo"
          width={550}
          height={490}
        />
      </div>
    </section>
  )
}