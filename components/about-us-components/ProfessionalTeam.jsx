import Image from "next/image";

export default function ProfessionalTeam() {
  const topRowMembers = [
    { id: 1, imageSrc: "/images/about/default.svg" },
    { id: 2, imageSrc: "/images/about/default.svg" },
    { id: 3, imageSrc: "/images/about/default.svg" },
  ];

  const bottomRowMembers = [
    { id: 4, imageSrc: "/images/about/default.svg" },
    { id: 5, imageSrc: "/images/about/default.svg" },
    { id: 6, imageSrc: "/images/about/default.svg" },
    { id: 7, imageSrc: "/images/about/default.svg" },
  ];

  return (
    <div className=" text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Professional Team
        </h2>
        <p className="text-center mb-12 max-w-3xl mx-auto">
          Behind every Syntegra success is a team of talented, passionate
          individuals dedicated to making a difference. On-site or virtual, our
          people are our greatest asset. We believe in nurturing talent,
          encouraging growth, and creating a culture where everyone can thrive.
        </p>
        <div className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {topRowMembers.map((member) => (
              <div key={member.id} className="flex flex-col items-center">
                <Image
                  src={member.imageSrc}
                  alt={`Team member ${member.id}`}
                  width={200}
                  height={200}
                  className="rounded-lg object-cover mb-4"
                />
                <h3 className="font-semibold text-lg">Name</h3>
                <p className="text-gray-400">Position</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {bottomRowMembers.map((member) => (
              <div key={member.id} className="flex flex-col items-center">
                <Image
                  src={member.imageSrc}
                  alt={`Team member ${member.id}`}
                  width={200}
                  height={200}
                  className="rounded-lg object-cover mb-4"
                />
                <h3 className="font-semibold text-lg">Name</h3>
                <p className="text-gray-400">Position</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
