import React, { useEffect, useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(scrollProgress);

  return (
    <div className="header fira-light fixed w-full sm:flex justify-center p-3 border-b border-gray-600 backdrop-blur-md z-20">
      <div
        className="absolute left-0 top-full h-0.5"
        style={{
          width: `${scrollProgress}%`,
          transition: "width 0.1s ease-out",
          backgroundColor: "#8655e8",
        }}
      ></div>
      <div className="flex flex-1 justify-between self-center max-w-6xl">
        <span className="fira-semibold">Shubham Singhvi</span>
        <div className="gap-5 hidden sm:flex">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <span>
          {open ? (
            <i
              className="fas fa-xmark text-xl cursor-pointer"
              onClick={() => setOpen(false)}
            ></i>
          ) : (
            <>
              <i className="fa-light fa-briefcase !hidden sm:!block"></i>
              <i
                className="fa-solid fa-bars !block sm:!hidden cursor-pointer"
                onClick={() => setOpen(true)}
              ></i>
            </>
          )}
        </span>
      </div>

      <div
        className={`flex flex-col items-center gap-2 transition-all duration-300 ease-in-out overflow-hidden sm:hidden ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <a href="#skills" onClick={() => setOpen(false)}>
          Skills
        </a>
        <a href="#projects" onClick={() => setOpen(false)}>
          Projects
        </a>
        <a href="#contact" onClick={() => setOpen(false)}>
          Contact
        </a>
      </div>
    </div>
  );
}

export default Header;
