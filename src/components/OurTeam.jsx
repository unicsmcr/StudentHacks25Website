import React, { useEffect, useState, useRef } from "react";
import { useGlitch } from "react-powerglitch";

const OurTeam = () => {
  const teamRef = useRef(null);
  const [visible, setVisible] = useState(true);
  const [collapsedSections, setCollapsedSections] = useState({});
  const glitchTitle = useGlitch();

  // Organize team members by department
  const teamsByDepartment = {
    "Directors": [
      { "name": "Arpan Pandey", "image": "public/images/TeamPhotos/IMG20241216120342 (1) - Arpan Pandey.jpg", "role": "Deputy Director", "LinkedIn": "https://www.linkedin.com/in/arpan-pandey/", "GitHub": "https://github.com/arpan-206", "PersonalWebsite": "https://arpanpandey.dev/" },
      { "name": "Sean Bechofer", "image": "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg", "role": "Co-Director", "LinkedIn": "https://www.linkedin.com/showcase/warren-edward-buffett/", "GitHub": "https://github.com", "PersonalWebsite": "https://google.com" },
    ],
    "Development": [
      { "name": "Affan Khan", "image": "public/images/TeamPhotos/IMG-20240731-WA0022(1) - Affan Khan.jpg", "role": "Dev Team Lead", "LinkedIn": "https://www.linkedin.com/in/mohammad-affan-khan", "GitHub": "", "PersonalWebsite": "" },
      { "name": "Kaan Oktem", "image": "public/images/TeamPhotos/IMG-20241101-WA0027 - kaan oktem.jpg", "role": "Dev Team", "LinkedIn": "https://www.linkedin.com/in/kaan-oktem-computer-science-student?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "GitHub": "https://github.com/CS101-o", "PersonalWebsite": "kaanoktem.website" },
      { "name": "Sean Bechofer", "image": "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg", "role": "Dev Team", "LinkedIn": "https://www.linkedin.com/showcase/warren-edward-buffett/", "GitHub": "https://github.com", "PersonalWebsite": "https://google.com" },
    ],
    "PR and Graphics": [
      { "name": "Sean Bechofer", "image": "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg", "role": "PR Team Lead", "LinkedIn": "https://www.linkedin.com/showcase/warren-edward-buffett/", "GitHub": "https://github.com", "PersonalWebsite": "https://google.com" },
      { "name": "Qistina Shafizul", "image": "public/images/TeamPhotos/fxn 2025-01-26 103719.151 - Qistina Shafizul.jpeg", "role": "PR & Graphics Team", "LinkedIn": "https://linkedin.com/in/qistinashafizul", "GitHub": "https://github.com/qistinashafizul", "PersonalWebsite": "" },
      { "name": "Ansh Rastogi", "image": "public/images/TeamPhotos/9b3ae7ad-d5fe-4e41-839d-109f2af797b8 - Ansh Rastogi.jpeg", "role": "PR & Graphics", "LinkedIn": "https://www.linkedin.com/in/ansh-rastogi-325051227", "GitHub": "", "PersonalWebsite": "" },
      { "name": "Sean Bechofer", "image": "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg", "role": "PR Team", "LinkedIn": "https://www.linkedin.com/showcase/warren-edward-buffett/", "GitHub": "https://github.com", "PersonalWebsite": "https://google.com" },
      { "name": "Sean Bechofer", "image": "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg", "role": "PR Team", "LinkedIn": "https://www.linkedin.com/showcase/warren-edward-buffett/", "GitHub": "https://github.com", "PersonalWebsite": "https://google.com" },
    ],
    "Logistics": [
      { "name": "Tansi Ajit ", "image": "public/images/TeamPhotos/IMG_7688 - Tansi Ajit.JPG", "role": "Logistics Team Lead", "LinkedIn": "www.linkedin.com/in/tansi-ajit", "GitHub": "https://github.com/tansiajit", "PersonalWebsite": "" },
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
            <div className="p-5 bg-black font-mono text-sm text-primary/90  overflow-y-auto max-h-full">
              <div className="mb-2">$ accessing personnel matrix... <span className="text-primary">CONNECTED</span></div>
              <div className="mb-4">$ executing query: <span className="text-white">get --active-personnel --format=detailed</span></div>

              {/* Command Output - Personnel */}
              <div className="mb-6">
                <div className="text-yellow-400 mb-3">
                  [QUANTUM PERSONNEL DATABASE] - PERSONNEL FOUND {Object.values(teamsByDepartment).flat().length}
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
                      <div className="flex flex-wrap justify-center gap-4 p-2">
                        {members.map((member, index) => (
                          <div
                            key={index}
                            className="flex flex-row place-items-center bg-[#0d1e29] w-70 h-32 rounded-md shadow-lg overflow-hidden relative group"
                          >
                            <div className="relative w-28 h-28 ml-2 flex items-center justify-center">
                              <div className="absolute inset-0 bg-accent2/5 clip-path-hex"></div>
                              <div className="absolute inset-0 clip-path-hex border border-accent2/30"></div>
                              {/* Image */}
                              <div className="w-24 h-24 clip-path-hex overflow-hidden">
                                <img
                                  src={member.image}
                                  alt={member.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>

                              <div className="absolute -top-1 right-1/2 w-4 h-px bg-accent2/40"></div>
                              <div className="absolute -bottom-1 right-1/2 w-4 h-px bg-accent2/40"></div>
                            </div>

                            {/* Text content */}
                            <div className="text-left pl-4 pr-2 flex flex-col justify-center h-full">
                              {/* <div className="text-xs text-accent2/50 mb-1 font-mono tracking-wider">ID-{(index + 10000).toString(16).toUpperCase()}</div> */}
                              <h3 className="text-sm font-semibold text-white mt-3 whitespace-nowrap">{member.name}</h3>
                              <p className="text-accent2 text-xs whitespace-nowrap ">
                                <span className="text-accent2/50 mr-1 whitespace-nowrap">//</span>
                                {member.role}
                              </p>

                              {/* could add social links heree */}
                              <div className="absolute top-2 right-2 flex items-center">
                                <div className="w-2 h-2 rounded-full bg-green-400 mr-1 animate-pulse"></div>
                                <span className="text-xs text-green-400/70 font-mono">ACTIVE</span>
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
      <style jsx>{`
        .clip-path-hex {
          clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
        }
      `}</style>
    </section>
  );
};

export default OurTeam;