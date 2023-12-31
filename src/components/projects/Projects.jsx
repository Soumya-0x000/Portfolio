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
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { MdOutlineFlip } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg"

const projectLogos = [
    {
        img: movix, name: 'Movix', 
        ghLink: 'https://github.com/Soumya-0x000/Movix', 
        lvLink: 'https://movix-puce-alpha.vercel.app/',
        usedTech: ['ReactJS', 'React Router DOM', 'Tailwind CSS', 'Redux Toolkit', 'SASS', 'TMDB API', 'Lazy Load Image', 'Infinite scroll', 'React Player', 'React Circular Progressbar', 'React select', 'React Circular Progressbar'],
    },
    {
        img: dashboard, name: 'Admin Dashboard', 
        ghLink: 'https://github.com/Soumya-0x000/React-Admin-Dashboard', 
        lvLink: 'https://react-admin-dashboard-cogr.vercel.app/', 
        usedTech: ['ReactJS', 'React Router DOM', 'Tailwind CSS', 'Material UI', 'Nivo Charts', 'Full Calendar'],
    },
    {
        img: codehelp, name: 'CodeHelp landing page', 
        ghLink: 'https://github.com/Soumya-0x000/CodeHelpLandingPageClone', 
        lvLink: 'https://code-help-landing-page-clone-rn5g.vercel.app/', 
        usedTech: [],
    },
    {
        img: portfolio, name: 'Personal portfolio', 
        ghLink: 'https://github.com/Soumya-0x000/Portfolio', 
        lvLink: 'https://portfolio-five-mu-72.vercel.app/', 
        usedTech: [],
    },
    {
        img: TodoList, name: 'Todo List', 
        ghLink: 'https://github.com/Soumya-0x000/Todo-List', 
        lvLink: 'https://todo-list-gamma-black.vercel.app/', 
        usedTech: [],
    },
    {
        img: reduxTK, name: 'Redux Tool Kit', 
        ghLink: 'https://github.com/Soumya-0x000/ReduxToolkit_Beginning', 
        lvLink: 'https://redux-toolkit-beginning-4va4d0sds-soumya-sankar-das-projects.vercel.app/', 
        usedTech: [],
    },
    {
        img: convertCurrency, name: 'Currency Converter', 
        ghLink: 'https://github.com/Soumya-0x000/Currency-Converter', 
        lvLink: 'https://currency-converter-beta-one.vercel.app/', 
        usedTech: [],
    },
    {
        img: generatePswd, name: 'Password Generator', 
        ghLink: 'https://github.com/Soumya-0x000/Password-Generator', 
        lvLink: 'https://password-generator-cyan-nine.vercel.app/', 
        usedTech: [],
    },
]

const Projects = () => {
    const {mode} = useTheme()
    const [showLiveLink, setShowLiveLink] = useState(Array(projectLogos.length).fill(false))
    const [showDetails, setShowDetails] = useState(Array(projectLogos.length).fill(false))
    
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
            <div className='flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-2 overflow-hidden '>
                {tech.map((item, index) => (
                    <div key={index} className='w-fit px-3 md:px-2 py-1 bg-darkBlue text-blue-300 text-sm flex flex-row items-center justify-between flex-wrap rounded-full overflow-hidden text-[12px] md:text-[10px] '>
                        <div className=''>{item}</div>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className={`${mode === 'dark' ? 'bg-darkSlate text-light' : ''} px-5 md:px-10 min-h-screen`}>
            <div className={`text-center text-[25px] sm:text-5xl md:text-[55px] lg:text-[73px] font-extrabold 2xl:text-8xl pt-8 xl:pt-14 lg:pt-16 lg:px-20 tracking-wide ${mode === 'dark' ? 'text-indigo-400' : 'text-indigo-500'} z-20`}>
                <TextReveal child={`Projects I've completed!`}/>
            </div>

            <div className='mt-10 pb-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-y-[50px] gap-x-[20px]'>
                    {projectLogos.map((item, index) => (
                        <div 
                        className={`flex flex-col items-center justify-between ${mode === 'dark' ? 'bg-slate-700' : 'bg-slate-300'} cursor-pointer p-3 rounded-xl overflow-hidden`} 
                        key={index}
                        onMouseEnter={() => handleShowLink(index)}
                        onMouseLeave={() => handleHideLink(index)}>
                            <div className='relative rounded-xl overflow-hidden h-full '>
                                <div className='w-fit h-full'>
                                    <img className={`w-full h-full rounded-lg ${showDetails[index] && 'blur-[2px]'}`} src={item.img} loading='lazy' />
                                </div>

                                <a href={item.lvLink} rel='noopener noreferrer' target='_blank'>
                                    <div className={`absolute ${showLiveLink[index] ? '-bottom-[110px]' : '-bottom-[195px]'} left-0 right-0 h-32 bg-gradient-to-tr ${mode === 'dark' ? 'from-[#5fffaddf] to-blue-300 text-[#216538]' : 'from-[#7c2497cb] to-blue-600 text-[#92ffe2c3]'} -translate-y-12 transition-all flex items-start pt-4 justify-center font-bold text-2xl sm:text-[21px]`}>
                                        <span className='flex items-center justify-center gap-x-5'>
                                            Take a look
                                            <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                                        </span>
                                    </div>
                                </a>

                                <div className={`absolute ${showDetails[index] ? 'bottom-[16%] md:bottom-0' : 'bottom-[100%]'} 
                                    left-0 right-0 h-[70%] md:h-[90%] bg-gradient-to-tr 
                                    ${mode === 'dark' ? 'from-[#5fffac] to-blue-300 text-[#216538]' : 'from-[#7c2497] to-blue-600 text-[#92ffe2]'} -translate-y-12 transition-all flex flex-col items-center justify-start pt-4 font-bold gap-y-6`}>
                                    <span className='text-[19px] bg-green'>
                                        Used Technologies
                                    </span>
                                    {detailsSec(item.usedTech)}
                                </div>
                            </div>

                            <div className={`mt-4 flex items-center justify-between w-full ring rounded-lg px-2 py-1 ring-indigo-400 ${mode === 'dark' ? 'bg-indigo-900' : 'bg-indigo-300'} `}>
                                <div className={`flex flex-row-reverse items-center justify-center ${mode === 'dark' ? 'text-violet-300' : 'text-violet-600'} gap-x-2`}>
                                    <CgDetailsMore 
                                        className={`text-[1.5rem] ${
                                            mode === 'dark' ? 'hover:text-green-300' : 'hover:text-blue-700'
                                        }`}
                                        onMouseEnter={() => handleFlipShow(index)}
                                        onMouseLeave={() => handleFlipHide(index)}
                                    />
                                    <a href={item.ghLink} target='_blank' rel='noopener noreferrer' className={`hover:scale-110 transition-all flex items-center justify-center`}>
                                        <FontAwesomeIcon icon={faGithub} className={`hover:bg-green-300 rounded-full hover:text-green-800 text-[1.6rem]`} />
                                    </a>
                                </div>
                                <div className='text-[13px] sm:text-[15px]'>{item.name}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects