'use client';

import React, { useState } from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { RiCloseFill, RiMenu3Line } from 'react-icons/ri';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigation = [
    { title: 'Home', href: '/' },
    { title: 'Features', href: '/features' },
    { title: 'About me', href: '/about' },
    { title: 'Studio', href: '/studio' },
  ];
  return (
    <div className="w-full bg-white/70 h-20 shadow-md sticky top-0 backdrop-blur-2xl transition-colors z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between h-full px-4 lg:px-0">
        <Logo title="Bloggers" className="text-black" />
        <div className="hidden md:flex items-center gap-7 text-gray-900 hover:text-black duration-200">
          {navigation.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className="text-sm font-semibold uppercase relative group overflow-hidden"
            >
              {item.title}
              <span className="w-full h-[1px] bg-blue-700 absolute inline-block left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-200" />
            </Link>
          ))}
        </div>
        {/* <div className="md:hidden flex items-center text-gray-900 hover:text-black duration-200">
          <FiMenu size={24} />
          <RiCloseFill size={24} />
        </div> */}

        {/* hambuger Icons: for mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isOpen ? <RiCloseFill size={24} /> : <RiMenu3Line size={24} />}
          </button>
        </div>
      </div>

      {/* dropdown menu when humbuger icon clicked */}
      <div>
        {/* {isOpen && (
          <div className="md:hidden transition ease-in duration-300 absolute top-20 left-0 w-full h-screen bg-black/90 px-4 py-7 z-50">
            <div className="flex flex-col items-center gap-4 fixed justify-center w-full h-screen transition ease-in duration-500">
              {navigation.map((item) => (
                <Link
                  key={item?.title}
                  href={item?.href}
                  className="text-2xl p-4 font-semibold uppercase text-gray-300 hover:text-blue-400 duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )} */}
        <div className="md:hidden relative">
          <div
            className={`absolute left-0 w-full h-screen bg-black/90 px-4 py-7 z-50 transition-all duration-500 ease-in-out ${
              isOpen
                ? 'translate-x-0 opacity-100'
                : '-translate-x-full opacity-0 pointer-events-none'
            }`}
          >
            <div className="flex flex-col items-center gap-4 justify-center w-full h-full">
              {navigation.map((item) => (
                <Link
                  key={item?.title}
                  href={item?.href}
                  className="text-2xl p-4 font-semibold uppercase text-gray-300 hover:text-blue-400 duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
