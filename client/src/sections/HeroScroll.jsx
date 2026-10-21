import { useEffect, useState } from "react";

import Hero from "../components/hero/Hero";
import Hero2 from "../components/hero/Hero2";
import Hero3 from "../components/hero/Hero3";
import Particles from "../components/Particles";

const myStyles = {
  fadeContainer: {
    height: "250vh",
    position: "relative",
  },

  sticky: {
    position: "sticky",
    top: 0,
    height: "100vh",
    overflow: "hidden",
  },

  screen: {
    position: "absolute",
    inset: 0,
    transition: "opacity 0.4s ease",
  },
};

function HeroScroll() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("fade-section");
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const value = Math.min(
        1,
        Math.max(0, -rect.top / (rect.height - window.innerHeight)),
      );
      setProgress(value);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="fade-section" style={myStyles.fadeContainer}>
      <div style={myStyles.sticky}>
        <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <Particles
            particleColors={["#ffffff", "#ffffff", "#ffffff"]}
            particleCount={360}
            particleSpread={15}
            speed={0.07}
            particleBaseSize={100}
            glow={0.45}
            twinkle={0}
            moveParticlesOnHover
            hoverEffect="repel"
            sizeRandomness={1}
            shape="circle"
            depthOfField={0}
            connections
            connectionDistance={110}
            particleHoverFactor={1}
            hoverRadius={140}
            drift="none"
            driftSpeed={1}
            alphaParticles={false}
            disableRotation={false}
            cameraDistance={20}
            variation={0}
            opacity={1}
            clickBurst
            intro
            lightMode={false}
          />
        </div>
        <div
          style={{
            ...myStyles.screen,
            opacity: progress < 0.25 ? 1 : 0,
          }}
        >
          <Hero />
        </div>

        <div
          style={{
            ...myStyles.screen,
            opacity: progress < 0.25 ? 0 : progress < 0.66 ? 1 : 0,
          }}
        >
          <Hero2 />
        </div>

        <div
          style={{
            ...myStyles.screen,
            opacity: progress >= 0.66 ? 1 : 0,
          }}
        >
          <Hero3 />
        </div>
      </div>
    </div>
  );
}

export default HeroScroll;
