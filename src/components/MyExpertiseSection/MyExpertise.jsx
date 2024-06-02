import React from 'react';
import Expertise from './Expertise';
import './MyExpertise.css';
import Coding from './assets/coding.png';
import REACT from './assets/react.png';
import FLUTTER from './assets/flutter.png';

const MyExpertise = () => {
  return (
    <section id="expertise" className="my-expertise-section">
      <h1>My Expertise</h1>
      <div className="expertise-list">
        <Expertise 
          icon= {Coding} 
          title="Software" 
          highlight="Development" 
          description="Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript." 
        />
        <Expertise 
          icon={REACT} 
          title="Frontend Dev" 
          highlight="React, NextJS" 
          description="Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React, and NextJS frameworks." 
        />
        <Expertise 
          icon={FLUTTER}
          title="Flutter Dev" 
          highlight="Android, iOS" 
          description="Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework." 
        />
      </div>
    </section>
  );
};

export default MyExpertise;
