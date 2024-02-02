import React from 'react'
import './PageLoadingAnimation.css'

const PageLoadingAnimation = () => {
    return (
        <div className='fixed flex items-center justify-center top-0 left-0 w-full h-screen z-40 bg-slate-800'>
            <div className="loader">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    )
}

export default PageLoadingAnimation