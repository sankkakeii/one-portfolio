import React, { useEffect, useRef } from 'react';
import TwoGrid from './bento/TwoGrid';
import FourGrid from './bento/FourGrid';
import BentoMobileParent from './bento/BentoMobile';
import { useIsMobile } from '@/hooks/useIsMobile';

export default function Testimonials() {
    const scrollRef = useRef(null);
    const contentRef = useRef(null);
    const isMobile = useIsMobile();

    useEffect(() => {
        if (isMobile) return; // Skip animation on mobile

        const scrollContainer = scrollRef.current;
        const content = contentRef.current;
        if (!scrollContainer || !content) return;

        const scrollWidth = content.offsetWidth / 2;
        let scrollPosition = 0;
        let isResetting = false;

        const animate = () => {
            if (!isResetting) {
                scrollPosition += 0.5; // Adjust this value to control scroll speed
                if (scrollPosition >= scrollWidth) {
                    isResetting = true;
                    scrollPosition = 0;
                }
                scrollContainer.scrollLeft = scrollPosition;
            } else {
                scrollContainer.scrollLeft = 0;
                isResetting = false;
            }
            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationId);
    }, [isMobile]);

    const gridContent = (
        <>
            <TwoGrid />
            <FourGrid />
            <TwoGrid />
        </>
    );

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8">
            <h2 className="text-3xl font-bold mb-2 text-white">Testimonials</h2>
            <h1 className="text-5xl font-bold mb-12 text-white">What Our Partners Are Saying</h1>
            <div className="text-6xl text-white mb-8">❞</div>

            {isMobile ? (
                <section className="w-full max-w-6xl overflow-hidden rounded-lg">
                    <BentoMobileParent />
                </section>
            ) : (
                <section className="w-full max-w-6xl overflow-hidden rounded-lg">
                    <div ref={scrollRef} className="overflow-hidden rounded-lg">
                        <div
                            ref={contentRef}
                            className="flex gap-4 w-[200%] rounded-lg"
                            style={{ willChange: 'transform' }}
                        >
                            <div className="flex w-1/2 gap-4 flex-none">
                                {gridContent}
                            </div>
                            <div className="flex w-1/2 gap-4 flex-none">
                                {gridContent}
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
