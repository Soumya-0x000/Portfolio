import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Navbar from './components/static/Navbar/Navbar'
import Footer from './components/static/Footer/Footer'
import SocialMEdiaIcon from '../src/components/static/SocialMEdiaIcon/SocialMEdiaIcon'
import { ThemeProvider } from './helpingComponents/hook/ThemeContext'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Articles from './components/articles/Articles'

function App() {

    return (
        <BrowserRouter>
            <ThemeProvider>
                <SocialMEdiaIcon/>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/projects' element={<Projects/>} />
                    <Route path='/articles' element={<Articles/>} />
                </Routes>
                <Footer/>
            </ThemeProvider>
        </BrowserRouter>
    )
}
    
    export default App
