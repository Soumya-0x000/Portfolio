import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useTheme } from '../../helpingComponents/hook/ThemeContext'
import movix from '../../assets/project/movix.png'
import assignmentManagement from '../../assets/project/assignmentManagement.png'
import pewTube from '../../assets/project/pewTube.png'
import stumate from '../../assets/project/stumate.png'
import dashboard from '../../assets/project/dashboard.png'
import codehelp from '../../assets/project/codehelp.png'
import portfolio from '../../assets/project/portfolio.png'
import TodoList from '../../assets/project/TodoList.png'
import reduxTK from '../../assets/project/reduxTK.png'
import convertCurrency from '../../assets/project/currencyConverter.png'
import generatePswd from '../../assets/project/pswdGenerate.png'
import { TextReveal } from '../../helpingComponents/textReveal/TextReveal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import TabView from './components/TabView'
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import GridViewProject from './components/view/GridViewProject'
import ListViewProject from './components/view/ListViewProject'
import { useBgContext } from '../../helpingComponents/hook/BgBlurContext'
import StarsCanvas from '../../helpingComponents/animate/StarCanvas'
import PageLoadingAnimation from '../../helpingComponents/animate/PageLoadingAnimation/PageLoadingAnimation'
import Footer from '../static/Footer/Footer'

const projectDetails = [
    {
        img: assignmentManagement, name: 'Assignment Management System', 
        ghLink: 'https://github.com/Soumya-0x000/Assignment-Management-System', 
        lvLink: 'https://assignment-management-system-nine.vercel.app/',
        usedTech: ['React JS', 'Tailwind CSS', 'Next UI', 'React Router DOM', 'Redux Toolkit', 'Supabase', 'Filepond', 'Framer Motion', 'React icons', 'YUP validation', 'Day JS'],
        description: `The Assignment Management System simplifies assignment uploads for teachers, submission with deadlines for students, and includes an integrated grading feature for efficient assessment based on student responses.`
    },
    {
        img: pewTube, name: 'PewTube', 
        ghLink: 'https://github.com/Soumya-0x000/SSDtube', 
        lvLink: 'https://ssdtube.vercel.app/',
        usedTech: ['React JS', 'Tailwind CSS', 'React Router DOM', 'Redux Toolkit', 'Youtube Data API V3', 'React Player', 'Lazy load Image', 'Skeleton', 'React Select', 'Axios'],
        description: `PewTube, inspired by YouTube, is my creation utilizing the features provided by YouTube Data API V3. It includes features such as Watch Later, commenting, and replying to comments.`
    },
    {
        img: stumate, name: 'Stumate', 
        ghLink: 'https://github.com/Soumya-0x000/placements-management-system', 
        lvLink: 'https://placements-management-system.vercel.app/',
        usedTech: ['React JS', 'Tailwind CSS', 'React Router DOM', 'Material UI', 'Bootstrap', 'Formik', 'Day JS', 'Google MapReact', 'Axios', 'Chart JS', 'YUP'],
        description: `Stumate, an offline placement management system, is built by me. It tracks students' placement status, schedules future interviews, and offers various other features. I developed the frontend of this full-stack application.`
    },
    {
        img: movix, name: 'Movix', 
        ghLink: 'https://github.com/Soumya-0x000/Movix', 
        lvLink: 'https://movix-puce-alpha.vercel.app/',
        usedTech: ['React JS', 'Tailwind CSS', 'React Router DOM', 'SASS', 'Redux Toolkit', 'TMDB API', 'React Player', 'Lazy load Image', 'Skeleton'],
        description: `Movix is a dynamic web app, seamlessly integrating with the TMDB API to provide users with a comprehensive entertainment experience. It offers real-time details on movies, TV shows, and personalities.`
    },
    {
        img: dashboard, name: 'Admin Dashboard', 
        ghLink: 'https://github.com/Soumya-0x000/React-Admin-Dashboard', 
        lvLink: 'https://react-admin-dashboard-cogr.vercel.app/', 
        usedTech: ['React JS', 'React Router DOM', 'Tailwind CSS', 'YUP', 'Material UI', 'Nivo Charts', 'Full Calendar', 'Formik'],
        description: `An Admin Dashboard for employee and admin management, featuring comprehensive data visualization through various charts. It includes a fully-fledged calendar system to track events efficiently.`,
    },
    {
        img: codehelp, name: 'CodeHelp landing page', 
        ghLink: 'https://github.com/Soumya-0x000/CodeHelpLandingPageClone', 
        lvLink: 'https://code-help-landing-page-clone-rn5g.vercel.app/', 
        usedTech: ['React JS', 'Swiper JS', 'Framer Motion', 'Tailwind CSS', 'Typewritter Effect', 'React CountUp'],
        description: `A clone of the CodeHelp landing page featuring Swiper JS for smooth transitions, Framer Motion for animations, and React technologies for seamless interactivity.`,
    },
    {
        img: portfolio, name: 'Personal portfolio', 
        ghLink: 'https://github.com/Soumya-0x000/Portfolio', 
        lvLink: 'https://portfolio-five-mu-72.vercel.app/', 
        usedTech: ['React JS', 'Tailwind CSS', 'Three JS', 'Framer Motion', 'Email JS', 'React Tilt', 'React Router DOM', 'React Toastify'],
        description: `My portfolio serves as a showcase of my skills and knowledge, featuring diverse projects, educational background, and dynamic animations implemented with Framer Motion. It provides a concise overview of my capabilities and experiences.`,
    },
    {
        img: TodoList, name: 'Todo List', 
        ghLink: 'https://github.com/Soumya-0x000/Todo-List', 
        lvLink: 'https://todo-list-gamma-black.vercel.app/', 
        usedTech: ['React JS', 'Tailwind CSS', 'Framer Motion'],
        description: `A comprehensive to-do list with add, remove, edit, and mark as completed features. Completed tasks are stored separately for tracking. All data is persisted in local storage for user convenience.`,
    },
    {
        img: reduxTK, name: 'Redux Tool Kit', 
        ghLink: 'https://github.com/Soumya-0x000/ReduxToolkit_Beginning', 
        lvLink: 'https://redux-toolkit-beginning-4va4d0sds-soumya-sankar-das-projects.vercel.app/', 
        usedTech: ['React JS', 'Tailwind CSS', 'Redux Toolkit'],
        description: `Redux Toolkit beginner project featuring static data manipulation with add and remove functionalities. Utilizes React, Tailwind CSS, and Redux Toolkit for efficient state management.`,
    },
    {
        img: generatePswd, name: 'Password Generator', 
        ghLink: 'https://github.com/Soumya-0x000/Password-Generator', 
        lvLink: 'https://password-generator-cyan-nine.vercel.app/', 
        usedTech: ['React JS', 'Tailwind CSS', 'Framer Motion'],
        description: `Password Generator that allows users to customize passwords with options for numerics and special characters. Users can set password size up to 100 characters and copy generated passwords to the clipboard.`,
    },
    {
        img: convertCurrency, name: 'Currency Converter', 
        ghLink: 'https://github.com/Soumya-0x000/Currency-Converter', 
        lvLink: 'https://currency-converter-beta-one.vercel.app/', 
        usedTech: ['React JS', 'Tailwind CSS', 'Framer Motion', 'API'],
        description: `A versatile currency converter that seamlessly converts between any currencies. The application supports bidirectional conversion and retrieves real-time exchange rates through API integration.`,
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
    const comparableWidth = 1150
    const [isInView, setIsInView] = useState(window.innerWidth >= comparableWidth)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1600);

        return () => clearTimeout(timer)
    }, [])


    useLayoutEffect(() => {
        const handleScrWidth = () => {
            const scrWidth = window.innerWidth
            if (scrWidth >= comparableWidth) {
                setIsInView(true)
            } else {
                setIsInView(false)
                setTabView('Grid')
            }
        }
        handleScrWidth()

        window.addEventListener('resize', handleScrWidth)
        return () => window.removeEventListener('resize', handleScrWidth)
    }, [])

    return (
        <>
            {loading ? (
                <PageLoadingAnimation/>
            ) : (
                <div className={`${mode === 'dark' ? 'text-light' : ''} ${open && 'blur-[7px] cursor-not-allowed'} px-5 md:px-3 pt-[70px] sm:pt-[60px] min-h-screen`}>
                    <StarsCanvas starsCount = {'5000'} />
                    <div className={`text-center text-[25px] sm:text-5xl md:text-[55px] lg:text-[73px] font-extrabold 2xl:text-8xl pt-3 sm:pt-6 xl:pt-14 lg:pt-16 lg:px-20 tracking-wide ${mode === 'dark' ? 'text-indigo-400' : 'text-indigo-500'}`}>
                        <TextReveal child={`Projects I've completed!`}/>
                    </div>
                    
                    {/* Switch view */}
                    {isInView && (
                        <motion.div 
                        initial={{y: -300}}
                        animate={{y: 0, transition:{delay: .7, duration: .8}}}
                        className='w-full flex items-center justify-center mt-3 sm:mt-5 md:mt-7 lg:sticky top-[65px] z-50'>
                            <div className={`w-full md:w-[80%] lg:w-[70%] xl:w-[60%] px-1 py-1 md:py-2 md:px-2 flex items-center justify-between rounded-full bg-gradient-to-br ${mode === 'dark' ? 'from-[#823c9ef3] to-[#035caaf2]' : 'ring-[1p] from-[#94ffcb] to-[#87bbff] ring-violet-600'} `}>
                                <div className={`text-white text-sm transition-colors px-4 py-1 sm:py-2 rounded-full relative`}>
                                    <span className="relative z-10 flex items-center justify-center gap-x-2 text-[15px] md:text-[17px]">View</span>
                                    <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full"></span>
                                </div>
                                <TabView options={view} chosenView={tabView} setTabView={setTabView} />
                            </div>
                        </motion.div>
                    )} 

                    <div className='mt-10 pb-16'>
                        {tabView === 'Grid' ? ( 
                            <GridViewProject projectDetails={projectDetails} />
                        ) : (
                            <ListViewProject projectDetails={projectDetails} />
                        )}
                    </div>
                </div>
            )}

            {open && (
                <div className=' fixed top-0 left-0 w-full h-full'/>
            )}

            <Footer/>
        </>
    )
}

export default Projects
