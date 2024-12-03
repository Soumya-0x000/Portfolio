import { useTheme } from "../../helpingComponents/hook/ThemeContext";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

export const Institutions = ({
    logo,
    course,
    name,
    duration,
    currentState,
}) => {
    const { mode } = useTheme();

    return (
        <motion.div
            initial={{ y: 700 }}
            animate={{ y: 0, transition: { duration: 0.8 } }}
            className={`
            flex flex-col sm:flex-row items-center justify-center gap-x-4 xl:gap-x-14 gap-y-4 rounded-lg 
            ${mode === "dark" ? "bg-slate-800" : "bg-slate-100"} 
            px-1.5 md:px-4 lg:px-8 py-2 md:py-4 lg:py-5 `}
        >
            <div className="w-fit flex md:items-center justify-center lg:justify-normal">
                <div className="rounded-lg md:rounded-full overflow-hidden w-[170px] sm:w-[140px] md:w-[120px] lg:w-[160px] xl:w-[180px] lg:h-fit">
                    <img src={logo} className="w-full h-full" />
                </div>
            </div>

            <div
                className={`${
                    mode === "dark" ? "bg-slate-900" : "bg-slate-200"
                } rounded-xl lg:mt-0 px-2 lg:px-6 py-2 flex flex-col justify-between gap-y-6 xl:gap-y-7 w-full`}
            >
                <span
                    className={`text-[17px] md:text-lg lg:text-xl xl:text-2xl 2xl:text-[32px] ${
                        mode === "dark" ? "text-blue-300" : "text-blue-800"
                    } `}
                >
                    {course}
                </span>

                <span
                    className={`flex flex-col gap-y-1 text-[14px] lg:text-[15px] xl:text-[17px] ${
                        mode === "dark" ? "text-rose-100" : "text-rose-800"
                    }`}
                >
                    <span className={``}>{name}</span>
                    <span
                        className={`text-[14px] xl:text-[16px] ${
                            mode === "dark"
                                ? "text-green-100"
                                : "text-green-800"
                        }`}
                    >
                        {duration}
                    </span>
                </span>

                <span
                    className={` ${
                        mode === "dark" ? "text-violet-300" : "text-violet-800"
                    } font-bold`}
                >
                    {currentState}
                </span>
            </div>
        </motion.div>
    );
};

Institutions.propTypes = {
    logo: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    currentState: PropTypes.string.isRequired,
};
