import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useLayoutEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import ModeSwitch from '../Modes/ModeSwitch'
import AnimateText from '../animateText/AnimateText'

const navigationLink = [
    {link: '/', title: 'Home'},
    {link: '/about', title: 'About'},
    {link: '/projects', title: 'Projects'},
    {link: '/articles', title: 'Articles'},
]

const Navbar = () => {
    const navigate = useNavigate()
    const [collapseNav, setCollapseNav] = useState(false)
    const [showNavOption, setShowNavOption] = useState(false)
    const [scrWidth, SetScrWidth] = useState(null)
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

    useLayoutEffect(() => {
        const handleResize = () => {
            const widthScr = window.innerWidth
            SetScrWidth(widthScr)

            if(widthScr <= 1024) {
                setCollapseNav(true)
            } else {
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
        <div className='flex items-center justify-between w-full px-1 2xl:px-32 py-2 relative mb-[30px] lg:mb-0'>
            <div className=' w-full flex items-center justify-between px-3'>
                {collapseNav ? (
                    <FontAwesomeIcon 
                        icon={faBars}
                        className='text-[23px] sm:text-[25px]'
                        onClick={() => setShowNavOption(!showNavOption)}
                    /> 
                ) : (
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
                )}

                <ModeSwitch/>
                
                <div className='hidden sm:block' onClick={() => navigate(`/`)}>
                    <AnimateText mainText={'Portfolio'}/>
                </div>
            </div>

            <div>
                {showNavOption && (
                    <div>

                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar