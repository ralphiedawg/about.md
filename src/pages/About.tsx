import { Helmet } from 'react-helmet-async';
import { PythonPlain, TypescriptPlain } from 'devicons-react';
const About = () => {
    return (
        <div className="flex flex-col items-start justify-start min-h-screen w-full p-10 bg-customLight text-customDark">
            <Helmet>
                <title>About Me - Russell Page</title>
            </Helmet>
            <h1 className="text-6xl font-bold mb-6"> I'm Russell 👋</h1>
            <p className="text-2xl leading-relaxed">
                I'm a high school student who's been interested in tech from a young age. I love programming on my mac, and have just began my web development journey. I've got light experience in cybersecurity/pentesting, and have considerable experience with linux systems. 
            </p>
            <br />
            <h1 className='text-4xl font-semibold mb-6'>My Experience/Skills</h1>
            <div className='text-2xl leading-relaxed'>
                <div className='flex items-center mb-2'>
                    <PythonPlain className='h-20 w-20 mr-2 text-customDark' /> 
                    <span>Comfortable in Python.</span>
                </div>
                <div className='flex items-center'>
                    <TypescriptPlain className='mr-2' /> 
                    <span>Beginner in TS, (React + Vite)</span>
                </div>
            </div>
        </div>
    );
};

export default About;
