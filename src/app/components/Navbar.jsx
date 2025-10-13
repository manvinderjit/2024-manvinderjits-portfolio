'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';

const navLinks = [
  {
    title: "Journey",
    href: "#journey",
  },
  {
    title: "Portfolio",
    href: "#portfolio",
  },
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-gray-900 bg-opacity-95 border border-[#33353F]">
      <div className="flex flex-wrap items-center justify-between mx-[10%] py-3 px-3">
        <Link
          href={"/"}
          className="text-2xl md:text-4xl text-white font-semibold"
        >
          Manvinderjit
        </Link>
        <div className="mobile-menu block md:hidden text-white">
          { !navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5"></Bars3Icon>
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5"></XMarkIcon>
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index} className='text-white'>
                <NavLink href={link.href} title={link.title}></NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {
        navbarOpen ? <MenuOverlay links={navLinks}/> : null
      }
    </nav>
  );
}

export default Navbar;