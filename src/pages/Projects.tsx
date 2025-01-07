import BlurFade from '../components/BlurFade'; 
import { Helmet } from 'react-helmet-async';
import schedulespx from '../schedulespx.png'
const Projects = () => {
    return (
        <div className="flex flex-col items-start justify-start min-h-screen w-full bg-[#FFFCF2] p-8">
            <Helmet>
                <title>Me - My Portfolio</title>
            </Helmet>
            <h1 className="text-6xl font-bold text-customDark">My Projects</h1>
            <p className="mt-4 text-4xl text-customDark">Here are some of the projects I've worked on:</p>
            <div className="mt-8 space-y-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src={schedulespx} alt="Project Preview" className="w-full h-auto" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
                        <BlurFade className="text-white">
                            <h2 className="text-2xl font-semibold">ScheduleSPX</h2>
                            <p className="mt-2 text-gray-200">The All-in-One Student Dashboard</p>
                            <a href="https://schedulespx.com/about" className="mt-4 inline-block text-blue-300 hover:underline"> View Project </a>
                        </BlurFade>
                    </div>
                </div>
                <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
                    {/* <img src={REPLACEME} alt="Project Preview" className="w-full h-auto" /> */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
                        <BlurFade className="text-white">
                            <h2 className="text-2xl font-semibold">Bitty</h2>
                            <p className="mt-2 text-gray-200">An Open-Source Bittorrent Client</p>
                            <a href="https://github.com/ralphiedawg/bitty" className="mt-4 inline-block text-blue-300 hover:underline"> View Project </a>
                        </BlurFade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
