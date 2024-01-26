import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { CgFileDocument  } from "react-icons/cg"
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React, { useLayoutEffect, useState } from 'react'
import { useTheme } from '../../../../helpingComponents/hook/ThemeContext';

const staggerVariants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const childVariants = {
    initial: { opacity: 0, y: 200, },
    animate: { opacity: 1, y: 0,  transition: {duration: .3}},
};

const GridViewProject = ({projectDetails}) => {
    const {mode} = useTheme()
    const [showLiveLink, setShowLiveLink] = useState(Array(projectDetails.length).fill(false))
    const [showDetails, setShowDetails] = useState(Array(projectDetails.length).fill(false))
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
        <motion.div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-y-5 md:gap-y-[50px] gap-x-[20px]'
        variants={staggerVariants}
        initial='initial'
        animate='animate'>
            {projectDetails.map((item, index) => (
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
                                <CgFileDocument  
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
    )
}

export default GridViewProject