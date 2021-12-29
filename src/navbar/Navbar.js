import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import Menu from './Menu';

const Navbar = () => {
  let [scroll, setScroll] = useState(false);
  window.onscroll = () => {
    if (window.scrollY > 15) setScroll(true);
    else setScroll(false);
  };

  return (
    <div
      className={`${
        scroll
          ? 'bg-white text-black'
          : 'bg-white sm:bg-transparent text-white shadow-2xl'
      } 
        text-black sticky top-0 z-50 ease-in transition-all duration-300`}
    >
      <nav>
        <div className="flex justify-between items-center p-3">
          <div
            className={`text-xl font-bold ${
              scroll ? 'text-black' : 'text-black sm:text-white'
            }`}
          >
            <span className="text-pink-500">SHANIYA</span> MALCOLM /&gt;
          </div>
          {/* Mobile Navbar */}
          <DropdownMenu />
          {/* Desktop Navbar */}
          <Menu textColor={scroll ? 'text-black' : 'text-white'} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
