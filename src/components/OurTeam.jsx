import React, { useEffect, useState, useRef } from "react";
import { useGlitch } from "react-powerglitch";
import teamsByDepartment from "../data/ourteam.json";


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
      className="pt-20 pb-36 px-4 sm:px-8 bg-gradient-to-r from-black to-gray-900 text-primary min-h-screen flex flex-col items-center relative overflow-hidden"
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
              [ACCESSING PERSONNEL DATABASE...]
            </span>
          </p>
        </div>

        {/* Terminal Window */}
        <div className="max-w-4xl mx-auto w-full transition-all duration-500 opacity-0 translate-y-5 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 delay-300"
          data-visible={visible}>
          <div className="bg-black border border-primary/50 rounded-md overflow-hidden shadow-lg shadow-primary/20">
            {/* Terminal Header */}
            <div className="bg-black border-b border-primary/30 py-2 px-4 flex justify-between items-center">
              <div className="text-primary font-mono text-xs">
                secure-shell@unics-network:~/Personnel
              </div>
              <div className="flex gap-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-3 sm:p-5 bg-black font-mono text-sm text-primary/90 max-h-full overflow-y-auto">
              <div className="mb-2">$ accessing personnel matrix... <span className="text-primary">CONNECTED</span></div>
              <div className="mb-4">$ executing query: <span className="text-white">get --active-personnel --format=detailed</span></div>

              {/* Command Output - Personnel */}
              <div className="mb-6">
                <div className="text-yellow-400 mb-3">
                  [PERSONNEL DATABASE] - PERSONNEL FOUND {Object.values(teamsByDepartment).flat().length}
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
                              <div className="absolute inset-0 bg-accent2/5 clip-path-hex"></div>
                              <div className="absolute inset-0 clip-path-hex border border-accent2/30"></div>
                              {/* Image */}
                              <div className="w-12 xs:w-16 sm:w-20 md:w-24 h-12 xs:h-16 sm:h-20 md:h-24 clip-path-hex overflow-hidden">
                                <img
                                  src={member.image}
                                  alt={member.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              
                              <div className="absolute -top-1 right-1/2 w-2 xs:w-3 sm:w-4 h-px bg-accent2/40"></div>
                              <div className="absolute -bottom-1 right-1/2 w-2 xs:w-3 sm:w-4 h-px bg-accent2/40"></div>
                            </div>

                            {/* Text content */}
                            <div className="text-left pl-1 sm:pl-3 md:pl-4 pr-1 sm:pr-2 flex flex-col justify-center h-full">
                              <p className="text-xs sm:text-base md:text-lg font-bold mt-1 text-white">{member.name}</p>
                              <p className="text-[10px] sm:text-sm md:text-base text-accent2">{member.role}</p>


                              <div className="absolute top-1 sm:top-2 right-1 sm:right-2 flex items-center">
                                <div className="w-1 sm:w-2 h-1 sm:h-2 rounded-full bg-green-400 mr-1 animate-pulse"></div>
                                <span className="text-[10px] sm:text-sm md:text-base text-green-400/70 font-mono">ACTIVE</span>
                              </div>
                              {member.PersonalWebsite && <a className="text-accen1t1 text-xs mt-1 mb-1" target="_blank" href={member.PersonalWebsite}> Portfolio  </a>}
                              {/* {!member.PersonalWebsite && <br />} */}
                              <div className="flex flex-row">
                                {member.LinkedIn && <a target="_blank" href={member.LinkedIn}> <img className="w-6 h-6 mt-1 mb-[-1]" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png?20140125013055"></img></a>}
                                {member.GitHub && <a target="_blank" href={member.GitHub}> <img className="w-6 h-6 mt-1 mb-[-1] mx-2 bg-white" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"></img></a>}

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

      {/* Add styles for clip path and animations */}
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