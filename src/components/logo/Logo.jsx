import { motion } from 'framer-motion'
import React from 'react'

const Logo = () => {
    return (
        <motion.span 
        onClick={() => navigate(`/`)}
        className='font-bold cursor-pointer bg-slate-800 text-white text-[21px] h-12 w-12 flex items-center justify-center rounded-full p-[32px] ring-2 ring-white'
        whileHover={{
            backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
            transition: {duration: 1, repeat: Infinity}
        }}>
            SSD
        </motion.span>
    )
}

export default Logo