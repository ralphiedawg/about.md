import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import WordPullUp from './components/WordPullUp';
import About from './pages/About';  // Ensure this is correctly imported
import Projects from './pages/Projects'; // Ensure this import is correct
import NavBar from './components/NavBar'; // Import NavBar component
import { HelmetProvider } from 'react-helmet-async';

const Home = () => (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full bg-[#FFFCF2]">
        <HelmetProvider>
            <title>Home - Russell Page</title>
        </HelmetProvider>
        <h1 className="text-6xl font-bold text-customDark">Russell Page</h1>
        <div className="mt-4 text-4xl text-customDark">
            <WordPullUp words="High School Student, Tech Enthusiast" />
        </div>
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
                    </Routes>
                </div>
            </Router>
        </HelmetProvider>
    );
}

export default App;
