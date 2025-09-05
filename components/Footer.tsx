import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center space-x-2">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0Z" fill="url(#paint0_linear_footer)"/>
                    <path d="M20 4.21053C22.4267 9.38947 28.32 17.2 20 28.4211C11.68 17.2 17.5733 9.38947 20 4.21053Z" fill="white"/>
                    <defs>
                        <linearGradient id="paint0_linear_footer" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00AEEF"/>
                        <stop offset="1" stopColor="#007BFF"/>
                        </linearGradient>
                    </defs>
                </svg>
                <span className="text-2xl font-bold text-blue-900">AQUAMARTIN</span>
            </div>
            <p className="text-gray-500 text-base">Your trusted source for safe, clean, and refreshing water.</p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Navigation</h3>
                <ul className="mt-4 space-y-4">
                  {NAV_LINKS.slice(0, 4).map((item) => (
                    <li key={item.name}>
                      <Link to={item.path} className="text-base text-gray-500 hover:text-gray-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">More</h3>
                <ul className="mt-4 space-y-4">
                  {NAV_LINKS.slice(4).map((item) => (
                    <li key={item.name}>
                      <Link to={item.path} className="text-base text-gray-500 hover:text-gray-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
               <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact</h3>
                   <ul className="mt-4 space-y-4 text-base text-gray-500">
                        <li>ogunnubicephas@gmail.com</li>
                        <li>091303300383</li>
                   </ul>
               </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">&copy; {new Date().getFullYear()} Aquamartin Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;