import React, { useLayoutEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ModeSwitch from './Modes/ModeSwitch'
import AnimateText from '../../../helpingComponents/animate/AnimateText'
import { motion } from 'framer-motion'
import { IoHomeOutline } from "react-icons/io5"
import { GoProjectSymlink } from "react-icons/go"
import { MdOutlineArticle } from "react-icons/md"
import { FaRegAddressCard } from "react-icons/fa"
import { VscFeedback } from "react-icons/vsc";
import { useTheme } from '../../../helpingComponents/hook/ThemeContext'

const navigationLink = [
    {link: '/', icon: <IoHomeOutline/>, title: 'Home', onHoverLight: 'hover:text-yellow-600', onHoverDark: 'hover:text-yellow-200', undrlnBGLight: 'bg-yellow-700', undrlnBGDark: 'bg-yellow-200'},
    {link: '/about', icon: <FaRegAddressCard/>, title: 'About', onHoverLight: 'hover:text-cyan-600', onHoverDark: 'hover:text-cyan-300', undrlnBGLight: 'bg-cyan-700', undrlnBGDark: 'bg-cyan-300'},
    {link: '/projects', icon: <GoProjectSymlink/>, title: 'Projects', onHoverLight: 'hover:text-rose-600', onHoverDark: 'hover:text-rose-300', undrlnBGLight: 'bg-rose-700', undrlnBGDark: 'bg-rose-300'},
    {link: '/education', icon: <MdOutlineArticle/>, title: 'Education', onHoverLight: 'hover:text-green-600', onHoverDark: 'hover:text-green-300', undrlnBGLight: 'bg-green-700', undrlnBGDark: 'bg-green-300'},
    {link: '/feedback', icon: <VscFeedback />, title: 'Feedback', onHoverLight: 'hover:text-lime-600', onHoverDark: 'hover:text-lime-300', undrlnBGLight: 'bg-lime-700', undrlnBGDark: 'bg-lime-300'},
]

const Navbar = () => {
    const navigate = useNavigate()
    const [collapseNav, setCollapseNav] = useState(false)
    const [showNavOption, setShowNavOption] = useState(false)
    const [btnText, setBtnTxt] = useState(window.innerWidth <= 1024 ? 'PORTFOLIO' : 'SSD PORTFOLIO')
    const [navActive, setNavActive] = useState(Array(navigationLink.length).fill(false))
    const [isUnderlineActive, setIsUnderlineActive] = useState(Array(navigationLink.length).fill(false))
    const location = useLocation()
    const {mode} = useTheme()

    const handleMouseEnter = (index) => {
        const updatedNavActive = [...navActive]
        const updatedUnderlineColor = [...isUnderlineActive]
        updatedNavActive[index] = true
        updatedUnderlineColor[index] = true
        setNavActive(updatedNavActive)
        setIsUnderlineActive(updatedUnderlineColor)
    }

    const handleMouseLeave = (index) => {
        const updatedNavActive = [...navActive]
        const updatedUnderlineColor = [...isUnderlineActive]
        updatedNavActive[index] = false
        updatedUnderlineColor[index] = false
        setNavActive(updatedNavActive)
        setIsUnderlineActive(updatedUnderlineColor)
    }

    const underlineColor = (id) => {
        if (mode === 'dark') {
            if (isUnderlineActive[id]) {
                return navigationLink[id].undrlnBGDark
            } else {
                return 'bg-violet-300'
            }
        } else {
            if (isUnderlineActive[id]) {
                return navigationLink[id].undrlnBGLight
            } else {
                return 'bg-violet-800'
            }
        }
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
        className={`flex items-center justify-between w-full px-1 2xl:px-28 py-3 ${
            mode === 'dark' ? 'bg-darkBlue text-light border-b border-b-blue-400' : 'border-b-lighter bg-violet-100'
        } z-50 fixed`}>
            <motion.div 
            className=' w-full flex items-center justify-between px-3'
            initial={{ y: -100 }}
            animate={{ y: 0, transition: { staggerChildren: 0.2, duration: 1 } }}>
                {collapseNav ? (
                    <div className={`flex items-center justify-center flex-col gap-y-1 rounded-full ${mode === 'dark' ? 'bg-blue-800' : 'bg-blue-900'} w-10 h-[38px] transition-all cursor-pointer`}
                    onClick={() => setShowNavOption(!showNavOption)}>
                        <div className={`w-6 transition-all ${showNavOption ? 'rotate-45 translate-y-[3px]' : 'rotate-0'} h-[2px] bg-blue-300`}></div>
                        <div className={`w-6 h-[2px] ${!showNavOption ? 'block' : 'hidden'} bg-blue-300 `}></div>
                        <div className={`w-6 h-[2px] bg-blue-300 ${showNavOption ? '-rotate-45 -translate-y-[3px]' : 'rotate-0'}  transition-all`}></div>
                    </div> 
                ) : (
                    <div 
                    className='flex gap-x-6 2xl:gap-x-8'
                    initial={{y: -100}}
                    animate={{y: 0, transition: {staggerChildren: 2, duration: 2}}}>
                        {navigationLink.map((item, index) => (
                            <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }} 
                            className='flex flex-col'
                            key={index}>
                                <span 
                                className={`cursor-pointer relative`} 
                                onClick={() => navigate(item.link)}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={() => handleMouseLeave(index)}>
                                    <span className={`flex items-center justify-center gap-x-1 ${mode === 'dark' ? `text-violet-300 ${item.onHoverDark}` : `text-violet-800 ${item.onHoverLight}`}`}>
                                        <span className='text-[18px] hidden xl:block'>
                                            {item.icon}
                                        </span>
                                        <span className=''>
                                            {item.title}
                                        </span>
                                    </span>

                                    <span className={`${underlineColor(index)} absolute h-[1px] -bottom-0.5 left-0 ${location.pathname === item.link || navActive[index] ? 'w-full' : 'w-0'} transition-[width] ease-linear duration-300 `}>&nbsp;</span>
                                </span>
                            </motion.div>
                        ))}
                    </div>
                )}

                <ModeSwitch/>
                
                <button className='hidden sm:block' onClick={() => navigate(`/`)}>
                    <AnimateText mainText={btnText}/>
                </button>
            </motion.div>

            {/* Mobile nav option */}
            {showNavOption && (
                <motion.div 
                className={`w-fit fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 backdrop-blur-[10px] ${mode === 'dark' ? 'bg-[#1affa083]' : 'bg-[#0757b890]'} rounded-lg py-10 px-4 md:px-3 gap-y-6 gap-x-10 z-20 grid grid-cols-1 sm:grid-cols-2 `}
                initial={{ opacity: 0, scale: 0, x: '-50%', y: '-50%' }}
                animate={{ opacity: 1, scale: 1 }}>
                    {navigationLink.map((item, index) => (
                        <div 
                        className={`w-full
                            pr-5 pl-3 py-2 rounded-full cursor-pointer flex items-center gap-3 text-[17px]
                            shadow-[-5px_-3px_4px_rgba(255,_255,_255,_0.4),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
                            hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
                            transition-all text-slate-800 ${mode === 'dark' ? 'bg-[#bcff6444] hover:text-violet-600' : 'bg-[#8ed2ff64] hover:text-pink-600'}
                        `}
                        onClick={() => {
                            navigate(item.link)
                            setShowNavOption(false)
                        }}
                        key={index}>
                            <span className='flex items-center justify-center gap-x-2'
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}>
                                {item.icon}
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