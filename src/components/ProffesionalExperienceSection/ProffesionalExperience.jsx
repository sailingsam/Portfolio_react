import React from "react";
import Experience from "./Experience";
import "./ProffesionalExperience.css";
import img1 from "../../assets/1.svg";

const ProffesionalExperience = () => {
  return (
    <section className="proffesional-experience">
      <h1>Professional Experience</h1>
      <div className="experience-list">
        <Experience
          tagLine="InterviewBit"
          timeline="2019 - Present"
          workPlace="Dhaka, Bangladesh"
          website="https://github.com/sailingsam"
          description="Developing front-end and mobile app solutions (B2C, B2B) in Travel Tech on React/Next.js framework and Flutter SDK."
          skills={["Javascript", "Dart", "React", "NextJS", "Redux", "Flutter"]}
          logo="https://th.bing.com/th/id/OIP.GDopL-7rnMesm8bafmdkEwAAAA?rs=1&pid=ImgDetMain"
        />
        {/* Add more Experience components as needed */}
      </div>
    </section>
  );
};

export default ProffesionalExperience;
