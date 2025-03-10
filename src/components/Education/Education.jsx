import { useEffect, useRef, useState } from "react";
import { useTheme } from "../../helpingComponents/hook/ThemeContext";
import { TextReveal } from "../../helpingComponents/textReveal/TextReveal";
import vuLogo from "../../assets/education/vu_logo.jpg";
import mdnCLG from "../../assets/education/mdnCLG.png";
import school from "../../assets/education/school.jpg";
import { useBgContext } from "../../helpingComponents/hook/BgBlurContext";
import StarCanvas from "../../helpingComponents/animate/StarCanvas";
import { TracingBeam } from "./TracingBeam";
import PageLoadingAnimation from "../../helpingComponents/animate/PageLoadingAnimation/PageLoadingAnimation";
import Footer from "../static/Footer/Footer";
import { Institutions } from "./InstitutionCard";

const Education = () => {
    const { mode } = useTheme();
    const { open } = useBgContext();
    const containerRef = useRef();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1600);

        return () => clearTimeout(timer);
    }, []);

    const academicData = [
        {
            name: "Vidyasagar University",
            course: "Master of Computer Application",
            duration: "2022 - 2024",
            logo: vuLogo,
            currentStatus: "Completed(81%)",
        },
        {
            name: "Midnapore College",
            course: "Bachelor of Computer Application",
            duration: "2019 - 2021",
            logo: mdnCLG,
            currentStatus: "Graduated (81.24%)",
        },
        {
            name: "Sri Narayan Vidyabhaban Boys High School",
            course: "Higher Secondary (10 + 2)",
            duration: "2016 - 2018",
            logo: school,
            currentStatus: "Passed (68.80%)",
        },
        {
            name: "Sri Narayan Vidyabhaban Boys High School",
            course: "Secondary (10)",
            duration: "2014 - 2016",
            logo: school,
            currentStatus: "Passed (82%)",
        },
    ];

    return (
        <>
            {loading ? (
                <PageLoadingAnimation />
            ) : (
                <div
                    className={`${mode === "dark" ? "text-lighter" : ""} ${
                        open && "blur-[7px] cursor-not-allowed"
                    } pt-[80px] sm:pt-[100px] pl-3 pr-2 sm:pl-10 sm:pr-10 sm:px-10 lg:px-8 2xl:px-28 pb-10 min-h-screen`}
                >
                    <StarCanvas starsCount={"5000"} />
                    <div
                        className={`text-[30px] sm:text-5xl md:text-[55px] lg:text-[73px] 2xl:text-8xl font-extrabold pt-8 xl:pt-14 lg:pt-16 lg:px-20 tracking-wide ${
                            mode === "dark"
                                ? "text-indigo-400"
                                : "text-indigo-500"
                        } z-20 flex items-center justify-center gap-x-5`}
                    >
                        <TextReveal child={`My Education `} />
                    </div>

                    <TracingBeam>
                        <div
                            className="mt-4 sm:mt-9 xl:mt-14  w-full relative flex justify-center items-center"
                            ref={containerRef}
                        >
                            <div className="space-y-14 flex flex-col z-20">
                                {academicData.map((item, index) => (
                                    <Institutions
                                        key={index}
                                        logo={item.logo}
                                        course={item.course}
                                        name={item.name}
                                        duration={item.duration}
                                        currentState={item.currentStatus}
                                    />
                                ))}
                            </div>
                        </div>
                    </TracingBeam>
                </div>
            )}

            {open && <div className=" fixed top-0 left-0 w-full h-full" />}

            <Footer />
        </>
    );
};

export default Education;
