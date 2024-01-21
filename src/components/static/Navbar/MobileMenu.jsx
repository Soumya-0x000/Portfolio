import { motion } from "framer-motion";
import { useTheme } from "../../../helpingComponents/hook/ThemeContext";
import { useNavigate } from "react-router-dom";
import { useBgContext } from "../../../helpingComponents/hook/BgBlurContext";
import { useLayoutEffect, useState } from "react";

const Option = ({ text, icon, link, mode, setOpen }) => {
    const navigate = useNavigate()
    const handleCLick = () => {
        setOpen(false)
        navigate(link)
    }

    return (
        <motion.li
        variants={itemVariants}
        onClick={handleCLick}
        className={`flex items-center gap-2 w-full p-2 md:p-3 text-sm md:text-[17px] font-medium whitespace-nowrap rounded-md hover:font-bold ${mode === 'dark' ? 'text-blue-300 hover:text-indigo-600 hover:bg-indigo-200' : 'text-indigo-800 hover:bg-indigo-300'} transition-colors cursor-pointer`}>
            <motion.span variants={actionIconVariants}>{icon}</motion.span>
            <span>{text}</span>
        </motion.li>
    );
};

const MobileMenu = ({ mobileMenuLinks }) => {
    const {mode} = useTheme()
    const {open, setOpen, setRecord} = useBgContext();
    const [height, setHeight] = useState(window.innerHeight <= 500)

    useLayoutEffect(() => {
        const resetHeight = () => {
            const innerHeight = window.innerHeight
            innerHeight <= 500 ? setHeight(true) : setHeight(false)
        }
        resetHeight()

        window.addEventListener('resize', resetHeight)
        return () => {
            window.removeEventListener('resize', resetHeight)
        }
    }, [])

    const handleClick = () => {
        setOpen((pv) => !pv)
        setRecord((pv) => !pv)
    }

    return (
        <div className="flex items-center justify-center">
            <motion.div animate={open ? "open" : "closed"} className="relative">
                <div className={`flex items-center justify-center flex-col gap-y-1 rounded-full ${mode === 'dark' ? 'bg-blue-800' : 'bg-blue-900'} w-9 h-9 transition-all cursor-pointer`}
                onClick={handleClick}>
                    <div className={`w-5 transition-all ${open ? 'rotate-45 translate-y-[3px]' : 'rotate-0'} h-[2px] bg-blue-300`}></div>
                    <div className={`w-5 h-[2px] ${!open ? 'block' : 'hidden'} bg-blue-300 `}></div>
                    <div className={`w-5 h-[2px] bg-blue-300 ${open ? '-rotate-45 -translate-y-[3px]' : 'rotate-0'}  transition-all`}></div>
                </div> 

                <motion.ul 
                initial={wrapperVariants.closed}
                variants={wrapperVariants}
                style={{ originY: "top", translateX: "-50%" }}
                className={`flex flex-col gap-2 p-2 rounded-lg  ${mode === 'dark' ? 'bg-blue-950' : 'bg-blue-200'} shadow-xl w-48 sm:w-[20rem] md:w-[26rem] ${height && 'h-[10.3rem] overflow-auto'} fixed left-1/2 -translate-x-1/2 top-[40%] -translate-y-1/2`}>
                    {mobileMenuLinks.map((item, index) => (
                        <Option 
                            setOpen={setOpen} 
                            icon={item.icon} 
                            text={item.title} 
                            link={item.link}
                            key={index}
                            mode={mode}
                        />
                    ))}
                </motion.ul>
            </motion.div>
        </div>
    );
};
  
export default MobileMenu;
  
const wrapperVariants = {
    open: {
        scaleY: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
    closed: {
        scaleY: 0,
        transition: {
            when: "afterChildren",
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: {
            when: "beforeChildren",
        },
    },
    closed: {
        opacity: 0,
        y: -15,
        transition: {
            when: "afterChildren",
        },
    },
};

const actionIconVariants = {
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
};