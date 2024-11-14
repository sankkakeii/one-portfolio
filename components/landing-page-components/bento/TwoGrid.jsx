import React from 'react';

let testimonials = [
    {
        title: 'Financial Services Cloud Optimization',
        description: 'Revamped cloud infrastructure for improved performance and cost efficiency.'
    },
    {
        title: 'E-Commerce Platform Scaling',
        description: 'Scaled e-commerce infrastructure to handle 5x during peak seasons.'
    },
];

export default function TwoGrid() {
    return (
        <div className="grid grid-rows-2 lg:grid-rows-2 lg:grid-cols-1 gap-4">
            <div className="bg-zinc-900 shadow-lg rounded-lg p-4 flex flex-col h-48 lg:h-64 border border-gray-600">
                <h3 className="text-lg font-semibold pb-2">{testimonials[0].title}</h3>
                <p className="text-sm text-gray-400">{testimonials[0].description}</p>
            </div>
            <div className="bg-zinc-900 shadow-lg rounded-lg p-4 flex flex-col h-40 lg:h-48 border border-gray-600">
                <h3 className="text-lg font-semibold pb-2">{testimonials[1].title}</h3>
                <p className="text-sm text-gray-400">{testimonials[1].description}</p>
            </div>
        </div>
    );
}
