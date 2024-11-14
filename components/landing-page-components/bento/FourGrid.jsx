import React from 'react';

const testimonials = [
    {
        title: 'Financial Services Cloud Optimization',
        description: 'Revamped cloud infrastructure for improved performance and cost efficiency.'
    },
    {
        title: 'Health Care Data Security',
        description: 'Implemented advanced security measures ensuring compliance with healthcare regulations.'
    },
    {
        title: 'E-Commerce Platform Scaling',
        description: 'Scaled e-commerce infrastructure to handle 5x during peak seasons.'
    },
    {
        title: 'Innovative AI Solutions',
        description: 'Built AI-driven tools that improved customer engagement by 35%.'
    }
];

const TestimonialCard = ({ title, description, additionalClasses }) => (
    <div className={`bg-zinc-900 p-6 rounded-lg shadow-lg border border-gray-600 ${additionalClasses}`}>
        <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
    </div>
);

export default function FourGrid() {
    return (
        <div className="grid grid-rows-2 gap-4 lg:grid-cols-3 lg:grid-rows-2 lg:gap-4">
            {/* Top Row */}
            <TestimonialCard
                title={testimonials[0].title}
                description={testimonials[0].description}
                additionalClasses="col-span-1 lg:col-span-1 h-40 lg:h-64"
            />
            <TestimonialCard
                title={testimonials[1].title}
                description={testimonials[1].description}
                additionalClasses="col-span-1 lg:col-span-2 h-40 lg:h-64"
            />

            {/* Bottom Row */}
            <TestimonialCard
                title={testimonials[2].title}
                description={testimonials[2].description}
                additionalClasses="col-span-1 lg:col-span-2 h-40 lg:h-48"
            />
            <TestimonialCard
                title={testimonials[3].title}
                description={testimonials[3].description}
                additionalClasses="col-span-1 lg:col-span-1 h-40 lg:h-48"
            />
        </div>
    );
}
