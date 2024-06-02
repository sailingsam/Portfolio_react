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
          description="Experienced in both functional and OOP: Java, Dart, JavaScript. Familiar with Python and C++. Also, have experience in developing RESTful APIs." 
        />
        <Expertise 
          icon={REACT} 
          title="Frontend Dev" 
          highlight="React, NextJS" 
          description="Passionate about UI/UX. Experience in HTML, CSS, JS, React, and Flutter frameworks." 
        />
        <Expertise 
          icon={FLUTTER}
          title="Flutter Dev" 
          highlight="Android, iOS, Web" 
          description="Experience in developing cross-platform mobile applications and web Apps using Flutter. Familiar with Firebase and AppWrite. " 
        />
      </div>
    </section>
  );
};

export default MyExpertise;
