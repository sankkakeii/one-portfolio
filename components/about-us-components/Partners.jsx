import Image from "next/image";

export default function Partners() {
  return (
    <section className="bg-[#16171A] text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:space-x-8">

        <div className="lg:flex-1 lg:pr-8 mb-8 lg:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">No Client, Just Partners</h2>
          <p className="text-gray-300">
            At our core, we believe that success is best achieved through
            partnership.
          </p>
          <p className="text-gray-300">
            We don&apos;t see the businesses we work with as
            clients, we see them as partners. This
          </p>
          <p className="text-gray-300">
            philosophy shapes the way we
            approach every project, every conversation, and
          </p>
          <p className="mb-8 text-gray-300">
            every solution.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold mb-4">Collaborative Success</h3>
          <p className="text-gray-300">
            When you work with us, you&apos;re not just hiring a service
            provider. You&apos;re
          </p>
          <p className="text-gray-300">
            partnering with a team that is committed to
            your success and growth.
          </p>
        </div>

        <div className="flex-shrink-0 w-full max-w-md lg:max-w-sm">
          <Image
            src="/images/about/amico.svg"
            alt="Collaborative partnership illustration"
            width={400}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
