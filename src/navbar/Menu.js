import React from 'react';
import Navitems from './Navitems';
import GithubIcon from '../icons/GithubIcon';
import LinkedinIcon from '../icons/LinkedinIcon';

const Menu = () => {
  return (
    <div className="hidden sm:flex justify-evenly items-center text-lg w-2/3">
      {Navitems.map((item) => {
        return (
          <a
            key={item.content}
            href={item.href}
            className="text-center hover:text-rose-400"
          >
            <p>{item.content}</p>
          </a>
        );
      })}
      {/* Social Media */}
      <div className="flex justify-center gap-2 items-center py-2">
        <a href="#!">
          <GithubIcon className="fill-white hover:fill-rose-400" />
        </a>
        <a href="#!">
          <LinkedinIcon className="fill-white hover:fill-rose-400" />
        </a>
      </div>
    </div>
  );
};

export default Menu;
