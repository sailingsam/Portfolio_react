import { React, useRef, useEffect, useState} from "react";
import "./Experience.css";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
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
  const [isOpen, setIsOpen] = useState(false);
  const hiddenContentRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (
      hiddenContentRef.current &&
      !hiddenContentRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className="exp">
      <div className="mainContent" onClick={handleToggle}> 
        <div className="headline" >
          <span className="title">{tagLine}</span>
          <span className="date">{timeline}</span>
          {isOpen ? <CiCircleMinus /> : <CiCirclePlus />}
        </div>
      </div>
      {isOpen && (
        <div className="hiddenContent" ref={hiddenContentRef}>
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
      )}
    </div>
  );
};

export default Experience;
