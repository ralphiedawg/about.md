import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WordPullUp from './components/WordPullUp';
import Projects from './pages/Projects'; // Make sure this import is correct

const Home = () => (
  <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full bg-[#FFFCF2]">
    <h1 className="text-6xl font-bold text-customDark">Russell Page</h1>
    <div className="mt-4 text-4xl text-customDark">
      <WordPullUp words="High School Student, Tech Enthusiast" />
    </div>
    <Link to="/projects" className="text-customDark mt-4">
      Projects
    </Link>
  </div>
);

function App() {
  return (
    <Router>
      <div className="relative flex flex-col items-center justify-center min-h-screen w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
