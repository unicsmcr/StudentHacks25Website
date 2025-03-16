import { b } from "framer-motion/client";
import React from "react";

const BackgroundEffects = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[-1]"
    style={{ background: "linear-gradient(to right, rgb(1,1,1,0), rgb(1,1,1,1) 45%, rgb(1,1,1,1) 55%, rgb(1,1,1,0) 100%)" }}>
      {/* Horizontal pulse lines */}
      <div className="z-[100]">
        <div className="absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse"></div>
        <div className="absolute right-0 top-2/3 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse"></div>

        {/* Vertical pulse lines */}
        <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-pulse"></div>
        <div className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-pulse"></div>

        {/* Data stream - using Tailwind animations */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
            {[20, 40, 60, 80].map((left, index) => (
            <div key={index} className={`absolute top-0 h-full w-1 bg-primary/20 overflow-hidden left-[${left}%]`}>
                <div className={`h-20 w-full bg-primary/50 animate-[ping_${4 + index}s_infinite]`}></div>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BackgroundEffects;