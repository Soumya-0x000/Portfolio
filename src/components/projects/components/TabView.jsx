import { motion } from "framer-motion";
import { useState } from "react";
import { v4 } from "uuid";
import { useTheme } from "../../../helpingComponents/hook/ThemeContext";

const TabView = ({options, setTabView}) => {
    const [selected, setSelected] = useState(options[0].name);
    const {mode} = useTheme()

    return (
        <div className={`${mode === "light" ? "bg-green-200 ring-[1px] ring-violet-600" : "bg-slate-800"} rounded-full flex items-center flex-wrap gap-2`}>
            {options.map((tab) => (
                <Chip
                    text={tab.name}
                    icon={tab.icon}
                    selected={selected === tab.name}
                    setSelected={setSelected}
                    key={v4()}
                    mode={mode}
                    setTabView={setTabView}
                />
            ))}
        </div>
    );
};

const Chip = ({ text, icon, selected, setSelected, mode, setTabView }) => {
    const handleClick = () => {
        setSelected(text)
        setTabView(text)
    }

    return (
        <button
        onClick={handleClick}
        className={`${
            selected
            ? "text-white"
            : ` ${mode === 'dark' ? 'text-slate-300' : 'text-green-800'}`
        } text-sm transition-colors px-4 py-1 sm:py-2 rounded-full relative`}>
            <span className="relative z-10 flex items-center justify-center gap-x-2 text-[15px] md:text-[17px]">{text} {icon}</span>
            {selected && (
                <motion.span
                layoutId="pill-tab"
                transition={{ type: "spring", duration: 0.5 }}
                className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full"
                ></motion.span>
            )}
        </button>
    );
};

export default TabView;