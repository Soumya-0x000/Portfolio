import React, { useState } from 'react'
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
import { faList } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import TabView from './TabView'
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import GridViewProject from './view/GridViewProject'
import ListViewProject from './view/ListViewProject'
import { useBgContext } from '../../helpingComponents/hook/BgBlurContext'
import StarsCanvas from '../../helpingComponents/animate/StarCanvas'

const projectDetails = [
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
        usedTech: ['React JS', 'Tailwind CSS', 'Three JS', 'Framer Motion', 'Email JS', 'React Tilt', 'React Router DOM'],
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

const view = [
    {name: 'Grid', icon: <BsFillGrid3X3GapFill/> },
    {name: 'List', icon: <FontAwesomeIcon icon={faList} />},
]

const Projects = () => {
    const {mode} = useTheme()
    const {open} = useBgContext()
    const [tabView, setTabView] = useState(view[0].name)

    return (
        <>
            <div className={`${mode === 'dark' ? 'text-light' : ''} ${open && 'blur-[7px] cursor-not-allowed'} px-5 md:px-3 pt-[70px] sm:pt-[60px] min-h-screen`}>
                <StarsCanvas/>
                <div className={`text-center text-[25px] sm:text-5xl md:text-[55px] lg:text-[73px] font-extrabold 2xl:text-8xl pt-3 sm:pt-6 xl:pt-14 lg:pt-16 lg:px-20 tracking-wide ${mode === 'dark' ? 'text-indigo-400' : 'text-indigo-500'} z-20`}>
                    <TextReveal child={`Projects I've completed!`}/>
                </div>
                
                {/* Switch view */}
                <motion.div 
                initial={{y: -300}}
                animate={{y: 0, transition:{delay: .7, duration: .8}}}
                className='w-full flex items-center justify-center mt-3 sm:mt-5 md:mt-7'>
                    <div className={`w-full md:w-[80%] lg:w-[70%] xl:w-[60%] px-1 py-1 md:py-2 md:px-2 flex items-center justify-between rounded-full bg-gradient-to-br ${mode === 'dark' ? 'from-[#823c9e9f] to-[#035caa9e]' : 'ring-[1p] from-[#94ffcb] to-[#87bbff] ring-violet-600'} `}>
                        <div className={`text-white text-sm transition-colors px-4 py-1 sm:py-2 rounded-full relative`}>
                            <span className="relative z-10 flex items-center justify-center gap-x-2 text-[15px] md:text-[17px]">View</span>
                            <span className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full"></span>
                        </div>
                        <TabView options={view} chosenView={tabView} setTabView={setTabView} />
                    </div>
                </motion.div>

                <div className='mt-10 pb-16'>
                    {tabView === 'Grid' ? ( 
                        <GridViewProject projectDetails={projectDetails} />
                    ) : (
                        <ListViewProject projectDetails={projectDetails} />
                    )}
                </div>
            </div>

            {open && (
                <div className=' fixed top-0 left-0 w-full h-full'/>
            )}
        </>
    )
}

export default Projects