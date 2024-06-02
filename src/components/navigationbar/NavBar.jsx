import React from "react";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#Home" class=".nav-item">
            <span>{'// Home'}</span>
          </a>
        </li>
        <li>
          <a href="#expertise" class=".nav-item">
            <span>{'// Expertise'}</span>
          </a>
        </li>
        <li>
          <a href="#work" class=".nav-item">
            <span>{'// Work'}</span>
          </a>
        </li>
        <li>
          <a href="#experience" class=".nav-item">
            <span>{'// Experience'}</span>
          </a>
        </li>
        <li>
          <a href="#contact" class=".nav-item">
            <span>{'// Contact'}</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
