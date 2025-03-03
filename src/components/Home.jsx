import React, { useState, useEffect } from 'react';

const Home = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("April 5, 2025 09:00:00").getTime();
    const currentTime = new Date();
    const difference = eventDate - currentTime;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <section className="h-screen bg-black-500 text-primary flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">Student Hack 2025</h1>
      <p className="text-xl mb-6">Countdown: {timerComponents.length ? timerComponents : <span>Time's up!</span>}</p>
      <button className="bg-secondary text-tertiary py-2 px-6 rounded-full hover:bg-blue-100 transition">
        Apply Now
      </button>
    </section>
  );
};

export default Home;