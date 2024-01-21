import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Navbar from './components/static/Navbar/Navbar'
import Footer from './components/static/Footer/Footer'
import SocialMEdiaIcon from '../src/components/static/SocialMEdiaIcon/SocialMEdiaIcon'
import { ThemeProvider } from './helpingComponents/hook/ThemeContext'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Education from './components/Education/Education'
import Feedback from './components/feedback/Feedback'
// import LiveChat from './LiveChat'
import { NavProvider } from './helpingComponents/hook/BgBlurContext'

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <NavProvider>
                    {/* <LiveChat/> */}
                    <SocialMEdiaIcon/>
                    <Navbar/>
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/about' element={<About/>} />
                        <Route path='/projects' element={<Projects/>} />
                        <Route path='/education' element={<Education/>} />
                        <Route path='/feedback' element={<Feedback/>} />
                    </Routes>
                    <Footer/>
                </NavProvider>
            </ThemeProvider>
        </BrowserRouter>
    )
}
    
export default App