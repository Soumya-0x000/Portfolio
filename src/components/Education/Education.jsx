import React from 'react'
import { useTheme } from '../../helpingComponents/hook/ThemeContext'
import { TextReveal } from '../../helpingComponents/textReveal/TextReveal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import vuLogo from '../../assets/education/vu_logo.jpg'
import vuGate from '../../assets/education/vu-gate.jpg'

const Education = () => {
    const {mode} = useTheme()

    return (
        <div className={`${mode === 'dark' ? 'text-lighter' : ''} pt-[80px] sm:pt-[100px] px-1 sm:px-5 lg:px-8 2xl:px-28 min-h-screen`}>
            <div className={`text-[25px] sm:text-5xl md:text-[55px] lg:text-[73px] 2xl:text-8xl font-extrabold pt-8 xl:pt-14 lg:pt-16 lg:px-20 tracking-wide ${mode === 'dark' ? 'text-indigo-400' : 'text-indigo-500'} z-20 flex items-center justify-center gap-x-5`}>
                <TextReveal child={`My Education `}/>
            </div>

            <div className='mt-10 flex items-center justify-cente'>
                <div 
                className={`flex flex-col lg:flex-row gap-x-14 rounded-lg ${mode === 'dark' ? 'bg-slate-800' : 'bg-slate-200'} px-2 lg:px-8 py-4 lg:py-6`}
                style={{
                    // backgroundImage: `url(${vuGate})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    // opacity: 0.1,
                    // backdropFilter: 'blur(20px)'
                }}>
                    <div className='w-full lg:w-fit flex lg:items-center justify-center lg:justify-normal'>
                        <div className=' rounded-full overflow-hidden w-[240px] lg:w-[180px] h-fit'>
                            <img src={vuLogo} className='w-full h-full'/>
                        </div>
                    </div>

                    <div className={`${mode === 'dark' ? 'bg-slate-900' : 'bg-slate-300'} rounded-xl mt-6 lg:mt-0 px-2 lg:px-6 py-2 flex flex-col justify-between gap-y-6`}>
                        <span className={`text-xl xl:text-2xl 2xl:text-4xl ${mode === 'dark' ? 'text-blue-300' : 'text-blue-800'} `}>
                            Master's of Computer Application
                        </span>
                        <span className={`flex flex-col gap-y-1 text-[17px] ${mode === 'dark' ? 'text-rose-100' : 'text-rose-800'}`}>
                            <span className={``}>
                                Vidyasagar University
                            </span>
                            <span className={`text-[16px] ${mode === 'dark' ? 'text-green-100' : 'text-green-800'}`}>
                                2022 - 2024
                            </span>
                        </span>
                        <span className={` ${mode === 'dark' ? 'text-violet-300' : 'text-violet-800'} font-bold`}>
                            Currently pursuing
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education