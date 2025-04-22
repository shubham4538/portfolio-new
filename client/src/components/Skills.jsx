import React from "react";

import { langIcons } from "../data";
import GlareRef from "./utils/GlareRef";

function Skills() {
  return (
    <div className="content-center min-h-screen">
      <div className="max-w-6xl m-auto flex flex-col justify-center items-center gap-16 p-2 sm:p-10 md:p-20">
        <div className="flex flex-col items-center gap-3">
          <div className="w-max fira-semibold text-3xl md:text-4xl bg-gradient-to-r from-[#9AB2ED] to-[#C8ED79] text-transparent bg-clip-text">
            Skills
          </div>
          <div className="text-md md:text-lg">Langugages and Technologies:</div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
          {langIcons.map((icon) => {
            return <GlareRef icon={icon} key={icon} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
