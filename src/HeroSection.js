import React from 'react';
import ProfilePicture from './ProfilePicture';
import './App.css';

const HeroSection = () => {
  return (
    <div className="flex justify-center py-10 border-b-4 bg-laptop bg-no-repeat bg-cover hero-img">
      <div className="flex flex-col items-center text-center max-w-lg text-white">
        <ProfilePicture />
        <div className="my-5">
          <h1 className="text-4xl">Hello, My Name is Shaniya!</h1>
          <p className="text-lg mt-2">
            Motivated <span className="font-bold">Frontend Developer</span> with
            experience building and maintaining responsive websites. Proficient
            in HTML, CSS, JavaScript, and React. Passionate about building
            beautiful, responsive webpages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
