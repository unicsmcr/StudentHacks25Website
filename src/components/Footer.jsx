import React, { useRef } from 'react';

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
        <div className="bg-black border-b border-primary/30 py-2 px-4 flex justify-between items-center">
          <div className="text-primary font-mono text-xs">
            terminal@quantum-network:~/footer
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        
        {/* Terminal Content*/}
        <div className="px-6 py-4 bg-black font-mono text-sm text-primary/90">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
              <div className="flex items-center">
                <div className="text-xs text-gray-500 mr-2">$ cat ./system_info.txt</div>
                <div className="text-accent2 text-sm">
                  <span className="text-white font-bold">UNICS HACKATHON</span> | Quantum Network v2.1.84
                </div>
              </div>
              
              <div className="flex items-center gap-x-6 gap-y-2">
                <a 
                  href="#privacy" 
                  className="text-xs text-gray-400 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
                <a 
                  href="#terms" 
                  className="text-xs text-gray-400 hover:text-primary transition-colors"
                >
                  Terms of Service
                </a>
                <a 
                  href="#accessibility" 
                  className="text-xs text-gray-400 hover:text-primary transition-colors"
                >
                  Accessibility
                </a>
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-2">
              <div className="text-xs text-gray-500">
                <span className="text-gray-600">$</span> echo "© {currentYear} UniCS Hackathon. All rights reserved."
              </div>
              
              <div className="text-gray-500 text-xs">
                $ <span className="animate-pulse">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle decorative elements */}
      <div className="absolute bottom-0 left-1/4 w-px h-12 bg-gradient-to-t from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute bottom-0 right-1/4 w-px h-12 bg-gradient-to-t from-transparent via-primary/30 to-transparent"></div>
    </footer>
  );
};

export default Footer;