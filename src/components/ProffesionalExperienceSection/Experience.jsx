import React, { useRef, useEffect, useState } from "react";
import "./Experience.css";
import { IoLocation } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";

const Experience = ({
  tagLine,
  timeline,
  workPlace,
  website,
  description,
  skills,
  logo,
}) => {

  return (
    <div className="exp">
      <div className="mainContent" > 
        <div className="headline">
          <span className="title">{tagLine}</span>
          <span className="date">{timeline}</span>
        </div>
      </div>
  
        <div className="hiddenContent">
          <div className="description-area">
            <div className="addressAndWebsite">
              <IoLocation />
              <span>{workPlace}</span>
              <MdOutlineArrowOutward />
              <a href={website} target="_blank" rel="noreferrer">
                {website.replace(/^https?:\/\//, "")}
              </a>
            </div>
            <p>{description}</p>
            <div className="skills-buttons">
              {skills.map((skill, index) => (
                <button key={index}>{skill}</button>
              ))}
            </div>
          </div>
          <div className="logo-area">
            <img src={logo} alt="Company Logo" />
          </div>
        </div>
      
    </div>
  );
};

export default Experience;
