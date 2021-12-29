import React from 'react';
import PersonalDetails from './PersonalDetails';
import PersonalDescription from './PersonalDescription';

const About = () => {
  return (
    <div id="about" className="xs:h-96 m-sm:h-80 m-md:h-72 sm:h-52">
      <div className="relative flex justify-center">
        <div className="absolute -top-20 sm:w-10/12 bg-white rounded-lg border border-pink-300">
          <div className="p-5 flex flex-col sm:flex-row justify-center sm:justify-start">
            <PersonalDetails />
            <PersonalDescription />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
