

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import Arrow from './mini-component/Arrow';
import Icons from './mini-component/Icons';
import AuthNav from './mini-component/AuthNav';

function OffCanvas({ isOpen, toggleOffCanvas }) {
  return (
    <div>
      <div
        id="offcanvas"
        className={`offcanvas right-0 top-0 bottom-0 z-50 fixed h-full w-[350px] md:w-[460px] transition-transform duration-300 ease-in-out bg-black-800 pl-8 flex flex-col justify-between ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button */}
        <div>
          <div className="flex  flex-wrap justify-between items-center border-b border-border-white mb-[50px]">
            <div className='text-3xl text-white font-bold'>
              <Link to="/"> {/* Use Link instead of a */}
                Chibuike
              </Link>
            </div>
            <button
              id="offcanvas-close"
              className="offcanvas-close bg-primary py-7 px-[38px]"
              aria-label="offcanvas"
              onClick={toggleOffCanvas}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.2803 4.71967C19.5732 5.01256 19.5732 5.48744 19.2803 5.78033L5.78033 19.2803C5.48744 19.5732 5.01256 19.5732 4.71967 19.2803C4.42678 18.9874 4.42678 18.5126 4.71967 18.2197L18.2197 4.71967C18.5126 4.42678 18.9874 4.42678 19.2803 4.71967Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.71967 4.71967C5.01256 4.42678 5.48744 4.42678 5.78033 4.71967L19.2803 18.2197C19.5732 18.5126 19.5732 18.9874 19.2803 19.2803C18.9874 19.5732 18.5126 19.5732 18.2197 19.2803L4.71967 5.78033C4.42678 5.48744 4.42678 5.01256 4.71967 4.71967Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>

          {/* Offcanvas menu */}
          <nav className="offcanvas-menu  mr-[40px] flex flex-col">
            <ul>
              <li className="border-b border-border-white pb-4 group">
                <Link
                  to="/"
                  onClick={toggleOffCanvas}
                  className="text-white text-xl font-bold font-Syne leading-none flex flex-wrap items-center justify-between hover:text-orange transition duration-300"
                >
                  Home
                  <Arrow />
                </Link>
              </li>
              <li className="border-b border-border-white py-4 group">
                <Link
                  to="/about"
                  onClick={toggleOffCanvas}
                  className="text-white text-xl font-bold font-Syne leading-none flex flex-wrap items-center justify-between hover:text-orange transition duration-300"
                >
                  About
                  <Arrow />
                </Link>
              </li>
              <li className="border-b border-border-white py-4 group">
                <Link
                  to="/projects"
                  onClick={toggleOffCanvas}
                  className="text-white text-xl font-bold font-Syne leading-none flex flex-wrap items-center justify-between hover:text-orange transition duration-300"
                >
                  Project
                  <Arrow />
                </Link>
              </li>
              <li className="border-b border-border-white py-4 group">
                <Link
                  to="/blogs"
                  onClick={toggleOffCanvas}
                  className="text-white text-xl font-bold font-Syne leading-none flex flex-wrap items-center justify-between hover:text-orange transition duration-300"
                >
                  Blogs
                  <Arrow />
                </Link>
              </li>
              <li className="border-b border-border-white py-4 group">
                <Link
                  to="/contact"
                  onClick={toggleOffCanvas}
                  className="text-white text-xl font-bold font-Syne leading-none flex flex-wrap items-center justify-between hover:text-orange transition duration-300"
                >
                  Contact
                  <Arrow />
                </Link>
              </li>
              <AuthNav toggleOffCanvas={toggleOffCanvas}/>
            </ul>
          </nav>
        </div>

        <Icons />
      </div>
    </div>
  );
}

export default OffCanvas;
