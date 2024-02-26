import React, { useLayoutEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ModeSwitch from './Modes/ModeSwitch'
import ScanEncryptAnimationTextBtn from '../../../helpingComponents/animate//ScanEncryptAnimationTextBtn'
import { motion } from 'framer-motion'
import { IoHomeOutline } from "react-icons/io5"
import { GoProjectSymlink } from "react-icons/go"
import { MdOutlineArticle } from "react-icons/md"
import { FaRegAddressCard } from "react-icons/fa"
import { VscFeedback } from "react-icons/vsc";
import { useTheme } from '../../../helpingComponents/hook/ThemeContext'
import MobileMenu from './MobileMenu'
import { useBgContext } from '../../../helpingComponents/hook/BgBlurContext'

const navigationLink = [
    {link: '/home', icon: <IoHomeOutline/>, title: 'Home', onHoverLight: 'hover:text-yellow-600', onHoverDark: 'hover:text-yellow-200', undrlnBGLight: 'bg-yellow-700', undrlnBGDark: 'bg-yellow-200'},
    {link: '/about', icon: <FaRegAddressCard/>, title: 'About', onHoverLight: 'hover:text-cyan-600', onHoverDark: 'hover:text-cyan-300', undrlnBGLight: 'bg-cyan-700', undrlnBGDark: 'bg-cyan-300'},
    {link: '/projects', icon: <GoProjectSymlink/>, title: 'Projects', onHoverLight: 'hover:text-rose-600', onHoverDark: 'hover:text-rose-300', undrlnBGLight: 'bg-rose-700', undrlnBGDark: 'bg-rose-300'},
    {link: '/education', icon: <MdOutlineArticle/>, title: 'Education', onHoverLight: 'hover:text-green-600', onHoverDark: 'hover:text-green-300', undrlnBGLight: 'bg-green-700', undrlnBGDark: 'bg-green-300'},
    {link: '/feedback', icon: <VscFeedback />, title: 'Feedback', onHoverLight: 'hover:text-lime-600', onHoverDark: 'hover:text-lime-300', undrlnBGLight: 'bg-lime-700', undrlnBGDark: 'bg-lime-300'},
]
const mobileMenuLinks = navigationLink.map(({link, icon, title}) => ({link, icon, title}))

const Navbar = () => {
    const navigate = useNavigate()
    const {mode} = useTheme()
    const {open, setOpen} = useBgContext()
    const [collapseNav, setCollapseNav] = useState(false)
    const [btnText, setBtnTxt] = useState(window.innerWidth <= 1024 ? 'PORTFOLIO' : 'SSD PORTFOLIO')
    const [navActive, setNavActive] = useState(Array(navigationLink.length).fill(false))
    const [isUnderlineActive, setIsUnderlineActive] = useState(Array(navigationLink.length).fill(false))
    const location = useLocation()

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
                setBtnTxt('PORTFOLIO')
                setCollapseNav(true)
            } else {
                setBtnTxt('SSD PORTFOLIO')
                setCollapseNav(false)
                setOpen(false)
            };
        };
        handleResize()

        window.addEventListener('resize', handleResize)
        
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const handleNavigateTo = () => {
        setTimeout(() => {
            navigate('/')
        }, 400);
    }
    
    return (
        <div 
        className={`flex items-center justify-between w-full px-1 2xl:px-28 py-2 ${
            mode === 'dark' ? 'bg-darkBlue text-light border-b border-b-blue-400' : 'border-b-lighter bg-violet-100'
        } z-40 fixed`}>
            <motion.div 
            className=' w-full flex items-center justify-between px-1 md:px-3'
            initial={{ y: -100 }}
            animate={{ y: 0, transition: { staggerChildren: 0.2, duration: 1 } }}>
                {collapseNav ? (
                    <MobileMenu mobileMenuLinks={mobileMenuLinks} />
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
                
                <button className='hidden sm:block' onClick={() => !open && handleNavigateTo()}>
                    <ScanEncryptAnimationTextBtn mainText={btnText}/>
                </button>
            </motion.div>
        </div>
    )
}

export default Navbar