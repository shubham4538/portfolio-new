import React from "react";

function ProjectTile({ project }) {
  return (
    <div className="max-w-60 lg:max-w-72 rounded-lg overflow-hidden border border-gray-700">
      <img
        src={`/images/projects/${project.img}.png`}
        alt=""
        style={{ overflowClipMargin: "unset" }}
        className="aspect-[2/1] w-full h-auto object-cover"
      />
      <div className="p-3 text-center">
        <a href={project.link} target="_blank" className="hover:underline">
          {project.title}
        </a>
      </div>
    </div>
  );
}

export default ProjectTile;
