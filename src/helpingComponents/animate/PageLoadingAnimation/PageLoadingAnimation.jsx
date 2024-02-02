import React from 'react'
import './PageLoadingAnimation.css'

const PageLoadingAnimation = () => {
    return (
        <div className='fixed flex items-center justify-center top-0 left-0 w-full h-screen z-40 bg-slate-800'>
            <div class="loader">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
        </div>
    )
}

export default PageLoadingAnimation