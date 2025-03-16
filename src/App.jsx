import React from "react";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Schedule from "./components/Schedule";
import Sponsors from "./components/Sponsors";
import FAQ from "./components/FAQ";
import Navbar from "./components/Navbar";
import OurTeam from "./components/OurTeam";
import Footer from "./components/Footer";
import BackgroundEffects from "./components/BackgroundEffects";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        opacity: 0.5,
      },
      fpsLimit: 120,
      particles: {
        color: {
          value: "#5ec2e6",
        },
        links: {
          color: "#5ec2e6",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 60,
          limit: 150
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "square"
        },
        size: {
          value: { min: 1, max: 5 },
        },
        rotate: {
          value: { min: 0, max: 360 },
        }
      },
      spawn: {
        position: "outside", // Forces particles to start off-screen
      },
      detectRetina: true,
    }),
    [],
  );


  return (
    <div className="back">
      <BackgroundEffects /> {/* Ensures the background effects are displayed over all components */}
      <Navbar />
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
      <Home />
      <AboutUs />
      <Schedule />
      <Sponsors />
      <FAQ />
      <OurTeam />
      <Footer/>
    </div>
  );
};

export default App;


