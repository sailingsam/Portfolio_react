import "./App.css";
import Home from "./components/HomeSection/Home";
import MyExpertise from "./components/MyExpertiseSection/MyExpertise";
import Work from "./components/WorkSection/Work";
import ProffesionalExperience from "./components/ProffesionalExperienceSection/ProffesionalExperience";
import Header from "./components/navigationbar/Header";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Home />
        <MyExpertise />
        <ProffesionalExperience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
