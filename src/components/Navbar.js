import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent backdrop-blur-md backdrop-filter sticky top-0 z-10 w-full h-16">
      <div className="container mx-auto px-4 md:px-36 flex items-center justify-between h-full">
        {/* Your logo here */}
        <a href="/" className="flex items-center">
          <img
            src={`${process.env.PUBLIC_URL}/logo1.png`}
            alt="Logo"
            className="h-16 w-16 mt-2 mr-2"
          />
        </a>

        {/* Navigation links (desktop) */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li>
            <a href="/challenges" className="transition duration-200 ease-in-out transform hover:-translate-y-1 p-2 block">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="transition duration-200 ease-in-out transform hover:-translate-y-1 p-2 block">
              Your Challenges
            </a>
          </li>
          <li>
            <a href="#" className="transition duration-200 ease-in-out transform hover:-translate-y-1 p-2 block">
              About
            </a>
          </li>
          <li>
            <a href="/" className="transition duration-200 ease-in-out transform hover:-translate-y-1 p-2 block">
              Login/Signup
            </a>
          </li>
        </ul>

        {/* Navigation toggle (mobile) */}
        <button
          id="menu-toggle"
          className={`md:hidden block`}
          onClick={toggleMenu}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile navigation menu */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute top-full left-0 w-full bg-sky-500 backdrop-blur-md backdrop-filter rounded-b-lg text-white shadow-lg transition duration-200 ease-in-out transform ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
        }`}
      >
        {/* Your menu content here */}
        <ul className="space-y-2 px-4 py-4 rounded-b-lg">
          <li className="text-lg hover:text-white">
            <a href="/challenges">Home</a>
          </li>
          <li className="text-lg hover:text-white">
            <a href="#">Your Challenges</a>
          </li>
          <li className="text-lg hover:text-gray">
            <a href="#">About</a>
          </li>
          <li className="text-lg hover:text-white">
            <a href="/">Login/Signup</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
