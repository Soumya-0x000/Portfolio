import React, { useLayoutEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ModeSwitch from './Modes/ModeSwitch'
import AnimateText from '../../../helpingComponents/animate/AnimateText'
import { motion } from 'framer-motion'
import { IoHomeOutline } from "react-icons/io5"
import { GoProjectSymlink } from "react-icons/go"
import { MdOutlineArticle } from "react-icons/md"
import { FaRegAddressCard } from "react-icons/fa"
import { useTheme } from '../../../helpingComponents/hook/ThemeContext'

const navigationLink = [
    {link: '/', icon: <IoHomeOutline/>, title: 'Home'},
    {link: '/about', icon: <FaRegAddressCard/>, title: 'About'},
    {link: '/projects', icon: <GoProjectSymlink/>, title: 'Projects'},
    {link: '/education', icon: <MdOutlineArticle/>, title: 'Education'},
]

const Navbar = () => {
    const navigate = useNavigate()
    const [collapseNav, setCollapseNav] = useState(false)
    const [showNavOption, setShowNavOption] = useState(false)
    const [btnText, setBtnTxt] = useState(window.innerWidth <= 1024 ? 'PORTFOLIO' : 'SSD PORTFOLIO')
    const [navActive, setNavActive] = useState(Array(navigationLink.length).fill(false))
    const location = useLocation()
    const {mode} = useTheme()

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

    useLayoutEffect(() => {
        const handleResize = () => {
            const widthScr = window.innerWidth

            if(widthScr <= 1024) {
                setCollapseNav(true)
                setBtnTxt('PORTFOLIO')
            } else {
                setBtnTxt('SSD PORTFOLIO')
                setCollapseNav(false)
                setShowNavOption(false)
            }
        }

        handleResize()

        window.addEventListener('resize', handleResize)
        
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div 
        className={`flex items-center justify-between w-full px-1 2xl:px-32 py-3 relative  ${
            mode === 'dark' ? 'bg-darkBlue text-light border-b border-b-blue-400' : 'border-b-lighter'
        } z-10`}>
            <motion.div 
            className=' w-full flex items-center justify-between px-3'
            initial={{ y: -100 }}
            animate={{ y: 0, transition: { staggerChildren: 0.2, duration: 1 } }}
            >
                {collapseNav ? (
                    <div className={`flex items-center justify-center flex-col gap-y-1 rounded-full ${mode === 'dark' ? 'bg-blue-800' : 'bg-blue-900'} w-10 h-[38px] transition-all cursor-pointer`}
                    onClick={() => setShowNavOption(!showNavOption)}>
                        <div className={`w-6 transition-all ${showNavOption ? 'rotate-45 translate-y-[3px]' : 'rotate-0'} h-[2px] bg-blue-300`}></div>
                        <div className={`w-6 h-[2px] ${!showNavOption ? 'block' : 'hidden'} bg-blue-300 `}></div>
                        <div className={`w-6 h-[2px] bg-blue-300 ${showNavOption ? '-rotate-45 -translate-y-[3px]' : 'rotate-0'}  transition-all`}></div>
                    </div> 
                ) : (
                    <div 
                    className='flex gap-x-10 text-[17px]'
                    initial={{y: -100}}
                    animate={{y: 0, transition: {staggerChildren: 2, duration: 2}}}>
                        {navigationLink.map((item, index) => (
                            <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }} 
                            className='flex flex-col' 
                            key={index}>
                                <span 
                                className='cursor-pointer relative ' 
                                onClick={() => navigate(item.link)}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={() => handleMouseLeave(index)}>
                                    {item.title}
                                    <span className={`${mode === 'dark' ? 'bg-white' : 'bg-black '} absolute h-[1px] -bottom-0.5 left-0 ${location.pathname === item.link || navActive[index] ? 'w-full' : 'w-0'} transition-[width] ease-linear duration-300 `}>&nbsp;</span>
                                </span>
                            </motion.div>
                        ))}
                    </div>
                )}

                <ModeSwitch/>
                
                <div className='hidden sm:block' onClick={() => navigate(`/`)}>
                    <AnimateText mainText={btnText}/>
                </div>
            </motion.div>

            {/* Mobile nav option */}
            {showNavOption && (
                <motion.div 
                className={`fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 backdrop-blur-[10px] ${mode === 'dark' ? 'bg-[#1affa083]' : 'bg-[#0757b890]'} rounded-lg py-10 px-16 space-y-7 gap-[50px]`}
                initial={{ opacity: 0, scale: 0, x: '-50%', y: '-50%' }}
                animate={{ opacity: 1, scale: 1 }}>
                    {navigationLink.map((item, index) => (
                        <div 
                        className={`
                            px-4 py-2 rounded-full cursor-pointer flex items-center gap-3 text-[17px]
                            shadow-[-5px_-3px_4px_rgba(255,_255,_255,_0.4),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
                            hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
                            transition-all text-slate-800 ${mode === 'dark' ? 'bg-[#bcff6444] hover:text-violet-600' : 'bg-[#8ed2ff64] hover:text-pink-600'}
                        `}
                        onClick={() => {
                            navigate(item.link)
                            setShowNavOption(false)
                        }}
                        key={index}>
                            {item.icon}
                            <span 
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}>
                                {item.title}
                            </span>
                        </div>
                    ))}
                </motion.div>
            )}
        </div>
    )
}

export default Navbar