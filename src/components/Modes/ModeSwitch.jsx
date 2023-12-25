import { motion } from "framer-motion";
import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 lg:px-6 py-2 lg:py-3 transition-colors relative z-10";

const ModeSwitch = () => {
    const [selected, setSelected] = useState("light");
    return (
        <div
        className={`flex items-center justify-center rounded-full transition-colors ${selected === "light" ? "bg-blue-300" : "bg-blue-900"} h-fit `}
        >
            <SliderToggle selected={selected} setSelected={setSelected} />
        </div>
    );
};

const SliderToggle = ({ selected, setSelected }) => {
    return (
        <div className="relative flex w-full lg:w-fit items-center rounded-full justify-around">
            <button
                className={`${TOGGLE_CLASSES} ${
                selected === "light" ? "text-white" : "text-slate-300"}`}
                onClick={() => {
                    setSelected("light")
                }}
            >
                <FiMoon className="relative z-10 text-lg lg:text-sm" />
                <span className="relative z-10">Light</span>
            </button>

            <button
                className={`${TOGGLE_CLASSES} ${selected === "dark" ? "text-white" : "text-slate-800"}`}
                onClick={() => {
                    setSelected("dark")
                }}
            >
                <FiSun className="relative z-10 text-lg lg:text-sm" />
                <span className="relative z-10">Dark</span>
            </button>

            <div
                className={`absolute inset-0 z-0 flex ${selected === "dark" ? "justify-end" : "justify-start"}`}
            >
                <motion.span
                layout
                transition={{ type: "spring", damping: 15, stiffness: 250 }}
                className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
                />
            </div>
        </div>
    );
};

export default ModeSwitch;