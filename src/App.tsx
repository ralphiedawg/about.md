import React from 'react';
import WordPullUp from './components/WordPullUp';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-customLight">
      <h1 className="text-6xl font-bold text-customDark">
        Russell Page
      </h1>
      <div className="mt-4 text-4xl text-customDark">
        <WordPullUp words = "High School Student, Tech Enthusiast"/>
      </div>
    </div>
  );
}

export default App;
