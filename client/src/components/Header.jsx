import React, { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="header fira-light fixed w-full p-3 m-3 border rounded-md border-gray-600 backdrop-blur-md z-20 max-w-6xl"
      style={{ justifySelf: "anchor-center" }}
    >
      <div className="flex justify-between self-center">
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
              <i className="hidden sm:block fal fa-briefcase"></i>
              <i
                className="block sm:hidden fas fa-bars cursor-pointer"
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
