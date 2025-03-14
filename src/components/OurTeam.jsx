import React, { useEffect, useState, useRef } from "react";
import { useGlitch } from "react-powerglitch";

const OurTeam = () => {
  const teamRef = useRef(null);
  const [visible, setVisible] = useState(true);
  const [collapsedSections, setCollapsedSections] = useState({});
  const glitchTitle = useGlitch();

  // useEffect(() => {
  //       const observer = new IntersectionObserver(
  //         ([entry]) => {
  //           if (entry.isIntersecting) {
  //             setVisible(true);
  //             observer.disconnect();
  //           }
  //         },
  //         {
  //           threshold: 0.1,
  //         }
  //       );
        
  //       if (teamRef.current) {
  //         observer.observe(teamRef.current);
  //       }
        
  //       return () => {
  //         if (teamRef.current) {
  //           observer.disconnect();
  //         }
  //       };
  //     }, []);

  // Organize team members by department
  const teamsByDepartment = {
    "Directors": [
      { "name": "Sean Bechofer", "image": "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg", "role": "Co-Director", "LinkedIn": "https://www.linkedin.com/showcase/warren-edward-buffett/", "GitHub": "https://github.com", "PersonalWebsite": "https://google.com" },
      { "name": "Sean Bechofer", "image": "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg", "role": "Co-Director", "LinkedIn": "https://www.linkedin.com/showcase/warren-edward-buffett/", "GitHub": "https://github.com", "PersonalWebsite": "https://google.com" },
    ],
    "Development": [
      { "name": "Sean Bechofer", "image": "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg", "role": "Dev Team Lead", "LinkedIn": "https://www.linkedin.com/showcase/warren-edward-buffett/", "GitHub": "https://github.com", "PersonalWebsite": "https://google.com" },
      { "name": "Sean Bechofer", "image": "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg", "role": "Dev Team", "LinkedIn": "https://www.linkedin.com/showcase/warren-edward-buffett/", "GitHub": "https://github.com", "PersonalWebsite": "https://google.com" },
      { "name": "Sean Bechofer", "image": "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg", "role": "Dev Team", "LinkedIn": "https://www.linkedin.com/showcase/warren-edward-buffett/", "GitHub": "https://github.com", "PersonalWebsite": "https://google.com" },
    ],
    "PR and Graphics": [
      { "name": "Sean Bechofer", "image": "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg", "role": "PR Team Lead", "LinkedIn": "https://www.linkedin.com/showcase/warren-edward-buffett/", "GitHub": "https://github.com", "PersonalWebsite": "https://google.com" },
      { "name": "Sean Bechofer", "image": "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg", "role": "PR Team", "LinkedIn": "https://www.linkedin.com/showcase/warren-edward-buffett/", "GitHub": "https://github.com", "PersonalWebsite": "https://google.com" },
      { "name": "Sean Bechofer", "image": "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg", "role": "PR Team", "LinkedIn": "https://www.linkedin.com/showcase/warren-edward-buffett/", "GitHub": "https://github.com", "PersonalWebsite": "https://google.com" },
      { "name": "Sean Bechofer", "image": "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg", "role": "PR Team", "LinkedIn": "https://www.linkedin.com/showcase/warren-edward-buffett/", "GitHub": "https://github.com", "PersonalWebsite": "https://google.com" },
      { "name": "Sean Bechofer", "image": "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg", "role": "PR Team", "LinkedIn": "https://www.linkedin.com/showcase/warren-edward-buffett/", "GitHub": "https://github.com", "PersonalWebsite": "https://google.com" },
    ],
  };

  // Initialize collapsed state for each department
  useEffect(() => {
    const initialState = {};
    Object.keys(teamsByDepartment).forEach(dept => {
      initialState[dept] = true; // Set to true to show sections by default
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
      className="pt-20 pb-36 px-8 bg-gradient-to-r from-black to-gray-900 text-primary min-h-screen flex flex-col items-center relative overflow-hidden"
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
          <div className="text-xs tracking-widest text-accent2 uppercase mb-2">Temporal Database • Data: 04.03.2184</div>
          <p className="text-accent2/70 text-sm tracking-widest uppercase mb-4">
            <span className="animate-pulse">
              [ACCESSING TEMPORAL DATABASE...]
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
                secure-shell@quantum-network:~/Personnel
              </div>
              <div className="flex gap-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-5 bg-black font-mono text-sm text-primary/90 max-h-full overflow-y-auto">
              <div className="mb-2">$ establishing connection to personnel database...</div>
              <div className="mb-2">$ running quantum authentication... <span className="text-primary">OK</span></div>
              <div className="mb-2">$ accessing personnel matrix... <span className="text-primary">CONNECTED</span></div>
              <div className="mb-4">$ executing query: <span className="text-white">get --active-personnel --format=detailed</span></div>
              
              {/* Command Output - Personnel */}
              <div className="mb-6">
                <div className="text-yellow-400 mb-3">
                  [QUANTUM PERSONNEL DATABASE] - DEPARTMENTS FOUND {Object.keys(teamsByDepartment).length}
                </div>
              </div>
              
              {/* Departments */}
              {Object.entries(teamsByDepartment).map(([department, members], deptIndex) => (
                <div key={department} className="mb-6">
                  {/* Department Header - Collapsible */}
                  <div 
                    className="flex w-full items-center px-2 py-2 border-t border-b border-primary/20 bg-primary/5 cursor-pointer select-none hover:bg-primary/10 transition-colors"
                    onClick={() => toggleSection(department)}
                  >
                    <span className="text-gray-500 mr-2">{"> "}</span>
                    <span className="text-secondary text-left w-full font-bold flex-grow p-1 transition-all duration-300 select-none">
                      <span className="text-primary/70">$ get team </span>
                      <span className="text-accent2 font-bold">"{department}"</span>
                      <span className="text-primary/70"> --members --status=active</span>
                    </span>
                    <div className={`text-primary transition-transform duration-300 ${collapsedSections[department] ? 'rotate-180' : ''}`}>
                      ▼
                    </div>
                  </div>
                  
                  {/* Team members container with smooth animation */}
                  <div 
                    className="w-full overflow-hidden transition-all duration-300 ease-in-out bg-primary/5 border-l border-r border-primary/20"
                    style={{
                      maxHeight: collapsedSections[department] ? '1000px' : '0',
                      opacity: collapsedSections[department] ? 1 : 0,
                    }}
                  >
                    <div className="p-4">
                      <div className="flex flex-wrap justify-center gap-4 p-4">
                        {members.map((member, index) => (
                          <div
                            key={index}
                            className="flex flex-row place-items-center bg-[#0d1e29] w-52 h-24 rounded-lg shadow-lg overflow-hidden"
                          >
                            <div className="w-20 h-20 mx-auto ml-2 overflow-hidden rounded-full border-2 border-accent2">
                              <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="text-center p-2">
                              <h3 className="text-sm font-semibold text-white">{member.name}</h3>
                              <p className="text-accent2 text-xs">{member.role}</p>
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
    </section>
  );
};

export default OurTeam;