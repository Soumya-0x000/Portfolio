import React from 'react'
import { useTheme } from '../../helpingComponents/hook/ThemeContext'
import { TextReveal } from '../../helpingComponents/textReveal/TextReveal'
import FirstPart from './pages/FirstPart'
import './textReveal.css'

const About = () => {
    const {mode} = useTheme()
    
    return (
        <div className={`${mode === 'dark' ? 'bg-darkSlate text-lighter' : ''} px-10 min-h-screen`}>
            {/* heading */}
            <div className={`text-center text-[27px] sm:text-6xl md:text-[80px] font-extrabold 2xl:text-8xl pt-8 xl:pt-14 lg:pt-16 mx-10 lg:px-20 tracking-wide bg-gradient-to-r ${mode === 'dark' ? 'from-red-300 via-indigo-400 to-green-300' : 'from-red-400 via-indigo-500 to-green-400'} bg-clip-text text-transparent`}>
                <TextReveal child={'Passion Fuels Purpose!'}/>
            </div>
            
            <FirstPart/>
        </div>
    )
}

export default About