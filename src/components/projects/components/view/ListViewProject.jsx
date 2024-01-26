import React, { useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import './liveLinkBtn.css'
import { IoRocketOutline } from "react-icons/io5"
import { useTheme } from "../../../../helpingComponents/hook/ThemeContext";

const ListViewProject = ({ projectDetails }) => {
    const [activeCard, setActiveCard] = useState(0)
    const ref = useRef(null);
    const {mode} = useTheme()
    const { scrollYProgress } = useScroll({
        container: ref,
        offset: ["start start", "end start"],
    });
    const cardLength = projectDetails.length
    const comparableHeight = 800
    const comparableWidth = 1300
    const [measureHeight, setMeasureHeight] = useState(window.innerHeight >= comparableHeight)
    const [measureWidth, setMeasureWidth] = useState(window.innerWidth >= comparableHeight)
    const [imgSize, setImgSize] = useState('')

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = projectDetails.map((_, index) => index / cardLength);
        cardsBreakpoints.forEach((breakpoint, index) => {
            if (latest > breakpoint - .06 && latest <= breakpoint) {
                const image = new Image();
                image.src = projectDetails[index]?.img;
                image.onload = () => {
                    setActiveCard(() => index);
                }
            }
        });
    });

    useLayoutEffect(() => {
        const handleScrHeight = () => {
            const scrHeight = window.innerHeight
            scrHeight >= comparableHeight ? setMeasureHeight(true) : setMeasureHeight(false)
        }
        handleScrHeight()

        const handleScrWidth = () => {
            const scrWidth = window.innerWidth
            scrWidth >= comparableWidth ? setMeasureWidth(true) : setMeasureWidth(false)
        }
        handleScrWidth()

        const handleImg = () => {
            window.innerWidth < 1600 ? setImgSize('contain') : setImgSize('cover')
        } 
        handleImg()

        window.addEventListener("resize", handleScrWidth)
        window.addEventListener('resize', handleScrHeight)
        window.addEventListener('resize', handleImg)

        return () => {
            window.removeEventListener("resize", handleScrWidth)
            window.removeEventListener("resize", handleScrHeight)
            window.removeEventListener("resize", handleImg)
        }
    }, [])
    
    return (
        <motion.div
        className={`${measureHeight ? 'h-[37rem]' : 'h-[28rem]' } overflow-y-auto flex flex-col lg:flex-row justify-center space-x-10 rounded-md px-10 rin  sticky top-20`}
        ref={ref}>
            <motion.div 
            className="relative flex items-start w-2/5"
            initial={{y: 500}}
            animate={{y: 0, transition:{duration: .8}}}>
                <div className="w-full h-full py-10">
                    {projectDetails.map((item, index) => (
                        <div className={`mt-16 mb-[9rem] 2xl:mt-[2rem] w-full ring-[1px] p-4 rounded-md ${mode === 'dark' ? 'bg-[#0f203baf]' : 'bg-[#a8c8fcc8]'} `}
                        key={item.name + index} >
                            <motion.h2
                            initial={{ opacity: 0, }}
                            animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                            className={`text-2xl font-bold ${mode === 'dark' ? 'text-slate-100 border-cyan-300' : 'text-slate-800 border-cyan-700'} border-b pb-1`}>
                                {item.name}
                            </motion.h2>
                            
                            {measureWidth && (
                                <motion.div 
                                className={`mt-6 ${mode === 'dark' ? 'text-violet-300' : 'text-indigo-800'} text-sm`}
                                initial={{ opacity: 0, }}
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}>
                                    {item.description}
                                </motion.div>
                            )}

                            <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                            className="text-slate-300 text-sm xl:text-md mt-10 flex items-center flex-wrap gap-x-2 xl:gap-x-5 gap-y-4 w-full">
                                {item.usedTech.map((item, index) => (
                                    <span 
                                    className="bg-indigo-800 text-indigo-200 rounded-full px-4 py-2"
                                    key={item + index}>
                                        {item}
                                    </span>
                                ))}
                            </motion.div>
                            
                            <motion.div className="mt-9 flex flex-row-reverse items-center justify-between"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: activeCard === index ? 1 : 0.3 }}>
                                <a href={item.ghLink} target="_blank" rel="noopener noreferrer" 
                                className="
                                flex items-center justify-center w-fit gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-6 py-3 rounded-lg border border-gray-600 hover:scale-105 duration-200 hover:text-blue-200 hover:border-gray-800 hover:from-black hover:to-gray-900">
                                    <FontAwesomeIcon icon={faGithub} className="w-6 h-full" />
                                    Github
                                </a>

                                <a href={item.lvLink} target="_blank" rel="noopener noreferrer" 
                                className="rocketBtn
                                flex items-center justify-center cursor-pointer font-semibold text-md text-white bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] border border-violet-800 rounded-lg tracking-wider px-6 py-3 ">
                                    <IoRocketOutline className="rocket -rotate-[30] mr-2 font-bold w-5 h-5 transition-al duration-[0.6s] " />
                                    <span>Launch</span>
                                </a>
                            </motion.div>
                        </div>
                    ))}
                    <div className="h-40" />
                </div>
            </motion.div>

            <div className={`${measureHeight ? 'max-h-[40rem]' : 'h-full' } xl: hidden lg:flex w-3/5 items-center justify-center sticky top-0 overflow-hidden`}>
                <motion.div
                    key={activeCard}
                    initial={{ opacity: .7, scale: 1, x: 500 }}
                    animate={{ opacity: 1, scale: 1, x: 0, transition: { duration: 0.8 } }}
                    style={{
                        background: `url(${projectDetails[activeCard].img})`,
                        backgroundSize: imgSize,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        aspectRatio: 'auto'
                    }}
                    className="h-full w-[100%] rounded-md bg-white"
                />
            </div>
        </motion.div>
    );
};

export default ListViewProject;