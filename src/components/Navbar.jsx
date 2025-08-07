import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Icon package
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const LinkClass = ({ isActive }) =>
    isActive
      ? 'bg-black text-white bg-gray-900 rounded-md px-3 py-2 block'
      : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 block';

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500 relative z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Left: Logo */}
          <div className="flex items-center">
            <NavLink className="flex items-center" to="/">
              <img className="h-10 w-auto" src={logo} alt="React Jobs" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                Bernardhub
              </span>
            </NavLink>
          </div>

          {/* Center: Nav links (only on desktop) */}
          <div className="hidden md:flex space-x-4">
            <NavLink to="/" className={LinkClass}>
              Home
            </NavLink>
            <NavLink to="/jobs" className={LinkClass}>
              Jobs
            </NavLink>
            <NavLink to="/add-job" className={LinkClass}>
              Add Job
            </NavLink>
          </div>

          {/* Right: Sign/Login and hamburger toggle */}
          <div className="flex items-center space-x-4">
            <NavLink
              to="/login"
              className="hidden md:inline-block text-white border border-white px-4 py-2 rounded-md hover:bg-white hover:text-indigo-700 transition"
            >
              Sign / Login
            </NavLink>

            {/* Mobile hamburger menu */}
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Right-side mobile menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-indigo-800 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-indigo-600">
          <span className="text-white text-lg font-semibold">Menu</span>
          <button
            className="text-white"
            onClick={() => setMenuOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <div className="px-4 py-6 space-y-4">
          <NavLink to="/" className={LinkClass} onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/jobs" className={LinkClass} onClick={() => setMenuOpen(false)}>
            Jobs
          </NavLink>
          <NavLink to="/add-job" className={LinkClass} onClick={() => setMenuOpen(false)}>
            Add Job
          </NavLink>
          <NavLink
            to="/login"
            className="text-white border border-white px-4 py-2 rounded-md hover:bg-white hover:text-indigo-700 transition block"
            onClick={() => setMenuOpen(false)}
          >
            Sign / Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
