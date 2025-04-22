import React from "react";

function Header() {
  return (
    <div className="header fira-light fixed w-full flex justify-between p-3 m-3 border rounded-md border-gray-600 backdrop-blur-md z-20 max-w-6xl lg:mx-auto">
      <span className="fira-semibold">Shubham Singhvi</span>
      <div className="flex gap-3">
        <span>About</span>
        <span>Projects</span>
        <span>Contact</span>
      </div>
      <span>Burger</span>
    </div>
  );
}

export default Header;
