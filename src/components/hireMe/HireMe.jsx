import React from 'react'
import circularText from '../../assets/circularTextWithoutBG.svg'
import { motion } from 'framer-motion'

const HireMe = () => {
    
    return (
        <span className='fixed items-center justify-center overflow-hidden top-0 md:bottom-4 right-0 md:left-4 '>
            <span className='w-24 md:w-48 h-auto flex items-center justify-center relative'>
                <img src={circularText} className='w-full h-full animate-spin-slow fill-black' />
                <a href="mailto:soumyadas429@gmail.com" className='absolute flex items-center justify-center rounded-full left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 bg-black text-white text-[10.5px] md:text-md h-[3rem] md:h-[5.5rem] w-[3rem] md:w-[5.5rem] font-semibold border border-black hover:text-black hover:bg-white transition-all'>Hire Me</a>
            </span>
        </span>
    )
}

export default HireMe