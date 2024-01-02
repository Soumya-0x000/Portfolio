import React from 'react'
import { useTheme } from '../../helpingComponents/hook/ThemeContext'
import { TextReveal } from '../../helpingComponents/textReveal/TextReveal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'

const Education = () => {
    const {mode} = useTheme()

    return (
        <div className={`${mode === 'dark' ? 'text-lighter' : ''} pt-[80px] sm:pt-[100px]`}>
            <div className={`text-[25px] sm:text-5xl md:text-[55px] lg:text-[73px] 2xl:text-8xl font-extrabold pt-8 xl:pt-14 lg:pt-16 lg:px-20 tracking-wide ${mode === 'dark' ? 'text-indigo-400' : 'text-indigo-500'} z-20 flex items-center justify-center gap-x-5`}>
                <TextReveal child={`My Education `}/>
            </div>

            <div>

            </div>
        </div>
    )
}

export default Education