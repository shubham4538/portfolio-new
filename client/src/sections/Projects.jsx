import React from "react";

import ProjectTile from "../components/ProjectTile";
import { projects } from "../data";
import ShapeGrid from "../components/ShapeGrid";

import BounceCards from "../components/BounceCards";

function Projects() {
  return (
    <div className="min-h-screen" id="projects">
      <div style={{ width: "100%", height: "100vh", position: "absolute" }}>
        <ShapeGrid
          shape="square"
          direction="diagonal"
          lineColor="#514479"
          hoverColor="#919eff"
          hoverFillColor="#ffffff"
          fillOpacity={0.05}
          cellSize={30}
          speed={0}
          tiltX={0}
          tiltY={0}
          rainbow={false}
          lineWidth={0.5}
          radius={1.9}
          trail={0.7}
          glow={0.4}
          clickCascade={false}
        />
      </div>
      <div className="relative max-w-6xl m-auto flex flex-col justify-center items-center gap-14 p-5 py-20 md:px-10 overflow-x-hidden">
        <div className="w-max fira-semibold text-3xl md:text-4xl bg-linear-to-r from-[#9AB2ED] to-[#C8ED79] text-transparent bg-clip-text">
          Projects
        </div>

        <div className="hidden sm:block">
          <BounceCards
            images={projects.slice(0, 6).map((project) => {
              return {
                src: project.img,
                alt: project.title,
                link: project.link,
              };
            })}
            containerWidth={100}
            containerHeight={220}
            cardSize={190}
            spread={85}
            rotation={10}
            arc={0}
            pushDistance={165}
            hoverScale={1.1}
            bounciness={0.3}
            animationDelay={0.5}
            animationStagger={0.1}
            borderWidth={1}
            borderColor="#ffffff"
            radius={10}
            shadow
            enableHover
          />
        </div>

        <div className="sm:hidden grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
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
