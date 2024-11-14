import { useState, useEffect } from 'react';
import { Button } from '../ui/button';

export default function Agents() {
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

  return (
    <section className="bg-lochmara-500 mt-20 text-white py-8 sm:py-10 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
        <div className="text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-2 sm:mb-3">
            Let&apos;s help you achieve operational excellence
          </h2>
          <p className="text-sm sm:text-base">Get our expert service now!</p>
        </div>
        <div className="w-full sm:w-auto">
          <button
            variant="outline"
            className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base font-medium rounded-3xl border border-white bg-transparent hover:bg-lochmara-400"
            aria-label="Talk to an expert"
          >
            Talk to an Expert
          </button>
        </div>
      </div>
    </section>
  );
}