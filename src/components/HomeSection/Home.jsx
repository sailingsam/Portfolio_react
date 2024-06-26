// src/components/Home.js
import React from "react";
import Typing from "./Typing";
import "./Home.css";

function Home() {
  return (
    <section className="home-section" id="home">
      <div className="name-area">
        <h1 class="name">Saksham Jain</h1>
        <Typing
          text={["I am a Full Stack Developer"]}
          typingSpeed={150}
          deletingSpeed={100}
        />
      </div>
    </section>
  );
}

export default Home;
