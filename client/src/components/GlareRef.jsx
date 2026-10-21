import { useRef } from "react";

import "../../styles/glare.css";

function GlareRef({ icon }) {
  const glareRef = useRef(null);
  const imageRef = useRef(null);

  const handleMouseEnter = () => {
    const glare = glareRef.current;
    if (!glare) return;

    glare.classList.remove("glare-animate-out");
    glare.classList.add("glare-animate-in");

    imageRef.current.classList.add("transform-top");
    imageRef.current.classList.remove("transform-center");
  };

  const handleMouseLeave = () => {
    const glare = glareRef.current;
    if (!glare) return;

    glare.classList.remove("glare-animate-in");
    glare.classList.add("glare-animate-out");

    imageRef.current.classList.add("transform-center");
    imageRef.current.classList.remove("transform-top");
  };

  return (
    <div
      key={icon}
      title={icon}
      className="relative inline-block overflow-hidden backdrop-blur-sm p-4 rounded-md cursor-pointer scaler glare-parent"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ height: 100, width: 100 }}
    >
      <img
        ref={imageRef}
        src={`./${icon}.png`}
        className="absolute transform-center"
        style={{ height: 50, width: 50 }}
      />
      <span
        ref={glareRef}
        className="absolute w-[300%] h-[300%] pointer-events-none glare-effect"
      ></span>
    </div>
  );
}

export default GlareRef;
