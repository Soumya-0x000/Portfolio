import React, { useRef } from 'react'
import { useTheme } from '../../helpingComponents/hook/ThemeContext'
import { TextReveal } from '../../helpingComponents/textReveal/TextReveal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, useScroll } from 'framer-motion'
import vuLogo from '../../assets/education/vu_logo.jpg'
import vuGate from '../../assets/education/vu-gate.jpg'
import mdnCLG from '../../assets/education/mdnCLG.png'
import school from '../../assets/education/school.jpg'

const Education = () => {
    const {mode} = useTheme()
    const containerRef = useRef()
    const {scrollYProgress} = useScroll()

    const Institutions = ({logo, course, name, duration, crntState}) => {
        return (
            <motion.div
            initial={{y: 700}}
            animate={{y: 0, transition: {duration: .8}}} 
            className={`
                flex flex-col sm:flex-row items-center justify-center gap-x-4 xl:gap-x-14 gap-y-4 rounded-lg 
                ${mode === 'dark' ? 'bg-slate-800' : 'bg-slate-200'} 
                px-1.5 md:px-4 lg:px-8 py-2 md:py-4 lg:py-5 `
            }>
                <div className='w-fit flex md:items-center justify-center lg:justify-normal'>
                    <div className='rounded-lg md:rounded-full overflow-hidden w-[170px] sm:w-[140px] md:w-[120px] lg:w-[160px] xl:w-[180px] lg:h-fit'>
                        <img src={logo} className='w-full h-full'/>
                    </div>
                </div>

                <div className={`${mode === 'dark' ? 'bg-slate-900' : 'bg-slate-300'} rounded-xl lg:mt-0 px-2 lg:px-6 py-2 flex flex-col justify-between gap-y-6 xl:gap-y-7 w-full`}>
                    <span className={`text-[17px] md:text-lg lg:text-xl xl:text-2xl 2xl:text-[32px] ${mode === 'dark' ? 'text-blue-300' : 'text-blue-800'} `}>
                        {course}
                    </span>

                    <span className={`flex flex-col gap-y-1 text-[14px] lg:text-[15px] xl:text-[17px] ${mode === 'dark' ? 'text-rose-100' : 'text-rose-800'}`}>
                        <span className={``}>
                            {name}
                        </span>
                        <span className={`text-[14px] xl:text-[16px] ${mode === 'dark' ? 'text-green-100' : 'text-green-800'}`}>
                            {duration}
                        </span>
                    </span>

                    <span className={` ${mode === 'dark' ? 'text-violet-300' : 'text-violet-800'} font-bold`}>
                        {crntState}
                    </span>
                </div>
            </motion.div>
        )
    }

    return (
        <div className={`${mode === 'dark' ? 'text-lighter' : ''} pt-[80px] sm:pt-[100px] pl-3 pr-2 sm:pl-10 sm:pr-10 sm:px-10 lg:px-8 2xl:px-28 min-h-screen`}>
            <div className={`text-[30px] sm:text-5xl md:text-[55px] lg:text-[73px] 2xl:text-8xl font-extrabold pt-8 xl:pt-14 lg:pt-16 lg:px-20 tracking-wide ${mode === 'dark' ? 'text-indigo-400' : 'text-indigo-500'} z-20 flex items-center justify-center gap-x-5`}>
                <TextReveal child={`My Education `}/>
            </div>

            <div 
            className='mt-4 sm:mt-9 xl:mt-14 mb-10 w-full relative flex justify-center items-center'
            ref={containerRef}>
                <motion.div 
                    className={`absolute top-2 left-1/2 translate-x-1/2 origin-top-left w-[7px] h-[95%] ${mode === 'dark' ? 'bg-blue-300' : 'bg-blue-400'} `}
                    style={{scaleY: scrollYProgress}}
                />
                <motion.div 
                    className={`absolute top-2 left-[25%] md:left-[35%] translate-x-[25%] md:translate-x-[35%] origin-top-left w-[7px] h-[95%] ${mode === 'dark' ? 'bg-red-300' : 'bg-red-400'} `}
                    style={{scaleY: scrollYProgress}}
                />
                <motion.div 
                    className={`absolute top-2 right-[25%] md:right-[35%] -translate-x-[25%] md:-translate-x-[25%]  origin-top-left w-[7px] h-[95%] ${mode === 'dark' ? 'bg-red-300' : 'bg-red-400'} `}
                    style={{scaleY: scrollYProgress}}
                />
                <div className='space-y-14 flex flex-col z-20'>
                    <Institutions 
                        logo={vuLogo} 
                        course={`Master's of Computer Application`} 
                        name={'Vidyasagar University'}
                        duration={'2022 - 2024'}
                        crntState={`Currently pursuing`}
                    />
                    <Institutions
                        logo={mdnCLG} 
                        course={`Bachelors of Computer Application`} 
                        name={'Midnapore College (Autonomous)'}
                        duration={'2019 - 2022'}
                        crntState={`Graduated (81.24%)`}
                    />
                    <Institutions
                        logo={school} 
                        course={`Higher Secondary (10 + 2)`} 
                        name={`Sri Narayan Vidyabhaban Boys' High School`}
                        duration={'2016 - 2018'}
                        crntState={`Passed (68.80%)`}
                    />
                    <Institutions
                        logo={school} 
                        course={`Secondary (10)`} 
                        name={`Sri Narayan Vidyabhaban Boys' High School`}
                        duration={'2014 - 2016'}
                        crntState={`Passed (82%) `}
                    />
                </div>
            </div>
        </div>
    )
}

export default Education