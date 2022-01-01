import React from 'react';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';

const SocialMedia = () => {
  return (
    <div className="flex justify-center gap-2 items-center py-2">
      <a href="https://github.com/MsNiyaJ" target="_blank" rel="noreferrer">
        <GithubIcon className="fill-pink-500 hover:fill-black transition-all duration-500" />
      </a>
      <a
        href="https://www.linkedin.com/in/shaniya-malcolm/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedinIcon className="fill-pink-500 hover:fill-black transition-all duration-500" />
      </a>
    </div>
  );
};

export default SocialMedia;
