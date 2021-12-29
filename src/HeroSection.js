import React from 'react';
import ProfilePicture from './ProfilePicture';
import Navbar from './navbar/Navbar';
import './App.css';
import resume from './docs/resume.pdf';

const HeroSection = () => {
  return (
    <div className="bg-laptop bg-no-repeat bg-cover hero-img">
      <Navbar />
      <div className="flex justify-center h-full pt-8 pb-32">
        <div className="flex flex-col items-center text-center max-w-lg px-5 text-white">
          <ProfilePicture />
          <div className="my-5">
            <h1 className="text-2xl md:text-4xl font-bold font-mono text-yellow-500">
              Hello, I'm Shaniya!
            </h1>
            <p className="text-xl md:text-3xl font-bold">
              A Passionate Frontend Developer
            </p>
          </div>

          <a href={resume} download="ShaniyasResume">
            <button
              type="button"
              className="rounded-full bg-gray-600 px-4 py-2 border border-white hover:bg-yellow-500 hover:text-white hover:font-bold"
            >
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
