import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Resume from "./pages/Resume"
import Blogs from "./pages/Blogs"
import Contact from "./pages/Contact"
import Loader from "./pages/Loader"
import { useEffect, useState } from "react"

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const loadingTime = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(loadingTime);
    }, [])

    return (
        <div className="bg-black">
            <BrowserRouter>
                {isLoading && <Loader />}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App