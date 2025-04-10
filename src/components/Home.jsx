import React, { useState, useEffect, useRef } from "react";
import { FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const fullText =
  "$ establishing connection to temporal network...\n$ calculating time until event horizon...";
const typingSpeed = 30;

const Home = () => {
  const [terminalReady, setTerminalReady] = useState(false);
  const [countdownVisible, setCountdownVisible] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const [terminalText, setTerminalText] = useState("");
  const terminalRef = useRef(null);

  const calculateTimeLeft = () => {
    const eventDate = new Date("April 5, 2025 07:00:00").getTime();
    const currentTime = new Date().getTime();
    const difference = eventDate - currentTime;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Terminal typing effect
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTerminalText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setTypingComplete(true);
        setTimeout(() => {
          setTerminalReady(true);
          setTimeout(() => {
            setCountdownVisible(true);
          }, 400);
        }, 500);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Auto-scroll terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalText]);

  const timeUnits = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  useEffect(() => {
    if (terminalReady && countdownVisible) {
      console.log(
        "Welcome to \r\n     _______.___________. __    __   _______   _______ .__   __. .___________.\r\n    \/       |           ||  |  |  | |       \\ |   ____||  \\ |  | |           |\r\n   |   (----`---|  |----`|  |  |  | |  .--.  ||  |__   |   \\|  | `---|  |----`\r\n    \\   \\       |  |     |  |  |  | |  |  |  ||   __|  |  . `  |     |  |     \r\n.----)   |      |  |     |  `--\'  | |  \'--\'  ||  |____ |  |\\   |     |  |     \r\n|_______\/       |__|      \\______\/  |_______\/ |_______||__| \\__|     |__|     \r\n                                                                              \r\n __    __       ___       ______  __  ___                                     \r\n|  |  |  |     \/   \\     \/      ||  |\/  \/                                     \r\n|  |__|  |    \/  ^  \\   |  ,----\'|  \'  \/                                      \r\n|   __   |   \/  \/_\\  \\  |  |     |    <                                       \r\n|  |  |  |  \/  _____  \\ |  `----.|  .  \\                                      \r\n|__|  |__| \/__\/     \\__\\ \\______||__|\\__\\                                     \r\n                                                                              \r\nSolve the following challenge to have a chance at winning a £10 Amazon Gift Card:\n.08 .7 .4 .07 .1 .4 .09\n.01 .4 .02 .04 .03\n\nOr, if that is too hard, decrypt \"OIH FDGWPIO\", hint: Manchester Baby\n\nGood luck! Send solutions (or just say hi!) to hackathons@unicsmcr.com, or find Arpan at the hackathon asap to tell the answer.",
      );
    }
  }, [terminalReady, countdownVisible]);

  return (
    <section
      id="Home"
      className="min-h-screen text-gray-100 flex flex-col items-center justify-center text-center overflow-visible relative px-4 pb-16"
    >
      {/* Background grid and effects similar to Schedule section */}
      <div className="absolute inset-0 opacity-10 bg-[size:50px_50px] bg-[image:linear-gradient(to_right,rgba(93,202,230,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(93,202,230,0.1)_1px,transparent_1px)]"></div>
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[image:linear-gradient(transparent_0%,rgba(93,202,230,0.05)_50%,transparent_100%)] bg-[size:100%_4px]"></div>

      {/* Horizontal pulse lines */}
      <div className="absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse"></div>
      <div className="absolute right-0 top-2/3 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse"></div>

      {/* Vertical pulse lines */}
      <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-pulse"></div>
      <div className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-pulse"></div>

      <div className="max-w-4xl w-full space-y-8 z-10">
        <div>
          <img
            src="images/logoTransparent.png"
            alt="Student Hack 2025 Logo"
            className="w-full h-full max-w-3xl mx-auto md:-mt-10"
          />

          <p className="text-2xl mb-2 md:-mt-6 text-gray-300 flex items-center justify-center font-title font-bold">
            <FaCalendarAlt className="mr-2" /> April 5th - 6th, 2025
          </p>

          <p className="text-2xl mb-8 text-gray-300 flex items-center justify-center font-title font-bold">
            <a
              href="https://maps.app.goo.gl/Bqum4uRB9pTxyUhi6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:text-gray-500 text-gray-300"
            >
              <FaLocationPin />
              <span>Nancy Rothwell</span>
            </a>
          </p>

          <div className="text-xs tracking-widest text-accent2 uppercase -mb-4">
            UNICS NETWORK • Data: 30.02.2184
          </div>
        </div>

        <div className="mx-auto w-full max-w-2xl transform translate-y-0">
          <div className="bg-black border border-primary/50 rounded-md overflow-hidden shadow-lg shadow-primary/20">
            {/* Terminal Header */}
            <div className="bg-black border-b border-primary/30 py-2 px-4 flex justify-between items-center">
              <div className="text-primary font-mono text-xs">
                terminal@unics-network:~/timer
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>

            {/* Terminal Content */}
            <div
              className="p-3 bg-black font-mono text-xs md:text-sm text-primary/90 h-22 overflow-y-hidden"
              ref={terminalRef}
            >
              {/* Initial Connection Sequence */}
              <div className="whitespace-pre-line">{terminalText}</div>

              {typingComplete && (
                <>
                  <div className="mt-1 animate-pulse text-green-500">
                    CONNECTION ESTABLISHED
                  </div>
                </>
              )}
            </div>

            {/* Countdown Display - This stays hidden until countdownVisible is true */}
            <div
              className={`p-4 bg-black/80 border-t border-primary/30 transition-all duration-700 transform ${countdownVisible ? "opacity-100" : "opacity-0"}`}
            >
              <div className="text-center">
                {/* <div className="text-xs text-primary/70 font-mono mb-2">
                  TIME UNTIL LAUNCH:
                </div> */}
                <h1 className=" text-3xl font-bold text-green-400 gap-x-5">THE HACKATHON HAS ENDED!</h1>
                <div className="flex justify-center gap-px">
                 
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="space-y-6 transition-all duration-700 delay-1000 opacity-0 data-[visible=true]:opacity-100"
          data-visible={countdownVisible}
        >
          <div className="mt-6   text-accent2 py-2 px-6 rounded-full">
            <span className="relative z-10 text-2xl font-title font-bold">THANK YOU FOR YOUR PARTICIPATION!</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent2/0 via-accent2/20 to-accent2/0 -translate-x-full group-hover:translate-x-full duration-700 transition-transform"></div>
          </div>

          <div className="flex gap-4 justify-center">
            <a
              href="https://discord.gg/xfUFzWrP"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <FaDiscord
                className="text-gray-400 group-hover:text-primary transition-colors duration-300"
                size={28}
              />
            </a>
            <a
              href="https://www.instagram.com/unics_hackathons/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <FaInstagram
                className="text-gray-400 group-hover:text-primary transition-colors duration-300"
                size={28}
              />
            </a>
            <a
              href="https://www.linkedin.com/company/unics-hackathons/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <FaLinkedin
                className="text-gray-400 group-hover:text-primary transition-colors duration-300"
                size={28}
              />
            </a>
            <a href="mailto:hackathons@unicsmcr.com" className="group">
              <MdMail
                className="text-gray-400 group-hover:text-primary transition-colors duration-300"
                size={30}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;


// {timeUnits.map((unit, index) => (
//   <div
//     key={unit.label}
//     className={`group relative overflow-hidden transition-all duration-500 transform
//               ${countdownVisible ? `translate-y-0 opacity-100 delay-${index * 200}` : "translate-y-4 opacity-0"}`}
//   >
//     <div className="bg-primary/10 border border-primary/40 backdrop-blur-sm rounded-sm p-3 min-w-16 md:min-w-20 flex flex-col justify-center relative z-10 group-hover:bg-primary/20 transition-colors duration-300">
//       {/* Number display with matrix effect */}
//       <div className="relative h-10 overflow-hidden flex items-center justify-center">
//         <span className="text-gray-300 font-title text-3xl font-bold z-10">
//           {String(unit.value).padStart(2, "0")}
//         </span>
//         <div className="absolute inset-0 opacity-10 animate-pulse flex items-center justify-center">
//           {Array.from({ length: 5 }).map((_, i) => (
//             <div
//               key={i}
//               className="text-primary/30 text-3xl absolute"
//               style={{
//                 opacity: (5 - i) / 10,
//                 transform: `translateY(${(i - 2) * 20}%)`,
//               }}
//             >
//               {String(
//                 Math.floor(Math.random() * 10),
//               ).padStart(2, "0")}
//             </div>
//           ))}
//         </div>
//       </div>
//       <span className="text-accent2/80 text-xs tracking-wide font-mono mt-1">
//         {unit.label}
//       </span>
//     </div>
//   </div>
// ))}