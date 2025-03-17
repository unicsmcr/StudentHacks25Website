import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { useGlitch } from 'react-powerglitch';
import events from '../data/past_events.json';

const AboutUs = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [visible, setVisible] = useState(true);
  const [terminalReady, setTerminalReady] = useState(true);
  const infoRef = useRef(null);
  const terminalContentRef = useRef(null);
  
  const glitchConstant = useGlitch({
    playMode: "always",
    duration: 3950,
  }); 

  // Handle keyboard press (ESC key)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedYear(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Images remain the same
  const images = [
    '/images/AboutImages/HackathonImg1.jpg',
    '/images/AboutImages/HackathonImg2.jpg',
    '/images/AboutImages/HackathonImg3.jpg',
    '/images/AboutImages/HackathonImg4.jpg',
    '/images/AboutImages/HackathonImg5.jpg',
    '/images/AboutImages/HackathonImg6.jpg',
  ];

  // Enhanced slider settings for the overlapping gallery effect
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    dots: true,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "40px",
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "50px",
        }
      }
    ]
  };

  const handleYearClick = (yearId) => {
    setSelectedYear(prevYear => prevYear === yearId ? null : yearId);
  };

  const getYearById = (yearId) => {
    return events.find(event => event.id === yearId);
  };

  return (
    <section 
      id="AboutUs"
      className="pt-30 pb-36 px-4 bg-gradient-to-r from-black to-black-500 text-primary min-h-screen flex flex-col items-center relative overflow-hidden"
    >
      {/* Grid background and effects */}
      <div className="absolute inset-0 opacity-10 bg-[size:50px_50px] bg-[image:linear-gradient(to_right,rgba(93,202,230,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(93,202,230,0.1)_1px,transparent_1px)]"></div>
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[image:linear-gradient(transparent_0%,rgba(93,202,230,0.05)_50%,transparent_100%)] bg-[size:100%_4px]"></div>
      
      <div className="max-w-7xl mx-auto w-full space-y-12 relative z-10">
        {/* About Us Section remains the same */}
        <div className="text-center">
          <h2 
            className="text-5xl font-bold mb-6 font-title" 
            ref={glitchConstant.ref}
          >
            ABOUT US
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            We are UniCS, the Computer Science Society at the esteemed University of Manchester.
            Our mission is to foster unity among students through a diverse array of student-led events,
            with our hackathons standing out as our flagship offerings, widely celebrated within our community.
          </p>
        </div>
  
        {/* Enhanced Gallery Component with 3:2 aspect ratio */}
        <div className="slider-container w-full md:w-5/6 lg:w-3/4 mx-auto">
          <Slider {...settings}>
            {images.map((src, index) => (
              <div key={index} className="px-2">
                <div className="relative transition-all duration-300 transform hover:scale-105">
                  <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                    <img 
                      src={src} 
                      alt={`Hackathon ${index + 1}`} 
                      className="w-full h-full object-cover cursor-pointer"
                      style={{ aspectRatio: '3/2' }}
                    />
                  </div>
                  <div className="absolute inset-0 rounded-lg shadow-lg" style={{
                    boxShadow: "0 0 15px rgba(93, 202, 230, 0.3)"
                  }}></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
  
        <div 
          ref={infoRef} 
          className="w-full transition-all duration-500 opacity-0 text-center translate-y-5"
          style={{ 
            opacity: visible ? 1 : 0, 
            transform: visible ? 'translateY(0)' : 'translateY(5px)',
            transitionDelay: '300ms'
          }}
        >
          <div className="text-xs tracking-widest text-center text-accent2 uppercase mb-2">UNICS NETWORK • Data: 30.02.2184</div>
          <p className="text-accent2/70 text-sm text-center tracking-widest uppercase mb-4">
            <span className="animate-pulse">[ACCESSING EVENT-HISTORY DATABASE...]</span>
          </p>
          
          {/* Terminal Window */}
          <div className="mx-auto w-full max-w-5xl">
            <div className="bg-black border border-primary/50 rounded-md overflow-hidden shadow-lg shadow-primary/20">
              {/* Terminal Header */}
              <div className="bg-black border-b border-primary/30 py-2 px-4 flex justify-between items-center">
                <div className="text-primary font-mono text-xs text-left">
                terminal@unics-network:~/history
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              
              {/* Terminal Content - Redesigned */}
              <div 
                ref={terminalContentRef}
                className="p-5 bg-black font-mono text-sm text-primary/90 max-h-[600px] overflow-y-auto"
              >
                {/* Initial Connection Sequence */}
                <div className="mb-2">$ retrieving past event data... <span className="text-primary">CONNECTED</span></div>
                <div className="mb-4">$ executing query: <span className="text-white">get --past-events --format=detailed</span></div>
                
                {/* Command Output */}
                <div className="text-yellow-400 mb-3">
                  [EVENT-HISTORY DATABASE] - RECORDS FOUND: {events.length}
                </div>
                
                {/* Horizontal Timeline/Year Selector */}
                <div className="my-6 border-t border-b border-primary/30 py-3 overflow-x-auto">
                  <div className="flex space-x-2 min-w-max px-2">
                    {events.map((event) => (
                      <div 
                        key={event.id} 
                        className={`
                          border border-primary/30 rounded px-5 py-2 cursor-pointer
                          transition-all duration-300 hover:bg-primary/10 hover:border-primary/50
                          ${selectedYear === event.id ? 'bg-primary/20 border-primary text-white' : ''}
                          min-w-[70px] text-center
                        `}
                        onClick={() => handleYearClick(event.id)}
                      >
                        <div className="font-bold">{event.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Event Details Section - Now showing directly below the selector */}
                <div className={`transition-all duration-300 ${selectedYear ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                  {selectedYear && (
                    <>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-green-400">ACCESSING RECORDS FOR {getYearById(selectedYear)?.name}</span>
                      </div>
                      
                      <div className="bg-black/50 border border-primary/20 rounded p-4 my-3">
                        <div className="text-xs text-primary/50 mb-2">$ cat ./events_{getYearById(selectedYear)?.name}.json</div>
                        
                        <div className="space-y-3">
                          {getYearById(selectedYear)?.events?.map((subEvent, index) => (
                            <div 
                              key={subEvent.id}
                              className="border border-primary/20 p-3 rounded bg-black/70"
                              style={{
                                animation: 'fadeIn 0.3s ease-out forwards',
                                animationDelay: `${index * 100}ms`,
                                opacity: 0
                              }}
                            >
                              <div className="flex flex-wrap justify-between items-start">
                                <div className="font-bold text-secondary">{subEvent.name}</div>
                                <div className="text-xs bg-primary/20 px-2 py-1 rounded-full">
                                  <span className="text-white">{subEvent.attendees}</span>
                                  <span className="text-primary/70 ml-1">attendees</span>
                                </div>
                              </div>
                              
                              {subEvent.date && (
                                <div className="text-xs mt-2">
                                  <span className="text-primary/70">DATE:</span>
                                  <span className="text-white ml-1">{subEvent.date}</span>
                                </div>
                              )}

                              {subEvent.link && (
                                <div className="text-xs mt-1 flex items-center">
                                  <div className="font-bold text-accent2/80 ">{subEvent.description}</div>
                                </div>
                              )}
                              
                              {subEvent.link && (
                                <div className="text-xs mt-1 flex items-center">
                                  <a href={subEvent.link} target="_blank" rel="noopener noreferrer" className="text-accent2/80 hover:text-accent2 underline flex items-center">
                                    View on Devpost
                                    <span className="ml-1">→</span>
                                  </a>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="text-xs text-gray-500 mt-2">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-primary/50 rounded-full mr-2"></div>
                          END OF RECORD • PRESS ESC TO CLEAR SELECTION
                        </div>
                      </div>
                    </>
                  )}
                </div>
                
                {/* Show hint when no year is selected */}
                {!selectedYear && (
                  <div className=" text-gray-500 text-center mb-2">
                    <div className="animate-pulse">[ SELECT A YEAR FROM THE TIMELINE ]</div>
                  </div>
                )}
                
                {/* Terminal cursor blinking after outputs */}
                <div className="">
                  <div className="text-gray-500">$ <span className="animate-pulse">_</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add global CSS keyframes for fadeIn animation and custom gallery styling */}
      <style jsx="true" global="true">{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Custom styling for the gallery */
        .slick-slide {
          transition: all 0.3s ease;
          transform: scale(0.85);
          opacity: 0.6;
          filter: blur(1px);
        }
        
        .slick-center {
          transform: scale(1);
          opacity: 1;
          z-index: 10;
          filter: blur(0);
        }
        
        .slick-slide:not(.slick-center):hover {
          opacity: 0.8;
          transform: scale(0.9);
          filter: blur(0.5px);
        }
        
        /* Ensure images maintain 3:2 aspect ratio */
        .aspect-w-3 {
          position: relative;
          padding-bottom: 66.666%; /* 2/3 = 66.666% */
        }
        
        .aspect-w-3 > img {
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          object-fit: cover;
        }
        
        /* Styling for slider dots */
        .slick-dots li button:before {
          color: rgba(93, 202, 230, 0.5);
        }
        
        .slick-dots li.slick-active button:before {
          color: rgba(93, 202, 230, 1);
        }
        
        /* Style the slider arrows */
        .slick-prev, .slick-next {
          font-size: 0;
          line-height: 0;
          position: absolute;
          top: 50%;
          display: block;
          width: 30px;
          height: 30px;
          padding: 0;
          transform: translate(0, -50%);
          cursor: pointer;
          color: transparent;
          border: none;
          outline: none;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
          z-index: 20;
        }
        
        .slick-prev:before, .slick-next:before {
          color: rgba(93, 202, 230, 0.8);
        }
      `}</style>
    </section>
  );
}

export default AboutUs;