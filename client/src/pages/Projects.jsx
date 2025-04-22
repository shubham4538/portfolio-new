import React from "react";

import ProjectTile from "../components/ProjectTile";
import { projects } from "../data";

function Projects() {
  return (
    <div className="fira-regular text-white bg-gray-900">
      <div className="flex flex-col justify-center items-center gap-14 min-h-screen p-5 py-16 sm:p-10">
        <div className="w-max fira-semibold text-3xl md:text-4xl bg-gradient-to-r from-[#9AB2ED] to-[#C8ED79] text-transparent bg-clip-text">
          All Projects
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
          {projects.map((project, index) => {
            return <ProjectTile project={project} key={index} />;
          })}
        </div>

        <a
          className="flex align-center gap-3 p-2 px-3 rounded-md hover:scale-105 transition-all bg-cyan-600"
          href="/"
        >
          <i className="far fa-arrow-left"></i>
          <span>Back</span>
        </a>
      </div>
    </div>
  );
}

export default Projects;
