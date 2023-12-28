import React from 'react'
import { useTheme } from '../../helpingComponents/hook/ThemeContext'
import { TextReveal } from '../../helpingComponents/textReveal/TextReveal'
import FirstPart from './pages/FirstPart'
import Skills from './pages/Skills'
import StarsCanvas from '../../helpingComponents/animate/StarCanvas'

const About = () => {
    const {mode} = useTheme()
    
    return (
        <>
        {/* <StarsCanvas/> */}
        <div className={`${mode === 'dark' ? 'bg-darkSlate text-lighter' : ''} px-5 md:px-10 min-h-screen`}>
            {/* heading */}
            <div className={`text-center text-[27px] sm:text-6xl md:text-[80px] font-extrabold 2xl:text-8xl pt-8 xl:pt-14 lg:pt-16 lg:px-20 tracking-wide ${mode === 'dark' ? 'text-indigo-400' : 'text-indigo-500'} z-20`}>
                <TextReveal child={'Passion Fuels Purpose!'}/>
            </div>
            
            <div className='md:px-2 xl:px-6 2xl:px-32 '>

                <FirstPart/>
                <Skills/>
            </div>
        </div>
        </>
    )
}

export default About