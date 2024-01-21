import React, { useState } from 'react'
import { useTheme } from '../../helpingComponents/hook/ThemeContext'
import { TextReveal } from '../../helpingComponents/textReveal/TextReveal'
import { RxReset } from "react-icons/rx";
import { VscSend } from "react-icons/vsc";
import { MdAttachEmail, MdPersonOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { useBgContext } from '../../helpingComponents/hook/BgBlurContext'
import StarsCanvas from '../../helpingComponents/animate/StarCanvas';

const Feedback = () => {
    const {mode} = useTheme()
    const {open} = useBgContext()
    const [fstName, setFstName] = useState('')
    const [midName, setMidName] = useState('')
    const [lstName, setLstName] = useState('')
    const [mail, setMail] = useState('')
    const [msg, setMsg] = useState('')

    const handleSubmit = () => {
        if (fstName.trim().length >= 4 && midName.trim().length > 0 && lstName.trim().length >= 3 && mail.trim().length >= 15 && msg.trim().length >= 2) {
            alert('Congratulations.....🥳🥳🥳🥳🥳')
        } else {
            alert('Fill-up all required fields')
        }
    }

    const handleReset = () => {
        setFstName('')
        setMidName('')
        setLstName('')
        setMail('')
        setMsg('')
    }

    return (
        <>
            <div className={`${mode === 'dark' ? 'text-lighter' : ''} ${open && 'blur-[7px] cursor-not-allowed'} pt-[80px] sm:pt-[100px] px-1 sm:px-5 lg:px-8 2xl:px-28`}>
                <StarsCanvas/>
                <div className={`text-[25px] sm:text-5xl md:text-[55px] lg:text-[66px] 2xl:text-[80px] font-extrabold pt-8 xl:pt-14 lg:pt-16 lg:px-14 tracking-wide ${mode === 'dark' ? 'text-indigo-400' : 'text-indigo-500'} z-20 flex items-center justify-center gap-x-5`}>
                    <TextReveal child={`Let me know your thoughts!`}/>
                </div>

                <div className='mt-14 px-1 flex flex-col lg:flex-row gap-x-5 xl:gap-x-16 gap-y-9 items-start justify-between'>
                    <div className='w-full space-y-5 lg:max-w-[30%]'>
                        <p className='text-xl'>Don't be shy!</p>
                        
                        <p className='opacity-60 text-[13px] text-justify'>
                            If you like my work, leave a message for me. So that I can know the impact of my efforts and understand how it has resonated with you. Your feedback is invaluable. Whether it's a suggestion, a word of appreciation, or constructive criticism, your messages provide the fuel that propels me forward.
                        </p>
                        
                        <div className='flex md:items-center lg:items-start justify-between flex-col md:flex-row lg:flex-col gap-y-2 lg:gap-y-4 xl:gap-y-6'>
                            <div className='flex items-center gap-x-4'>
                                <span className={`text-xl ${mode === 'dark' ? 'bg-indigo-800' : 'bg-indigo-200 text-indigo-800'} p-[10px] rounded-full`}><MdPersonOutline/></span>
                                Soumya Sankar Das
                            </div>

                            <a href="mailto:soumyadas429@gmail.com" target='_blank' rel='noopener noreferrer'>
                                <div className='flex items-center gap-x-4'>
                                    <span className={`text-xl ${mode === 'dark' ? 'bg-indigo-800' : 'bg-indigo-200 text-indigo-800'} p-[10px] rounded-full`}><MdAttachEmail/></span>
                                    soumyadas429@gmail.com
                                </div>
                            </a>

                            <a href="https://alvo.chat/3xaL" target='_blank' rel='noopener noreferrer'>
                                <span className='flex items-center gap-x-4'>
                                    <span className={`text-xl ${mode === 'dark' ? 'bg-indigo-800' : 'bg-indigo-200 text-indigo-800'} p-[10px] rounded-full`}><FaWhatsapp/></span>
                                    Chat with me
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* form */}
                    <div className='w-full'>
                        <div className=' w-full h-full space-y-4'>
                            <div className='w-full flex flex-col md:flex-row gap-y-4 gap-x-5'>
                                <input 
                                    type="text"
                                    placeholder='First name'
                                    value={fstName}
                                    onChange={(e) => setFstName(e.target.value)}
                                    className={`w-full md:w-1/3 rounded-full pl-6 pr-4 py-[12px] text-[14px] ${mode === 'dark' ? 'text-cyan-300 bg-slate-700 focus:ring-violet-300' : 'text-violet-600 bg-violet-200 focus:ring-indigo-700 placeholder:text-violet-400'} border-none outline-none focus:ring-[2px]`}
                                    min={5}
                                    max={20}
                                    required
                                />
                                <input 
                                    type="text"
                                    placeholder='Middle name'
                                    value={midName}
                                    onChange={(e) => setMidName(e.target.value)}
                                    className={`w-full md:w-1/3 rounded-full pl-6 pr-4 py-[12px] text-[14px] ${mode === 'dark' ? 'text-cyan-300 bg-slate-700 focus:ring-violet-300' : 'text-violet-600 bg-violet-200 focus:ring-indigo-700 placeholder:text-violet-400'} border-none outline-none focus:ring-[2px]`}
                                    min={5}
                                    max={20}
                                />
                                <input 
                                    type="text"
                                    placeholder='Last name'
                                    value={lstName}
                                    onChange={(e) => setLstName(e.target.value)}
                                    className={`w-full md:w-1/3 rounded-full pl-6 pr-4 py-[12px] text-[14px] ${mode === 'dark' ? 'text-cyan-300 bg-slate-700 focus:ring-violet-300' : 'text-violet-600 bg-violet-200 focus:ring-indigo-700 placeholder:text-violet-400'} border-none outline-none focus:ring-[2px]`}
                                    min={5}
                                    max={20}
                                    required
                                />
                            </div>

                            <div className='space-y-4 flex flex-col'>
                                <input 
                                    type="email"
                                    placeholder='Email address'
                                    value={mail}
                                    onChange={(e) => setMail(e.target.value)}
                                    className={`w-full rounded-full pl-6 pr-4 py-[12px] text-[14px] ${mode === 'dark' ? 'text-cyan-300 bg-slate-700 focus:ring-violet-300' : 'text-violet-600 bg-violet-200 focus:ring-indigo-700 placeholder:text-violet-400'} border-none outline-none focus:ring-[2px]`}
                                    min={18}
                                    max={40}
                                    required
                                /> 
                                <textarea 
                                    type="text"
                                    placeholder='Your message'
                                    value={msg}
                                    onChange={(e) => setMsg(e.target.value)}
                                    className={`w-full min-h-[16rem] rounded-xl pl-6 pr-4 py-[12px] text-[14px] ${mode === 'dark' ? 'text-cyan-300 bg-slate-700 focus:ring-violet-300' : 'text-violet-600 bg-violet-200 focus:ring-indigo-700 placeholder:text-violet-400'} border-none outline-none focus:ring-[2px]`}
                                    required
                                />
                            </div>
                        </div>
                        
                        {/* Button */}
                        <div className='mt-9 flex items-center justify-between mb-7 xl:mb-0'>
                            <button 
                            type="reset" 
                            onClick={handleReset}
                            className={`flex items-center justify-center gap-x-14 rounded-full pl-3 ${mode === 'dark' ? 'bg-blue-950 hover:bg-indigo-800' : 'bg-blue-200 hover:bg-indigo-400 hover:text-white'}  transition-all`}>
                                <span className='z-20'>Reset</span>
                                <div className={`rounded-full ${mode === 'dark' ? 'bg-indigo-800' : 'bg-indigo-400'} p-3 text-xl`}>
                                    <RxReset />
                                </div>
                            </button>

                            <button 
                            type="submit" 
                            onClick={handleSubmit}
                            className={`flex items-center justify-center gap-x-14 rounded-full pl-3 ${mode === 'dark' ? 'bg-blue-950 hover:bg-indigo-800' : 'bg-blue-200 hover:bg-indigo-400 hover:text-white'}  transition-all`}>
                                <span className='z-20'>Send</span>
                                <div className={`rounded-full ${mode === 'dark' ? 'bg-indigo-800' : 'bg-indigo-400'} p-3 text-xl`}>
                                    <VscSend  />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {open && (
                <div className=' fixed top-0 left-0 w-full h-full'/>
            )}
        </>
    )
}

export default Feedback