/* eslint-disable @next/next/no-img-element */
import React, { useRef, useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'

const partners = [
    { id: 1, name: 'CLRD', logo: '/images/partners/clrd.svg?height=100&width=100' },
    { id: 2, name: 'NIPOST', logo: '/images/partners/nipost.svg?height=100&width=100' },
    { id: 3, name: 'Partner 3', logo: '/images/partners/clrd.svg?height=100&width=100' },
    { id: 4, name: 'Partner 4', logo: '/images/partners/clrd.svg?height=100&width=100' },
    { id: 5, name: 'Partner 5', logo: '/images/partners/clrd.svg?height=100&width=100' },
    { id: 6, name: 'Partner 6', logo: '/images/partners/clrd.svg?height=100&width=100' },
    { id: 7, name: 'Partner 7', logo: '/images/partners/clrd.svg?height=100&width=100' },
    { id: 8, name: 'Partner 8', logo: '/images/partners/clrd.svg?height=100&width=100' },
]

export default function Partners() {
    const scrollRef = useRef(null)
    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
        const scrollContainer = scrollRef.current
        if (scrollContainer) {
            const handleScroll = () => {
                setScrollPosition(scrollContainer.scrollLeft)
            }
            scrollContainer.addEventListener('scroll', handleScroll)
            return () => scrollContainer.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const scroll = () => {
        if (scrollRef.current) {
            const container = scrollRef.current
            const scrollAmount = container.clientWidth
            const maxScroll = container.scrollWidth - container.clientWidth

            let newScrollPosition = scrollPosition + scrollAmount

            if (newScrollPosition > maxScroll) {
                // If we've reached the end, loop back to the start
                newScrollPosition = 0
            }

            container.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section className="text-white py-16 px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-lochmara-500 text-xl font-semibold mb-4">Our Partners</h2>
                <h3 className="text-4xl sm:text-5xl font-bold mb-4">No Client, Just Partners</h3>
                <p className="text-gray-400 text-lg sm:text-xl mb-8 max-w-3xl">
                    We don&apos;t see the businesses we work with as clients, we see them as partners.
                </p>
                <div className="flex items-center justify-end mb-4 w-full">
                    <div className="flex gap-1 items-center justify-center">
                        <button
                            onClick={scroll}
                            className="text-lochmara-500 hover:underline"
                            aria-label="See more partners"
                        >
                            See More
                        </button>
                        <ArrowRight className="w-4 h-4 text-lochmara-500" />
                    </div>
                </div>
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide hover:cursor-pointer"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {[...partners, ...partners].map((partner, index) => (
                        <div
                            key={`${partner.id}-${index}`}
                            className="flex-shrink-0 w-40 h-40 border border-gray-600 bg-zinc-900 rounded-lg flex items-center justify-center overflow-hidden group "
                        >
                            <div className="relative w-full h-full flex items-center justify-center transition-all duration-300 ease-in-out  group-hover:scale-110">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="max-w-[80%] max-h-[80%] object-contain transition-all duration-300 ease-in-out filter grayscale group-hover:filter-none"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}