import React from "react";

import ProjectTile from "./ProjectTile";
import { projects } from "../data";

function Projects() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl m-auto flex flex-col justify-center items-center gap-14 p-5 py-16 sm:p-10">
        <div className="w-max fira-semibold text-3xl md:text-4xl bg-gradient-to-r from-[#9AB2ED] to-[#C8ED79] text-transparent bg-clip-text">
          Projects
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
          {projects.slice(0, 6).map((project, index) => {
            return <ProjectTile project={project} key={index} />;
          })}
        </div>

        <a
          className="flex align-center gap-3 p-2 px-3 rounded-md hover:scale-105 transition-all bg-cyan-600"
          href="/projects"
        >
          <span>More Porjects</span>
          <i className="far fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}

export default Projects;
