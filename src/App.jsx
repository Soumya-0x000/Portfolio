import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import SocialMEdiaIcon from './components/SocialMEdiaIcon/SocialMEdiaIcon'
import { ThemeProvider } from './components/hook/ThemeContext'

function App() {

    return (
        <BrowserRouter>
            <ThemeProvider>
                <SocialMEdiaIcon/>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>} />
                </Routes>
                <Footer/>
            </ThemeProvider>
        </BrowserRouter>
    )
}
    
    export default App
