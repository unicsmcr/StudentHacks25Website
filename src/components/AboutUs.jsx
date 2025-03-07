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
  const containerRef = useRef(null);
  const glitch = useGlitch({
    playMode: "click",
    duration: 200,
  });

  const glitchConstant = useGlitch({
    playMode: "always",
    duration: 3950,
  }); 

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
    setSelectedEvent(prevEvent => prevEvent?.id === event.id ? null : event);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectedEvent) {
        const eventButtons = containerRef.current.querySelectorAll('.event-button');
        const isClickOnEventButton = Array.from(eventButtons).some(button => 
          button.contains(event.target)
        );
        if (!isClickOnEventButton) {
          setSelectedEvent(null);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedEvent]);

  return (
    <section 
      ref={containerRef}
      id="AboutUs"
      className="pt-20 pb-36 px-8 bg-gradient-to-r from-black to-black-500 text-primary min-h-screen flex flex-col items-center"
    >
      <div className="max-w-7xl mx-auto w-full space-y-12">
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
  
        {/* Past Events Section */}
        <div className="w-full">
          <p className="text-accent2 text-3xl mb-9 text-center font-title">View Past Events</p>
          <div className="flex flex-wrap gap-4 justify-center">
            {events.map((event) => (
              <div key={event.id} className="relative text-center">
                <button
                  className={`w-full bg-transparent rounded-md flex items-center justify-center relative overflow-hidden hover:shadow-2xl glitcheffect event-button`}
                  style={{ height: "80px", width: "120px", outline: "none", border: "none" }}
                  ref={glitch.ref}
                  onClick={() => handleEventClick(event)}
                >
                  <div className="w-full h-5/6 bg-transparent flex items-center justify-center">
                    <div className="w-4/4 h-4/4 bg-secondary"></div>
                  </div>
                </button>
                <p className="w-full text-lg font-semibold font-title text-gray-300 mt-2">
                  {event.name}
                </p>
                {selectedEvent && selectedEvent.id === event.id && (
                  <div className="mt-2 absolute place-items-center w-full flex-col z-50 shadow-xl">
                    <div 
                      className="w-0 h-0"
                      style={{ 
                        borderLeft: "8px solid transparent",
                        borderRight: "8px solid transparent",
                        borderBottom: "8px solid #000000",
                      }}
                    ></div>
                    <div 
                      className="bg-neutral-900 shadow-xxl rounded-md"
                      style={{ 
                        top: "100%", 
                        width: "180px",
                        animation: "fadeIn 0.3s ease-out forwards",
                      }}
                    >
                      {selectedEvent.events?.map((subEvent) => (
                        <p key={subEvent.id} className="text-s text-gray-300 p-2 text-center">
                          {subEvent.name}
                          <br />
                          <span className="text-xs">{subEvent.attendees} attendees</span>
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
    </section>
  );
}

export default AboutUs;