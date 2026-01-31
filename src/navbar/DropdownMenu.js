import React, { useState } from 'react';
import Hamburger from '../icons/HamburgerMenuIcon';
import Navitems from './Navitems';
import SocialMedia from '../SocialMedia';

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
                    className="text-center text-black hover:bg-pink-200 w-full px-12 py-3"
                  >
                    <p>{item.content}</p>
                  </a>
                );
              })}
              <SocialMedia />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownMenu;
