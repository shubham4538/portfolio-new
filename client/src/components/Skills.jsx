import React from "react";

import { langIcons } from "../data";
import GlareRef from "./utils/GlareRef";

function Skills() {
  return (
    <div className="content-center min-h-screen" id="skills">
      <div className="max-w-6xl m-auto flex flex-col justify-center items-center gap-10 p-2 sm:p-10 md:p-20">
        <div className="flex flex-col items-center gap-3">
          <div className="w-max fira-semibold text-3xl md:text-4xl bg-gradient-to-r from-[#9AB2ED] to-[#C8ED79] text-transparent bg-clip-text">
            Skills
          </div>
        </div>

        <div className="text-center">
          <div className="text-md md:text-lg mb-5">
            Langugages and Technologies:
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
            {langIcons.map((icon) => {
              return <GlareRef icon={icon} key={icon} />;
            })}
          </div>
        </div>

        <div className="text-center">
          <div className="text-md md:text-lg mb-5">Other Skills:</div>
          <ul
            style={{ listStyleType: "disc", padding: 0 }}
            className="flex flex-col items-center"
          >
            <li>Digital Marketing (Ads, SEO)</li>
            <li>Video Editing (After Effects, VN)</li>
            <li>Graphic / UI-UX Design (Figma, Canva)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
