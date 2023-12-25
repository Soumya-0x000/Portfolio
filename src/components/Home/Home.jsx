import React from 'react'
import mySelf from '../../assets/4f48722a-7e4a-4b16-9c49-a5b86b99050d.png'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import HireMe from '../hireMe/HireMe'

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
    const text = 'Turning Vision Into Reality With Code And Design.'
    return (
        <div className='flex flex-col md:flex-row items-center justify-center px-3 md:p-6 md:px-[140px] gap-x-[156px] h-screen'>
            <div className='max-w-[300px] xl:max-w-[900px] min-w-[200px] rounded-full overflow-hidden'>
                <img src={mySelf} className='w-full h-full' />
            </div>

            <div className='space-y-5 max-w-[300px] md:max-w-[750px] flex flex-col items-center justify-center'>
                <motion.div 
                className='text-[27px] lg:4xl xl:text-6xl overflow-hidden max-w-[] mt-6 md:mt-0 font-bold leading-[1.2] flex items-center justify-center flex-wrap'
                variants={animateHeading}
                initial='initial'
                animate='animate'>
                    {text.split(' ').map((item, index) => (
                        <motion.span
                        variants={eachWord} 
                        className='inline-block md:tracking-wide mr-2 md:mr-4'
                        key={index}>
                            {item}
                        </motion.span>
                    ))}
                </motion.div>
                
                <div className='text-[11.5px] lg:text-lg text-justify'>
                    As a skilled frontend developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.
                </div>
            
                <div className='flex items-center gap-x-6'>
                    <a href="../../assets/Soumya_Resume.pdf"
                    download={true}>
                        <button 
                        className='bg-black text-white px-3 md:px-6 py-1 md:py-2 rounded-lg text-sm md:text-lg ring-2 ring-white'>
                            Resume 
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ml-3' />
                        </button>
                    </a>

                    <a href="mailto:soumyadas429@gmail.com">
                        <span className='border-b-2 border-b-black text-xl cursor-pointer'>Contact</span>
                    </a>
                </div>
            </div>

            <div className=''>
                <HireMe/>            
            </div>
        </div>
    )
}

export default Home