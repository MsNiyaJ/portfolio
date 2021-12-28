import React from 'react';
import DropdownMenu from './DropdownMenu';
import Menu from './Menu';

const Navbar = () => {
  return (
    <div className="bg-white text-black sticky top-0 border-b-2 z-50">
      <nav>
        <div className="flex justify-between items-center p-3">
          <div className="text-xl font-bold">
            <span className="text-pink-500">SHANIYA</span> MALCOLM /&gt;
          </div>
          {/* Mobile Navbar */}
          <DropdownMenu />
          {/* Desktop Navbar */}
          <Menu />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
