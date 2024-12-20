import { useEffect, useRef, useState } from "react";
import { useTheme } from "../../helpingComponents/hook/ThemeContext";
import { TextReveal } from "../../helpingComponents/textReveal/TextReveal";
import FirstPart from "./pages/FirstPart";
import Skills from "./pages/Skills";
import { useBgContext } from "../../helpingComponents/hook/BgBlurContext";
import StarsCanvas from "../../helpingComponents/animate/StarCanvas";
import PageLoadingAnimation from "../../helpingComponents/animate/PageLoadingAnimation/PageLoadingAnimation";
import Footer from "../static/Footer/Footer";

const About = () => {
    const { mode } = useTheme();
    const { open } = useBgContext();
    const containerRef = useRef(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1600);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                <PageLoadingAnimation />
            ) : (
                <div
                    className={`${
                        mode === "dark" ? "bg-darkSlat text-lighter" : ""
                    } ${
                        open && "blur-[7px] cursor-not-allowed"
                    } px-5 md:px-10 pt-[70px] sm:pt-[60px] min-h-screen`}
                >
                    <StarsCanvas starsCount={5000} />
                    {/* heading */}
                    <div
                        className={` text-center text-[27px] sm:text-5xl md:text-[70px] lg:text-[80px] font-extrabold 2xl:text-8xl pt-8 xl:pt-14 lg:pt-16 lg:px-20 tracking-wide ${
                            mode === "dark"
                                ? "text-indigo-400"
                                : "text-indigo-500"
                        } `}
                        ref={containerRef}
                    >
                        <TextReveal child={"Passion Fuels Purpose!"} />
                    </div>

                    <div className="md:px-2 xl:px-6 2xl:px-32">
                        <FirstPart />
                        <Skills />
                    </div>
                </div>
            )}

            {open && <div className=" fixe top-0 left-0 w-full h-full" />}

            <Footer />
        </>
    );
};

export default About;
