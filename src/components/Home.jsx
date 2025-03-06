import React, { useState, useEffect } from "react";
import { FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Home = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("April 5, 2025 09:00:00").getTime();
    const currentTime = new Date().getTime();
    const difference = eventDate - currentTime;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return null;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="Home" className="h-screen text-gray-100 flex flex-col items-center justify-center text-center">
      <h1 className="font-title text-4xl text-primary font-bold mb-6">Student Hack 2025</h1>
      <p className="text-lg mb-4">Location: Nancy Rothwell</p>

      {timeLeft ? (
        <div className="flex gap-4 text-center text-xl">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="bg-gray-800 px-6 py-3 rounded-lg shadow-lg border border-gray-700"
            >
              <span className="block text-4xl font-bold">{value}</span>
              <span className="text-sm uppercase">{unit}</span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-2xl font-bold text-red-500">Time's up!</p>
      )}

      <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-500 transition duration-300">
        Apply Now
      </button>

      <div className="flex gap-4 mt-6">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaDiscord className="text-gray-400 hover:text-white transition" size={32} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-gray-400 hover:text-white transition" size={32} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-gray-400 hover:text-white transition" size={32} />
        </a>
        <a href="mailto:" target="_blank" rel="noopener noreferrer">
          <MdMail className="text-gray-400 hover:text-white transition" size={32} />
        </a>
      </div>
    </section>
  );
};

export default Home;
