import React, { useState } from 'react'
import { RxReset } from "react-icons/rx";
import { VscSend } from "react-icons/vsc";
import { useTheme } from '../../helpingComponents/hook/ThemeContext';
import axios from 'axios';
import LoadingAnimation from '../../helpingComponents/animate/LoadingAnimation';

const Form = () => {
    const {mode} = useTheme()
    const [fstName, setFstName] = useState('')
    const [midName, setMidName] = useState('')
    const [lstName, setLstName] = useState('')
    const [mail, setMail] = useState('')
    const [msg, setMsg] = useState('')
    const [isSending, setIsSending] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSending(true)

        const fullName = midName 
            ? `${fstName} ${midName} ${lstName}` 
            : `${fstName} ${lstName}`
        
        const serviceID = 'service_wll1dya'
        const templateID = 'template_3ypazqn'
        const publicKey = '7SkVGMf1sNiNIIHb3'
        
        const data = {
            service_id: serviceID,
            template_id: templateID,
            user_id: publicKey,
            template_params: {
                from_name: fullName,
                from_email: mail,
                to_name: 'Soumya Sankar Das',
                message: msg,
            }
        }

        if (fstName.trim().length >= 4 && midName.trim().length >= 0 && lstName.trim().length >= 3 && mail.trim().length >= 15 && msg.trim().length >= 2) {
            try {
                await axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
                setIsSending(false)
                setFstName('')
                setMidName('')
                setLstName('')
                setMail('')
                setMsg('')        
            } catch (error) {
                console.error(error)
                alert(`Error occurred....💔💔🥺🥺`)
                setIsSending(false)
            }
        } else {
            setIsSending(false)
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
            <form className={`w-full`}>
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
                        <span className=''>Reset</span>
                        <div className={`rounded-full ${mode === 'dark' ? 'bg-indigo-800' : 'bg-indigo-400'} p-3 text-xl`}>
                            <RxReset />
                        </div>
                    </button>

                    <button 
                    type="submit" 
                    onClick={handleSubmit}
                    className={`flex items-center justify-center gap-x-14 rounded-full pl-3 ${mode === 'dark' ? 'bg-blue-950 hover:bg-indigo-800' : 'bg-blue-200 hover:bg-indigo-400 hover:text-white'}  transition-all`}>
                        <span className=''>Send</span>
                        <div className={`rounded-full ${mode === 'dark' ? 'bg-indigo-800' : 'bg-indigo-400'} p-3 text-xl`}>
                            <VscSend />
                        </div>
                    </button>
                </div>
            </form>

            {isSending && (
                <div className=' fixed top-0 left-0 w-full h-full'>
                    <LoadingAnimation/>
                </div>
            )}
        </>
    )
}

export default Form