import React from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
    return (
        <div className="flex flex-col items-start justify-start min-h-screen w-full p-10 bg-customLight text-customDark">
            <Helmet>
                <title>Contact Me - Russell Page</title>
            </Helmet>
            <h1 className="text-6xl font-bold mb-6">Contact Me</h1>
            <p className="text-2xl leading-relaxed">
            </p>
        </div>
    );
};

export default Contact;
