import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useTheme } from '../../../helpingComponents/hook/ThemeContext'

const Footer = () => {
    const {mode} = useTheme()

    return (
        <div className={`px-[1rem] lg:px-16 py-6 border-t  space-y-3 flex items-center justify-center ${mode === 'dark' ? 'bg-darkBlue text-light border-t-blue-300' : 'border-t-black'}`}>
            <div className='max-w-[1500px]'>
                <div className={`text-justify w-full md:leading-[22px] text-[11px] sm:text-[14px] lg:text-[16px] `}>
                    Passionate frontend developer skilled in HTML5, CSS, and JavaScript, with expertise in React JS for building scalable and interactive user interfaces. Proficient in Tailwind CSS, SASS for efficient styling and Redux Toolkit for state management in large-scale applications. Experienced in integrating Firebase for versatile backend functionalities. Adept at collaborative development using Git and GitHub. Dedicated to crafting visually appealing and responsive web experiences.
                </div>

                <div className='pt-6 flex flex-col gap-y-2 md:flex-row items-center justify-between'>
                    <div className=''>
                        2023 © All Rights Reserved.
                    </div>
                    <div className='flex items-center gap-2'>
                        Built with 
                        <FontAwesomeIcon icon={faHeart} style={{color: "#f54d77",}} />
                        by <span className={`border-b ${mode === 'dark' ? 'border-b-light' : 'border-b-black'}`}>Soumya</span>
                    </div>
                    <div className={`border-b ${mode === 'dark' ? 'border-b-light' : 'border-b-black'}`}>
                        Say Hello
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer