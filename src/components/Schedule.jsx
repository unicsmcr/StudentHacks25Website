import React from 'react';
import { useGlitch } from 'react-powerglitch'

const scheduleData = {
  "venueChange": {
    "title": "! Venue Change",
    "description": "We are required to evacuate UOM Nancy Rothwell Building from 09:00pm - 08:00am overnight. To compensate for this, we have booked room in the Pendulum Hotel for hacking to continue.",
    "contactEmail": "hackathons@unicsmcr.com"
  },
  "days": [
    {
      "date": "Saturday",
      "dayOfWeek": "4th April",
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
      "dayOfWeek": "5th April", 
      "events": [
        { "time": "12:00 AM", "title": "Midnight Snack" },
        { "time": "02:00 AM", "title": "Minecraft Minigames" },
        { "time": "05:00 AM", "title": "Board Games" },
        { "time": "08:00 AM", "title": "Venue Change (UOM Nancy Rothwell Building)" },
        { "time": "08:30 AM", "title": "Breakfast" },
        { "time": "10:00 AM", "title": "Submissions Open" },
        { "time": "11:00 AM", "title": "Remembrance Silence" },
        { "time": "12:00 PM", "title": "Submission Closes" },
        { "time": "12:30 PM", "desctitleription": "Lunch" },
        { "time": "12:30 PM - 02:45 PM", "title": "Judging" },
        { "time": "01:00 PM", "title": "Human Hungry Hippos" },
        { "time": "03:30 PM", "title": "Project Showcase" },
        { "time": "04:30 PM", "title": "Closing Ceremony" },
        { "time": "05:00 PM", "title": "Event Ends" }
      ]
    }
  ]
};

const Schedule = () => {
  const glitchConstant = useGlitch({
      playMode: "always",
      duration: 3950,
    }); 


    // const generateGradient = (events) => {
    //   const totalEvents = events.length;
    //   const colors = {
    //     completed: "gray",
    //     ongoing: "green",
    //     upcoming: "lightgray",
    //     cancelled: "red"
    //   };
    
    //   const gradientStops = events
    //     .map((event, index) => {
    //       const percentage = (index / totalEvents) * 100;
    //       const color = colors[event.status] || colors.upcoming;
    //       return `${color} ${percentage}%`;
    //     })
    //     .join(", ");
    
    //   return `linear-gradient(to bottom, ${gradientStops})`;
    // };

  // Function to get status styles
  const getStatusStyles = (status) => {
    // Default to "upcoming" if no status is provided
    const eventStatus = status || "upcoming";
    
    switch(eventStatus) {
      case "ongoing":
        return {
          markerClass: "bg-green-500 animate-pulse",
          borderClass: "border-green-500",
          titleClass: "text-green-500",
          timeClass: "text-green-500",
          progressHeight: "100%",
          progressBg: "bg-green-500 bg-opacity-20"
        };
      case "completed":
      case "old": // Handle the "old" status similarly to "completed"
        return {
          markerClass: "bg-gray-500",
          borderClass: "border-gray-500",
          titleClass: "text-gray-400",
          timeClass: "text-gray-400",
          progressHeight: "100%",
          progressBg: "bg-gray-500 bg-opacity-20"
        };
      case "cancelled":
        return {
          markerClass: "bg-red-500",
          borderClass: "border-red-500",
          titleClass: "line-through text-red-400",
          timeClass: "text-gray-400",
          badgeClass: "bg-red-500 text-white",
          badgeText: "CANCELLED",
          progressHeight: "0%",
          progressBg: "bg-red-500 bg-opacity-10"
        };
      case "upcoming":
      default:
        return {
          markerClass: "bg-gray-300",
          borderClass: "border-gray-300",
          titleClass: "text-gray-200",
          timeClass: "text-gray-200",
          progressHeight: "0%",
          progressBg: ""
        };
    }
  };

  return (
    <section className="py-16 px-8 bg-black-900">
      <div className="max-w-7xl mx-auto">
        {/* Title box */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-primary font-title" ref={glitchConstant.ref}>Schedule</h2>
          <br />
          <p className="text-xl leading-relaxed text-gray-200">Our hackathons aren't just 24 hours of straight coding - there'll be many workshops, mini-games and events for everyone to have fun and learn!</p>
        </div>
        
        {/* Legend */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-gray-200">Live Now</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
            <span className="text-gray-200">Upcoming</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gray-500 rounded-full mr-2"></div>
            <span className="text-gray-200">Completed</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <span className="text-gray-200">Cancelled</span>
          </div>
        </div>

        {/* Schedule Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {scheduleData.days.map((day) => (
            <div key={day.date} className="shadow-2xl overflow-hidden rounded-2xl"
            style={{background: "linear-gradient(to bottom, #171717 20%, #212121 40%, #171717)"}}>
              <div className="text-center bg-[#171717] border-black py-4">
                <h2 className="text-3xl text-accent2 font-title">{day.date}</h2>
                <h3 className="text-xl mt-2 text-gray-200 font-title">{day.dayOfWeek}</h3>
              </div>

              <div className="p-4">
                <div className="relative">
                  {day.events.map((event, index) => {
                    const statusStyles = getStatusStyles(event.status);

                    return (
                      <div 
                        key={index} 
                        className={` relative border-l-4 ${statusStyles.borderClass} pl-4 pb-8`}
                      >
                        {/* Time marker */}
                        <div className={`absolute left-[-10px] top-1 w-4 h-4 ${statusStyles.markerClass} rounded-full z-10`}></div>

                        {/* Event details */}
                        <div className="flex justify-between items-start">
                          <span className={`font-semibold absolute ${statusStyles.timeClass} mr-4 text-lg min-w-16`}>{event.time}</span>
                          <div className="text-right flex-grow text-lg">
                            <div className="flex justify-end items-center gap-2">
                              <span className={statusStyles.titleClass}>{event.title}</span>
                              {event.status === "cancelled" && (
                                <span className={`text-xs px-2 py-1 rounded ${statusStyles.badgeClass}`}>
                                  {statusStyles.badgeText}
                                </span>
                              )}
                            </div>
                            {event.description && (
                              <p className={`text-base opacity-80 mt-4 ${statusStyles.timeClass}`}>{event.description}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;