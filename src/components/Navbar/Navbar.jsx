import { faPinterest, faTwitter, faLinkedin, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Logo from '../logo/Logo'

const navigationLink = [
    {link: '/', title: 'Home'},
    {link: '/about', title: 'About'},
    {link: '/projects', title: 'Projects'},
    {link: '/articles', title: 'Articles'},
]

const iconLinks = [
    {name: faLinkedin, color: '#0e8cec' },
    {name: faPinterest, color: "#ed072a" },
    {name: faGithub, color: '' },
    {name: faTwitter, color: '#2d9ce1' },
    {name: faDribbble, color: '#e70d6c' },
]

const Navbar = () => {
    const navigate = useNavigate()
    const [navActive, setNavActive] = useState(Array(navigationLink.length).fill(false))
    const location = useLocation()

    const handleMouseEnter = (index) => {
        const updatedNavActive = [...navActive]
        updatedNavActive[index] = true
        setNavActive(updatedNavActive)
    }

    const handleMouseLeave = (index) => {
        const updatedNavActive = [...navActive]
        updatedNavActive[index] = false
        setNavActive(updatedNavActive)
    }

    return (
        <div className='flex items-center justify-between w-full px-32 py-2'>
            <div className='flex gap-x-10 text-[17px]'>
                {navigationLink.map((item, index) => (
                    <div 
                    className='flex flex-col' 
                    key={index}>
                        <span 
                        className='cursor-pointer relative navLink' 
                        onClick={() => navigate(item.link)}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}>
                            {item.title}

                            <span className={`bg-black absolute h-[1px] -bottom-0.5 left-0 ${location.pathname === item.link || navActive[index] ? 'w-full' : 'w-0'} transition-[width] ease-linear duration-300 `}>&nbsp;</span>
                        </span>
                    </div>
                ))}
            </div>

            <Logo/>

            <div className='flex gap-x-5'>
                {iconLinks.map((item, index) => (
                    <motion.div whileHover={{y: -3}} className='w-6 ' key={index} >
                        <FontAwesomeIcon 
                            icon={item.name} 
                            style={{color: item.color}} 
                            className='w-full h-full cursor-pointer'
                            key={index} 
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Navbar