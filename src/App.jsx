import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ParticleContainer from './components/particles/ParticleContainer'

function App() {

    return (
        <BrowserRouter>
            {/* <ParticleContainer/> */}
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}
    
    export default App
