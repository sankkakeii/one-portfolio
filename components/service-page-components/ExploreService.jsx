import Image from "next/image";
import { Cloud, LockKeyhole, Code, Shield } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ExploreService() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const services = [
    { title: "Devops Consulting", description: "Unlock the full potential of your operations with end-to-end consulting.", icon: LockKeyhole },
    { title: "Cloud Solutions", description: "Migrate, manage, and optimize your infrastructure with ease.", icon: Cloud },
    { title: "Custom Software Development", description: "Tailor-made solutions to meet your unique business needs.", icon: Code },
    { title: "Security Solutions", description: "Safeguard your assets with comprehensive security protocols.", icon: Shield },
  ];

  return (
    <div className="text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="py-10 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            Explore Our Unique Services
          </h2>
          <p className="text-center max-w-3xl mx-auto text-gray-400 text-sm sm:text-base">
            Our services are designed to streamline your operations and enhance your agility.
            Our approach is simple: we listen, we understand, and we deliver custom solutions
            that drive real business value.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 pb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-[#16171A] p-6 sm:p-10 w-full rounded-md">
              <div className="bg-lochmara-500 w-fit p-3 sm:p-4 rounded-full">
                <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" aria-hidden="true" />
              </div>
              <h4 className="text-lg sm:text-xl font-medium py-2">{service.title}</h4>
              <p className="text-gray-400 text-sm sm:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}