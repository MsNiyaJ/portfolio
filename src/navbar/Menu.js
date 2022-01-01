import React from 'react';
import Navitems from './Navitems';
import SocialMedia from '../SocialMedia';

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
      <SocialMedia />
    </div>
  );
};

export default Menu;
