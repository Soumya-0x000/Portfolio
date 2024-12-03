import html from '../../../assets/skills/html.svg';
import css from '../../../assets/skills/css.svg';
import js from '../../../assets/skills/js.svg';
import redux from '../../../assets/skills/redux.svg';
import react from '../../../assets/skills/react.png';
import framer from '../../../assets/skills/framer-motion.svg';
import Supabase from '../../../assets/skills/supabase.png';
import mui from '../../../assets/skills/material-ui.png';
import tailwind from '../../../assets/skills/tailwind-css.svg';
import sass from '../../../assets/skills/sass.svg';
import git from '../../../assets/skills/git.svg';
import github from '../../../assets/skills/github.svg';
import vercel from '../../../assets/skills/vercel.png';
import vite from '../../../assets/skills/vite.png';
import netlify from '../../../assets/skills/netlify.png';
import filepond from '../../../assets/skills/filepond.png';
import threeJs from '../../../assets/skills/threeJs.png';
import typescript from '../../../assets/skills/typescript.png';
import nextjs from '../../../assets/skills/nextjs.png';
import angular from '../../../assets/skills/AngularJS.png';
import primeng from '../../../assets/skills/primeng.png';

const nextUiSvg = () => {
    return (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="46" fill="#9ca3af">
            <path d="M6.353 0h11.294A6.353 6.353 0 0 1 24 6.353v11.294A6.353 6.353 0 0 1 17.647 24H6.353A6.353 6.353 0 0 1 0 17.647V6.353A6.353 6.353 0 0 1 6.353 0Zm7.755 6.913h-.933v6.702a2.88 2.88 0 0 1-.362 1.45c-.24.424-.596.77-1.025 1-.443.244-.96.365-1.553.365-.592 0-1.108-.121-1.55-.364a2.603 2.603 0 0 1-1.024-1 2.865 2.865 0 0 1-.365-1.45V6.912h-.933v6.767a3.558 3.558 0 0 0 .489 1.862c.327.547.798.994 1.362 1.292.582.316 1.256.474 2.021.474.769 0 1.444-.157 2.024-.471a3.473 3.473 0 0 0 1.36-1.293c.33-.565.5-1.21.49-1.864V6.913Zm3.648 10.22V6.914h-.933v10.22h.933Z"></path>
        </svg>
    );
}

const skillsData = [
    {id: 1, name: 'HTML', src: html, type: 'image', shadow: 'shadow-orange-400', border: 'border-orange-400'},
    {id: 2, name: 'CSS', src: css, type: 'image', shadow: 'shadow-blue-400', border: 'border-blue-400'},
    {id: 3, name: 'JavaScript', src: js, type: 'image', shadow: 'shadow-yellow-400', border: 'border-yellow-400'},
    {id: 4, name: 'Redux', src: redux, type: 'image', shadow: 'shadow-violet-400', border: 'border-violet-400'},
    {id: 5, name: 'ReactJS', src: react, type: 'image', shadow: 'shadow-cyan-400', border: 'border-cyan-400'},
    {id: 6, name: 'Tailwind CSS', src: tailwind, type: 'image', shadow: 'shadow-sky-400', border: 'border-sky-400'},
    {id: 7, name: 'SASS', src: sass, type: 'image', shadow: 'shadow-pink-400', border: 'border-pink-400'},
    {id: 8, name: 'Framer Motion', src: framer, type: 'image', shadow: 'shadow-violet-700', border: 'border-violet-700'},
    {id: 9, name: 'Supabase', src: Supabase, type: 'image', shadow: 'shadow-green-400', border: 'border-yellow-400'},
    {id: 10, name: 'Material-UI', src: mui, type: 'image', shadow: 'shadow-blue-600', border: 'border-blue-600'},
    {id: 11, name: 'Git', src: git, type: 'image', shadow: 'shadow-red-400', border: 'border-red-400'},
    {id: 12, name: 'GitHub', src: github, type: 'image', shadow: 'shadow-slate-400', border: 'border-slate-400'},
    {id: 13, name: 'Vercel', src: vercel, type: 'image', shadow: 'shadow-slate-500', border: 'border-slate-600'},
    {id: 14, name: 'Vite', src: vite, type: 'image', shadow: 'shadow-violet-400', border: 'border-yellow-400'},
    {id: 15, name: 'Netlify', src: netlify, type: 'image', shadow: 'shadow-sky-400', border: 'border-sky-400'},
    {id: 16, name: 'Filepond', src: filepond, type: 'image', shadow: 'shadow-sky-400', border: 'border-sky-400'},
    {id: 17, name: 'Three JS', src: threeJs, type: 'image', shadow: 'shadow-gray-400', border: 'border-sky-400'},
    {id: 18, name: 'Next UI', src: nextUiSvg, type: 'svg', shadow: 'shadow-gray-400', border: 'border-gray-400'},
    {id: 19, name: 'TypeScript', src: typescript, type: 'image', shadow: 'shadow-sky-700', border: 'border-sky-700'},
    {id: 20, name: 'NextJS', src: nextjs, type: 'image', shadow: 'shadow-gray-500', border: 'border-gray-400'},
    {id: 21, name: 'AngularJS', src: angular, type: 'image', shadow: 'shadow-red-500', border: 'border-red-400'},
    {id: 22, name: 'PrimenNG', src: primeng, type: 'image', shadow: 'shadow-blue-600', border: 'border-blue-400'},
];

export default skillsData;
