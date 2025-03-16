import React, { useEffect, useState, useRef } from "react";
import { useGlitch } from 'react-powerglitch';
import futuristicSponsors from "../data/sponsors.json";

const Sponsors = () => {
  // For animation of sponsors appearing
  const [visible, setVisible] = useState(true);
  const sponsorsRef = useRef(null);
  const [terminalReady, setTerminalReady] = useState(true);
  
  // Glitch effects
  const glitchConstant = useGlitch({
    playMode: "always",
    duration: 3950,
  });
  
  const glitchHover = useGlitch({
    playMode: "hover",
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 250,
    },
    glitchTimeSpan: {
      start: 0,
      end: 1,
    },
    shake: {
      velocity: 15,
      amplitudeX: 0.2,
      amplitudeY: 0.2,
    },
  });
  
  
  // Intersection observer to trigger animations when scrolled into view
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setVisible(true);
  //         observer.disconnect();
  //       }
  //     },
  //     {
  //       threshold: 0.1,
  //     }
  //   );
    
  //   if (sponsorsRef.current) {
  //     observer.observe(sponsorsRef.current);
  //   }
    
  //   return () => {
  //     if (sponsorsRef.current) {
  //       observer.disconnect();
  //     }
  //   };
  // }, []);

  // // Terminal loading effect
  // useEffect(() => {
  //   if (visible) {
  //     const timer = setTimeout(() => {
  //       setTerminalReady(true);
  //     }, 1500);
  //     return () => clearTimeout(timer);
  //   }
  // }, [visible]);

  // Render placeholder logo based on shape type
  const renderPlaceholderLogo = (sponsor) => {
    // If a logo path is provided, use the image
    if (sponsor.logo) {
      return (
        <div className="w-16 h-16 flex items-center justify-center mr-5 overflow-hidden">
          <img 
            src={sponsor.logo} 
            alt={`${sponsor.name} logo`} 
            className="w-full h-full object-contain"
          />
        </div>
      );
    }

    // may add a scaning feature later here for svg logos, remove this if I have chosen to be lazy 
    
    if (sponsor.logo && sponsor.logo.ensdWith(".svg")) {
      return (
        <div > 
        </div>
      );
    }

    // fall back for logo absence for the devolopment phase, may need to be romoved after that
    switch(sponsor.shape) {
      case 'circle':
        return (
          <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${sponsor.color} flex items-center justify-center mr-3`}>
            <span className="text-xs text-white font-bold">{sponsor.name.substring(0, 2)}</span>
          </div>
        );
      case 'square':
        return (
          <div className={`w-6 h-6 bg-gradient-to-br ${sponsor.color} flex items-center justify-center mr-3`}>
            <span className="text-xs text-white font-bold">{sponsor.name.substring(0, 2)}</span>
          </div>
        );
      case 'triangle':
        return (
          <div className="relative w-6 h-6 flex items-center justify-center mr-3">
            <div className={`absolute w-0 h-0 border-l-[12px] border-r-[12px] border-b-[22px] border-l-transparent border-r-transparent border-b-green-400`}></div>
            <span className="relative text-xs text-white font-bold z-10 mt-1">{sponsor.name.substring(0, 2)}</span>
          </div>
        );
      case 'hexagon':
        return (
          <div className="relative w-6 h-6 flex items-center justify-center mr-3">
            {/* Using clip-path directly in the className since we can only use Tailwind utilities */}
            <div className={`w-6 h-6 bg-gradient-to-br ${sponsor.color} flex items-center justify-center`} 
                style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>
              <span className="text-xs text-white font-bold">{sponsor.name.substring(0, 2)}</span>
            </div>
          </div>
        );
      
    }
  };

  return (
    <section
      id="Sponsors"
      ref={sponsorsRef}
      className="pt-30 pb-36 px-4 bg-gradient-to-r from-black to-black-500 text-primary min-h-screen flex flex-col items-center relative overflow-hidden"
    >
      
      <div className="absolute inset-0 opacity-10 bg-[size:50px_50px] bg-[image:linear-gradient(to_right,rgba(74,222,128,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(74,222,128,0.1)_1px,transparent_1px)]"></div>
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[image:linear-gradient(transparent_0%,rgba(74,222,128,0.05)_50%,transparent_100%)] bg-[size:100%_4px]"></div>
      
      <div className="max-w-7xl mx-auto w-full space-y-16 relative z-10">
        
        <div className="text-center">
          <div className="inline-block relative">
            <h2 
              className="text-5xl font-bold mb-6 font-title text-primary" 
              ref={glitchConstant.ref}
            >
              SPONSORS
            </h2>
           
            <div className="text-xs tracking-widest text-accent2 uppercase mb-2">UNICS NETWORK • Data: 30.02.2184</div>
          </div>
          <p className="text-accent2/70 text-sm tracking-widest uppercase mb-6">
            <span className="animate-pulse">[ACCESSING SPONSORS DATABASE...]</span>
          </p>
          
          {/* Terminal Window */}
          <div className="max-w-5xl mx-auto w-full transition-all duration-500 opacity-0 translate-y-5 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 delay-300"
               data-visible={visible}>
            <div className="bg-black border border-primary/50 rounded-md overflow-hidden shadow-lg shadow-primary/20">
              {/* Terminal Header */}
              <div className="bg-black border-b border-primary/30 py-2 px-4 flex justify-between items-center">
                <div className="text-primary font-mono text-xs text-left">
                  terminal@unics-network:~/sponsors
                </div>
                <div className="flex gap-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              
              {/* Terminal Content */}
              <div className="p-5 bg-black font-mono text-sm text-primary/90 max-h-[600px] overflow-y-auto">
                {/* Initial Connection Sequence */}
                <div className="mb-2">$ accessing sponsors matrix... <span className="text-primary">CONNECTED</span></div>
                <div className="mb-4">$ executing query: <span className="text-white">get --all-sponsors --format=detail</span></div>
                
                {/* Command Output - Sponsors */}
                <div className="mb-6">
                  <div className="text-yellow-400 mb-1">
                    [SPONSORS DATABASE] - RECORDS FOUND: {futuristicSponsors.length}
                  </div>
                  
                  
                  
                  {/* Loading animation for terminal outputs */}
                  {!terminalReady && (
                    <div className="animate-pulse">
                      <div className="h-5 w-full bg-green-400/10 rounded mb-2"></div>
                      <div className="h-5 w-full bg-green-400/10 rounded mb-2"></div>
                      <div className="h-5 w-full bg-green-400/10 rounded mb-2"></div>
                    </div>
                  )}
                  
                  {terminalReady && futuristicSponsors.map((sponsor, index) => (
                  <div 
                    key={sponsor.id}
                    className={`mb-10 opacity-0 transition-all duration-500 transform translate-y-2
                              ${terminalReady ? 'opacity-100 translate-y-0' : ''}`}
                    style={{transitionDelay: `${index * 400}ms`}}
                  >
                    <div className="flex items-center mb-1">
                      <span className="text-gray-500 mr-2">{">"}</span>
                      <div className="text-accent2 font-bold">
                        {sponsor.code}
                      </div>
                    </div>
                    
                    <div className="pl-6 border-l border-primary/20 ml-2 mb-3">
                      {/* Center logo above name */}
                      <div className="flex flex-col items-center text-center mb-4 mt-3">
                        <div className="mb-3">
                          {/* Logo rendering function - use the larger size as previously suggested */}
                          {sponsor.logo ? (
                            <div className="w-24 h-24 flex items-center justify-center overflow-hidden ">
                              <img 
                                src={sponsor.logo} 
                                alt={`${sponsor.name} logo`} 
                                className="w-full h-full object-contain"
                              />
                            </div>
                          ) : (
                            <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${sponsor.color} flex items-center justify-center`}>
                              <span className="text-3xl text-white font-bold">{sponsor.name.substring(0, 2)}</span>
                            </div>
                          )}
                        </div>
                        {/* <div className="text-white text-lg font-bold">
                          {sponsor.name}
                        </div> */}
                      </div>
                      
                      {/* Terminal readout style information */}
                      <div className="border border-primary/10 bg-primary/5 rounded p-1 mb-3">
                        <div className="grid grid-cols-1 gap-2 text-xs text-primary/80">
                        <div className="absolute top-2 right-2 flex items-center">
                          <div className="w-2 h-2 rounded-full bg-green-400 mr-1 animate-pulse"></div>
                          <span className="text-xs text-green-400/70 font-mono">ACTIVE</span>
                        </div>
                        <a 
                          href={sponsor.link} 
                          className="text-blue-400 hover:underline hover:text-blue-300"
                        >
                          access://profile/{sponsor.code.toLowerCase()}
                        </a>
                        </div>
                        
                      </div>
                      
                      
                    </div>
                  </div>
                ))}
                  
                  {/* Terminal cursor blinking after outputs */}
                  {terminalReady && (
                    <div className="mt-6 -mb-4">
                      <div className="text-gray-500">$ <span className="animate-pulse">_</span></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        
        
        {/* Become a Sponsor Section with futuristic terminal style 
        
        <div 
          className="mt-28 py-8 flex flex-col items-center transition-all duration-500 opacity-0 translate-y-5 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 delay-[2400ms]"
          data-visible={visible}
        >
          <div className="relative max-w-md w-full border border-green-400/50 rounded-md p-6 bg-black/50 backdrop-blur-sm">
            <div className="absolute -top-3 left-4 bg-black px-2 text-green-400 text-xs font-mono">SYSTEM.ACCESS</div>
            
            <div className="text-green-400 font-mono text-sm mb-4">
              <span className="text-gray-500">root@hackathon:~$</span> join --consortium
            </div>
            
            <div className="text-white text-lg mb-3">
              Join The Future Consortium
            </div>
            
            <div className="text-gray-400 text-sm mb-6">
              Register your corporation as an official tech ally for our quantum hackathon initiative.
            </div>
            
            <div className="flex justify-center">
              <a 
                href="#" 
                className="inline-block relative z-10 px-8 py-3 border border-green-400 text-green-400 bg-black hover:bg-green-400/10 rounded-md transition-all duration-300 uppercase font-mono tracking-wider text-sm"
                ref={glitchHover.ref}
              >
                Initialize Partnership Protocol
              </a>
            </div>
            
            
            <div className="mt-4 text-green-400/50 text-xs font-mono">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400/50 rounded-full mr-2"></div>
                CONNECTION_SECURE
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400/50 rounded-full mr-2"></div>
                QUANTUM_ENCRYPTION_ENABLED
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Sponsors;