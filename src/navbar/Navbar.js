import React from 'react';
import DropdownMenu from './DropdownMenu';
import Menu from './Menu';

const Navbar = () => {
  return (
    <div className="bg-gray-600 text-white">
      <nav>
        <div className="flex justify-between items-center p-3">
          <div className="text-2xl font-bold">
            <span className="text-pink-500">Shaniya</span> Malcolm
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
