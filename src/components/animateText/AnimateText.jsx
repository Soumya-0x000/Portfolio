import { useRef, useState } from "react";
import { RiAccountCircleLine } from "react-icons/ri";
import { motion } from "framer-motion";

const AnimateText = ({mainText}) => {
    return (
        <div className="grid place-content-center bg-slate-900 p-1 rounded-xl">
            <EncryptButton mainText={mainText} />
        </div>
    );
};

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;

const CHARS = "!@#$%^&*():{};|,.<>/?";

const EncryptButton = ({mainText}) => {
    const intervalRef = useRef(null);

    const [text, setText] = useState(mainText);

    const scramble = () => {
        let pos = 0;

        intervalRef.current = setInterval(() => {
            const scrambled = mainText.split("")
                .map((char, index) => {
                    if (pos / CYCLES_PER_LETTER > index) {
                        return char;
                    }

                    const randomCharIndex = Math.floor(Math.random() * CHARS.length);
                    const randomChar = CHARS[randomCharIndex];

                    return randomChar;
                }).join("");

            setText(scrambled);
            pos++;

            if (pos >= mainText.length * CYCLES_PER_LETTER) {
                stopScramble();
            }
        }, SHUFFLE_TIME);
    };

    const stopScramble = () => {
        clearInterval(intervalRef.current || undefined);

        setText(mainText);
    };

    return (
        <motion.button
        whileHover={{scale: 1.025}}
        whileTap={{scale: 0.975}}
        className="group relative overflow-hidden rounded-lg border-[1px] border-slate-500 bg-slate-700 px-2 lg:px-4 py-1 lg:py-2 font-mono font-medium uppercase text-slate-300 transition-colors hover:text-indigo-300"
        onMouseEnter={scramble}
        onMouseLeave={stopScramble}>
            <div className="relative z-10 flex items-center gap-2">
                <RiAccountCircleLine className="text-xl" />
                <span>{text}</span>
            </div>
            <motion.span
                initial={{y: "100%"}}
                animate={{y: "-100%"}}
                transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 1,
                    ease: "linear",
                }}
                className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
            />
        </motion.button>
    );
};

export default AnimateText;