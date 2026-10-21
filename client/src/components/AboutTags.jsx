const tags = [
  {
    name: "Web Development",
    icon: "fa-solid fa-code",
    color: "text-violet-400",
  },
  {
    name: "App Development",
    icon: "fa-solid fa-mobile-screen-button",
    color: "text-cyan-400",
  },
  {
    name: "Graphic Designing",
    icon: "fa-solid fa-palette",
    color: "text-pink-400",
  },
  {
    name: "Video Editing",
    icon: "fa-solid fa-clapperboard",
    color: "text-amber-400",
  },
];

function AboutTags() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
      {tags.map((role) => {
        return (
          <div
            key={role.name}
            className="group flex w-full items-center gap-3
      border border-zinc-800 rounded-full bg-zinc-950/80 px-3 md:px-4 py-1.5 md:py-3
      shadow-[0_6px_18px_#0000004d] transition-all duration-300
      hover:border-violet-500/60 hover:bg-zinc-950
      hover:shadow-[0_8px_24px_#8b5cf61f] cursor-default"
          >
            <i
              className={`${role.icon} text-zinc-500 transition-colors duration-300 group-hover:text-violet-400`}
            />
            <span className="text-sm font-medium tracking-wide text-zinc-300 transition-colors group-hover:text-white">
              {role.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default AboutTags;
