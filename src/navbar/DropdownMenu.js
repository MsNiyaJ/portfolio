import React, { useState } from 'react';
import Hamburger from '../icons/HamburgerMenuIcon';
import Navitems from './Navitems';
import GithubIcon from '../icons/GithubIcon';
import LinkedinIcon from '../icons/LinkedinIcon';

const DropdownMenu = () => {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open);
  };
  return (
    <div className="sm:hidden">
      <div onClick={() => openMenu()}>
        <Hamburger />
      </div>
      {/* Menu Items */}
      <div>
        {open && (
          <div className="relative">
            <div className="border-t-4 border-t-pink-500 flex flex-col gap-2 absolute -right-3 bg-white mt-3 pb-2">
              {Navitems.map((item) => {
                return (
                  <a
                    key={item.content}
                    href={item.href}
                    className="text-center hover:bg-pink-200 hover:text-black w-full px-12 py-3"
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
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownMenu;
