import React from "react";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#Home" className=".nav-item">
            <span>{"// Home"}</span>
          </a>
        </li>
        <li>
          <a href="#expertise" className=".nav-item">
            <span>{"// Expertise"}</span>
          </a>
        </li>
        <li>
          <a href="#work" className=".nav-item">
            <span>{"// Work"}</span>
          </a>
        </li>
        <li>
          <a href="#experience" className=".nav-item">
            <span>{"// Experience"}</span>
          </a>
        </li>
        <li>
          <a href="#contact" className=".nav-item">
            <span>{"// Contact"}</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
