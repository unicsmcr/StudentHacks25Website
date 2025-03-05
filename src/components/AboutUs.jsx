import React, { useState, useEffect, useRef, use } from "react";
import { useGlitch } from 'react-powerglitch'
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
  const containerRef = useRef(null);
  const glitch = useGlitch({
    playMode: "click",
    duration: 200,
  });

  const glitchConstant = useGlitch({
    playMode: "always",
    duration: 200,
  }); 

  // Handle click event
  const handleEventClick = (event) => {
    // If the clicked event is already selected, deselect it
    setSelectedEvent(prevEvent => prevEvent?.id === event.id ? null : event);
  };

  // Effect to handle clicks outside of the current button
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if an event is selected
      if (selectedEvent) {
        // Find all event buttons in the container
        const eventButtons = containerRef.current.querySelectorAll('.event-button');
        
        // Check if the click is not on any event button
        const isClickOnEventButton = Array.from(eventButtons).some(button => 
          button.contains(event.target)
        );

        // Deselect if the click is not on any event button
        if (!isClickOnEventButton) {
          setSelectedEvent(null);
        }
      }
    };

    // Add event listener to document
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedEvent]);

  return (
    <section 
      ref={containerRef}
      className="py-20 px-8 bg-gradient-to-r from-black to-black-500 text-primary min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* About Us Text */}
        <div className="text-left">
          <h2 className="text-5xl font-bold mb-6">About Us</h2>
          <p className="text-lg leading-relaxed opacity-80">
            We are UniCS, the Computer Science Society at the esteemed University of Manchester.
            Our mission is to foster unity among students through a diverse array of student-led events,
            with our hackathons standing out as our flagship offerings, widely celebrated within our community.
          </p>
        </div>

        {/* Event Buttons and Info Boxes */}
        <div className="relative">
          {/* Grid of Buttons */}
          <div className="grid grid-cols-4 gap-2 relative">
            {events.map((event) => (
              <div
                key={event.id}
                className="relative"
              >
                {/* Regular Button (Cube) */}
                <button
                  className={`w-full bg-transparent text-tertiary rounded-md flex items-center justify-center relative overflow-hidden hover:shadow-2xl glitcheffect event-button`}
                  style={{ height: "100px", outline: "none", border: "none" }}
                  ref={glitch.ref}
                  onClick={() => handleEventClick(event)}
                >
                  <div className="w-full h-5/6 bg-transparent flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-secondary "></div>
                  </div>
                </button>

                <p className="mt-2 text-sm font-semibold text-gray-300 align-middle text-center">
                  {event.name}
                </p>

                {/* Popup for Event Details */}
                {selectedEvent && selectedEvent.id === event.id && (
                  <div>
                    <div 
                      className="absolute z-10 left-0 right-0 mt-2 bg-gray-800 shadow-xxl rounded-md p-3 overflow-hidden"
                      style={{ 
                        top: "100%", 
                        width: "100%",
                        animation: "fadeIn 0.3s ease-out forwards"
                      }}
                    >
                      {selectedEvent.events?.map((subEvent) => (
                        <p key={subEvent.id} className="text-xs text-gray-300 mb-1 text-center">
                          {subEvent.name}
                          <br />
                          <span className="text-[10px]">{subEvent.attendees} attendees</span>
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Adding a small keyframe animation for smooth fade-in */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
};

export default AboutUs;