import React from "react";
import Experience from "./Experience";
import "./ProffesionalExperience.css";
import ub from "./assets/ub.png";

const ProffesionalExperience = () => {
  return (
    <section className="proffesional-experience" id="experience">
      <h1>Professional Experience</h1>
      <div className="experience-list">
        <Experience
          tagLine="InterviewBit - Content Marketing(Intern)"
          timeline="Nov'23 - Jan'24"
          workPlace="Remote, Bengaluru"
          website="https://www.interviewbit.com/"
          description="Worked on creating and analyzing content for the youtube channel of InterviewBit."
          skills={["Javascript", "Dart", "React", "NextJS", "Redux", "Flutter"]}
          logo="https://th.bing.com/th/id/OIP.GDopL-7rnMesm8bafmdkEwAAAA?rs=1&pid=ImgDetMain"
        />
        <Experience
          tagLine="Unique Boutique"
          timeline="2019 - Present"
          workPlace="Balaghat, Madhya Pradesh, India"
          website="https://www.facebook.com/uniqueboutiquetdh"
          description="Made FB page reack whooping 94k followers. Setting Buisness strategies, managing sales and marketing, on online platforms."
          skills={[
            "Content Creation",
            "SEO",
            "Video Editing",
            "Content Analysis",
          ]}
          logo={ub}
        />
      </div>
    </section>
  );
};

export default ProffesionalExperience;
