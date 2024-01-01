import React, { useRef } from 'react'
import { useTheme } from '../../helpingComponents/hook/ThemeContext'
import { TextReveal } from '../../helpingComponents/textReveal/TextReveal'
import FirstPart from './pages/FirstPart'
import Skills from './pages/Skills'
import { motion, useInView } from 'framer-motion'
import StarsCanvas from '../../helpingComponents/animate/StarCanvas'

const About = () => {
    const {mode} = useTheme()
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, {once: true})
    
    return (
        <div className={`${mode === 'dark' ? 'bg-darkSlat text-lighter' : ''} px-5 md:px-10 min-h-screen pt-[130px] sm:pt-[60px]`}>
            <StarsCanvas/>
            {/* heading */}
            <div className={` text-center text-[27px] sm:text-6xl md:text-[80px] font-extrabold 2xl:text-8xl pt-8 xl:pt-14 lg:pt-16 lg:px-20 tracking-wide ${mode === 'dark' ? 'text-indigo-400' : 'text-indigo-500'}`}
            ref={containerRef}>
                <TextReveal child={'Passion Fuels Purpose!'}/>
            </div>
            
            <div className='md:px-2 xl:px-6 2xl:px-32'>
                <FirstPart/>
                <Skills/>
            </div>
        </div>
    )
}

export default About
