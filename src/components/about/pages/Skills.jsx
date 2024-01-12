import React, { useEffect, useRef, useState } from 'react'
import html from '../../../assets/skills/html.svg'
import css from '../../../assets/skills/css.svg'
import js from '../../../assets/skills/js.svg'
import redux from '../../../assets/skills/redux.svg'
import react from '../../../assets/skills/react.png'
import framer from '../../../assets/skills/framer-motion.svg'
import Firebase from '../../../assets/skills/firebase.svg'
import mui from '../../../assets/skills/material-ui.png'
import tailwind from '../../../assets/skills/tailwind-css.svg'
import sass from '../../../assets/skills/sass.svg'
import git from '../../../assets/skills/git.svg'
import github from '../../../assets/skills/github.svg'
import { motion } from 'framer-motion'
import { useTheme } from '../../../helpingComponents/hook/ThemeContext'

const shuffle = (array) => {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
};

const squareData = [
    {id: 1, name: 'HTML', src: html, shadow: 'shadow-orange-400', border: 'border-orange-400'},
    {id: 2, name: 'CSS', src: css, shadow: 'shadow-blue-400', border:'border-blue-400'},
    {id: 3, name: 'JavaScript', src: js, shadow: 'shadow-yellow-400', border:'border-yellow-400'},
    {id: 4, name: 'Redux', src: redux, shadow: 'shadow-violet-400', border: 'border-violet-400'},
    {id: 5, name: 'React', src: react, shadow: 'shadow-cyan-400', border: 'border-cyan-400'},
    {id: 6, name: 'Tailwind CSS', src: tailwind, shadow: 'shadow-sky-400', border: 'border-sky-400'},
    {id: 7, name: 'SASS', src: sass, shadow: 'shadow-pink-400', border: 'border-pink-400'},
    {id: 8, name: 'Framer Motion', src: framer, shadow: 'shadow-violet-700', border: 'border-violet-700'},
    {id: 9, name: 'Firebase', src: Firebase, shadow: 'shadow-yellow-400', border: 'border-yellow-400'},
    {id: 10, name: 'Material-UI', src: mui, shadow: 'shadow-blue-600', border: 'border-blue-600'},
    {id: 11, name: 'Git', src: git, shadow: 'shadow-red-400', border: 'border-red-400'},
    {id: 12, name: 'GitHub', src: github, shadow: 'shadow-slate-400', border: 'border-slate-400'},
];
  
const generateSquares = (mode, isShuffle) => {
    return (
        shuffle(squareData, isShuffle).map((sq) => (
            <motion.div
            key={sq.id}
            layout
            transition={{ duration: 1.5, type: 'spring' }}
            className={`w-[70px] sm:w-[80px] lg:w-[95px] 2xl:w-[110px] h-[70px] sm:h-[80px] lg:h-[95px] 2xl:h-[110px] rounded-full bg-center object-cover object-center p-[2px] cursor-pointer shadow-lg ${sq.shadow} mx-auto `}
            >
                <div className={`bg-slate p-2 rounded-full h-full w-full flex items-center justify-center overflow-hidden ${mode === 'dark' ? 'hover:bg-slate-800' : 'hover:bg-slate-200'} transition-all`}>
                    <img src={sq.src} className='w-full h-full'/>
                </div>
            </motion.div>
        ))
    );
};
    
const ShuffleGrid = ({mode, isShuffle}) => {
    const timeoutRef = useRef(null);
    const [squares, setSquares] = useState(generateSquares(mode));

    useEffect(() => {
        isShuffle && shuffleSquares();

        return () => clearTimeout(timeoutRef.current);
    }, [isShuffle]);

    const shuffleSquares = () => {
        setSquares(generateSquares(mode));

        timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    return (
        <div className="w-full grid grid-cols-3 sm:grid-cols-4 2xl:grid-cols-6 gap-y-6 lg:gap-y-[4rem] gap-x-5 z-40">
            {squares.map((sq) => sq)}
        </div>
    );
};

const Skills = () => {
    const {mode} = useTheme()
    const [willShuffle, setWillShuffle] = useState(true)

    return (
        <div className='flex items-center flex-col gap-y-8 sm:gap-y-[50px] mt-20 pb-24'>
            <span className='flex items-center justify-center bo rounded-full'>
                <motion.span 
                className={`px-6 md:px-7 xl:px-9 py-1 md:py-2 xl:py-3 text-lg sm:text-xl lg:text-[25px] font-semibold rounded-full ${mode === 'dark' ? 'bg-slate-800' : 'bg-slate-300'}`}
                initial={{y: 400, scale: 1}}
                animate={{y: 0, scale: 1, transition:{duration: .5}}}
                >
                    <span className={`bg-gradient-to-br ${mode === 'dark' ? 'from-rose-300 via-indigo-300 to-green-300' : 'from-rose-400 via-indigo-500 to-green-500'} bg-clip-text text-transparent z-40`}>I'm proficient💫 in</span>
                </motion.span>
            </span>

            <div 
            className={`w-full  ${willShuffle ? '' : 'cursor-grab'}`} 
            onMouseEnter={() => setWillShuffle(false)}
            onMouseLeave={() => setWillShuffle(true)}>
                <ShuffleGrid mode={mode} isShuffle={willShuffle} />
            </div>
        </div>
    )
}

export default Skills