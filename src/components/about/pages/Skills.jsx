import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../../../helpingComponents/hook/ThemeContext'
import skillsData from './SkillsData'

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
  
const generateSquares = (mode, isShuffle) => {
    return (
        shuffle(skillsData, isShuffle).map((sq) => (
            <motion.div
            key={sq.id}
            layout
            transition={{ duration: 1.5, type: 'spring' }}
            className={`w-[70px] sm:w-[80px] lg:w-[95px] 2xl:w-[110px] h-[70px] sm:h-[80px] lg:h-[95px] 2xl:h-[110px] rounded-full bg-center object-cover object-center p-[2px] cursor-pointer shadow-lg ${sq.shadow} mx-auto `}
            >
                <div className={`bg-slate p-2 rounded-full h-full w-full flex items-center justify-center overflow-hidden ${mode === 'dark' ? 'hover:bg-slate-800' : 'hover:bg-slate-200'} transition-all`}>
                    {(sq.type === 'svg') 
                        ? <sq.src/> 
                        : <img src={sq.src} className='w-full h-full'/>
                    }
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
