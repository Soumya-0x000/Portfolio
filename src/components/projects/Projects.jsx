import React, { useLayoutEffect, useState } from 'react'
import { useTheme } from '../../helpingComponents/hook/ThemeContext'
import movix from '../../assets/project/movix.png'
import dashboard from '../../assets/project/dashboard.png'
import codehelp from '../../assets/project/codehelp.png'
import portfolio from '../../assets/project/portfolio.png'
import TodoList from '../../assets/project/TodoList.png'
import reduxTK from '../../assets/project/reduxTK.png'
import convertCurrency from '../../assets/project/currency converter.png'
import generatePswd from '../../assets/project/pswdGenerate.png'
import { TextReveal } from '../../helpingComponents/textReveal/TextReveal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { CgDetailsMore } from "react-icons/cg"
import { motion } from 'framer-motion'

const projectLogos = [
    {
        img: movix, name: 'Movix', 
        ghLink: 'https://github.com/Soumya-0x000/Movix', 
        lvLink: 'https://movix-puce-alpha.vercel.app/',
        usedTech: ['React JS', 'Tailwind CSS', 'React Router DOM', 'SASS', 'Redux Toolkit', 'TMDB API', 'React Player', 'Lazy load Image'],
    },
    {
        img: dashboard, name: 'Admin Dashboard', 
        ghLink: 'https://github.com/Soumya-0x000/React-Admin-Dashboard', 
        lvLink: 'https://react-admin-dashboard-cogr.vercel.app/', 
        usedTech: ['React JS', 'React Router DOM', 'Tailwind CSS', 'YUP', 'Material UI', 'Nivo Charts', 'Full Calendar', 'Formik'],
    },
    {
        img: codehelp, name: 'CodeHelp landing page', 
        ghLink: 'https://github.com/Soumya-0x000/CodeHelpLandingPageClone', 
        lvLink: 'https://code-help-landing-page-clone-rn5g.vercel.app/', 
        usedTech: ['React JS', 'Swiper JS', 'Framer Motion', 'Tailwind CSS', 'Typewritter Effect', 'React CountUp'],
    },
    {
        img: portfolio, name: 'Personal portfolio', 
        ghLink: 'https://github.com/Soumya-0x000/Portfolio', 
        lvLink: 'https://portfolio-five-mu-72.vercel.app/', 
        usedTech: ['React JS', 'Tailwind CSS', 'Three JS', 'Framer Motion', 'React Tilt', 'React Router DOM'],
    },
    {
        img: TodoList, name: 'Todo List', 
        ghLink: 'https://github.com/Soumya-0x000/Todo-List', 
        lvLink: 'https://todo-list-gamma-black.vercel.app/', 
        usedTech: ['React JS', 'Tailwind CSS', 'Framer Motion'],
    },
    {
        img: reduxTK, name: 'Redux Tool Kit', 
        ghLink: 'https://github.com/Soumya-0x000/ReduxToolkit_Beginning', 
        lvLink: 'https://redux-toolkit-beginning-4va4d0sds-soumya-sankar-das-projects.vercel.app/', 
        usedTech: ['React JS', 'Tailwind CSS', 'Redux Toolkit'],
    },
    {
        img: convertCurrency, name: 'Currency Converter', 
        ghLink: 'https://github.com/Soumya-0x000/Currency-Converter', 
        lvLink: 'https://currency-converter-beta-one.vercel.app/', 
        usedTech: ['React JS', 'Tailwind CSS', 'Framer Motion', 'API'],
    },
    {
        img: generatePswd, name: 'Password Generator', 
        ghLink: 'https://github.com/Soumya-0x000/Password-Generator', 
        lvLink: 'https://password-generator-cyan-nine.vercel.app/', 
        usedTech: ['React JS', 'Tailwind CSS', 'Framer Motion'],
    },
]

const staggerVariants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};
  
const childVariants = {
    initial: { opacity: 0, y: 200 },
    animate: { opacity: 1, y: 0 },
};

const Projects = () => {
    const {mode} = useTheme()
    const [showLiveLink, setShowLiveLink] = useState(Array(projectLogos.length).fill(false))
    const [showDetails, setShowDetails] = useState(Array(projectLogos.length).fill(false))
    const scrWidthLimit = 450
    const [scrWidth, setScrWidth] = useState(window.innerWidth >= scrWidthLimit)
       
    useLayoutEffect(() => {
        const handleScrWidthEvent = () => {
            setScrWidth(window.innerWidth >= scrWidthLimit);
        };
    
        handleScrWidthEvent();
    
        window.addEventListener('resize', handleScrWidthEvent);
    
        return () => {
            window.removeEventListener('resize', handleScrWidthEvent);
        };
    }, []);

    const handleShowLink = (id) => {
        const updatedLinks = [...showLiveLink]
        updatedLinks[id] = true
        setShowLiveLink(updatedLinks)
    }
    
    const handleHideLink = (id) => {
        const updatedLinks = [...showLiveLink]
        updatedLinks[id] = false
        setShowLiveLink(updatedLinks)
    }

    const handleFlipShow = (id) => {
        const updatedArr = [...showLiveLink]
        updatedArr[id] = false
        setShowLiveLink(updatedArr)

        const updatedDetailsShow = [...showDetails]
        updatedDetailsShow[id] = true
        setShowDetails(updatedDetailsShow)
    }
    
    const handleFlipHide = (id) => {
        const updatedArr = [...showLiveLink]
        updatedArr[id] = true
        setShowLiveLink(updatedArr)

        const updatedDetailsShow = [...showDetails]
        updatedDetailsShow[id] = false
        setShowDetails(updatedDetailsShow)
    }

    const detailsSec = (tech) => {
        return (
            <div className='flex flex-wrap items-center gap-x-1 gap-y-[3px] px-1 xl:px-2 overflow-hidden '>
                {tech.map((item, index) => (
                    <div key={index} className='w-fit px-3 md:px-2 py-1 bg-darkBlue text-blue-300 text-sm flex flex-row items-center justify-between flex-wrap rounded-full overflow-hidden '>
                        <div className='text-[12px] md:text-[12px]'>{item}</div>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className={`${mode === 'dark' ? 'text-light' : ''} px-5 md:px-3 min-h-screen pt-[70px] sm:pt-[60px]`}>
            <div className={`text-center text-[25px] sm:text-5xl md:text-[55px] lg:text-[73px] font-extrabold 2xl:text-8xl pt-8 xl:pt-14 lg:pt-16 lg:px-20 tracking-wide ${mode === 'dark' ? 'text-indigo-400' : 'text-indigo-500'} z-20`}>
                <TextReveal child={`Projects I've completed!`}/>
            </div>

            <div className='mt-10 pb-16'>
                <motion.div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-y-[50px] gap-x-[20px]'
                variants={staggerVariants}
                initial='initial'
                animate='animate'>
                    {projectLogos.map((item, index) => (
                        <motion.div 
                        className={`flex flex-col items-center justify-between ${mode === 'dark' ? 'bg-slate-700' : 'bg-slate-300'} cursor-pointer p-3 rounded-xl overflow-hidden`} 
                        key={index}
                        variants={childVariants}
                        onMouseEnter={() => handleShowLink(index)}
                        onMouseLeave={() => handleHideLink(index)}>
                            {/* Image, take look, details */}
                            <div className='relative rounded-xl overflow-hidden h-full '>
                                {/* Img */}
                                <div className='w-fit h-full'>
                                    <img 
                                        className={`w-full h-full rounded-lg ${showDetails[index] && 'blur-[2px]'}`} 
                                        src={item.img} 
                                        loading='lazy' 
                                    />
                                </div>

                                {/* Take look */}
                                <a href={item.lvLink} rel='noopener noreferrer' target='_blank'>
                                    <div className={`absolute ${showLiveLink[index] ? '-bottom-[110px]' : '-bottom-[195px]'} left-0 right-0 h-32 bg-gradient-to-tr ${mode === 'dark' ? 'from-[#5fffaddf] to-blue-300 text-[#216538]' : 'from-[#7c2497cb] to-blue-600 text-[#92ffe2c3]'} -translate-y-12 transition-all flex items-start pt-4 justify-center`}>
                                        <span className='flex items-center justify-center gap-x-5 font-bold text-2xl md:text-[19px]'>
                                            Take a look
                                            <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                                        </span>
                                    </div>
                                </a>

                                {/* Details */}
                                <div 
                                className={` py-[.3rem] absolute ${showDetails[index] ? 'bottom-0' : 'bottom-[100%]'} left-0 right-0 h-fit 
                                bg-gradient-to-tr ${mode === 'dark' ? 'from-[#5fffac] to-blue-300 text-[#216538]' : 'from-[#7c2497] to-blue-600 text-[#92ffe2]'} transition-all flex flex-col items-center justify-start gap-y-2`}>
                                    <span className='text-[19px] font-bold'>Used Technologies</span>
                                    {detailsSec(item.usedTech)}
                                </div>
                            </div>

                            {/* Github, details icon and name */}
                            <div className={`mt-4 flex items-center justify-between w-full ring-[1px] rounded-lg px-2 py-1 ring-indigo-400 ${mode === 'dark' ? 'bg-indigo-900 text-violet-300' : 'bg-indigo-300 text-violet-600'} `}>
                                <div className={`flex flex-row-reverse items-center justify-center gap-x-2`}>
                                    {scrWidth && (
                                        <CgDetailsMore 
                                            className={`text-[1.5rem] ${
                                                mode === 'dark' ? 'hover:text-green-300' : 'hover:text-blue-700'
                                            }`}
                                            onMouseEnter={() => handleFlipShow(index)}
                                            onMouseLeave={() => handleFlipHide(index)}
                                        />
                                    )}
                                    <a href={item.ghLink} target='_blank' rel='noopener noreferrer' className={`hover:scale-110 transition-all flex items-center justify-center`}>
                                        <FontAwesomeIcon icon={faGithub} className={`hover:bg-green-300 rounded-full hover:text-green-800 text-[1.6rem]`} />
                                    </a>
                                </div>
                                <div className='text-[13px] lsm:text-[15px] sm:text-[14px] font-bold tracking-wide'>{item.name}</div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default Projects