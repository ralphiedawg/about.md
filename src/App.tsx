import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import WordPullUp from './components/WordPullUp';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import NavBar from './components/NavBar'; 
import Footer from './components/Footer';
import { HelmetProvider } from 'react-helmet-async';

const Home = () => (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full bg-[#FFFCF2]">
        <HelmetProvider>
            <title>Home - Russell Page</title>
        </HelmetProvider>
        <h1 className="text-6xl font-bold text-customDark">Russell Page</h1>
        <div className="mt-4 font-semibold text-4xl text-customDark">
            <WordPullUp words="Tech Enthusiast, Budding Developer" />
        </div>
        <Footer />
    </div>
);

function App() {
    return (
        <HelmetProvider>
            <Router>
                <NavBar />
                <div className="relative flex flex-col items-center justify-center min-h-screen w-full">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </Router>
        </HelmetProvider>
    );
}

export default App;
