// src/components/Expertise/Expertise.jsx
import React from "react";
import "./Expertise.css";

const Expertise = ({ path, title, description, highlight }) => {
  return (
    <div className="expertise-container">
      <div className="content">
        <div className="expertise-heading">
          <img className="image" src={path} alt="Expertise Icon" />
          <h3 className="title">
            {" "}
            {title} <span className="highlight">{highlight}</span>
          </h3>
        </div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default Expertise;
