
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
      "date": "9th Nov",
      "dayOfWeek": "Saturday",
      "events": [
        { "time": "09:00 AM", "description": "Registration Opens" },
        { "time": "10:00 AM", "description": "Icebreaker: Human Bingo" },
        { "time": "10:30 AM", "description": "Registration Closes" },
        { "time": "11:00 AM", "description": "Opening Ceremony" },
        { "time": "12:00 PM", "description": "Hacking Starts" },
        { "time": "12:30 PM", "description": "Lunch" },
        { "time": "01:30 PM - 02:30 PM", "description": "Workshop 1 (Jetbrains)" },
        { "time": "03:00 PM - 04:00 PM", "description": "Workshop 2 (Reply)" },
        { "time": "04:00 PM - 06:00 PM", "description": "Workshop 3 (Fanvue AI)" },
        { "time": "06:00 PM", "description": "Dinner" },
        { "time": "07:00 PM", "description": "Cup Stacking Event" },
        { "time": "08:00 PM", "description": "!LIGHT Event" },
        { "time": "09:00 PM", "description": "Venue Change (Pendulum Hotel)" },
        { "time": "11:00 PM", "description": "Movie Screening" }
      ]
    },
    {
      "date": "10th Nov",
      "dayOfWeek": "Sunday", 
      "events": [
        { "time": "12:00 AM", "description": "Midnight Snack" },
        { "time": "02:00 AM", "description": "Minecraft Minigames" },
        { "time": "05:00 AM", "description": "Board Games" },
        { "time": "08:00 AM", "description": "Venue Change (UOM Nancy Rothwell Building)" },
        { "time": "08:30 AM", "description": "Breakfast" },
        { "time": "10:00 AM", "description": "Submissions Open" },
        { "time": "11:00 AM", "description": "Remembrance Silence" },
        { "time": "12:00 PM", "description": "Submission Closes" },
        { "time": "12:30 PM", "description": "Lunch" },
        { "time": "12:30 PM - 02:45 PM", "description": "Judging" },
        { "time": "01:00 PM", "description": "Human Hungry Hippos" },
        { "time": "03:30 PM", "description": "Project Showcase" },
        { "time": "04:30 PM", "description": "Closing Ceremony" },
        { "time": "05:00 PM", "description": "Event Ends" }
      ]
    }
  ]
};

const Schedule = () => {
  const glitchConstant = useGlitch({
      playMode: "always",
      duration: 3950,
    }); 

  return (
    <section className="py-16 px-8 bg-black-900">
      <div className="max-w-7xl mx-auto">
        {/* Titlte box */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary" ref={glitchConstant.ref}>Schedule</h2>
          <br />
          <p className="text-lg text-gray-100">Our hackathons aren't just 24 hours of straight coding - there'll be many workshops, mini-games and events for everyone to have fun and learn!</p>
        </div>
        {/* Venue Change Info Box */}
        {/* <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-8">
          <h2 className="text-xl font-bold text-yellow-700 mb-2">
            {scheduleData.venueChange.title}
          </h2>
          <p className="mb-2">{scheduleData.venueChange.description}</p>
          <p>
            For questions, contact:{' '}
            <a 
              href={`mailto:${scheduleData.venueChange.contactEmail}`} 
              className="text-blue-600 hover:underline"
            >
              {scheduleData.venueChange.contactEmail}
            </a>
          </p>
        </div> */}

        {/* Schedule Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {scheduleData.days.map((day) => (
            <div key={day.date} className="bg-neutral-900 shadow-xxxl overflow-hidden">
              <div className="text-center bg-black border-black py-4">
                <h2 className="text-2xl text-primary font-bold">{day.date}</h2>
                <h3 className="text-xl text-gray-100">{day.dayOfWeek}</h3>
              </div>

              <div className="p-4">
                <div className="relative border-l-4 border-black pl-4">
                  {day.events.map((event, index) => (
                    <div 
                      key={index} 
                      className="mb-4 relative pl-4 border-b border-gray-100 pb-4 last:border-b-0"
                    >
                      {/* Time marker */}
                      <div className="absolute left-[-22px] top-1 w-4 h-4 bg-secondary rounded-full"></div>
                      
                      {/* Event details */}
                      <div className="flex justify-between">
                        <span className="font-semibold text-accent2 mr-2">{event.time}</span>
                        <span className="text-gray-100 text-right flex-grow">{event.description}</span>
                      </div>
                    </div>
                  ))}
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