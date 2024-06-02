// src/components/MyExpertise/MyExpertise.jsx
import React from 'react';
import Expertise from './Expertise';
import './MyExpertise.css';

const MyExpertise = () => {
  return (
    <section id="expertise" className="my-expertise-section">
      <h1>My Expertise</h1>
      <div className="expertise-list">
        <Expertise 
          path="C:\Users\jsaks\OneDrive\Documents\Study\react devlopment class\portfolio-website\src\components\MyExpertiseSection\assets\coding.png" 
          title="Software" 
          highlight="Development" 
          description="Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript." 
        />
        {/* <Expertise 
          icon="⚛️" 
          title="Frontend Dev" 
          highlight="React, NextJS" 
          description="Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React, and NextJS frameworks." 
        />
        <Expertise 
          icon="💻"
          title="Flutter Dev" 
          highlight="Android, iOS" 
          description="Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework." 
        /> */}
      </div>
    </section>
  );
};

export default MyExpertise;
