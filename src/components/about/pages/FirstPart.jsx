import React, { useLayoutEffect, useRef, useState } from 'react'
import myself from '../../../assets/071ba5eb-4186-4b4f-9bd7-ad8352fbcecc.jpg'
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
        `Hello, myself Soumya Sankar Das`,
        `Hey everyone! I'm 24 years old. I've been learning a lot and I'm really passionate about building things online.`,
        `I'm comfortable working with the foundational languages like HTML, CSS, and JavaScript. I'm also trying to get better at using React to create those cool interactive websites you see nowadays. For the back-end side of things, I'm using Supabase, and I'm learning more about it all the time.`,
        `I'm still developing my skills, but I'm getting the hang of version control with Git and GitHub. When it comes to design, I'm trying out tools like Tailwind CSS, SASS, Material UI, and Next UI to make websites that look good and work well on any device.  For some extra flair, I'm even starting to explore Framer Motion for animations.`,
        `I know there's a lot out there to learn, but I'm always eager to improve. It would be awesome to connect with other developers and keep growing in this field!`
    ]
    const shortBiography = [
        `Hi there! I'm Soumya Sankar Das, a passionate web developer with 1.8 years of experience under my belt, and I'm always eager to connect and keep growing in this exciting field.`,
        `I leverage my expertise in HTML, CSS, JavaScript, and React to create functional and engaging websites. I also utilize UI libraries like Material UI and Next UI to enhance the user experience and make your website a joy to use. Supabase keeps the back-end running smoothly, ensuring a seamless user journey.`,
        `For clean and manageable code, I leverage Git and GitHub for version control. Supabase, on the other hand, empowers smooth back-end management, keeping everything running efficiently.`,
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
            className='2xl:pl-[80px] flex flex-row w-full xxl:w-fit xxl:flex-col items-center justify-center gap-x-[27px] xl:gap-x-0 gap-y-[130px]'
            ref={refElement}> 
                {isInView && (
                    <div className=' grid grid-cols-2 sm:grid-cols-4 gap-y-14 gap-x-24'>     
                        <motion.div 
                        className='flex flex-col items-center justify-center 2xl:pl-[0px]'
                        initial={scrWidth >= 1024 ? {x: 100} : {y: 100}}
                        animate={scrWidth >= 1024 ? {x: 0, transition: {duration: .3}} : {y: 0, transition: {duration: .3}}}>
                            <div className='text-4xl md:text-6xl 2xl:text-7xl font-bold '><CountUp start={0} end={21} />+</div>
                            <div className='text-[13px] text-center 2xl:w-[180px] sm:text-[17px] 2xl:text-lg '>Projects completed</div>
                        </motion.div>

                        <motion.div 
                        className='flex flex-col items-center justify-center 2xl:pl-[0px]'
                        initial={scrWidth >= 1024 ? {x: 100} : {y: 100}}
                        animate={scrWidth >= 1024 ? {x: 0, transition: {duration: .3}} : {y: 0, transition: {duration: .3}}}>
                            <div className='text-4xl md:text-6xl 2xl:text-7xl font-bold '><CountUp start={0} end={8}/></div>
                            <div className='text-[13px] text-center 2xl:w-[180px] sm:text-[17px] 2xl:text-lg '>Large Projects completed</div>
                        </motion.div>
                        
                        <motion.div 
                        className='flex flex-col items-center justify-center 2xl:pl-[0px]'
                        initial={scrWidth >= 1024 ? {x: 100} : {y: 100}}
                        animate={scrWidth >= 1024 ? {x: 0, transition: {duration: .3}} : {y: 0, transition: {duration: .3}}}>
                            <div className='text-4xl md:text-6xl 2xl:text-7xl font-bold '><CountUp start={0} end={1}/></div>
                            <div className='text-[13px] text-center 2xl:w-[180px] sm:text-[17px] 2xl:text-lg '>Undergoing projects</div>
                        </motion.div>

                        <motion.div 
                        className='flex flex-col items-center justify-center 2xl:pl-[0px]'
                        initial={scrWidth >= 1024 ? {x: 100} : {y: 100}}
                        animate={scrWidth >= 1024 ? {x: 0, transition: {duration: .3}} : {y: 0, transition: {duration: .3}}}>
                            <div className='text-4xl md:text-6xl 2xl:text-7xl font-bold '><CountUp start={0} end={1.8} decimals={1}/>+</div>
                            <div className='text-[13px] text-center 2xl:w-[180px] sm:text-[17px] 2xl:text-lg '>Years of Experience</div>
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default FirstPart
