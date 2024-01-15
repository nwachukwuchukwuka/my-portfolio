import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#0f0f0f] p-4 pb-[40px] ">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-white text-[35px] font-bold">
            Chuks
          </Link>
        </div>


        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-[#656565] hover:text-white pr-[20px] text-[17px]">
            Home
          </Link>
          <Link to="/about" className="text-[#656565] hover:text-white pr-[20px] text-[17px]">
            About
          </Link>
         
          <Link to="/project-page" className="text-[#656565] hover:text-white pr-[20px] text-[17px]">
            Projects

          </Link>

          <Link to="/contact" className="text-[#656565] hover:text-white pr-[20px] text-[17px]">
            Contact
          </Link>
        </div>

        <Link
          to="/contact"
          className=" hover:text-[#000] font-[500] transition duration-300 hidden md:block bg-[#323232] text-white px-4 py-2 rounded-lg hover:bg-[#fff]"
        >
          Contact Me
        </Link>

        <div className="md:hidden">
          <button onClick={toggleNavbar} className="text-white transition-transform duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 transform ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16m-7 6h7'
                }
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute right-[10px] w-full ${isOpen ? 'block' : 'hidden'
          }`}
      >
        <div className="bg-[#0f0f0f] py-2">
          <div className="flex flex-col items-center text-[19px] py-[50px]">
            <Link to="/" className="block py-2 text-[gray] hover:text-[white]" onClick={closeNavbar}>
              Home
            </Link>
            <Link to="/about" className="block py-2 text-[gray] hover:text-[white]" onClick={closeNavbar}>
              About
            </Link>
            <Link to="/project-page" className="block py-2 text-[gray] hover:text-[white]" onClick={closeNavbar}>
              Projects
            </Link>
            <Link to="/contact" className="block py-2 text-[gray] hover:text-[white]" onClick={closeNavbar}>
              Contact
            </Link>
         
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
