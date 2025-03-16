import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button 
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-50 p-2 rounded-md bg-transparent backdrop-blur-3xl outline-secondary outline-2 md:hidden"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <svg className="w-6 h-6 text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center md:hidden">
          <ul className="flex flex-col items-center space-y-6 font-title font-bold">
            <li><a href="#Home" className="text-primary hover:text-primary/70 text-xl p-2" onClick={toggleMenu}>Apply</a></li>
            <li><a href="#AboutUs" className="text-gray-100 hover:text-gray-400 text-xl" onClick={toggleMenu}>About</a></li>
            <li><a href="#Schedule" className="text-gray-100 hover:text-gray-400 text-xl" onClick={toggleMenu}>Schedule</a></li>
            <li><a href="#Sponsors" className="text-gray-100 hover:text-gray-400 text-xl" onClick={toggleMenu}>Sponsors</a></li>
            <li><a href="#FAQ" className="text-gray-100 hover:text-gray-400 text-xl" onClick={toggleMenu}>FAQs</a></li>
            <li><a href="#OurTeam" className="text-gray-100 hover:text-gray-400 text-xl" onClick={toggleMenu}>Our Team</a></li>
          </ul>
        </div>
      )}

      <nav className="fixed top-0 left-0 right-0 mt-8 z-30 hidden md:flex justify-center text-sm">
        <div className="bg-transparent backdrop-blur-3xl border-primary border py-4 px-3 rounded-md">
          <ul className="flex space-x-2 font-title font-bold shadow-2xl">
            <li><a href="#Home" className="text-primary hover:text-primary/70 p-2">Apply</a></li>
            <li><a href="#AboutUs" className="mr-3 text-gray-100 hover:text-gray-400">About</a></li>
            <li><a href="#Schedule" className="mr-3 text-gray-100 hover:text-gray-400">Schedule</a></li>
            <li><a href="#Sponsors" className="mr-3 text-gray-100 hover:text-gray-400">Sponsors</a></li>
            <li><a href="#FAQ" className="mr-3 text-gray-100 hover:text-gray-400">FAQs</a></li>
            <li><a href="#OurTeam" className="mr-3 text-gray-100 hover:text-gray-400">Our Team</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;