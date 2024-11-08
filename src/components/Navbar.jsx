import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 mb-6">
      <div className="container mx-auto flex justify-end space-x-4">
        <NavLink
          to="/albums"
          className={({ isActive }) =>
            `text-gray-600 no-underline hover:text-gray-700 ${
              isActive ? 'text-black font-semibold' : ''
            }`
          }
        >
          Albums
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-gray-600 no-underline hover:text-gray-700 ${
              isActive ? 'text-black font-semibold' : ''
            }`
          }
        >
          Users
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
