import Image from "next/image";
import { useState, useEffect } from 'react';

export default function Ideas() {
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

  const ideas = [
    {
      title: "Discover",
      description: "We start with a discussion with you so we can structure team, approach, success metrics, timescale, budget and delegate required skill sets to the task.",
      image: "/images/services/idea-1.svg"
    },
    {
      title: "Design",
      description: "Our design strategy flows from discovery through a user-focused mind-map to create a total end-to-end deeply satisfying experience.",
      image: "/images/services/idea-2.svg"
    },
    {
      title: "Develop",
      description: "Our team of developers consider such issues as protocols, compatibility, user accessibility and security to code with precision and functionality.",
      image: "/images/services/idea-3.svg"
    },
    {
      title: "Deploy",
      description: "The end goal is to put a software or an app in the hand of the user, while yet gathering user feedback for post deployment upgrades.",
      image: "/images/services/idea-4.svg"
    },
  ];

  return (
    <div className="bg-black text-white px-4 sm:px-6 lg:px-8 py-20 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#0090D8] text-lg font-medium">
            Our Process
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold">
            How We Bring Ideas To Life
          </h2>
        </div>

        <div className="grid gap-8 md:gap-12 lg:gap-16">
          {ideas.map((idea, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? 'md:grid-flow-col' : 'md:grid-flow-col-dense'
                }`}
            >
              <div className={`bg-[#16171A] p-8 md:p-12 rounded-lg flex flex-col justify-center ${index % 2 === 1 ? 'md:col-start-2' : ''
                }`}>
                <h3 className="text-2xl font-medium mb-4">{idea.title}</h3>
                <p className="text-gray-400 text-base leading-relaxed">{idea.description}</p>
              </div>
              <div className={`flex items-center justify-center ${index % 2 === 1 ? 'md:col-start-1' : ''
                }`}>
                <Image
                  src={idea.image}
                  alt={`${idea.title} illustration`}
                  width={isMobile ? 300 : 400}
                  height={isMobile ? 300 : 400}
                  className="object-contain w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}