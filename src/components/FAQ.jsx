import React, { useState, useEffect, useRef } from "react";
import { useGlitch } from "react-powerglitch";
import questions from "../data/faqs.json";

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
      className="pt-30 pb-36 px-8 bg-gradient-to-r from-black to-black-500 text-primary min-h-screen flex flex-col items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-[size:50px_50px] bg-[image:linear-gradient(to_right,rgba(93,202,230,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(93,202,230,0.1)_1px,transparent_1px)]"></div>
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[image:linear-gradient(transparent_0%,rgba(93,202,230,0.05)_50%,transparent_100%)] bg-[size:100%_4px]"></div>
      
      <div className="max-w-5xl mx-auto w-full relative z-10 text-center">
        <h2 ref={glitchEffect.ref} className="text-5xl font-bold mb-6 font-title">
          FAQS
        </h2>
        <div className="text-xs tracking-widest text-accent2 uppercase mb-2">UNICS NETWORK • Data: 30.02.2184</div>
          <p className="text-accent2/70 text-sm tracking-widest uppercase mb-4">
            <span className="animate-pulse">[ACCESSING FAQS DATABASE...]</span>
          </p>
        {/* Terminal Window */}
        <div className="max-w-4xl mx-auto w-full transition-all duration-500 opacity-0 translate-y-5 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 delay-300"
          data-visible={visible}>
          <div className="bg-black border border-primary/50 rounded-md overflow-hidden shadow-lg shadow-primary/20">
            {/* Terminal Header */}
            <div className="bg-black border-b border-primary/30 py-2 px-4 flex justify-between items-center">
              <div className="text-primary font-mono text-xs">
                secure-shell@unics-network:~/FAQs
              </div>
              <div className="flex gap-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-5 bg-black font-mono text-sm text-primary/90 max-h-[600px] overflow-y-auto">
              <div className="mb-2">$ accessing query matrix... <span className="text-primary">CONNECTED</span></div>
              <div className="mb-4">$ executing query: <span className="text-white">get --query-history --format=detailed</span></div>
              
              {/* Command Output - Schedule */}
              <div className="mb-6">
                <div className="text-yellow-400 mb-3">
                  [FAQS DATABASE] - RECORDS FOUND {questions.length}
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
                      <span className="text-primary/70">$ query </span>
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