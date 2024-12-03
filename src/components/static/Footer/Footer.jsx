import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../../../helpingComponents/hook/ThemeContext";
import { useBgContext } from "../../../helpingComponents/hook/BgBlurContext";

const Footer = () => {
    const { mode } = useTheme();
    const { open } = useBgContext();

    return (
        <>
            <div
                className={`px-[1rem] lg:px-16 py-6 border-t  space-y-3 flex items-center justify-center relative ${
                    mode === "dark"
                        ? "bg-darkBlue text-light border-t-blue-300"
                        : "border-t-black"
                } ${open && "blur-[7px] cursor-not-allowed"} `}
            >
                <div className="max-w-[1500px]">
                    <div
                        className={`text-justify w-full md:leading-[22px] text-[11px] sm:text-[14px] lg:text-[16px] z-10`}
                    >
                        Versatile frontend developer proficient in HTML, CSS,
                        JavaScript, and modern frameworks like React, and
                        Angular. Skilled in TypeScript for type-safe
                        development, with expertise in styling using Tailwind
                        CSS, SASS, and PrimeNG. Adept at state management with
                        Redux and experienced in integrating Supabase for
                        backend functionality. Knowledgeable in deploying
                        applications using Vercel and Netlify, with tools like
                        Vite for fast builds and Filepond for efficient file
                        uploads. Passionate about creating dynamic 3D
                        experiences with Three.js and fostering collaboration
                        using Git and GitHub. Dedicated to crafting responsive,
                        scalable, and user-focused web applications.
                    </div>

                    <div className="pt-6 flex flex-col gap-y-2 md:flex-row items-center justify-between">
                        <div className="">2023 © All Rights Reserved.</div>

                        <div className="flex items-center gap-2">
                            Built with
                            <FontAwesomeIcon
                                icon={faHeart}
                                style={{ color: "#f54d77" }}
                            />
                            by{" "}
                            <span
                                className={`border-b ${
                                    mode === "dark"
                                        ? "border-b-light"
                                        : "border-b-black"
                                }`}
                            >
                                Soumya
                            </span>
                        </div>

                        <div
                            className={`border-b ${
                                mode === "dark"
                                    ? "border-b-light"
                                    : "border-b-black"
                            }`}
                        >
                            Say Hello
                        </div>
                    </div>
                </div>
            </div>

            {open && <div className=" fixed top-0 left-0 w-full h-full" />}
        </>
    );
};

export default Footer;
