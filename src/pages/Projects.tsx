import React from 'react';

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-customLight">
      <h1 className="text-6xl font-bold text-customDark">My Projects</h1>
      <p className="mt-4 text-4xl text-customDark">Here are some of the projects I've worked on:</p>

      <div className="mt-8 space-y-8">
        {/* Example Project Item */}
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
          <h2 className="text-2xl font-semibold">Project Title</h2>
          <p className="mt-2 text-gray-600">Short description of the project.</p>
          <a href="#" className="mt-4 inline-block text-blue-500 hover:underline">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
