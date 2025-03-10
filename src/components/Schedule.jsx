import React, { useEffect, useState, useRef } from 'react';
import { useGlitch } from 'react-powerglitch';

const Schedule = () => {
  // For animation of schedule appearing
  const [visible, setVisible] = useState(false);
  const scheduleRef = useRef(null);
  const [terminalReady, setTerminalReady] = useState(false);
  
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

  const scheduleData = {
    "venueChange": {
      "title": "! Venue Change",
      "description": "We are required to evacuate UOM Nancy Rothwell Building from 09:00pm - 08:00am overnight. To compensate for this, we have booked room in the Pendulum Hotel for hacking to continue.",
      "contactEmail": "hackathons@unicsmcr.com"
    },
    "days": [
      {
        "date": "Saturday",
        "dayOfWeek": "5th April",
        "events": [
          { "time": "09:00 AM", "title": "Registration Opens", "description": "Please have your QR code ready!", "status": "completed" },
          { "time": "10:30 AM", "title": "Registration Closes", "status": "completed" },
          { "time": "11:00 AM", "title": "Opening Ceremony", "status":"ongoing" },
          { "time": "12:00 PM", "title": "Hacking Starts" },
          { "time": "12:30 PM", "title": "Lunch" },
          { "time": "01:30 PM - 02:30 PM", "title": "Workshop 1 (Jetbrains)", "description": "Learn how to use Jetbrains IDEs to improve your workflow", "status": "upcoming" },
          { "time": "03:00 PM - 04:00 PM", "title": "Workshop 2 (Reply)" },
          { "time": "04:00 PM - 06:00 PM", "title": "Workshop 3 (Fanvue AI)" },
          { "time": "06:00 PM", "title": "Dinner" },
          { "time": "07:00 PM", "title": "Cup Stacking Event" },
          { "time": "08:00 PM", "title": "!LIGHT Event", "status": "cancelled" },
          { "time": "09:00 PM", "title": "Venue Change (Pendulum Hotel)" },
          { "time": "11:00 PM", "title": "Movie Screening" }
        ]
      },
      {
        "date": "Sunday",
        "dayOfWeek": "6th April", 
        "events": [
          { "time": "12:00 AM", "title": "Midnight Snack" },
          { "time": "02:00 AM", "title": "Minecraft Minigames" },
          { "time": "05:00 AM", "title": "Board Games" },
          { "time": "08:00 AM", "title": "Venue Change (UOM Nancy Rothwell Building)" },
          { "time": "08:30 AM", "title": "Breakfast" },
          { "time": "10:00 AM", "title": "Submissions Open" },
          { "time": "11:00 AM", "title": "Remembrance Silence" },
          { "time": "12:00 PM", "title": "Submission Closes" },
          { "time": "12:30 PM", "title": "Lunch" },
          { "time": "12:30 PM - 02:45 PM", "title": "Judging" },
          { "time": "01:00 PM", "title": "Human Hungry Hippos" },
          { "time": "03:30 PM", "title": "Project Showcase" },
          { "time": "04:30 PM", "title": "Closing Ceremony" },
          { "time": "05:00 PM", "title": "Event Ends" }
        ]
      }
    ]
  };

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
    
    if (scheduleRef.current) {
      observer.observe(scheduleRef.current);
    }
    
    return () => {
      if (scheduleRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  // Terminal loading effect
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setTerminalReady(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  const getStatusStyles = (status) => {
    switch(status) {
      case "ongoing":
        return {
          markerClass: "bg-green-500 animate-pulse",
          textClass: "text-green-500",
          bgClass: "bg-green-400/10",
          statusText: "LIVE_NOW",
          statusClass: "text-green-400"
        };
      case "completed":
        return {
          markerClass: "bg-gray-500",
          textClass: "text-gray-400",
          bgClass: "bg-gray-400/5",
          statusText: "COMPLETED",
          statusClass: "text-gray-400"
        };
      case "cancelled":
        return {
          markerClass: "bg-red-500",
          textClass: "line-through text-red-400",
          bgClass: "bg-red-400/5",
          statusText: "CANCELLED",
          statusClass: "text-red-400"
        };
      case "upcoming":
      default:
        return {
          markerClass: "bg-gray-300",
          textClass: "text-gray-200",
          bgClass: "",
          statusText: "SCHEDULED",
          statusClass: "text-gray-300"
        };
    }
  };

  // State for collapsible panels
  const [collapsedPanels, setCollapsedPanels] = useState(scheduleData.days.map(() => false));
  const toggleCollapse = (index) => {
    setCollapsedPanels((prev) => {
      const newCollapsedPanels = [...prev];
      newCollapsedPanels[index] = !newCollapsedPanels[index];
      return newCollapsedPanels;
    });
  };

  return (
    <section
      id="Schedule"
      ref={scheduleRef}
      className="pt-20 pb-36 px-8 bg-gradient-to-r from-black to-black-500 text-primary min-h-screen flex flex-col items-center relative overflow-hidden"
    >
      {/* Grid background and effects (same as Sponsors) */}
      <div className="absolute inset-0 opacity-10 bg-[size:50px_50px] bg-[image:linear-gradient(to_right,rgba(93,202,230,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(93,202,230,0.1)_1px,transparent_1px)]"></div>
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[image:linear-gradient(transparent_0%,rgba(93,202,230,0.05)_50%,transparent_100%)] bg-[size:100%_4px]"></div>
      
      <div className="max-w-5xl mx-auto w-full space-y-16 relative z-10">
        <div className="text-center">
          <div className="inline-block relative">
            <h2 
              className="text-5xl font-bold mb-6 font-title text-primary" 
              ref={glitchConstant.ref}
            >
              SCHEDULE
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed max-w-5xl mx-auto mb-8">
              Our hackathons aren't just 24 hours of straight coding - there'll be many workshops, mini-games and events for everyone to have fun and learn!
            </p>
            <div className="text-xs tracking-widest text-accent2 uppercase mb-2">Event Timeline • Data: 04.03.2184</div>
          </div>
          <p className="text-accent2/70 text-sm tracking-widest uppercase mb-4">
            <span className="animate-pulse">[ACCESSING TEMPORAL DATABASE...]</span>
          </p>
          
          {/* Terminal Window */}
          <div className="mx-auto w-full transition-all duration-500 opacity-0 translate-y-5 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 delay-300"
               data-visible={visible}>
            <div className="bg-black border border-primary/50 rounded-md overflow-hidden shadow-lg shadow-primary/20">
              {/* Terminal Header */}
              <div className="bg-black border-b border-primary/30 py-2 px-4 flex justify-between items-center">
                <div className="text-primary font-mono text-xs">
                  timeline@quantum-network:~/event-schedule
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              
              {/* Terminal Content */}
              <div className="p-5 px-2 bg-black font-mono text-sm text-primary/90 max-h-[700px] overflow-y-auto md:pl-8">
                {/* Initial Connection Sequence */}
                <div className="mb-2">$ establishing connection to temporal database...</div>
                <div className="mb-2">$ running quantum authentication... <span className="text-primary">OK</span></div>
                <div className="mb-2">$ accessing schedule matrix... <span className="text-primary">CONNECTED</span></div>
                <div className="mb-4">$ executing query: <span className="text-white">get --event-timeline --format=detailed</span></div>
                
                {/* Command Output - Schedule */}
                <div className="mb-6">
                  <div className="text-yellow-400 mb-3">
                    [QUANTUM TEMPORAL DATABASE] - EVENT DAYS FOUND: {scheduleData.days.length}
                  </div>
                  
                  {/* Loading animation for terminal outputs */}
                  {!terminalReady && (
                    <div className="animate-pulse space-y-4">
                      <div className="h-8 w-full bg-primary/10 rounded mb-2"></div>
                      <div className="h-64 w-full bg-primary/10 rounded mb-6"></div>
                      <div className="h-8 w-full bg-primary/10 rounded mb-2"></div>
                      <div className="h-64 w-full bg-primary/10 rounded"></div>
                    </div>
                  )}
                  
                  {/* Schedule Days - Now stacked vertically on all screen sizes */}
                  {terminalReady && (
                    <div className="space-y-6">
                      {scheduleData.days.map((day, dayIndex) => (
                        <div 
                          key={dayIndex}
                          className={`mb-6 opacity-0 transition-all duration-500 transform translate-y-2
                                    ${terminalReady ? 'opacity-100 translate-y-0' : ''}`}
                          style={{transitionDelay: `${dayIndex * 300}ms`}}
                        >
                          {/* Day Header - Now clickable */}
                          <div 
                            className="flex items-center mb-3 px-2 py-2 border-t border-b border-primary/20 bg-primary/5 cursor-pointer select-none hover:bg-primary/10 transition-colors"
                            onClick={() => toggleCollapse(dayIndex)}
                          >
                            <span className="text-gray-500 mr-2">{">"}</span>
                            <div className="text-secondary font-bold flex-grow">
                              {day.date.toUpperCase()} [{day.dayOfWeek}]
                            </div>
                            {/* Collapse indicator arrow */}
                            <div className={`text-primary transition-transform duration-300 ${collapsedPanels[dayIndex] ? 'rotate-180' : ''}`}>
                              ▼
                            </div>
                          </div>
                          
                          {/* Events - Now with collapsible animation */}
                          <div 
                            className={`space-y-6 overflow-hidden transition-all duration-300 ease-in-out ${
                              collapsedPanels[dayIndex] 
                                ? 'max-h-0 opacity-0 mb-0' 
                                : 'max-h-[2000px] opacity-100'
                            }`}
                          >
                            {day.events.map((event, eventIndex) => {
                              const styles = getStatusStyles(event.status);
                              return (
                                <div 
                                  key={eventIndex}
                                  className={`opacity-0 transition-all duration-300 transform translate-x-2
                                            ${terminalReady ? 'opacity-100 translate-x-0' : ''}`}
                                  style={{transitionDelay: `${(dayIndex * 300) + (eventIndex * 100)}ms`}}
                                >
                                  <div className="flex items-start my-2">
                                    <div className={`w-3 h-3 ${styles.markerClass} rounded-full mt-1.5 mr-3 flex-shrink-0`}></div>
                                    <div className="flex-grow border-l text-left border-primary/20 pl-3 pb-2">
                                      {/* Unified layout for all screen sizes */}
                                      <div className="flex flex-col gap-y-2 md:flex-row md:items-left md:gap-x-4">
                                        <span className="font-mono text-primary/70">{event.time}</span>
                                        <span className={`font-bold ${styles.textClass}`}>{event.title}</span>
                                        <span className={`inline-block w-max text-xs rounded px-1.5 py-0.5 border border-${styles.statusClass.replace('text-', '')} ${styles.statusClass} md:ml-auto md:mr-8`}>
                                          {styles.statusText}
                                        </span>
                                      </div>
                                      
                                      {event.description && (
                                        <div className="text-xs text-gray-400 mt-2">{event.description}</div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  
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
        
        {/* Legend section with terminal styling */}
        <div 
          className="mt-12 py-6 flex flex-col items-center transition-all duration-500 opacity-0 translate-y-5 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 delay-[1800ms]"
          data-visible={visible}
        >
          <div className="relative max-w-md w-full border border-primary/50 rounded-md p-4 bg-black/50 backdrop-blur-sm">
            <div className="absolute -top-3 left-4 bg-black px-2 text-primary text-xs font-mono">STATUS.CODES</div>
            
            <div className="text-primary font-mono text-sm mb-4">
              <span className="text-gray-500">event@hackathon:~$</span> show --status-codes
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-green-500">LIVE_NOW</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
                <span className="text-gray-200">SCHEDULED</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-500 rounded-full mr-2"></div>
                <span className="text-gray-400">COMPLETED</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <span className="text-red-400">CANCELLED</span>
              </div>
            </div>
            
            {/* Terminal style lines */}
            <div className="mt-4 pt-3 border-t border-primary/20 text-primary/50 text-xs font-mono">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary/50 rounded-full mr-2"></div>
                REALTIME_UPDATES_ENABLED
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary/50 rounded-full mr-2"></div>
                QUANTUM_SYNC_ACTIVE
              </div>
            </div>
          </div>
        </div>
        
        {/* Futuristic background elements - same as Sponsors */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Horizontal pulse lines */}
          <div className="absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse"></div>
          <div className="absolute right-0 top-2/3 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse"></div>
          
          {/* Vertical pulse lines */}
          <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-pulse"></div>
          <div className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-pulse"></div>
          
          {/* Data stream - using Tailwind animations */}
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
      </div>
    </section>
  );
}

export default Schedule;