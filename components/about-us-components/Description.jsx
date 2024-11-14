import { Zap } from "lucide-react";
import Image from "next/image";

export default function Description() {
  return (
    <div className="text-white p-8 max-w-7xl mx-auto">
      <div className="text-center space-y-2">
        <p className="text-3xl font-semibold leading-tight">
          We are passionate about building resilient, scalable,
        </p>
        <p className="text-3xl font-semibold leading-tight">and secure systems that not only meet today&apos;s</p>
        <p className="text-3xl font-semibold mb-8 leading-tight">demands but also position you for tomorrow&apos;s growth.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
        {[
          {
            title: "Digital transformation",
            description:
              "Looking to build your site, design web and mobile apps, optimize cloud infrastructure, automate workflows, or enhance security? We're here to take your business to the next level.",
          },
          {
            title: "Government Process Digitization",
            description:
              "We specialize in helping government ministries, departments, communications, and agencies transition from traditional methods to fully digitized operations that improve service delivery and foster better governance.",
          },
          {
            title: "Our Value and Culture",
            description:
              "We believe in fostering an environment where innovation, collaboration, and a commitment to excellence come together to drive lasting success for our clients, our team, and our community.",
          },
          {
            title: "Expertise and Experience",
            description:
              "Our leadership team has successfully delivered solutions across diverse industries, proving our capacity to handle complex challenges.",
          },
        ].map((service, index) => (
          <div key={index} className="flex flex-col items-start space-y-2">
            <Image
              src="/images/about/vector.svg"
              alt="Logo"
              width={20}
              height={20}
            />
            <h3 className="font-semibold text-lg">{service.title}</h3>
            <p className="text-gray-400 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
