import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import myself from '../../../assets/071ba5eb-4186-4b4f-9bd7-ad8352fbcecc.jpeg'
import CountUp from 'react-countup'
import { motion, useInView } from 'framer-motion'
import { useTheme } from '../../../helpingComponents/hook/ThemeContext'

const animateBiography = {
    initial: {
        opacity: 1,
        x: -1100
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: .3,
            staggerChildren: 0.08
        }
    }
}

const FirstPart = () => {
    const {mode} = useTheme()
    const refElement = useRef()
    const isInView = useInView(refElement)
    const [scrWidth, setScrWidth] = useState(window.innerWidth)

    const longBiography = [
        `Meet Soumya Sankar Das`,
        `Age: 23`,
        `Soumya Sankar Das is a passionate and innovative frontend developer and designer, bringing creativity and technical expertise to every project.`,
        `At the age of 23, Soumya has already made a mark in the field of web development with his comprehensive knowledge of HTML, CSS, and JavaScript. His proficiency extends to the popular React library, allowing him to craft dynamic and interactive user interfaces. Soumya is not just limited to the frontend; he is well-versed in version control using Git and GitHub.`,
        `One of Soumya's strengths lies in his mastery of modern frontend tools and frameworks. He has successfully integrated Firebase into his projects, leveraging its real-time database and authentication services. His expertise in crafting visually appealing and responsive designs is complemented by his skillful use of Tailwind CSS and SASS.`,
    ]
    const shortBiography = [
        `Meet Soumya Sankar Das`,
        `Age: 23`,
        `At the age of 23, Soumya has already made a mark in the field of web development with his comprehensive knowledge of HTML, CSS, and JavaScript. His proficiency extends to the popular React library, Firebase allowing him to craft dynamic and interactive user interfaces. He is well-versed in version control using Git and GitHub.`,
        `His expertise in crafting visually appealing and responsive designs is complemented by his skillful use of Tailwind CSS and SASS.`,
    ]
    const [biography, setBiography] = useState(
        window.innerWidth >= 1024 
            ? longBiography 
            : shortBiography
    )
    
    useLayoutEffect(() => {
        const handleBiography = () => {
            const widthScr = window.innerWidth
            setScrWidth(widthScr)
            if (widthScr >= 970) {
                setBiography(longBiography)
            } else {
                setBiography(shortBiography)
            }
        }

        window.addEventListener('resize', handleBiography)
        return (
            () => window.removeEventListener('resize', handleBiography)
        )
    }, [])

    return (
        <div className='flex flex-col xxl:flex-row items-start justify-between text-justify xxl:text-justify mt-10 xl:mt-20 gap-x-[80px] gap-y-10'>
            {/* biography & img */}
            <div className='w-full flex flex-col-reverse md:flex-row items-start justify-between gap-10 4xl:gap-x-24'>
                {/* Biography */}
                <motion.div
                className=' md:max-w-[380px] lg:max-w-[460px] xl:max-w-[600px] xxl:max-w-[580px] space-y-3 h-full xl:pr-10 pt-2'
                variants={animateBiography}
                initial= 'initial'
                animate= 'animate'>
                    {biography.map((item, index) => (
                        <div key={index} className='text-sm sm:text-md xl:text-lg'>
                            {item}
                        </div>
                    ))}
                </motion.div>
                
                {/* Image */}
                <motion.div 
                className={` rounded-2xl overflow-hidden border-2 p-6 ${
                    mode === 'dark' ? 'border-lighter bg-darkBlue  drop-shadow-mdDark' : 'border-darkSlate bg-slate-400 drop-shadow-mdLight'
                } md:min-w-[320px] lg:max-w-[450px] 2xl:max-w-[550px]`}
                initial={{y: 1100}}
                animate={{y: 0, transition: {duration: .3}}}>
                    <img 
                        className='w-full h-full rounded-xl aspect-[1/1.3] 2xl:aspect-[1/1.2] hover:scale-105 transition-all' 
                        src={myself} 
                    />
                </motion.div>
            </div>

            {/* Numbers */}
            <div
            className='2xl:pl-[80px] flex flex-row w-full xxl:w-fit xxl:flex-col items-center justify-between gap-x-[27px] xl:gap-x-0 gap-y-[150px]'
            ref={refElement}> 
                {isInView && (
                    <>     
                        <motion.div 
                        className='flex flex-col items-center justify-center 2xl:pl-[0px]'
                        initial={scrWidth >= 1024 ? {x: 100} : {y: 100}}
                        animate={scrWidth >= 1024 ? {x: 0, transition: {duration: .3}} : {y: 0, transition: {duration: .3}}}>
                            <div className='text-4xl md:text-6xl 2xl:text-7xl font-bold '><CountUp start={0} end={16} />+</div>
                            <div className='text-[13px] text-center 2xl:w-[180px] sm:text-[17px] 2xl:text-lg '>Projects completed</div>
                        </motion.div>

                        <motion.div 
                        className='flex flex-col items-center justify-center 2xl:pl-[0px]'
                        initial={scrWidth >= 1024 ? {x: 100} : {y: 100}}
                        animate={scrWidth >= 1024 ? {x: 0, transition: {duration: .3}} : {y: 0, transition: {duration: .3}}}>
                            <div className='text-4xl md:text-6xl 2xl:text-7xl font-bold '><CountUp start={0} end={3}/></div>
                            <div className='text-[13px] text-center 2xl:w-[180px] sm:text-[17px] 2xl:text-lg '>Large Project completed</div>
                        </motion.div>

                        <motion.div 
                        className='flex flex-col items-center justify-center 2xl:pl-[0px]'
                        initial={scrWidth >= 1024 ? {x: 100} : {y: 100}}
                        animate={scrWidth >= 1024 ? {x: 0, transition: {duration: .3}} : {y: 0, transition: {duration: .3}}}>
                            <div className='text-4xl md:text-6xl 2xl:text-7xl font-bold '><CountUp start={0} end={1.3} decimals={1}/>+</div>
                            <div className='text-[13px] text-center 2xl:w-[180px] sm:text-[17px] 2xl:text-lg '>Years of Experience</div>
                        </motion.div>
                    </>
                )}
            </div>
        </div>
    )
}

export default FirstPart