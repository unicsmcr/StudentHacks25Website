import React from "react";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Schedule from "./components/Schedule";
import Sponsors from "./components/Sponsors";
import FAQ from "./components/FAQ";
import OurTeam from "./components/OurTeam";

const App = () => {
  return (
    <div class="container" className="text-gray-900">
      <Home />
      <AboutUs />
      <Schedule />
      <Sponsors />
      <FAQ />
      <OurTeam />
    </div>
  );
};

export default App;
