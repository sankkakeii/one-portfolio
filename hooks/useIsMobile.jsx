import { useState, useEffect } from 'react';

export function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile;
}
