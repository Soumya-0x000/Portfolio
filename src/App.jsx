import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Navbar from './components/static/Navbar/Navbar'
import Footer from './components/static/Footer/Footer'
import SocialMEdiaIcon from '../src/components/static/SocialMEdiaIcon/SocialMEdiaIcon'
import { ThemeProvider, useTheme } from './helpingComponents/hook/ThemeContext'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Education from './components/Education/Education'
import StarsCanvas from './helpingComponents/animate/StarCanvas'

function App() {
    const {mode} = useTheme()

    return (
        <BrowserRouter>
            <ThemeProvider>
                <SocialMEdiaIcon/>
                <Navbar/>
                <StarsCanvas/>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/projects' element={<Projects/>} />
                    <Route path='/education' element={<Education/>} />
                </Routes>
                {/* <Home/>
                <About/>
                <Projects/>
                <Education/> */}
                <Footer/>
            </ThemeProvider>
        </BrowserRouter>
    )
}
    
    export default App
