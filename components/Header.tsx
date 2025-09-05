
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Logo = () => (
  <div className="flex items-center space-x-2">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0Z" fill="url(#paint0_linear_1_2)"/>
      <path d="M20 4.21053C22.4267 9.38947 28.32 17.2 20 28.4211C11.68 17.2 17.5733 9.38947 20 4.21053Z" fill="white"/>
      <defs>
        <linearGradient id="paint0_linear_1_2" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00AEEF"/>
          <stop offset="1" stopColor="#007BFF"/>
        </linearGradient>
      </defs>
    </svg>
    <span className="text-2xl font-bold text-blue-900">AQUAMARTIN</span>
  </div>
);

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/"><Logo /></NavLink>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors duration-200 ${
                    isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
             <div className="relative p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
             </div>
             <div className="relative p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
             </div>
          </div>
           <div className="md:hidden flex items-center">
             <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none">
                 <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                     {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
                 </svg>
             </button>
           </div>
        </div>
      </div>
      {isOpen && (
          <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {NAV_LINKS.map((link) => (
                      <NavLink
                          key={link.name}
                          to={link.path}
                          onClick={() => setIsOpen(false)}
                          className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'}`}
                      >
                          {link.name}
                      </NavLink>
                  ))}
              </div>
          </div>
      )}
    </header>
  );
};

export default Header;
