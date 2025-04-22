import React from "react";
import { ReactTyped } from "react-typed";

import DancingBlobs from "./DancingBlobs";

function Hero() {
  return (
    <div className="min-h-screen content-center w-full">
      <div className="hero-padding max-w-6xl m-auto">
        <DancingBlobs />
        <div className="relative flex flex-col-reverse md:flex-row items-center gap-1 md:gap-10 z-10">
          <div className="flex flex-col flex-1 gap-2 md:gap-5">
            <div className="fira-semibold text-2xl md:text-4xl bg-gradient-to-r from-[#CAF099] via-[#6197D4] to-[#9626B5] text-transparent bg-clip-text">
              <ReactTyped
                strings={[
                  "Web Designer",
                  "Web Developer",
                  "FrontEnd Developer",
                  "BackEnd Developer",
                  "App Developer",
                ]}
                typeSpeed={50}
                backSpeed={25}
                loop
              />
            </div>
            <div className="">
              Hi, I'm Shubham Singhvi, A Full Stack Web Developer from Mumbai,
              India. I have strong problem-solving skills, attention to detail.
            </div>
            <a
              href="https://drive.google.com/file/d/1Y_hHD-FSk46dvTTzKroviuBJAgqE6JEw/view?usp=sharing"
              target="_blank"
              className="underline w-max"
            >
              RESUME
            </a>
          </div>
          <div className="w-2/3 sm:w-1/2 md:w-1/3">
            <img src="/avatar.png" alt="" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
