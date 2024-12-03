import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import SocialMEdiaIcon from "../src/components/static/SocialMEdiaIcon/SocialMEdiaIcon";
import { ThemeProvider } from "./helpingComponents/hook/ThemeContext";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Education from "./components/Education/Education";
import Feedback from "./components/feedback/Feedback";
import Intro from "./components/Introduction/Intro";
import { NavProvider } from "./helpingComponents/hook/BgBlurContext";
import Navbar from "./components/static/Navbar/Navbar";

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <NavProvider>
                    <SocialMEdiaIcon />
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Intro />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/feedback" element={<Feedback />} />
                    </Routes>
                </NavProvider>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
