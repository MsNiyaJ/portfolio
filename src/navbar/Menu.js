import React from 'react';
import Navitems from './Navitems';
import GithubIcon from '../icons/GithubIcon';
import LinkedinIcon from '../icons/LinkedinIcon';

const Menu = ({ textColor }) => {
  return (
    <div className="hidden sm:flex justify-around items-center text-lg w-3/5">
      {Navitems.map((item) => {
        return (
          <a
            key={item.content}
            href={item.href}
            className={`text-center hover:text-pink-500 hover:translate-x-1 duration-300 ${textColor}`}
          >
            <p>{item.content}</p>
          </a>
        );
      })}
      {/* Social Media */}
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
    </div>
  );
};

export default Menu;
