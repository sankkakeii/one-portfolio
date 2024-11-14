import { MapPin, Clock, Building2 } from 'lucide-react';

export default function Positions() {
    const jobs = [
        {
            title: "Senior Developer",
            description: `We are seeking a highly skilled Senior Developer to join our dynamic team. The ideal candidate will have extensive experience in software development, a deep understanding of various programming languages and frameworks, and a passion for delivering high-quality solutions.`,
            location: "Ogudu, Lagos",
            type: "Hybrid",
            deadline: "30th September, 2024"
        },
        // Duplicate the job object 7 more times to create 8 identical positions
        ...Array(7).fill({
            title: "Senior Developer",
            description: `We are seeking a highly skilled Senior Developer to join our dynamic team. The ideal candidate will have extensive experience in software development, a deep understanding of various programming languages and frameworks, and a passion for delivering high-quality solutions.`,
            type: "Hybrid",
            deadline: "30th September, 2024"
        })
    ];

    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Your Career Starts Here
                    </h2>
                    <p className="text-gray-400">
                        Can&apos;t find the job you want? Send your resume to{' '}
                        <a
                            href="mailto:info.syntegradtv@gmail.com"
                            className="text-lochmara-500 hover:text-lochmara-600 transition-colors"
                        >
                            info.syntegradtv@gmail.com
                        </a>
                        , and we&apos;ll contact you when a new position opens.
                    </p>
                </div>

                {/* LEAVE HERE UNCOMMENT FOR LATER */}
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {jobs.map((job, index) => (
                        <div
                            key={index}
                            className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 hover:bg-[#252525] transition-colors duration-300 group"
                        >
                            <h3 className="text-white text-xl font-semibold mb-4">{job.title}</h3>
                            <div className="pt-6 border-t border-gray-600">

                            </div>
                            <p className="text-gray-400 text-sm mb-6 line-clamp-4">{job.description}</p>

                            <div className="space-y-3">
                                <div className="flex items-center text-gray-400 text-sm">
                                    <MapPin className="w-4 h-4 mr-2 text-lochmara-500" />
                                    {job.location}
                                </div>
                                <div className="flex items-center text-gray-400 text-sm">
                                    <Building2 className="w-4 h-4 mr-2 text-lochmara-500" />
                                    {job.type}
                                </div>
                                <div className="flex items-center text-gray-400 text-sm">
                                    <Clock className="w-4 h-4 mr-2 text-lochmara-500" />
                                    {job.deadline}
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-800">
                                <button className="w-full bg-transparent text-lochmara-500 hover:bg-lochmara-600 hover:text-white py-2 px-4 border border-lochmara-500 rounded-md transition-colors duration-300">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div> */}

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
                        <div
                            className=" bg-[#1a1a1a] border border-gray-800 rounded-lg p-12 hover:bg-[#252525] transition-colors duration-300 group"
                        >
                            <h3 className="text-white text-xl font-semibold mb-4">NO OPEN POSITIONS</h3>
                            <div className="pt-6 border-t border-gray-600">

                            </div>
                            <p className="text-gray-400 text-md mb-6 line-clamp-4">Please check back soon</p>

                        </div>
                </div>
            </div>
        </div>
    );
}