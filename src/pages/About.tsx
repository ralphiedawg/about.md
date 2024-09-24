import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PythonPlain } from 'devicons-react';
const About = () => {
    return (
        <div className="flex flex-col items-start justify-start min-h-screen w-full p-10 bg-customLight text-customDark">
            <Helmet>
                <title>About Me - Russell Page</title>
            </Helmet>
            <h1 className="text-6xl font-bold mb-6">Hey, I'm Russell 👋</h1>
            <p className="text-2xl leading-relaxed">
                I'm a high school student who's been interested in tech from a young age.
            </p>
            <h1 className='text-4xl font-bold mb-6'> My Experience/Skills</h1>
            <p className='text-2xl leading-relaxed'>
                <PythonPlain> color="black" size = '500' </PythonPlain> I'm comfortable in python.
            </p>
        </div>
    );
};

export default About;
