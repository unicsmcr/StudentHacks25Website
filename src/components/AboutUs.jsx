import React, { useState, useEffect, useRef } from "react";
import { useGlitch } from 'react-powerglitch';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const events = [
  {
    id: 1,
    name: "2024",
    events: [
      {
        id: 1,
        name: "Student Hack",
        attendees: 15,
        link: "https://devpost.com/software/hackathon-2005",
      },
      {
        id: 2,
        name: "Great Uni Hack",
        attendees: 18,
        link: "https://devpost.com/software/hackathon-2004",
      },
    ],
  },
  {
    id: 2,
    name: "2023",
    events: [
      {
        id: 1,
        name: "Student Hack",
        attendees: 20,
        link: "https://devpost.com/software/hackathon-2001",
      },
      {
        id: 2,
        name: "Great Uni Hack",
        attendees: 25,
        link: "https://devpost.com/software/hackathon-2000",
      },
    ],
  },
  {
    id: 3,
    name: "2022",
    events: [
      {
        id: 1,
        name: "Student Hack",
        attendees: 25,
        link: "https://devpost.com/software/hackathon-2003",
      },
      {
        id: 2,
        name: "Great Uni Hack",
        attendees: 30,
        link: "https://devpost.com/software/hackathon-2002",
      },
    ],
  },
  {
    id: 4,
    name: "2021",
    events: [
      {
        id: 1,
        name: "Student Hack",
        attendees: 30,
        link: "https://devpost.com/software/hackathon-2001",
      },
      {
        id: 2,
        name: "Great Uni Hack",
        attendees: 35,
        link: "https://devpost.com/software/hackathon-2000",
      },
    ],
  },
  {
    id: 5,
    name: "2020",
    events: [
      {
        id: 1,
        name: "Student Hack",
        attendees: 40,
        link: "https://devpost.com/software/hackathon-2003",
      },
      {
        id: 2,
        name: "Great Uni Hack",
        attendees: 50,
        link: "https://devpost.com/software/hackathon-2002",
      },
    ],
  },
  {
    id: 6,
    name: "2019",
    events: [
      {
        id: 1,
        name: "Student Hack",
        attendees: 60,
        link: "https://devpost.com/software/hackathon-2005",
      },
      {
        id: 2,
        name: "Great Uni Hack",
        attendees: 70,
        link: "https://devpost.com/software/hackathon-2004",
      },
    ],
  },
  {
    id: 7,
    name: "2018",
    events: [
      {
        id: 1,
        name: "Student Hack",
        attendees: 80,
        link: "https://devpost.com/software/hackathon-2007",
      },
      {
        id: 2,
        name: "Great Uni Hack",
        attendees: 100,
        link: "https://devpost.com/software/hackathon-2006",
      },
    ],
  },
  {
    id: 8,
    name: "2017",
    events: [
      {
        id: 1,
        name: "Student Hack",
        attendees: 100,
        link: "https://devpost.com/software/hackathon-2009",
      },
      {
        id: 2,
        name: "Great Uni Hack",
        attendees: 120,
        link: "https://devpost.com/software/hackathon-2008",
      },
    ],
  },
  {
    id: 9,
    name: "2016",
    events: [
      {
        id: 1,
        name: "Student Hack",
        attendees: 25,
        link: "https://devpost.com/software/hackathon-2009",
      },
      {
        id: 2,
        name: "Great Uni Hack",
        attendees: 30,
        link: "https://devpost.com/software/hackathon-2008",
      },
    ],
  },
  {
    id: 10,
    name: "2015",
    events: [
      {
        id: 1,
        name: "Student Hack",
        attendees: 30,
        link: "https://devpost.com/software/hackathon-2011",
      },
      {
        id: 2,
        name: "Great Uni Hack",
        attendees: 35,
        link: "https://devpost.com/software/hackathon-2010",
      },
    ],
  },
  {
    id: 11,
    name: "2014",
    events: [
      {
        id: 1,
        name: "Student Hack",
        attendees: 40,
        link: "https://devpost.com/software/hackathon-2012",
      },
      {
        id: 2,
        name: "Great Uni Hack",
        attendees: 40,
        link: "https://devpost.com/software/hackathon-2012",
      },
    ],
  },
  {
    id: 12,
    name: "2013",
    events: [
      {
        id: 1,
        name: "Student Hack",
        attendees: 50,
        link: "https://devpost.com/software/hackathon-2013",
      }
    ],
  }
];

const AboutUs = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [visible, setVisible] = useState(false);
  const [terminalReady, setTerminalReady] = useState(false);
  const infoRef = useRef(null);
  const terminalContentRef = useRef(null);
  const containerRef = useRef(null);
  

  const glitchConstant = useGlitch({
    playMode: "always",
    duration: 3950,
  }); 

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
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setTerminalReady(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  // Handle keyboard press (ESC key)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedEvent(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Scroll to event details when selected
  useEffect(() => {
    if (selectedEvent && terminalContentRef.current) {
      // Short delay to ensure content renders before scrolling
      setTimeout(() => {
        const detailsElement = document.getElementById(`event-details-${selectedEvent.id}`);
        if (detailsElement) {
          terminalContentRef.current.scrollTop = detailsElement.offsetTop + 1000;
        }
      }, 100);
    }
  }, [selectedEvent]);

  const images = [
    "https://picsum.photos/seed/1/2000/1000",
    "https://picsum.photos/seed/2/2000/1000",
    "https://picsum.photos/seed/3/2000/1000"
  ];

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const handleEventClick = (event) => {
    // Toggle selection if clicking the same event, otherwise switch to the new event
    setSelectedEvent(prevEvent => prevEvent?.id === event.id ? null : event);
  };

  return (
    <section 
      ref={containerRef}
      id="AboutUs"
      className="pt-20 pb-36 px-8 bg-gradient-to-r from-black to-black-500 text-primary min-h-screen flex flex-col items-center relative overflow-hidden"
    >
      {/* Grid background and effects (same as Schedule section) */}
      <div className="absolute inset-0 opacity-10 bg-[size:50px_50px] bg-[image:linear-gradient(to_right,rgba(93,202,230,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(93,202,230,0.1)_1px,transparent_1px)]"></div>
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[image:linear-gradient(transparent_0%,rgba(93,202,230,0.05)_50%,transparent_100%)] bg-[size:100%_4px]"></div>
      
      <div className="max-w-7xl mx-auto w-full space-y-12 relative z-10">
        {/* About Us Section */}
        <div className="text-center">
          <h2 
            className="text-5xl font-bold mb-6 font-title" 
            ref={glitchConstant.ref}
          >
            About Us
          </h2>
          <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            We are UniCS, the Computer Science Society at the esteemed University of Manchester.
            Our mission is to foster unity among students through a diverse array of student-led events,
            with our hackathons standing out as our flagship offerings, widely celebrated within our community.
          </p>
        </div>
  
        {/* Images Section */}
        <div className="slider-container w-full md:w-3/4 lg:w-1/2 align-middle mx-auto">
          <Slider {...settings}>
            {images.map((src, index) => (
              <div key={index}>
                <img src={src} alt={`placeholder ${index + 1}`} className="cursor-pointer w-full h-auto rounded-lg" />
              </div>
            ))}
          </Slider>
        </div>
  
        {/* Terminal Past Events Section */}
        <div 
          ref={infoRef} 
          className="w-full transition-all duration-500 opacity-0 translate-y-5"
          style={{ 
            opacity: visible ? 1 : 0, 
            transform: visible ? 'translateY(0)' : 'translateY(5px)',
            transitionDelay: '300ms'
          }}
        >
          {/* <p className="text-accent2 text-3xl mb-9 text-center font-title">Past Events</p> */}
          <div className="text-xs tracking-widest text-center text-accent2 uppercase mb-2">Event Timeline • Data: 04.03.2184</div>
          <p className="text-accent2/70 text-sm text-center tracking-widest uppercase mb-4">
            <span className="animate-pulse">[ACCESSING HISTORICAL ARCHIVES...]</span>
          </p>
          {/* Terminal Window */}
          <div className="mx-auto w-full max-w-xl">
            <div className="bg-black border border-primary/50 rounded-md overflow-hidden shadow-lg shadow-primary/20">
              {/* Terminal Header */}
              <div className="bg-black border-b border-primary/30 py-2 px-4 flex justify-between items-center">
                <div className="text-primary font-mono text-xs">
                  archives@unics-network:~/event-history
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              
              {/* Terminal Content */}
              <div 
                ref={terminalContentRef}
                style={{scrollBehavior: "smooth"}}
                className="p-5 bg-black font-mono text-sm text-primary/90 max-h-[500px] overflow-y-auto relative"
              >
                {/* Initial Connection Sequence */}
                <div className="mb-2">$ connecting to historical archives...</div>
                <div className="mb-2">$ authentication successful <span className="text-green-500">OK</span></div>
                <div className="mb-2">$ retrieving past event data... <span className="text-primary">CONNECTED</span></div>
                <div className="mb-4">$ executing query: <span className="text-white">get --past-events --format=detailed</span></div>
                
                {/* Command Output */}
                <div className="text-yellow-400 mb-3">
                  [HISTORICAL DATABASE] - EVENT ENTRIES FOUND: {events.length}
                </div>
                
                {/* Type effect for command prompt */}
                <div className="mb-4">
                  <span className="text-green-400">SELECT AN EVENT YEAR TO ACCESS DETAILED RECORDS</span>
                </div>
                
                {/* Interactive Grid of Event Years */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 my-6">
                  {events.map((event) => (
                    <div 
                      key={event.id} 
                      className={`
                        border border-primary/30 rounded p-3 text-center cursor-pointer
                        transition-all duration-300 hover:bg-primary/10 hover:border-primary/50
                        ${selectedEvent && selectedEvent.id === event.id ? 'bg-primary/20 border-primary' : ''}
                      `}
                      onClick={() => handleEventClick(event)}
                    >
                      <div className="text-lg font-bold mb-1">{event.name}</div>
                      <div className="text-xs text-primary/70">[ACCESS RECORDS]</div>
                    </div>
                  ))}
                </div>
                
                {/* Container for event details - only visible when an event is selected */}
                {selectedEvent ? (
                  <div className="relative mt-6 pt-4 border-t border-primary/30">
                    {/* Selected Event Details */}
                    <div 
                      id={`event-details-${selectedEvent.id}`}
                      className="transition-all duration-300"
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-green-400">ACCESSING RECORDS FOR {selectedEvent.name}</span>
                      </div>
                      
                      <div className="bg-black/50 border border-primary/20 rounded p-4 my-3">
                        <div className="text-xs text-primary/50 mb-2">$ cat ./event_details.json</div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {selectedEvent.events?.map((subEvent, index) => (
                            <div 
                              key={subEvent.id}
                              className="border border-primary/20 p-3 rounded bg-black/70"
                              style={{
                                animation: 'fadeIn 0.3s ease-out forwards',
                                animationDelay: `${index * 100}ms`
                              }}
                            >
                              <div className="font-bold text-secondary mb-1">{subEvent.name}</div>
                              <div className="text-xs">
                                <span className="text-primary/70">ATTENDEES:</span> 
                                <span className="text-white ml-1">{subEvent.attendees}</span>
                              </div>
                              {subEvent.date && (
                                <div className="text-xs mt-1">
                                  <span className="text-primary/70">DATE:</span>
                                  <span className="text-white ml-1">{subEvent.date}</span>
                                </div>
                              )}
                              {subEvent.link && (
                                <div className="text-xs mt-1">
                                  <span className="text-primary/70">LINK:</span>
                                  <a href={subEvent.link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary ml-1 underline">
                                    View Project
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
                    </div>
                  </div>
                ) : (
                  <div className="mt-4 text-gray-500 text-sm italic text-center">
                    <span>[ Select an event to view detailed records ]</span>
                  </div>
                )}
                
                {/* Terminal cursor blinking after outputs */}
                <div className="mt-6">
                  <div className="text-gray-500">$ <span className="animate-pulse">_</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Futuristic background elements - matching Schedule section */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Horizontal pulse lines */}
        <div className="absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse"></div>
        <div className="absolute right-0 top-2/3 w-full h-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse"></div>
        
        {/* Vertical pulse lines */}
        <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-pulse"></div>
        <div className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-pulse"></div>
        
        {/* Data streams */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 h-full w-1 bg-primary/20 overflow-hidden left-[20%]">
            <div className="h-20 w-full bg-primary/50 animate-[ping_4s_infinite]"></div>
          </div>
          <div className="absolute top-0 h-full w-1 bg-primary/20 overflow-hidden left-[40%]">
            <div className="h-20 w-full bg-primary/50 animate-[ping_5s_infinite]"></div>
          </div>
          <div className="absolute top-0 h-full w-1 bg-primary/20 overflow-hidden left-[60%]">
            <div className="h-20 w-full bg-primary/50 animate-[ping_6s_infinite]"></div>
          </div>
          <div className="absolute top-0 h-full w-1 bg-primary/20 overflow-hidden left-[80%]">
            <div className="h-20 w-full bg-primary/50 animate-[ping_7s_infinite]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;