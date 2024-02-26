import React, { useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BackgroundGradientAnimation } from './BackgroundGradientAnimation';
import ScanEncryptAnimationTextBtn from '../../helpingComponents/animate/ScanEncryptAnimationTextBtn';
import { TypewriterEffectSmooth } from '../../helpingComponents/animate/typeWriter/TypewriterEffectSmooth';

const Intro = () => {
    const navigate = useNavigate()
    const [text, setText] = useState(window.innerWidth <= 768 ? 'Explore' : 'Exploration Begins')
    const words = [
        { text: "Welcome" },
        { text: "buddy!" },
    ];

    useLayoutEffect(() => {
        const handleText = () => {
            const width = window.innerWidth
            width <= 768 ? setText("Explore") : setText("Exploration Begins")
        }
        handleText()

        window.addEventListener('resize', handleText)
        return () => window.removeEventListener('resize', handleText)
    }, [])

    return (
        <BackgroundGradientAnimation>
            <div className='absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-50'>
                <TypewriterEffectSmooth words={words} />
            </div>

            <div 
            className='z-50 rounded-xl absolute top-5 left-1/2 transform -translate-x-1/2 text-center cursor-pointer'
            onClick={() => navigate('/home')}>
                <ScanEncryptAnimationTextBtn mainText={text}/>
            </div>
        </BackgroundGradientAnimation>
    )
}

export default Intro