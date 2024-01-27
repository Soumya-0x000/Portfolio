import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
    motion,
    useTransform,
    useScroll,
    useVelocity,
    useSpring,
} from "framer-motion";
import { useTheme } from "../../helpingComponents/hook/ThemeContext";

export const TracingBeam = ({ children }) => {
    const {mode} = useTheme()
    const { scrollYProgress } = useScroll({});

    const scrollYProgressVelocity = useVelocity(scrollYProgress);
    const [velocity, setVelocity] = React.useState(0);

    const contentRef = useRef(null);

    const [svgHeight, setSvgHeight] = useState(0);

    useLayoutEffect(() => {
        const handleSVGheight = () => {
            contentRef.current && setSvgHeight(contentRef.current.offsetHeight * 1.1)
        }
        handleSVGheight()

        window.addEventListener('resize', handleSVGheight)
        return () => window.removeEventListener('resize', handleSVGheight)
    }, []);

    useEffect(() => {
        return scrollYProgressVelocity.onChange((latestVelocity) => {
            setVelocity(latestVelocity)
        });
    }, []);

    const y1 = useSpring(
        useTransform(scrollYProgress, [0, 0.8], [50, svgHeight - velocity * 100]),
        {
            stiffness: 500,
            damping: 90,
        }
    );
    const y2 = useSpring(
        useTransform(scrollYProgress, [0, 3], [50, svgHeight - velocity * 400]),
        {
            stiffness: 500,
            damping: 90,
        }
    );

    const svgValue = [
        {pathValue: 0.074, gradientValue: 0.074 },
        {pathValue: 0.074, gradientValue: 0.078 },
        {pathValue: 0.259, gradientValue: 0.259 },
        {pathValue: 0.259, gradientValue: 0.263 },
        {pathValue: 0.310, gradientValue: 0.310 },
        {pathValue: 0.310, gradientValue: 0.314 },
        {pathValue: 0.518, gradientValue: 0.518 },
        {pathValue: 0.518, gradientValue: 0.522 },
        {pathValue: 0.570, gradientValue: 0.570 },
        {pathValue: 0.570, gradientValue: 0.574 },
        {pathValue: 0.754, gradientValue: 0.754 },
        {pathValue: 0.754, gradientValue: 0.758 },
        {pathValue: 0.800, gradientValue: 0.800 },
        {pathValue: 0.800, gradientValue: 0.804 },
        {pathValue: 0.976, gradientValue: 0.976 },
        {pathValue: 0.980, gradientValue: 0.980 },
    ]

    return (
        <motion.div className={`relative w-full max-w-4xl mx-auto h-full z-10`}>
            <div className="absolute -left-0 xl:-left-20 -top-11  hidden sm:block">
                <motion.div
                transition={{ duration: 0.2, delay: 0.5 }}
                animate={{
                    boxShadow: scrollYProgress.get() > 0
                        ? "none"
                        : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
                className="ml-[11px] h-4 w-4 rounded-full border-[2px] border-violet-500 shadow-sm flex items-center justify-center">
                    <motion.div
                        transition={{
                            duration: 0.2,
                            delay: 0.5,
                        }}
                        animate={{
                            backgroundColor: scrollYProgress.get() > 0 ? "violet" : "var(--emerald-500)",
                            borderColor: scrollYProgress.get() > 0 ? "violet" : "violet",
                        }}
                        className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
                    />
                </motion.div>

                <svg
                viewBox={`0 60 20 ${svgHeight}`}
                width="20"
                height={svgHeight}
                className=""
                aria-hidden="true">
                    {svgValue.map((value, index) => (
                        <React.Fragment key={index}>
                            <motion.path
                                d={`M 1 0V -36 l 18 24 V ${svgHeight * value.pathValue} l -18 24V ${svgHeight}`}
                                fill="none"
                                stroke= {mode === 'dark' ? "#737373" : '#C0C0C0'}
                                strokeOpacity="0.16"
                                transition={{ duration: 10 }}
                            ></motion.path>

                            <motion.path
                                d={`M 1 0V -36 l 18 24 V ${svgHeight * value.gradientValue} l -18 24V ${svgHeight}`}
                                fill="none"
                                stroke="url(#gradient)"
                                strokeWidth="1.85"
                                className="motion-reduce:hidden"
                                transition={{ duration: 10 }}
                            ></motion.path>
                        </React.Fragment>
                    ))}
                    <defs>
                        <motion.linearGradient
                        id="gradient"
                        gradientUnits="userSpaceOnUse"
                        x1="0"
                        x2="0"
                        y1={y1}
                        y2={y2}>
                            <stop stopColor={mode === 'dark' ? "#18CCFC" : '#60DDFF'} stopOpacity="0"></stop>
                            <stop stopColor={mode === 'dark' ? "#18CCFC" : '#60DDFF'}></stop>
                            <stop offset="0.325" stopColor={mode === 'dark' ? "#6344F5" : '#856BFF'}></stop>
                            <stop offset="1" stopColor={mode === 'dark' ? "#AE48FF" : '#C276FF'} stopOpacity="0"></stop>
                        </motion.linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="absolute -right-0 xl:-right-20 -top-11 hidden sm:block">
                <motion.div
                transition={{ duration: 0.2, delay: 0.5 }}
                animate={{
                    boxShadow: scrollYProgress.get() > 0
                        ? "none"
                        : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
                className=" h-4 w-4 rounded-full border-[2px] border-violet-500 shadow-sm flex items-center justify-center">
                    <motion.div
                        transition={{
                            duration: 0.2,
                            delay: 0.5,
                        }}
                        animate={{
                            backgroundColor: scrollYProgress.get() > 0 ? "violet" : "var(--emerald-500)",
                            borderColor: scrollYProgress.get() > 0 ? "violet" : "violet",
                        }}
                        className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
                    />
                </motion.div>

                <svg
                viewBox={`0 60 20 ${svgHeight}`}
                width="20"
                height={svgHeight }
                className=" ml-[7px]"
                aria-hidden="true">
                    {svgValue.map((value, index) => (
                        <React.Fragment key={index}>
                            <motion.path
                                d={`M 19 0V -36 l -18 -24 V ${svgHeight * value.pathValue} l 18 24V ${svgHeight}`}
                                fill="none"
                                stroke= {mode === 'dark' ? "#737373" : '#C0C0C0'}
                                strokeOpacity="0.16"
                                transition={{ duration: 10 }}
                            ></motion.path>
                            
                            <motion.path
                                d={`M 19 0V -36 l -18 -24 V ${svgHeight * value.gradientValue} l 18 24V ${svgHeight}`}
                                fill="none"
                                stroke="url(#gradient)"
                                strokeWidth="1.85"
                                className="motion-reduce:hidden"
                                transition={{ duration: 10 }}
                            ></motion.path>
                        </React.Fragment>
                    ))}

                    <defs>
                        <motion.linearGradient
                        id="gradient"
                        gradientUnits="userSpaceOnUse"
                        x1="0"
                        x2="0"
                        y1={y1}
                        y2={y2}>
                            <stop stopColor={mode === 'dark' ? "#18CCFC" : '#60DDFF'} stopOpacity="0"></stop>
                            <stop stopColor={mode === 'dark' ? "#18CCFC" : '#60DDFF'}></stop>
                            <stop offset="0.325" stopColor={mode === 'dark' ? "#6344F5" : '#856BFF'}></stop>
                            <stop offset="1" stopColor={mode === 'dark' ? "#AE48FF" : '#C276FF'} stopOpacity="0"></stop>
                        </motion.linearGradient>
                    </defs>
                </svg>
            </div>


            <div className="absolute -top-11 left- hidden sm:block">
                <motion.div
                transition={{ duration: 0.2, delay: 0.5 }}
                animate={{
                    boxShadow: scrollYProgress.get() > 0
                        ? "none"
                        : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
                className=" h-4 w-4 rounded-full border-[2px] border-violet-500 shadow-sm flex items-center justify-center">
                    <motion.div
                        transition={{
                            duration: 0.2,
                            delay: 0.5,
                        }}
                        animate={{
                            backgroundColor: scrollYProgress.get() > 0 ? "violet" : "var(--emerald-500)",
                            borderColor: scrollYProgress.get() > 0 ? "violet" : "violet",
                        }}
                        className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
                    />
                </motion.div>
            
                <svg
                viewBox={`0 60 20 ${svgHeight}`}
                width="20"
                height={svgHeight }
                className=" ml-[7px]"
                aria-hidden="true">
                    <React.Fragment>
                        <motion.path
                            d={`M 19 0V -36 l -18 -24 V ${svgHeight * 0.06} l 18 24V ${svgHeight} M 18 0V -36 l -18 -24 V ${svgHeight * 0.3} `}
                            fill="none"
                            stroke= {mode === 'dark' ? "#737373" : '#C0C0C0'}
                            strokeOpacity="0.16"
                            transition={{ duration: 10 }}
                        ></motion.path>
                        
                        <motion.path
                            d={`M 18 0V -36 l -18 -24 V ${svgHeight * 0.06} l 18 29V ${svgHeight} M 18 0V -36 l -18 -24 V ${svgHeight * 0.3} `}
                            fill="none"
                            stroke="url(#gradient)"
                            strokeWidth="1.85"
                            className="motion-reduce:hidden"
                            transition={{ duration: 10 }}
                        ></motion.path>
                    </React.Fragment>

                    <defs>
                        <motion.linearGradient
                        id="gradient"
                        gradientUnits="userSpaceOnUse"
                        x1="0"
                        x2="0"
                        y1={y1}
                        y2={y2}>
                            <stop stopColor={mode === 'dark' ? "#18CCFC" : '#60DDFF'} stopOpacity="0"></stop>
                            <stop stopColor={mode === 'dark' ? "#18CCFC" : '#60DDFF'}></stop>
                            <stop offset="0.325" stopColor={mode === 'dark' ? "#6344F5" : '#856BFF'}></stop>
                            <stop offset="1" stopColor={mode === 'dark' ? "#AE48FF" : '#C276FF'} stopOpacity="0"></stop>
                        </motion.linearGradient>
                    </defs>
                </svg>
            </div>
            
            <div ref={contentRef}>{children}</div>
        </motion.div>
    );
};
