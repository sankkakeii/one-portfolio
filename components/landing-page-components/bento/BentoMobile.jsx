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

const BentoMobile = ({ title, description }) => (
    <div className="bg-zinc-900 p-6 rounded-lg shadow-lg border border-gray-600">
        <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
    </div>
);

export default function BentoMobileParent() {
    return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6 p-4 lg:p-8">
            {testimonials.map((testimonial, index) => (
                <BentoMobile
                    key={index}
                    title={testimonial.title}
                    description={testimonial.description}
                />
            ))}
        </div>
    );
}
