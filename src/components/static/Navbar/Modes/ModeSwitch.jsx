import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../../../../helpingComponents/hook/ThemeContext";

const TOGGLE_CLASSES =
    "text-sm font-medium flex items-center gap-2 px-3 lg:px-6 py-2 lg:py-3 transition-colors relative";

const ModeSwitch = () => {
    const { mode, toggleMode } = useTheme();

    return (
        <div
        className={`flex items-center justify-center rounded-full transition-colors ${
            mode === "light" ? "bg-green-200  ring-[1px] ring-violet-500" : "bg-slate-700"
        } h-fit`}>
            <SliderToggle mode={mode} toggleMode={toggleMode} />
        </div>
    );
};

const SliderToggle = ({ mode, toggleMode }) => {
    return (
        <div className={`relative flex w-full lg:w-fit items-center rounded-full justify-around`}>
            <button
            className={`${TOGGLE_CLASSES} ${
                mode === "light" ? "text-white" : "text-slate-300"
            } rounded-full z-10`}
            onClick={toggleMode}>
                <FiSun className="relative z-10 text-lg lg:text-sm" />
                <span className="relative z-10">Light</span>
            </button>

            <button
            className={`${TOGGLE_CLASSES} ${
                mode === "dark" ? "text-white" : "text-slate-800"
            } rounded-full z-10`}
            onClick={toggleMode}>
                <FiMoon className="relative z-1 text-lg lg:text-sm" />
                <span className="relative z-10">Dark</span>
            </button>

            <div
            className={`absolute inset-0  flex ${
                mode === "dark" ? "justify-end" : "justify-start"
            }`}>
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
