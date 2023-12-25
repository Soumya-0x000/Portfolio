import React from 'react'
import mySelf from '../../assets/4f48722a-7e4a-4b16-9c49-a5b86b99050d.png'
import bulb from '../../assets/bulb.svg'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import HireMe from '../hireMe/HireMe'
import SocialMEdiaIcon from '../SocialMEdiaIcon/SocialMEdiaIcon'
import Tilt from 'react-parallax-tilt';


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
    const text = 'Myself Soumya who loves to Code And Design.'

    const ArrayOfColor = ['violet', 'pink', 'green', 'magenta', 'blue', 'yellow', 'amber', 'lime', 'emerald', 'teal', 'cyan', 'sky', 'purple', 'fuchsia', 'rose']
    let currentColor = []



    return (
        <div className='bg- text- relative'>
            {/* Main */}
            <div className='flex flex-col lg:flex-row items-center justify-center px-3 md:p-6 2xl:px-[140px] 2xl:pr-[170px] gap-x-10 2xl:gap-x-[120px] sm:gap-y-[50px] md:max-h-[1200px] lg:h-screen'>
                {/* TiltImg Image */}
                <Tilt>
                    <div className={`max-w-[350px] xl:max-w-[900px] min-w-[200px] sm:min-w-[400px] 2xl:min-w-[532px] lg:min-w-[450px] xl:min-w-[500px] 3xl:min-w-[600px] 3xl:min-h-[600px] rounded-full overflow-hidden bg-gradient-to-br from-violet-400 via-blue-300 to-sky-300 p-3 `}>
                        <img src={mySelf} className='w-full h-full rounded-full' />
                    </div>
                </Tilt>

                {/* Description */}
                <div className='space-y-6 xl:space-y-5 flex flex-col items-center lg:items-start justify-center sm:px-[60px] md:px-0 '>
                    <motion.div 
                    className='pb-1 text-[28px] sm:text-5xl xl:text-6xl mt-6 md:mt-0 font-bold flex items-center justify-center lg:justify-start flex-wrap'
                    variants={animateHeading}
                    initial='initial'
                    animate='animate'>
                        {text.split(' ').map((item, index) => (
                            <motion.span
                            variants={eachWord} 
                            className='inline-block md:tracking-wide mr-2 md:mt-2 md:mr-4'
                            key={index}>
                                {item}
                            </motion.span>
                        ))}
                    </motion.div>
                    
                    <div className='text-[11.5px] sm:text-[15px] lg:text-lg text-justify lg:text-start w-full'>
                        As a skilled frontend developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.
                    </div>
                
                    <div className='flex items-center gap-x-6 md:pb-16 lg:pb-0'>
                        <a href="../../assets/Soumya_Resume.pdf"
                        download={true}>
                            <button 
                            className='bg-black text-white px-3 md:px-6 py-2 rounded-lg text-md md:text-lg ring-2 ring-white flex items-center justify-center flex-shrink-0'>
                                Resume 
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ml-3' />
                            </button>
                        </a>

                        <a href="mailto:soumyadas429@gmail.com">
                            <span className='border-b-2 border-b-black text-xl cursor-pointer'>Contact</span>
                        </a>
                    </div>
                </div>
            </div>
            
            {/* Hire me */}
            <div className='hidden lg:block'>
                <HireMe/>            
            </div>
            
            {/* Bulb */}
            <div className='hidden lg:block w-20 xl:w-24 absolute right-6 bottom-4'>
                <img src={bulb} className='w-full'/>            
            </div>

            {/* Socialmedia Icons */}
            <span className='flex items-center justify-center py-5 2xl:py-0 2xl:fixed 2xl:right-3 2xl:top-1/2 2xl:-translate-y-1/2'>
                <SocialMEdiaIcon/>
            </span>
        </div>
    )
}

export default Home