import React from 'react'
import { motion } from 'framer-motion'
import { faLinkedin, faGithub, faInstagram, faXTwitter, faMeta } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from '../hook/ThemeContext'

const iconLinks = [
    {name: faLinkedin, color: '#0e8cec' },
    {name: faInstagram, color: "#ed072a" },
    {name: faGithub, color: '' },
    {name: faXTwitter, color: '#d5a7ff' },
    {name: faMeta, color: '#1A89C4' },
]

const SocialMEdiaIcon = () => {
    const {mode} = useTheme()

    return (
        <span className='flex items-center justify-center py-5 2xl:py-0 fixed -bottom-2 right-1/2 2xl:right-8 translate-x-1/2 2xl:top-1/2 2xl:-translate-y-1/2 z-50'>
            <span className={`flex items-center justify-between gap-x-9 ring-2 ${mode === 'dark' ? 'bg-[#1d7f3a88]' : 'bg-[#48ffc846]'} ring-green-400 2xl:flex-col backdrop-blur-[5px] z-20 2xl:px-2 2xl:py-7 2xl:gap-y-9 rounded-full w-fit px-6 py-1 `}>
                {iconLinks.map((item, index) => (
                    <motion.span whileHover={{y: -3}} className='w-6 flex items-center justify-center' key={index} >
                        <FontAwesomeIcon 
                            icon={item.name} 
                            style={{color: item.color}} 
                            className='w-full h-full cursor-pointer'
                            key={index} 
                        />
                    </motion.span>
                ))}
            </span>
        </span>
    )
}

export default SocialMEdiaIcon