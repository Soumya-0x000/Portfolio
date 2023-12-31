import React, { useState } from 'react'
import { useTheme } from '../../helpingComponents/hook/ThemeContext'
import project1 from '../../assets/project/131 - ROG Wallpaper Challenge - 4K (2) (1)-Name_is_not_fixed_yet.jpg'
import project2 from '../../assets/project/149 - ROG Wallpaper Challenge - 4K (2).jpg'
import project3 from '../../assets/project/ROG_Wallpaper_Cybertext__2560x1440.png'
import project4 from '../../assets/project/Zephyrus Duo 15 x ZЯØFØRM_3840x2160.jpg'
import project5 from '../../assets/project/151 - ROG Wallpaper Challenge - 4K (2).jpg'
import project6 from '../../assets/project/153 - ROG Wallpaper Challenge - 4K (2).jpg'
import project7 from '../../assets/project/1920x1080_Planet_1120.jpg'
import project8 from '../../assets/project/8-bit City_1920x1080.jpg'
import project9 from '../../assets/project/PinoyChaosX-–-Post-694.jpg'
import project10 from '../../assets/project/Rbdperez-–-Post-250.jpg'
import { TextReveal } from '../../helpingComponents/textReveal/TextReveal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const projectLogos = [
    {img: project1, name: 'Movix'},
    {img: project2, name: 'Admin Dashboard'},
    {img: project3, name: 'CodeHelp landing page clone'},
    {img: project4, name: 'Personal portfolio'},
    {img: project5, name: 'Project 5'},
    {img: project6, name: 'Project 6'},
    {img: project7, name: 'Project 7'},
    {img: project8, name: 'Project 8'},
    {img: project9, name: 'Project 9'},
    {img: project10, name: 'Project 10'},
]

const Projects = () => {
    const {mode} = useTheme()
    const [showLiveLink, setShowLiveLink] = useState(Array(projectLogos.length).fill(false))
    
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

    return (
        <div className={`${mode === 'dark' ? 'bg-darkSlate text-light' : ''} px-5 md:px-10 min-h-screen`}>
            <div className={`text-center text-[25px] sm:text-5xl md:text-[55px] lg:text-[73px] font-extrabold 2xl:text-8xl pt-8 xl:pt-14 lg:pt-16 lg:px-20 tracking-wide ${mode === 'dark' ? 'text-indigo-400' : 'text-indigo-500'} z-20`}>
                <TextReveal child={`Projects I've completed!`}/>
            </div>

            <div className='mt-10 pb-16'>
                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-y-[50px] gap-x-[20px]'>
                    {projectLogos.map((item, index) => (
                        <div 
                        className={`flex flex-col items-end justify-center ${mode === 'dark' ? 'bg-slate-700' : 'bg-slate-300'} cursor-pointer p-3 rounded-xl overflow-hidden`} 
                        key={index}
                        onMouseEnter={() => handleShowLink(index)}
                        onMouseLeave={() => handleHideLink(index)}>
                            <div className='relative rounded-xl overflow-hidden'>
                                <img className='w-full h-full rounded-lg' src={item.img} loading='lazy' />
                                <div className={`absolute ${showLiveLink[index] ? '-bottom-[110px]' : '-bottom-[195px]'} left-0 right-0 h-32 bg-[#bfd2ff83] -translate-y-16 transition-all flex items-start pt-6 justify-center font-bold text-2xl sm:text-[21px]`}>Take a look</div>
                            </div>

                            <div className='mt-4 flex items-center justify-between w-full '>
                                <FontAwesomeIcon icon={faGithub} className='text-[1.5rem]' />
                                <div className=''>{item.name}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects