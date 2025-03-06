import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 mt-12 z-50 flex justify-center text-sm">
      <div className="bg-transparent backdrop-blur-3xl outline-primary outline-2 py-4 px-3 rounded-2xl">
        <ul className="flex space-x-2 font-title font-bold shadow-2xl">
          <li><a href="#Home" className="text-accent2 hover:text-accent2dark p-2">Apply</a></li>
          <li><a href="#AboutUs" className="mr-3 text-gray-100 hover:text-gray-400">About</a></li>
          <li><a href="#Schedule" className="mr-3 text-gray-100 hover:text-gray-400">Schedule</a></li>
          <li><a href="#Sponsors" className="mr-3 text-gray-100 hover:text-gray-400">Sponsors</a></li>
          <li><a href="#FAQ" className="mr-3 text-gray-100 hover:text-gray-400">FAQs</a></li>
          <li><a href="#OurTeam" className="mr-3 text-gray-100 hover:text-gray-400">Our Team</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;