import React, { useState, useEffect, useRef } from "react";
import { useGlitch } from "react-powerglitch";

const questions = [
  { question: "Can I take part in the hackathon?", answer: "If you are 18+ and an Undergraduate or Postgraduate at the University of Manchester, then absolutely! We encourage all levels of ability to have a go." },
  { question: "How do I register for the hackathon?", answer: "You can register for the hackathon by filling out the form on our website." },
  { question: "When and where will the hackathon take place?", answer: "The hackathon will take place on the 5th and 6th April weekend, running overnight. We'll be in person, in the Nancy Rothwell building." },
  { question: "What do I actually do?", answer: "You'll be working in teams of up to 4 people to create a project! The main theme will be revealed on the day, and there will be additional challenges available from our sponsors with each one having its own set of rules, judging criteria, and prizes." },
  { question: "How are teams formed, and can I participate as an individual?", answer: "We encourage all participants to have a team (4 members max). If you are registering as an individual, you’ll have the opportunity to join a team during the event. Hackathons are about meeting new people too!"},
  { question: "What should I bring to the hackathon?", answer: "Bring your laptop, charger, any hardware you might need, a valid physical government-issued photo ID (driving license, brp, passport, etc), and any other tools or resources you would like. We also recommend bringing a change of clothes, toiletries, and anything else to stay comfortable during the event. Food and drink will be provided, but you are welcome to bring or buy your own if you prefer." },
];

const FAQ = () => {
  const [collapsedPanels, setCollapsedPanels] = useState(questions.map(() => false));
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(true);
  const glitchEffect = useGlitch({ playMode: "always", duration: 4000 });
  const answerRefs = useRef(questions.map(() => React.createRef()));

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
      
    //   if (containerRef.current) {
    //     observer.observe(containerRef.current);
    //   }
      
    //   return () => {
    //     if (containerRef.current) {
    //       observer.disconnect();
    //     }
    //   };
    // }, []);
  const toggleCollapse = (index) => {
    setCollapsedPanels((prev) => {
      const newCollapsedPanels = [...prev];
      newCollapsedPanels[index] = !newCollapsedPanels[index];
      return newCollapsedPanels;
    });
  };

  return (
    <section
      ref={containerRef}
      id="FAQ"
      className="pt-20 pb-36 px-8 bg-gradient-to-r from-black to-black-500 text-primary min-h-screen flex flex-col items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-[size:50px_50px] bg-[image:linear-gradient(to_right,rgba(93,202,230,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(93,202,230,0.1)_1px,transparent_1px)]"></div>
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[image:linear-gradient(transparent_0%,rgba(93,202,230,0.05)_50%,transparent_100%)] bg-[size:100%_4px]"></div>
      
      <div className="max-w-5xl mx-auto w-full relative z-10 text-center">
        <h2 ref={glitchEffect.ref} className="text-5xl font-bold mb-6 font-title">
          FAQs
        </h2>
        <div className="text-xs tracking-widest text-accent2 uppercase mb-2">Event Timeline • Data: 04.03.2184</div>
          <p className="text-accent2/70 text-sm tracking-widest uppercase mb-4">
            <span className="animate-pulse">[ACCESSING TEMPORAL DATABASE...]</span>
          </p>
        {/* Terminal Window */}
        <div className="max-w-4xl mx-auto w-full transition-all duration-500 opacity-0 translate-y-5 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 delay-300"
          data-visible={visible}>
          <div className="bg-black border border-primary/50 rounded-md overflow-hidden shadow-lg shadow-primary/20">
            {/* Terminal Header */}
            <div className="bg-black border-b border-primary/30 py-2 px-4 flex justify-between items-center">
              <div className="text-primary font-mono text-xs">
                secure-shell@quantum-network:~/FAQs
              </div>
              <div className="flex gap-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-5 bg-black font-mono text-sm text-primary/90 max-h-full overflow-y-auto">
              <div className="mb-2">$ establishing connection to temporal database...</div>
              <div className="mb-2">$ running quantum authentication... <span className="text-primary">OK</span></div>
              <div className="mb-2">$ accessing query matrix... <span className="text-primary">CONNECTED</span></div>
              <div className="mb-4">$ executing query: <span className="text-white">get --query-history --format=detailed</span></div>
              
              {/* Command Output - Schedule */}
              <div className="mb-6">
                <div className="text-yellow-400 mb-3">
                  [QUANTUM TEMPORAL DATABASE] - QUESTIONS FOUND {questions.length}
                </div>
              </div>
              
              {questions.map((item, index) => (
                <div key={index} className="flex flex-col items-center mb-4">
                  <div
                    className="flex w-full items-center px-2 py-2 border-t border-b border-primary/20 bg-primary/5 cursor-pointer select-none hover:bg-primary/10 transition-colors"
                    onClick={() => toggleCollapse(index)}
                  >
                    <span className="text-gray-500 mr-2">{"> "}</span>
                    <span className="text-secondary text-left w-full font-bold flex-grow p-1 transition-all duration-300 select-none">
                      <span className="text-primary/70">$ query --question </span>
                      <span className="text-accent2 font-bold">"{item.question}"</span>
                    </span>
                    <div className={`text-primary transition-transform duration-300 ${collapsedPanels[index] ? 'rotate-180' : ''}`}>
                      ▼
                    </div>
                  </div>
                  
                  {/* Answer container with smooth animation */}
                  <div 
                    className="w-full overflow-hidden transition-all duration-300 ease-in-out bg-primary/5 border-l border-r border-primary/20"
                    style={{
                      maxHeight: collapsedPanels[index] ? '500px' : '0',
                      opacity: collapsedPanels[index] ? 1 : 0,
                    }}
                  >
                    <div className="p-6 text-left text-accent2/90">
                      {item.answer}
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

export default FAQ;