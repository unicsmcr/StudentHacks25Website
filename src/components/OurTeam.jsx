import React, { useEffect, useState, useRef } from "react";
import { useGlitch } from "react-powerglitch";
import teamsByDepartment from "../data/our_team.json";
import { FaLinkedin, FaGithub, FaLink } from "react-icons/fa";

const OurTeam = () => {
  const teamRef = useRef(null);
  const [visible, setVisible] = useState(true);
  const [collapsedSections, setCollapsedSections] = useState({});
  const glitchTitle = useGlitch();

  useEffect(() => {
    const initialState = {};
    Object.keys(teamsByDepartment).forEach(dept => {
      initialState[dept] = true;
    });
    setCollapsedSections(initialState);
  }, []);

  const toggleSection = (department) => {
    setCollapsedSections(prev => ({
      ...prev,
      [department]: !prev[department]
    }));
  };

  return (
    <section
      id="OurTeam"
      ref={teamRef}
      className="pt-30 pb-36 px-4 sm:px-8 bg-gradient-to-r from-black to-gray-900 text-primary min-h-screen flex flex-col items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-[size:50px_50px] bg-[image:linear-gradient(to_right,rgba(93,202,230,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(93,202,230,0.1)_1px,transparent_1px)]"></div>
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[image:linear-gradient(transparent_0%,rgba(93,202,230,0.05)_50%,transparent_100%)] bg-[size:100%_4px]"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 text-center">
        {/* Section Header */}
        <div className="text-center">
          <h2
            className="text-3xl sm:text-5xl font-bold mb-6 font-title text-primary"
            ref={glitchTitle.ref}
          >
            OUR TEAM
          </h2>
          <div className="text-xs tracking-widest text-accent2 uppercase mb-2">UNICS NETWORK • Data: 30.02.2184</div>
          <p className="text-accent2/70 text-sm tracking-widest uppercase mb-4">
            <span className="animate-pulse">
              [ACCESSING TEAM DATABASE...]
            </span>
          </p>
        </div>

        {/* Terminal Window */}
        <div className="max-w-5xl mx-auto w-full transition-all duration-500 opacity-0 translate-y-5 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 delay-300"
          data-visible={visible}>
          <div className="bg-black border border-primary/50 rounded-md overflow-hidden shadow-lg shadow-primary/20">
            {/* Terminal Header */}
            <div className="bg-black border-b border-primary/30 py-2 px-4 flex justify-between items-center">
              <div className="text-primary font-mono text-xs text-left">
                secure-shell@unics-network:~/team
              </div>
              <div className="flex gap-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-3 sm:p-5 bg-black font-mono text-sm text-primary/90 max-h-[600px] overflow-y-auto">
              <div className="mb-2">$ accessing team matrix... <span className="text-primary">CONNECTED</span></div>
              <div className="mb-4">$ executing query: <span className="text-white">get --active-team --format=detailed</span></div>

              {/* Command Output */}
              <div className="mb-6">
                <div className="text-yellow-400 mb-3">
                  [TEAM DATABASE] - RECORDS FOUND {Object.values(teamsByDepartment).flat().length}
                </div>
              </div>

              {/* Departments */}

              {Object.entries(teamsByDepartment).map(([department, members], deptIndex) => (

                <div key={department} className="">
                  <h3 className="text-lg font-bold text-white mt-4">{department}</h3>
                  {/* Team members container with smooth animation - no borders */}
                  <div
                    className="w-full overflow-hidden transition-all duration-300 ease-in-out"
                    style={{
                      maxHeight: collapsedSections[department] ? '1000px' : '0',
                      opacity: collapsedSections[department] ? 1 : 0,
                    }}
                  >
                    <div className="">
                      <div className="flex flex-wrap justify-center gap-1 xs:gap-2 sm:gap-4 p-2 xs:p-2">
                        {members.map((member, index) => (
                          <div
                            key={index}
                            className="flex flex-row place-items-center bg-[#0d1e29] w-36 xs:w-40 sm:w-56 md:w-64 h-20 xs:h-24 sm:h-28 md:h-32 rounded-md shadow-lg overflow-hidden relative group"
                          >
                            <div className="relative w-16 xs:w-20 sm:w-24 md:w-28 h-16 xs:h-20 sm:h-24 md:h-28 ml-1 sm:ml-2 flex items-center justify-center">
                              <div className="absolute inset-0 bg-accent2/20 clip-path-hex animate-pulse"></div>
                              <div className="absolute inset-0 clip-path-hex border border-accent2/30"></div>
                              {/* Image */}
                              <div className="w-12 xs:w-16 sm:w-20 md:w-24 h-12 xs:h-16 sm:h-20 md:h-24 clip-path-hex overflow-hidden">
                                <img
                                  src={member.image}
                                  alt={member.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              
                              <div className="absolute -top-1 right-1/2 w-2 xs:w-3 sm:w-4 h-px bg-accent2/40 animate-pulse"></div>
                              <div className="absolute -bottom-1 right-1/2 w-2 xs:w-3 sm:w-4 h-px bg-accent2/40 animate-pulse"></div>
                            </div>

                            {/* Text content */}
                            <div className="text-left pl-1 sm:pl-3 md:pl-4 pr-1 sm:pr-2 flex flex-col justify-center h-full">
                              <p className="text-xs sm:text-base md:text-lg font-bold mt-2 text-white truncate">{member.name}</p>
                              <p className="text-[8.5px] sm:text-sm md:text-base text-accent2 -mt-0.5 truncate">{member.role}</p>

                              <div className="absolute top-2 sm:top-2 right-1 sm:right-2 flex items-center">
                                <div className="w-1 sm:w-2 h-1 sm:h-2 rounded-full bg-green-400 mr-1 animate-pulse"></div>
                                <span className="hidden sm:inline text-[8px] sm:text-xs md:text-2xs text-green-400/70 font-mono">ACTIVE</span>
                              </div>
                              
                              {/* Portfolio link - scaled properly */}
                              {/* {member.PersonalWebsite && 
                                <a 
                                  className="text-accent2 text-[10px] sm:text-sm md:text-base hover:text-primary transition-colors" 
                                  target="_blank" 
                                  href={member.PersonalWebsite}
                                >
                                  Portfolio
                                </a>
                              } */}
                              
                              {/* Social links with properly scaled icons */}
                              <div className="flex flex-row items-center mt-1.5">
                                {member.LinkedIn && 
                                  <a 
                                    target="_blank" 
                                    href={member.LinkedIn}
                                    className="mr-2 text-white hover:text-accent2 transition-colors"
                                  > 
                                    <FaLinkedin className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-[18px] sm:h-[18px]" />
                                  </a>
                                }
                                {member.GitHub && 
                                  <a 
                                    target="_blank" 
                                    href={member.GitHub}
                                    className="mr-2 text-white hover:text-accent2 transition-colors"
                                  > 
                                    <FaGithub className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-[18px] sm:h-[18px]" />
                                  </a>
                                }
                                {member.PersonalWebsite &&
                                  <a 
                                    target="_blank"
                                    href={member.PersonalWebsite}
                                    className="text-white hover:text-accent2 transition-colors"
                                  >
                                    <FaLink className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-[18px] sm:h-[18px]" />
                                  </a>
                                }
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              

              <div className="mt-6">
                <div className="text-gray-500">$ <span className="animate-pulse">_</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .clip-path-hex {
          clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
        }
        
        /* Custom text size for very small text */
        .text-2xs {
          font-size: 0.65rem;
          line-height: 1rem;
        }
      `}</style>
    </section>
  );
};

export default OurTeam;