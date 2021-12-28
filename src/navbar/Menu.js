import React from 'react';
import Navitems from './Navitems';
import GithubIcon from '../icons/GithubIcon';
import LinkedinIcon from '../icons/LinkedinIcon';

const Menu = () => {
  return (
    <div className="hidden sm:flex justify-evenly items-center text-lg w-3/5">
      {Navitems.map((item) => {
        return (
          <a
            key={item.content}
            href={item.href}
            className="text-center hover:text-rose-400 hover:translate-x-1 duration-300"
          >
            <p>{item.content}</p>
          </a>
        );
      })}
      {/* Social Media */}
      <div className="flex justify-center gap-2 items-center py-2">
        <a href="#!">
          <GithubIcon className="fill-pink-500 hover:fill-gray-600" />
        </a>
        <a href="#!">
          <LinkedinIcon className="fill-pink-500 hover:fill-gray-600" />
        </a>
      </div>
    </div>
  );
};

export default Menu;
