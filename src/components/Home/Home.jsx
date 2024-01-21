import React from 'react'
import mySelf from '../../assets/4f48722a-7e4a-4b16-9c49-a5b86b99050d.jpg'
import bulb from '../../assets/bulb.svg'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import HireMe from './hireMe/HireMe'
import Tilt from 'react-parallax-tilt';
import { useTheme } from '../../helpingComponents/hook/ThemeContext'
import './borderAnimation.css'
import { CardSpotlight } from '../../helpingComponents/CardSpotlight/CardSpotlight'
import StarsCanvas from '../../helpingComponents/animate/StarCanvas'
import { useBgContext } from '../../helpingComponents/hook/BgBlurContext'

const animateHeading = {
    initial: {
        opacity: 1
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08
        }
    }
}

const eachWord = {
    initial: {
        opacity: 0,
        y: 25,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
}

const Home = () => {
    const {mode} = useTheme()
    const {open} = useBgContext()
    const text = 'Myself Soumya, who loves to Code and Design.'

    return (
        <>
            <div className={`${mode === 'dark' ? 'text-lighter' : ''} ${open && 'blur-[7px]'} relative pt-[100px] sm:pt-[60px]`}>
                <StarsCanvas/>
                {/* Main */}
                <div className='flex flex-col lg:flex-row items-center justify-center px-3 md:p-6 2xl:px-[140px] 2xl:pr-[170px] gap-x-10 2xl:gap-x-[120px] sm:gap-y-[50px] min-h-screen'>
                    {/* TiltImg Image */}
                    <motion.div 
                    initial={{y: -400, opacity: 0}}
                    animate={{y: 0, opacity: 1, transition:{duration: .5}}}>
                        <Tilt className=''>
                            <div className={`max-w-[350px] xl:max-w-[900px] min-w-[200px] sm:min-w-[400px] 2xl:min-w-[532px] lg:min-w-[450px] xl:min-w-[500px] 3xl:min-w-[600px] 3xl:min-h-[600px] rounded-full overflow-hidden box`}>
                                <img src={mySelf} className={`w-full h-full rounded-full ${mode === 'dark' ? 'border border-darkBlue' : ''}`} />
                            </div>
                        </Tilt>
                    </motion.div>

                    {/* Description, resume */}
                    <div className='space-y-6 xl:space-y-5 flex flex-col items-center lg:items-start justify-center sm:px-[60px] md:px-0'>
                        <motion.div 
                        className='pb-1 text-[28px] sm:text-5xl xl:text-6xl mt-6 md:mt-0 font-bold flex items-center justify-center lg:justify-start flex-wrap 2xl:pr-20'
                        variants={animateHeading}
                        initial='initial'
                        animate='animate'>
                            {text.split(' ').map((item, index) => (
                                <motion.span
                                variants={eachWord} 
                                className={`inline-block md:tracking-wide ${mode === 'dark' ? 'text-green-300' : 'text-blue-950'} mr-2 md:mt-5 md:mr-4`}
                                key={index}>
                                    {item}
                                </motion.span>
                            ))}
                        </motion.div>
                        
                        <motion.div 
                        className='text-[11.5px] sm:text-[15px] lg:text-lg text-justify lg:text-start w-full'
                        initial={{y: 400}}
                        animate={{y: 0, transition:{duration: .5}}}
                        >
                            As a skilled frontend developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.
                        </motion.div>
                                
                        {/* Resume, contact */}
                        <motion.div 
                        className='flex items-center gap-x-6'
                        initial={{y: 400}}
                        animate={{y: 0, transition:{duration: 1}}}>
                            <a href="../../assets/Soumya_Resume.pdf"
                            download={true}>
                                <CardSpotlight 
                                    children={'Resume'} 
                                    icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />} 
                                />
                            </a>

                            <a href="mailto:soumyadas429@gmail.com">
                                <span className={`border-b-2 pb-1 ${mode === 'dark' ? 'border-b-white' : 'border-b-black'} text-xl cursor-pointer`}>Contact</span>
                            </a>
                        </motion.div>
                    </div>
                </div>
                
                {/* Hire me */}
                <div className='hidden lg:block'>
                    <HireMe/>            
                </div>
                
                {/* Bulb */}
                <motion.div 
                className='hidden lg:block w-20 xl:w-24 absolute right-6 bottom-20'
                initial={{y: -1000}}
                animate={{y: 0, transition: {duration: .7}}}>
                    <img src={bulb} className='w-full'/>
                </motion.div>            
            </div>

            {open && (
                <div className=' fixed top-0 left-0 w-full h-full'/>
            )}
        </>
    )
}

export default Home