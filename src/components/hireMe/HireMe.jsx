import React, { useState, useEffect } from 'react';
import circularTextDark from '../../assets/circularTextWithoutBGBlack.png';
import circularTextLight from '../../assets/circularTextWithoutBGWhite.png'
import { useTheme } from '../hook/ThemeContext'

const HireMe = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const {mode} = useTheme()

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const positionStyles = isMobile
        ? { top: -8, right: -8 }
        : { bottom: 0, left: 0 };

    return (
        <span className='fixed items-center justify-center overflow-hidden' style={positionStyles}>
            <span className='w-24 sm:w-32 lg:w-[186px] h-auto flex items-center justify-center relative'>
                <img src={mode === 'dark' ? circularTextLight : circularTextDark} className='w-full h-full animate-spin-slow fill-black' />
                <a 
                href="mailto:soumyadas429@gmail.com" 
                className={`absolute flex items-center justify-center rounded-full  left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  bg-black text-white  text-[10.5px] sm:text-[13px] lg:text-lg h-[3rem] sm:h-[4rem] lg:h-[5.5rem] w-[3rem] sm:w-[4rem] lg:w-[5.5rem] font-semibold border border-light hover:text-black hover:bg-white transition-all`}
                >
                    Hire Me
                </a>
            </span>
        </span>
    );
};

export default HireMe;
