import React, { useRef } from 'react';
import { FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Footer = () => {
  const footerRef = useRef(null);
  
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      ref={footerRef}
      className="relative bg-black border-t border-primary/30 py-6 text-primary overflow-hidden"
    >
      
      <div className="absolute inset-0 opacity-10 bg-[size:50px_50px] bg-[image:linear-gradient(to_right,rgba(93,202,230,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(93,202,230,0.1)_1px,transparent_1px)]"></div>
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[image:linear-gradient(transparent_0%,rgba(93,202,230,0.05)_50%,transparent_100%)] bg-[size:100%_4px]"></div>
      
      {/* Full-width Terminal-style Footer */}
      <div className="relative z-10 w-full">
        {/* Terminal Header - Full width */}
        <div className="bg-black border-b border-primary/30 pb-2 -mt-4 px-4 flex justify-between items-center">
          <div className="text-primary font-mono text-xs">
            secure-shell@unics-network:~/footer
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        
        {/* Terminal Content*/}
        <div className="bg-black font-mono text-sm text-primary/90 px-4">
          <div className="relative w-full">
            {/* Top section with system info - always left aligned */}
            
            {/* Bottom section with copyright and social media */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-2">
              <div className="flex flex-col text-left">
                <div className="text-xs text-gray-500 text-left sm:mb-0">
                  <span className="text-gray-600">$</span> echo "Designed by Affan, Shrey and Kaan"
                </div>
                <div className="text-xs text-gray-500 sm:mb-0">
                  <span className="text-gray-600">$</span> echo "© 2025 Student Hack. All rights reserved."
                </div>
                {/* Terminal cursor */}
                <div className="text-gray-500 text-xs mt-2 text-left">
                  $ <span className="animate-pulse">_</span>
                </div>
              </div>

              <div className="flex gap-x-4 sm:self-auto mt-4 sm:mt-0">
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="group">
                  <FaDiscord className="text-gray-400 group-hover:text-primary transition-colors duration-300" size={20} />
                </a>
                <a href="https://www.instagram.com/unics_hackathons/" target="_blank" rel="noopener noreferrer" className="group">
                  <FaInstagram className="text-gray-400 group-hover:text-primary transition-colors duration-300" size={20} />
                </a>
                <a href="https://www.linkedin.com/company/unics-hackathons/" target="_blank" rel="noopener noreferrer" className="group">
                  <FaLinkedin className="text-gray-400 group-hover:text-primary transition-colors duration-300" size={20} />
                </a>
                <a href="mailto:hackathons@unicsmcr.com" className="group">
                  <MdMail className="text-gray-400 group-hover:text-primary transition-colors duration-300" size={22} />
                </a>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;