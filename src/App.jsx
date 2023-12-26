import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ParticleContainer from './components/particles/ParticleContainer'
import SocialMEdiaIcon from './components/SocialMEdiaIcon/SocialMEdiaIcon'

function App() {

    return (
        <BrowserRouter>
            {/* <ParticleContainer/> */}
            <span className='flex items-center justify-center py-5 2xl:py-0 fixed -bottom-2 right-1/2 2xl:right-8 translate-x-1/2 2xl:top-1/2 2xl:-translate-y-1/2 z-50'>
                <SocialMEdiaIcon/>
            </span>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}
    
    export default App
