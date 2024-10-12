import React from 'react';
import { Link } from 'react-router-dom';

function Header({ toggleOffCanvas }) { // Accept toggle function as prop
  return (
    <>
      <header id="sticky-header" className="xl:pl-12 absolute left-0 top-0 w-full z-10">
        <div className="flex pl-4 xl:pl-0">
          <div className="flex-1 flex items-center justify-between border-b border-black-800 border-opacity-40">
            <div className='text-3xl font-bold'>
            <Link to="/">
             Chibuike
            </Link>
            </div>
            
            <Link
              to="contact"
              className="flex items-center flex-wrap py-[6px] px-3 text-[15px] font-bold text-active leading-none mr-2 transition-all duration-300 hover:text-orange md:hover:text-white group"
            >
              Let’s Talk
              <span className="inline-block ml-3 group-hover:animate-arrow-move-up">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17L17 7"
                    stroke="currentColor"
                    stroke-opacity="0.9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 7H17V17"
                    stroke="currentColor"
                    stroke-opacity="0.9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>

          <div
            id="offcanvas-toggle"
            className="flex-none bg-black-800 flex items-center flex-wrap justify-center py-7 px-[38px] cursor-pointer"
            onClick={toggleOffCanvas} // Trigger toggle when clicked
          >
            <button>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="8" width="18" height="2" fill="white" />
                <rect x="3" y="14" width="18" height="2" fill="white" />
                <rect x="3" y="20" width="18" height="2" fill="white" />
              
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
