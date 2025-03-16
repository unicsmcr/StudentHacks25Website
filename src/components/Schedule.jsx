import React, { useEffect, useState, useRef } from 'react';
import { SiTruenas } from 'react-icons/si';
import { useGlitch } from 'react-powerglitch';
import scheduleData from '../data/schedule.json';

const Schedule = () => {
  // For animation of schedule appearing
  const [visible, setVisible] = useState(true);
  const scheduleRef = useRef(null);
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

  // // Intersection observer to trigger animations when scrolled into view
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
    
  //   if (scheduleRef.current) {
  //     observer.observe(scheduleRef.current);
  //   }
    
  //   return () => {
  //     if (scheduleRef.current) {
  //       observer.disconnect();
  //     }
  //   };
  // }, []);

  // Terminal loading effect
  // useEffect(() => {
  //   if (visible) {
  //     const timer = setTimeout(() => {
  //       setTerminalReady(true);
  //     }, 1500);
  //     return () => clearTimeout(timer);
  //   }
  // }, [visible]);

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
      className="pt-30 pb-36 px-8 bg-gradient-to-r from-black to-black-500 text-primary min-h-screen flex flex-col items-center relative overflow-hidden"
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
            <div className="text-xs tracking-widest text-accent2 uppercase mb-2">UNICS NETWORK • Data: 30.02.2184</div>
          </div>
          <p className="text-accent2/70 text-sm tracking-widest uppercase mb-4">
            <span className="animate-pulse">[ACCESSING EVENT-SCHEDULE DATABASE...]</span>
          </p>
          
          {/* Terminal Window */}
          <div className="mx-auto w-full transition-all duration-500 opacity-0 translate-y-5 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 delay-300"
               data-visible={visible}>
            <div className="bg-black border border-primary/50 rounded-md overflow-hidden shadow-lg shadow-primary/20">
              {/* Terminal Header */}
              <div className="bg-black border-b border-primary/30 py-2 px-4 flex justify-between items-center">
                <div className="text-primary font-mono text-xs">
                secure-shell@unics-network:~/event-schedule
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              
              {/* Terminal Content */}
              <div className="p-5 px-2 bg-black font-mono text-sm text-primary/90 max-h-[600px] overflow-y-auto md:pl-8">
                {/* Initial Connection Sequence */}
                <div className="mb-2">$ accessing schedule matrix... <span className="text-primary">CONNECTED</span></div>
                <div className="mb-4">$ executing query: <span className="text-white">get --event-timeline --format=detailed</span></div>
                
                {/* Command Output - Schedule */}
                <div className="mb-6">
                  <div className="text-yellow-400 mb-3">
                    [EVENT-SCHEDULE DATABASE] - RECORDS FOUND: {scheduleData.days.length}
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
      </div>
    </section>
  );
}

export default Schedule;