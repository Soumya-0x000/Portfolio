import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useTheme } from '../../helpingComponents/hook/ThemeContext'
import { TextReveal } from '../../helpingComponents/textReveal/TextReveal'
import { MdAttachEmail, MdPersonOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { useBgContext } from '../../helpingComponents/hook/BgBlurContext'
import StarsCanvas from '../../helpingComponents/animate/StarCanvas';
import Form from './Form';
import { motion } from 'framer-motion';
import PageLoadingAnimation from '../../helpingComponents/animate/PageLoadingAnimation/PageLoadingAnimation';

const childVariants = {
    initial: {y: 300, },
    animate: {y: 0, transition: {duration: .4} }
}

const Feedback = () => {
    const {mode} = useTheme()
    const {open} = useBgContext()
    const [windowDependency, setWindowDependency] = useState(window.innerWidth <= 640)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1600);

        return () => clearTimeout(timer)
    }, [])

    const paragraph_1 = `If you like my work, leave a message for me.`
    const paragraph_2 = `If you like my work, leave a message for me. So that I can know the impact of my efforts and understand how it has resonated with you. Your feedback is invaluable. Whether it's a suggestion, a word of appreciation, or constructive criticism, your messages provide the fuel that propels me forward.`

    useLayoutEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth
            width <= 640 ? setWindowDependency(true) : setWindowDependency(false)
        }
        handleResize()

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <>
            {loading ? (
                <PageLoadingAnimation/>
            ) : (
                <div className={`${mode === 'dark' ? 'text-lighter' : ''} ${open && 'blur-[7px] cursor-not-allowed'} pt-[80px] sm:pt-[100px] px-1 sm:px-5 lg:px-8 2xl:px-28 min-h-screen `}>
                    <StarsCanvas/>

                    <motion.div className={`text-[25px] sm:text-5xl md:text-[55px] lg:text-[66px] 2xl:text-[80px] font-extrabold sm:pt-6 md:pt-8 xl:pt-14 lg:pt-16 lg:px-14 tracking-wide ${mode === 'dark' ? 'text-indigo-400' : 'text-indigo-500'} z-20 flex items-center justify-center gap-x-5`}>
                        <TextReveal child={`Let me know your thoughts!`}/>
                    </motion.div>

                    <motion.div
                    variants={childVariants}
                    initial = 'initial'
                    animate = 'animate'
                    className='mt-4 sm:mt-7 md:mt-14 xl:mt-24 2xl:mt-36 px-1 flex flex-col lg:flex-row gap-x-5 xl:gap-x-16 gap-y-9 items-start justify-between'>
                        <div className='w-full space-y-2 sm:space-y-4 md:space-y-5 lg:max-w-[30%]'>
                            <span className={`text-[24px] font-bold bg-gradient-to-br ${mode === 'dark' ? 'from-rose-300 via-indigo-300 to-green-300' : 'from-rose-400 via-indigo-500 to-green-500'} bg-clip-text text-transparent z-40`}>Don't be shy!</span>
                            
                            <p className='opacity-60 sm:text-[13px] text-justify'>
                                {windowDependency ? paragraph_1 : paragraph_2}
                            </p>

                            <div className='flex md:items-center lg:items-start justify-between flex-col md:flex-row lg:flex-col gap-y-2 lg:gap-y-4 xl:gap-y-6 pt-5 sm:pt-0 '>
                                <div className='flex items-center gap-x-4'>
                                    <span className={`sm:text-xl ${mode === 'dark' ? 'bg-indigo-800' : 'bg-indigo-200 text-indigo-800'} p-[10px] rounded-full`}><MdPersonOutline/></span>
                                    <p className='text-sm sm:text-md'>Soumya Sankar Das</p>
                                </div>

                                <a href="mailto:soumyadas429@gmail.com" target='_blank' rel='noopener noreferrer'>
                                    <div className='flex items-center gap-x-4'>
                                        <span className={`sm:text-xl ${mode === 'dark' ? 'bg-indigo-800' : 'bg-indigo-200 text-indigo-800'} p-[10px] rounded-full`}><MdAttachEmail/></span>
                                        <p className='text-sm sm:text-md'>soumyadas429@gmail.com</p>
                                    </div>
                                </a>

                                <a href="https://alvo.chat/3xaL" target='_blank' rel='noopener noreferrer'>
                                    <span className='flex items-center gap-x-4'>
                                        <span className={`sm:text-xl ${mode === 'dark' ? 'bg-indigo-800' : 'bg-indigo-200 text-indigo-800'} p-[10px] rounded-full`}><FaWhatsapp/></span>
                                        <p className='text-sm sm:text-md'>Chat with me</p>
                                    </span>
                                </a>
                            </div>
                        </div>

                        <Form/>
                    </motion.div>
                </div>
            )}

            {open && (
                <div className=' fixed top-0 left-0 w-full h-full'/>
            )}
        </>
    )
}

export default Feedback