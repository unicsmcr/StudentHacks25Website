import React, { useEffect, useState, useRef } from "react";
import { useGlitch } from 'react-powerglitch';

const Sponsors = () => {
  // For animation of sponsors appearing
  const [visible, setVisible] = useState(false);
  const sponsorsRef = useRef(null);
  
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
  
  // Enhanced future corporate data for sponsors
  const futuristicSponsors = [
    {
      id: 1,
      name: "REPLY",
      code: "RPL-9240",
      sector: "QUANTUM SYSTEMS",
      year: "EST. 2142",
      description: "Neural Interface Solutions",
      color: "from-green-400 to-blue-500",
      shape: "circle",
      link: "#"
    },
    {
      id: 2,
      name: "FIGMA",
      code: "FGM-7721",
      sector: "NEURAL DESIGN",
      year: "EST. 2089",
      description: "Reality Augmentation Systems",
      color: "from-yellow-400 to-orange-500",
      shape: "hexagon",
      link: "#"
    },
    {
      id: 3,
      name: "NETCRAFT",
      code: "NCT-6310",
      sector: "CYBER DEFENSE",
      year: "EST. 2118",
      description: "Network Protection Arrays",
      color: "from-gray-300 to-gray-400",
      shape: "triangle",
      link: "#"
    }
  ];
  
  // Intersection observer to trigger animations when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    if (sponsorsRef.current) {
      observer.observe(sponsorsRef.current);
    }
    
    return () => {
      if (sponsorsRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  // Render placeholder logo based on shape type
  const renderPlaceholderLogo = (sponsor) => {
    switch(sponsor.shape) {
      case 'circle':
        return (
          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${sponsor.color} flex items-center justify-center`}>
            <span className="text-xs text-white font-bold">{sponsor.name.substring(0, 2)}</span>
          </div>
        );
      case 'square':
        return (
          <div className={`w-12 h-12 bg-gradient-to-br ${sponsor.color} flex items-center justify-center`}>
            <span className="text-xs text-white font-bold">{sponsor.name.substring(0, 2)}</span>
          </div>
        );
      case 'triangle':
        return (
          <div className="relative w-12 h-12 flex items-center justify-center">
            <div className={`absolute w-0 h-0 border-l-[25px] border-r-[25px] border-b-[45px] border-l-transparent border-r-transparent border-b-green-400`}></div>
            <span className="relative text-xs text-white font-bold z-10 mt-2">{sponsor.name.substring(0, 2)}</span>
          </div>
        );
      case 'hexagon':
        return (
          <div className="relative w-12 h-12 flex items-center justify-center">
            <div className={`w-12 h-12 bg-gradient-to-br ${sponsor.color} clip-hexagon flex items-center justify-center`}>
              <span className="text-xs text-white font-bold">{sponsor.name.substring(0, 2)}</span>
            </div>
          </div>
        );
      case 'pentagon':
        return (
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${sponsor.color} flex items-center justify-center clip-path-pentagon`}>
            <span className="text-xs text-white font-bold">{sponsor.name.substring(0, 2)}</span>
          </div>
        );
      case 'diamond':
        return (
          <div className={`w-12 h-12 bg-gradient-to-br ${sponsor.color} flex items-center justify-center clip-path-diamond`}>
            <span className="text-xs text-white font-bold">{sponsor.name.substring(0, 2)}</span>
          </div>
        );
      default:
        return (
          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${sponsor.color} flex items-center justify-center`}>
            <span className="text-xs text-white font-bold">{sponsor.name.substring(0, 2)}</span>
          </div>
        );
    }
  };

  return (
    <section
      id="Sponsors"
      ref={sponsorsRef}
      className="pt-20 pb-36 px-8 bg-gradient-to-r from-black to-black-500 text-primary min-h-screen flex flex-col items-center relative overflow-hidden"
    >
      {/* Background grid pattern using Tailwind only */}
      <div className="absolute inset-0 opacity-10 bg-[size:50px_50px] bg-[image:linear-gradient(to_right,rgba(74,222,128,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(74,222,128,0.1)_1px,transparent_1px)]"></div>
      
      {/* Scan lines using Tailwind only */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[image:linear-gradient(transparent_0%,rgba(74,222,128,0.05)_50%,transparent_100%)] bg-[size:100%_4px]"></div>
      
      <div className="max-w-7xl mx-auto w-full space-y-16 relative z-10">
        {/* Title Section with futuristic elements */}
        <div className="text-center">
          <div className="inline-block relative">
            <h2 
              className="text-5xl font-bold mb-6 font-title text-green-400" 
              ref={glitchConstant.ref}
            >
              SPONSORS
            </h2>
           
            <div className="text-xs tracking-widest text-green-500 uppercase mb-2">Corporate Allies • Data: 09.03.2184</div>
          </div>
          <p className="text-green-400/70 text-sm tracking-widest uppercase mb-20">
            <span className="animate-pulse">[Connecting to Quantum Secure Network...]</span>
          </p>
        </div>

        {/* Futuristic Corporate Sponsors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {futuristicSponsors.map((sponsor, index) => (
            <a 
              key={sponsor.id} 
              href={sponsor.link}
              className="block transition-all duration-500 opacity-0 translate-y-5 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0"
              data-visible={visible}
              style={{transitionDelay: `${index * 100}ms`}}
            >
              {/* Futuristic corporate card */}
              <div 
                ref={glitchHover.ref}
                className="bg-black/80 backdrop-blur-sm border border-green-400/30 rounded-md p-5 
                  hover:border-green-400 transition-all duration-300 
                  hover:shadow-lg hover:shadow-green-400/20
                  relative overflow-hidden group h-48"
              >
                {/* Corp ID in corner */}
                <div className="absolute top-2 right-2 text-xs text-green-400/80 font-mono">
                  CORP_ID:{sponsor.id}
                </div>
                
                {/* Corporation identifier */}
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  <div className="text-green-400 font-mono text-xs">{sponsor.code}</div>
                </div>
                
                {/* Corporation logo and name */}
                <div className="flex items-center mb-2">
                  {renderPlaceholderLogo(sponsor)}
                  <div className="text-white text-xl font-bold ml-3">
                    {sponsor.name}
                  </div>
                </div>
                
                {/* Futuristic division marker */}
                <div className="text-green-400/80 text-xs font-mono mb-3">
                  {sponsor.sector} • {sponsor.year}
                </div>
                
                {/* Description with tech feel */}
                <div className="text-gray-400 text-sm mb-4">
                  {sponsor.description}
                </div>
                
                {/* Access terminal */}
                <div className="absolute bottom-3 left-5 right-5">
                  <div className="h-px w-full bg-green-400/30 mb-2"></div>
                  <div className="flex justify-between items-center">
                    <div className="text-green-400/70 text-xs font-mono">
                      <span className="group-hover:hidden">ACCESS_GRANTED</span>
                      <span className="hidden group-hover:inline animate-pulse">CONNECTING...</span>
                    </div>
                    <div className="text-green-400 text-xs">
                      <span className="group-hover:hidden">[VIEW PROFILE]</span>
                      <span className="hidden group-hover:inline">[INITIALIZING]</span>
                    </div>
                  </div>
                </div>
                
                {/* Holographic glow effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Tech lines */}
                <div className="absolute -right-1 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-green-400/50 to-transparent opacity-30"></div>
                <div className="absolute -top-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400/50 to-transparent opacity-30"></div>
              </div>
            </a>
          ))}
        </div>
        
        {/* Become a Sponsor Section with futuristic terminal style */}
        <div 
          className="mt-28 py-8 flex flex-col items-center transition-all duration-500 opacity-0 translate-y-5 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 delay-[1200ms]"
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
            
            {/* Terminal style lines */}
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
        </div>
        
        {/* Futuristic background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Horizontal pulse lines */}
          <div className="absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-green-400/20 to-transparent animate-pulse"></div>
          <div className="absolute right-0 top-2/3 w-full h-px bg-gradient-to-r from-transparent via-green-400/20 to-transparent animate-pulse"></div>
          
          {/* Vertical pulse lines */}
          <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-green-400/20 to-transparent animate-pulse"></div>
          <div className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-green-400/20 to-transparent animate-pulse"></div>
          
          {/* Data stream - using Tailwind animations */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-0 h-full w-1 bg-green-400/20 overflow-hidden left-[20%]">
              <div className="h-20 w-full bg-green-400/50 animate-[ping_4s_infinite]"></div>
            </div>
            <div className="absolute top-0 h-full w-1 bg-green-400/20 overflow-hidden left-[40%]">
              <div className="h-20 w-full bg-green-400/50 animate-[ping_5s_infinite]"></div>
            </div>
            <div className="absolute top-0 h-full w-1 bg-green-400/20 overflow-hidden left-[60%]">
              <div className="h-20 w-full bg-green-400/50 animate-[ping_6s_infinite]"></div>
            </div>
            <div className="absolute top-0 h-full w-1 bg-green-400/20 overflow-hidden left-[80%]">
              <div className="h-20 w-full bg-green-400/50 animate-[ping_7s_infinite]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;