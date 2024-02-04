import React from 'react'
import './PageLoadingAnimation.css'
import { useTheme } from '../../hook/ThemeContext'

const PageLoadingAnimation = () => {
    const {mode} = useTheme()

    return (
        <div className={`fixed flex items-center justify-center top-0 left-0 w-full h-screen z-30 ${mode === 'dark' ? 'bg-slate-800' : 'bg-slate-100'}`}>
            <div className="loader">
                <div className={`dot border-[2px] ${mode === 'dark' ? 'border-slate-800' : 'border-slate-100' } `}></div>
                <div className={`dot border-[2px] ${mode === 'dark' ? 'border-slate-800' : 'border-slate-100' } `}></div>
                <div className={`dot border-[2px] ${mode === 'dark' ? 'border-slate-800' : 'border-slate-100' } `}></div>
                <div className={`dot border-[2px] ${mode === 'dark' ? 'border-slate-800' : 'border-slate-100' } `}></div>
                <div className={`dot border-[2px] ${mode === 'dark' ? 'border-slate-800' : 'border-slate-100' } `}></div>
            </div>
        </div>
    )
}

export default PageLoadingAnimation
