import { useRef, useState } from "react";
import { useTheme } from "../hook/ThemeContext";

export const ResumeBtnSopLight = ({children, icon}) => {
    const {mode} = useTheme()
    const divRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current || isFocused) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`relative  px-3 md:px-6 py-2 rounded-lg text-md md:text-lg ring-[1px] ${mode === 'dark' ? 'ring-white text-light bg-darkSlate' : 'ring-slate-700 bg-[#edfaff]'} flex items-center justify-center flex-shrink-0 overflow-hidden`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-500"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, #60fdd863, transparent 40%)`,
                }}
            />
            {icon !== null ? (
                <div className="flex flex-shrink-0 gap-x-3 items-center justify-center">
                    {icon}
                    {children}
                </div>
            ) : (
                {children}        
            )}
        </div>
    );
};
