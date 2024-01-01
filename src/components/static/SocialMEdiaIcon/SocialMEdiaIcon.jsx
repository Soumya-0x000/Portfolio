import React from 'react'
import { motion } from 'framer-motion'
import { faLinkedin, faGithub, faInstagram, faXTwitter, faMeta } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from '../../../helpingComponents/hook/ThemeContext'
import { useNavigate } from 'react-router-dom'

const SocialMEdiaIcon = () => {
    const {mode} = useTheme()
    const navigate = useNavigate()
    
    const iconLinks = [
        {name: faLinkedin, color: '#0e8cec', link: 'https://www.linkedin.com/in/soumya-sankar-das-874085221/' },
        {name: faInstagram, color: "#ed072a", link: 'https://www.instagram.com/' },
        {name: faGithub, color: mode === 'dark' ? '#FFF17F' : '', link: 'https://github.com/Soumya-0x000' },
        {name: faXTwitter, color: mode === 'dark' ? '#d5a7ff' : '#CF95FF', link: 'https://twitter.com/i/flow/signup' },
        {name: faMeta, color: mode === 'dark' ? '#59ABD6' : '#1A89C4', link: 'https://about.meta.com/meta/%C2%A0' },
    ]

    return (
        <span className='flex items-center justify-center py-5 2xl:py-0 fixed -bottom-2 right-1/2 2xl:right-8 translate-x-1/2 2xl:top-1/2 2xl:-translate-y-1/2 z-50'>
            <span className={`flex items-center justify-between gap-x-9 ring-2 ${mode === 'dark' ? 'bg-[#00000085]' : 'bg-[#48ffc846]'} ring-green-400 2xl:flex-col backdrop-blur-[5px] z-20 2xl:px-2 2xl:py-7 2xl:gap-y-9 rounded-full w-fit px-6 py-1 `}>
                {iconLinks.map((item, index) => (
                    <a href={item.link} target='_blank' key={index}>
                        <motion.span 
                        className='w-6 flex items-center justify-center'
                        whileHover={{y: -3}}>
                            <FontAwesomeIcon 
                                icon={item.name} 
                                style={{color: item.color}} 
                                className='w-full h-full cursor-pointer'
                                key={index} 
                            />
                        </motion.span>
                    </a>
                ))}
            </span>
        </span>
    )
}

export default SocialMEdiaIcon