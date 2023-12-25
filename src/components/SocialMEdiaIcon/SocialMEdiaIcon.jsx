import React from 'react'
import { motion } from 'framer-motion'
import { faPinterest, faTwitter, faLinkedin, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const iconLinks = [
    {name: faLinkedin, color: '#0e8cec' },
    {name: faPinterest, color: "#ed072a" },
    {name: faGithub, color: '' },
    {name: faTwitter, color: '#2d9ce1' },
    {name: faDribbble, color: '#e70d6c' },
]

const SocialMEdiaIcon = () => {
    return (
        <span className='flex items-center justify-center gap-x-9 bg-[#9fffe4] 2xl:flex-col backdrop-blur-lg 2xl:px-2 2xl:py-7 2xl:gap-y-6 rounded-full w-fit px-10 py-2'>
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
    )
}

export default SocialMEdiaIcon