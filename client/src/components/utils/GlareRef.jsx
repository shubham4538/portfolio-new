import React, { useRef } from "react";
import "../../styles/glare.css";

function GlareRef({ icon }) {
  const glareRef = useRef(null);

  const handleMouseEnter = () => {
    const glare = glareRef.current;
    if (!glare) return;

    glare.classList.remove("glare-animate-out");
    glare.classList.add("glare-animate-in");
  };

  const handleMouseLeave = () => {
    const glare = glareRef.current;
    if (!glare) return;

    glare.classList.remove("glare-animate-in");
    glare.classList.add("glare-animate-out");
  };

  return (
    <div
      key={icon[0]}
      title={icon[0]}
      className="relative inline-block overflow-hidden hover:bg-gray-800 p-1 rounded-md cursor-pointer scaler glare-parent"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={`/public/images/language/${icon[1]}.png`}
        alt=""
        className="w-12 md:w-14"
      />
      <span
        ref={glareRef}
        className="absolute w-[300%] h-[300%] pointer-events-none glare-effect"
      ></span>
    </div>
  );
}

export default GlareRef;
