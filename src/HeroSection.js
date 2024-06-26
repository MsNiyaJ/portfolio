import React from "react";
import ProfilePicture from "./ProfilePicture";
import Navbar from "./navbar/Navbar";
// import resume from './docs/Shaniya_Malcolm_06.09.22.pdf';
// import DownloadIcon from './icons/DownloadIcon';
import "./App.css";

const HeroSection = () => {
  return (
    <div className="bg-no-repeat bg-cover hero-img">
      <Navbar />
      <div className="flex justify-center h-full pt-20 pb-40">
        <div className="flex flex-col items-center text-center max-w-lg px-5 text-white">
          <ProfilePicture />
          <div className="my-5">
            <h1 className="text-3xl md:text-4xl font-bold font-mono text-yellow-500">
              Hello, I'm Shaniya!
            </h1>
            <p className="text-xl md:text-3xl font-bold">
              A Passionate Software Developer
            </p>
          </div>

          {/**
          TODO: Update resume and then put this back
            <a href={resume} download="ShaniyaMalcolmResume">
              <button
                type="button"
                className="flex gap-2 rounded-full bg-gray-600 px-4 py-2 border border-white hover:bg-yellow-500 hover:text-white hover:font-bold"
              >
                Download Resume
                <DownloadIcon />
              </button>
            </a>
            */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
