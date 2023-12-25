import React, { useState, useEffect } from 'react';
import circularText from '../../assets/circularTextWithoutBG.svg';

const HireMe = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const positionStyles = isMobile
        ? { top: 0, right: 0 }
        : { bottom: '1rem', left: '1rem' };

    return (
        <span className='fixed items-center justify-center overflow-hidden' style={positionStyles}>
            <span className='w-24 md:w-48 h-auto flex items-center justify-center relative'>
                <img src={circularText} className='w-full h-full animate-spin-slow fill-black' />
                <a href="mailto:soumyadas429@gmail.com" className='absolute flex items-center justify-center rounded-full left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 bg-black text-white text-[10.5px] md:text-lg h-[3rem] md:h-[5.5rem] w-[3rem] md:w-[5.5rem] font-semibold border border-black hover:text-black hover:bg-white transition-all'>Hire Me</a>
            </span>
        </span>
    );
};

export default HireMe;
