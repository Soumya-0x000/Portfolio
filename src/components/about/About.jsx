import React, { useRef } from 'react'
import { useTheme } from '../../helpingComponents/hook/ThemeContext'
import { TextReveal } from '../../helpingComponents/textReveal/TextReveal'
import FirstPart from './pages/FirstPart'
import Skills from './pages/Skills'
import { useBgContext } from '../../helpingComponents/hook/BgBlurContext'
import StarsCanvas from '../../helpingComponents/animate/StarCanvas'

const About = () => {
    const {mode} = useTheme()
    const {open} = useBgContext()
    const containerRef = useRef(null)
    
    return (
        <>
            <div className={`${mode === 'dark' ? 'bg-darkSlat text-lighter' : ''} ${open && 'blur-[7px] cursor-not-allowed'} px-5 md:px-10 pt-[70px] sm:pt-[60px] min-h-screen`}>
                <StarsCanvas/>
                {/* heading */}
                <div className={` text-center text-[27px] sm:text-6xl md:text-[80px] font-extrabold 2xl:text-8xl pt-8 xl:pt-14 lg:pt-16 lg:px-20 tracking-wide ${mode === 'dark' ? 'text-indigo-400' : 'text-indigo-500'} `}
                ref={containerRef}>
                    <TextReveal child={'Passion Fuels Purpose!'}/>
                </div>
                
                <div className='md:px-2 xl:px-6 2xl:px-32'>
                    <FirstPart/>
                    <Skills/>
                </div>
            </div>

            {open && (
                <div className=' fixe top-0 left-0 w-full h-full'/>
            )}
        </>
    )
}

export default About
